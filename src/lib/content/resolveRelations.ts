import { isString, objectGuard } from 'pure-parse';
import type { BlockContent, Story } from '../delivery-api';
const isBlockContent = objectGuard({
  _uid: isString,
  component: isString
});

/**
 * Recursively resolves all relations in a story.
 * In each block, it looks for string values that match the uuid of a story.
 * In each block, it recursively looks for other blocks. It skips the `_uid` and `component` properties.
 * It is considered a block if it has `_uid` and `component` properties.
 * @param story
 * @param rels
 * @returns The story with all references to the story uuid replaced with the story object from the `rels` array.
 */
export const resolveStories = (story: Story, rels: Story[]): Story => {
  const res = resolveStoriesInContent(story.content, rels);
  if (res === story.content) {
    return story;
  }
  return {
    ...story,
    content: res
  };
};
export const resolveStoriesInContent = (value: unknown, rels: Story[]): unknown => {
  if (rels.length === 0) {
    // There's nothing to resolve -> return the content as-is
    return value;
  }
  if (typeof value === 'string') {
    const rel = rels.find(it => it.uuid === value);
    return rel ?? value;
  }
  if (isBlockContent(value)) {
    return Object.entries(value).reduce<BlockContent & Record<string, unknown>>((acc, [key, val]) => {
      if (key === '_uid' || key === 'component') {
        return acc;
      }
      acc[key] = resolveStoriesInContent(val, rels);
      return acc;
    }, {
      _uid: value._uid,
      component: value.component
    });
  }
  if (Array.isArray(value)) {
    return value.map((v: unknown) => resolveStoriesInContent(v, rels));
  }
  return value;
}