import { object, parseUnknown } from 'pure-parse'
import { FunctionComponent } from 'react'
import { ContentView, parseContent } from '@/lib'

export type Story = {
  content: unknown
}
export const parseStory = object<Story>({
  content: parseUnknown,
})

/**
 * Render the content in a story.
 * @param props
 * @constructor
 */
export const StoryContentView: FunctionComponent<{
  story: Story
}> = (props) => {
  const { story } = props
  const contentRes = parseContent(story.content)

  if (contentRes.tag === 'failure') {
    return <div>The content could not be parsed</div>
  }

  return <ContentView content={contentRes.value} />
}
