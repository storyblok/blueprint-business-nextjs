import { FunctionComponent } from 'react'
import { ContentView, parseContent, Story } from '@/lib'
import { formatResult } from 'pure-parse'

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

  if (contentRes.error) {
    return (
      <div>The content could not be parsed: {formatResult(contentRes)}</div>
    )
  }

  return <ContentView content={contentRes.value} />
}
