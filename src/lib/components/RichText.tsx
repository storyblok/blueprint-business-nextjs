import * as React from 'react'
import {
  richTextResolver,
  type StoryblokRichTextOptions,
} from '@storyblok/richtext'
import type { RichTextContent } from '../delivery-api'

function camelCase(str: string) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}

function convertStyleStringToObject(styleString: string) {
  return styleString
    .split(';')
    .reduce((styleObject: { [key: string]: string }, styleProperty) => {
      let [key, value] = styleProperty.split(':')
      key = key?.trim()
      value = value?.trim()
      if (key && value) {
        styleObject[camelCase(key)] = value
      }
      return styleObject
    }, {})
}

/**
 * Recursively converts HTML attributes in a React element tree to their JSX property names.
 *
 * @param {React.ReactElement} element The React element to process.
 * @return {React.ReactElement} A new React element with converted attributes.
 */
export function convertAttributesInElement(
  element: React.ReactElement | React.ReactElement[],
): React.ReactElement | React.ReactElement[] {
  if (Array.isArray(element)) {
    return element.map((el) =>
      convertAttributesInElement(el),
    ) as React.ReactElement[]
  }

  // Base case: if the element is not a React element, return it unchanged.
  if (!React.isValidElement(element)) {
    return element
  }

  // Convert attributes of the current element.
  const attributeMap: { [key: string]: string } = {
    class: 'className',
    for: 'htmlFor',
    targetAttr: 'targetattr',
    // Add more attribute conversions here as needed
  }

  const newProps: { [key: string]: unknown } = Object.keys(
    element.props as Record<string, unknown>,
  ).reduce((acc: { [key: string]: unknown }, key) => {
    let value = (element.props as Record<string, unknown>)[key]

    if (key === 'style' && typeof value === 'string') {
      value = convertStyleStringToObject(value)
    }

    const mappedKey = attributeMap[key] || key
    acc[mappedKey] = value
    return acc
  }, {})

  newProps.key = element.key

  // Validate children
  if (
    !(
      typeof element.props === 'object' &&
      element.props !== null &&
      'children' in element.props &&
      element.props.children
    )
  ) {
    return element
  }

  // Process children recursively.
  const children = React.Children.map(
    element.props.children as React.ReactNode,
    (child) =>
      React.isValidElement(child) ? convertAttributesInElement(child) : child,
  )
  // Clone the element with the new properties and updated children.
  return React.createElement(element.type, newProps, children)
}

const options: StoryblokRichTextOptions<React.ReactElement> = {
  renderFn: React.createElement,
  textFn: (text: string, attrs?: Record<string, any>) =>
    React.createElement(React.Fragment, attrs, text),
  keyedResolvers: true,
}

const renderRichText = richTextResolver(options).render

type RichTextProps = {
  doc: RichTextContent
}

export default function RichText(props: RichTextProps) {
  // @ts-expect-error -- renderRichText expects `type` to be an enum and not a string literal, but it works at runtime.
  return convertAttributesInElement(renderRichText(props.doc))
}
