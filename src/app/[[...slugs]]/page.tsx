import { PreviewContentView } from './PreviewContentView'
import {
  array,
  formatResult,
  object,
  parseString,
  withDefault,
} from 'pure-parse'
import { StoryContentView } from './Story'
import { PreviewSearchParams } from '@storyblok/preview-bridge'
import { resolveStories } from '@/lib/content/resolveRelations'
import { parseStory, Story } from '@/lib'
import { notFound } from 'next/navigation'

type StoryResponse = {
  story: Story
  rels: Story[]
}

const parseStoryResponse = object<StoryResponse>({
  story: parseStory,
  rels: withDefault(array(parseStory), []),
})

const parsePreviewSearchParams = withDefault(
  object<PreviewSearchParams>({
    _storyblok: parseString,
    _storyblok_c: parseString,
    _storyblok_lang: parseString,
    _storyblok_release: parseString,
    _storyblok_rl: parseString,
    '_storyblok_tk[space_id]': parseString,
    '_storyblok_tk[timestamp]': parseString,
    '_storyblok_tk[token]': parseString,
    _storyblok_version: parseString,
  }),
  undefined,
)

type PageParams = {
  slugs: string[]
}

const fetchStory = async (
  params: PageParams,
  previewSearchParams: PreviewSearchParams | undefined,
  resolveRelations: `${string}.${string}`[] = [],
): Promise<StoryResponse> => {
  // When the page is previewed in Storyblok, Storyblok passes the entire slug of
  //  the story which for pages includes `pages` from the "pages" folder.
  //  But in production, we need to prepend `pages` to the slug given in the URL.
  const language = previewSearchParams?._storyblok_lang ?? 'default'
  const slugs = previewSearchParams
    ? language === 'default'
      ? params.slugs
      : // When a language is selected, the code is prepended to the slug
        params.slugs.slice(1)
    : // In production, prepend with the slug of the pages folder.
      ['pages', ...params.slugs]

  const baseUrl = process.env.STORYBLOK_API_BASE_URL
  const deliveryApiToken = process.env.STORYBLOK_DELIVERY_API_TOKEN

  if (!deliveryApiToken || !baseUrl) {
    throw new Error(
      'Failed to fetch story: the backend is not configured with the required environment variables',
    )
  }

  const query = new URLSearchParams({
    token: deliveryApiToken,
    version: previewSearchParams ? 'draft' : 'published',
    resolve_relations: resolveRelations.join(','),
    language: language,
  }).toString()
  const url = `${baseUrl}/v2/cdn/stories/${slugs.join('/')}?${query}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (response.status === 404) {
    return notFound()
  }
  if (!response.ok) {
    console.error(
      `Failed to fetch story: ${response.status} ${response.statusText}`,
    )
    throw new Error('Failed to fetch story')
  }
  const json = await response.json()
  const result = parseStoryResponse(json)
  if (result.error) {
    console.error('Failed to parse response:', formatResult(result))
    throw new Error('Failed to fetch story: the response could not be parsed')
  }

  return result.value
}

type DynamicPageProps = {
  params: Promise<unknown>
  searchParams: Promise<unknown>
}

const parseParams = object<{ slugs: string[] }>({
  slugs: withDefault(array(parseString), []),
})

export default async function DynamicPage(props: DynamicPageProps) {
  const paramsResult = parseParams(await props.params)

  if (paramsResult.error) {
    console.error(
      `Failed to parse params: the folders in the app directort are likely misconfigured ${formatResult(paramsResult)}`,
    )
    throw new Error('Failed to parse params')
  }

  const previewSearchParams = parsePreviewSearchParams(
    await props.searchParams,
  ).value

  const { story, rels } = await fetchStory(
    paramsResult.value,
    previewSearchParams,
    ['teamMembers.teamMembers'],
  )

  // To perform server-side logic in any of your content components,
  //  please delete the following if-statement to disable the live preview.
  if (previewSearchParams) {
    // If preview params are provided, enable the bridge
    return (
      <PreviewContentView
        rels={rels}
        draft={<StoryContentView story={resolveStories(story, rels)} />}
      />
    )
  }

  // Rendered on the server
  return <StoryContentView story={resolveStories(story, rels)} />
}
