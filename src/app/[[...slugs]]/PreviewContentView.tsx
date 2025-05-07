'use client'
import { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import StoryblokBridge from '@storyblok/bridge'
import { parseStory, Story, StoryContentView } from './Story'

const useStoryblokBridge = () => {
  const [story, setStory] = useState<Story>()

  useEffect(() => {
    const bridge = new StoryblokBridge()
    bridge.on('input', (payload) => {
      const res = parseStory(payload.story)
      setStory(res.tag === 'success' ? res.value : undefined)
    })
    // TODO request content via the bridge on initial load:
    //  currently, if the user makes a change before the embedded app is loaded,
    //  the app will display the draft content instead of the in-memory content
    return () => {
      // The bridge does not support the cleanup of side effects.
    }
  }, [])

  return story
}

/**
 * Render the content when it's
 * @param props Pass the server-rendered content in the `draft` prop;
 *  this is necessary in order to preview the content outside the iframe.
 * @constructor
 */
export const PreviewContentView: FunctionComponent<{
  draft: ReactNode
}> = (props) => {
  const { draft } = props
  const story = useStoryblokBridge()

  if (!story) {
    // Fall back to the server content when the page is being previewed without being embedded
    //  within an iframe in the visual editor.
    //  Also briefly visible in the Visual Edotor before the bridge has connected.
    return draft
  }

  return <StoryContentView story={story} />
}
