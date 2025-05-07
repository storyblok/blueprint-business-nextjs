import { PreviewContentView } from './PreviewContentView'
import { object, parseString, withDefault } from 'pure-parse'
import { PreviewSearchParams } from '@storyblok/bridge'
import { parseStory, Story, StoryContentView } from './Story'

type StoryResponse = {
  story: Story
}

const parseStoryResponse = object<StoryResponse>({
  story: parseStory,
})

type DynamicPageProps = {
  params: Promise<{ slugs?: string[] }>
  searchParams: Promise<unknown>
}

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
  previewSearchParams: PreviewSearchParams | undefined,
): Promise<Story> => {
  const deliveryApiToken = process.env.STORYBLOK_DELIVERY_API_TOKEN

  if (!deliveryApiToken) {
    // TODO confirm that this gets included in the error response. If not, we can provide a better error message
    // Do not reveal the reason
    throw new Error('The backend is misconfigured')
  }

  const query = new URLSearchParams({
    token: deliveryApiToken,
    version: previewSearchParams ? 'draft' : 'published',
  }).toString()
  const url = `https://api.storyblok.com/v2/cdn/stories/${slugs.join('/')}?${query}`
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

export default async function Home(props: DynamicPageProps) {
  const slugs = (await props.params).slugs ?? []

  const previewSearchParams = parsePreviewSearchParams(
    await props.searchParams,
  ).value

  const story = await fetchStory(slugs, previewSearchParams)

  if (previewSearchParams) {
    // If preview params are provided, enable the bridge
    return <PreviewContentView draft={<StoryContentView story={story} />} />
  }

  // Rendered on the server
  return <StoryContentView story={story} />
}
