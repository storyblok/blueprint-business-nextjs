/**
 * @example
 * 1. Validates that the `component` property is present.
 * 2. Appends `_uid` and `_editable` properties to the object.
 * ```
 * export type PageContent = BlockContent<{
 *   component: 'page'
 *   body: Content[]
 * }>
 * ```
 */
export type BlockContent<T extends {
  component: string;
} = {
  component: string;
}> = {
  _uid: string;
  _editable?: string;
} & T