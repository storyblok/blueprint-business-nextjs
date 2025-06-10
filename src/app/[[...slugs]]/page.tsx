import { PreviewContentView } from './PreviewContentView'
import { object, parseString, withDefault } from 'pure-parse'
import { parseStory, Story, StoryContentView } from './Story'
import { PreviewSearchParams } from '@storyblok/preview-bridge'

type StoryResponse = {
  story: Story
}

const parseStoryResponse = object<StoryResponse>({
  story: parseStory,
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

const fetchStory = async (
  slugs: string[],
  isPreview: PreviewSearchParams | undefined,
): Promise<Story> => {
  const baseUrl = process.env.STORYBLOK_API_BASE_URL
  const deliveryApiToken = process.env.STORYBLOK_DELIVERY_API_TOKEN

  if (!deliveryApiToken || !baseUrl) {
    throw new Error(
      'Failed to fetch story: the backend is not configured with the required environment variables',
    )
  }

  const query = new URLSearchParams({
    token: deliveryApiToken,
    version: isPreview ? 'draft' : 'published',
  }).toString()
  const url = `${baseUrl}/v2/cdn/stories/${slugs.join('/')}?${query}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  const jsonResult = parseStoryResponse(json)
  if (jsonResult.tag === 'failure') {
    throw new Error('Failed to fetch story: the response could not be parsed')
  }
  return jsonResult.value.story
}

type DynamicPageProps = {
  params: Promise<{ slugs?: string[] }>
  searchParams: Promise<unknown>
}

export default async function DynamicPage(props: DynamicPageProps) {
  const slugsParam = (await props.params).slugs ?? []

  const previewSearchParams = parsePreviewSearchParams(
    await props.searchParams,
  ).value

  // When the page is previewed in Storyblok, Storyblok passes the entire slug of
  //  the story which for pages includes `pages` from the "pages" folder.
  //  But in production, we need to prepend `pages` to the slug given in the URL.
  const slugs = previewSearchParams ? slugsParam : ['pages', ...slugsParam]

  const story = await fetchStory(slugs, previewSearchParams)

  // To perform server-side logic in any of your content components,
  //  please delete the following if-statement to disable the live preview.
  if (previewSearchParams) {
    // If preview params are provided, enable the bridge
    return <PreviewContentView draft={<StoryContentView story={story} />} />
  }

  // Rendered on the server
  return <StoryContentView story={story} />
}
