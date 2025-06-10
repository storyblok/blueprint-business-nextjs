'use client'
import { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import { parseStory, Story, StoryContentView } from './Story'
import type StoryblokBridge from '@storyblok/preview-bridge'

function importUmd<T>(src: string, name: string): Promise<T> {
  const script = document.createElement('script')
  script.src = src
  script.async = true
  return new Promise<T>((resolve, reject) => {
    script.onload = () => {
      // @ts-expect-error
      resolve(window[name])
    }

    script.onerror = reject
    document.head.appendChild(script)
  }).then((module) => {
    document.head.removeChild(script)
    // @ts-expect-error
    delete window[name]
    return module
  })
}

const useStoryblokBridge = () => {
  const [story, setStory] = useState<Story>()

  useEffect(() => {
    // Dynamically import the Storyblok Bridge, but use the types from the package.
    importUmd<typeof StoryblokBridge>(
      'https://app.storyblok.com/f/storyblok-v2-latest.js',
      'StoryblokBridge',
    ).then((StoryblokBridge) => {
      const bridge = new StoryblokBridge()
      bridge.on('input', (payload) => {
        const res = parseStory(payload.story)
        setStory(res.tag === 'success' ? res.value : undefined)
      })
    })

    return () => {
      // The bridge does not support cleanup of side effects.
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
