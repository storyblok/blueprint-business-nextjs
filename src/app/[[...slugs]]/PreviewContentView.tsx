'use client'
import { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import { StoryContentView } from './Story'
import type StoryblokBridge from '@storyblok/preview-bridge'
import { parseStory, Story } from '@/lib'
import { resolveStories } from '@/lib/content/resolveRelations'
import { formatResult } from 'pure-parse'

function importUmd<T>(src: string, name: string): Promise<T> {
  const script = document.createElement('script')
  script.src = src
  script.async = true
  return new Promise<T>((resolve, reject) => {
    script.onload = () => {
      // @ts-expect-error -- TypeScript does not know about the global variable
      resolve(window[name])
    }

    script.onerror = reject
    document.head.appendChild(script)
  }).then((module) => {
    document.head.removeChild(script)
    // @ts-expect-error -- TypeScript does not know about the global variable
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
        const result = parseStory(payload.story)
        console.error(
          `Failed to parse response from the bridge: ${formatResult(result)}`,
        )
        setStory(result.error ? undefined : result.value)
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
  rels: Story[]
}> = (props) => {
  const { draft, rels } = props
  const story = useStoryblokBridge()

  if (!story) {
    // Fall back to the server content when the page is being previewed without being embedded
    //  within an iframe in the visual editor.
    //  Also briefly visible in the Visual Editor before the bridge has connected.
    return draft
  }

  return <StoryContentView story={resolveStories(story, rels)} />
}
