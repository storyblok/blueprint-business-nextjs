import { array, equals, object, oneOf, optional, parseNumber, type ParseResult, parseString, withDefault } from 'pure-parse';
import { parseMark } from './marks';
import type { BlockNode, BlockQuoteNode, BulletListNode, CodeBlockNode, HeadingNode, HorizontalRuleNode, ImageAttrs, ImageNode, ListItemNode, OrderedListNode, ParagraphNode, RichTextContent, TextNode, BlockContent } from '../../delivery-api';
export function parseRichTextContent(data: unknown): ParseResult<RichTextContent> {
  return oneOf(parseDocNode, parseParagraphNode, parseTextNode, parseHorizontalRuleNode, parseBlockQuoteNode, parseBulletListNode, parseOrderedListNode, parseHeadingNode, parseBlockNode, parseCodeBlockNode, parseImageNode)(data);
}

/*
 * Nodes
 */

export const parseDocNode = object<RichTextContent>({
  type: equals('doc'),
  content: array(parseRichTextContent)
});
export const parseParagraphNode = object<ParagraphNode>({
  type: equals('paragraph'),
  content: withDefault(array(parseRichTextContent), [])
});
export const parseTextNode = object<TextNode>({
  type: equals('text'),
  text: parseString,
  marks: withDefault(array(parseMark), [])
});
export const parseHorizontalRuleNode = object<HorizontalRuleNode>({
  type: equals('horizontal_rule')
});
export const parseBlockQuoteNode = object<BlockQuoteNode>({
  type: equals('blockquote'),
  content: array(parseRichTextContent)
});
export const parseListItemNode = object<ListItemNode>({
  type: equals('list_item'),
  content: array(parseRichTextContent)
});
export const parseBulletListNode = object<BulletListNode>({
  type: equals('bullet_list'),
  content: array(parseListItemNode)
});
export const parseOrderedListNode = object<OrderedListNode>({
  type: equals('ordered_list'),
  content: array(parseListItemNode)
});
export const parseHeadingNode = object<HeadingNode>({
  type: equals('heading'),
  attrs: object({
    level: oneOf(equals(1), equals(2), equals(3), equals(4), equals(5), equals(6))
  }),
  content: withDefault(array(parseRichTextContent), [])
});
export const parseBlockNode = object<BlockNode>({
  type: equals('blok'),
  attrs: object({
    id: parseString,
    body: array(object<BlockContent>({
      component: parseString,
      _uid: parseString,
      _editable: optional(parseString)
    }))
  })
});
export const parseCodeBlockNode = object<CodeBlockNode>({
  type: equals('code_block'),
  content: withDefault(array(parseRichTextContent), [])
});
export const parseImageNode = object<ImageNode>({
  type: equals('image'),
  attrs: object<ImageAttrs>({
    id: parseNumber,
    alt: parseString,
    src: parseString,
    title: parseString,
    source: parseString,
    copyright: parseString
  })
})