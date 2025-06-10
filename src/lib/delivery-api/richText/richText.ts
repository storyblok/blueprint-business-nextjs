import { type Mark } from './marks';
import { type BlockContent } from '../block';
export type RichTextContent = DocNode | ParagraphNode | TextNode | HorizontalRuleNode | BlockQuoteNode | BulletListNode | OrderedListNode | HeadingNode | BlockNode | CodeBlockNode | ImageNode;

/*
 * Nodes
 */

export type DocNode = {
  type: 'doc';
  content: RichTextContent[];
};
export type ParagraphNode = {
  type: 'paragraph';
  content: RichTextContent[];
};
export type TextNode = {
  type: 'text';
  text: string;
  marks: Mark[];
};
export type HorizontalRuleNode = {
  type: 'horizontal_rule';
};
export type BlockQuoteNode = {
  type: 'blockquote';
  content: RichTextContent[];
};
export type ListItemNode = {
  type: 'list_item';
  content: RichTextContent[];
};
export type BulletListNode = {
  type: 'bullet_list';
  content: ListItemNode[];
};
export type OrderedListNode = {
  type: 'ordered_list';
  content: ListItemNode[];
};
export type HeadingNode = {
  type: 'heading';
  attrs: {
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };
  content: RichTextContent[];
};
export type BlockNode = {
  type: 'blok';
  attrs: {
    // Actually a UUID—not an ID
    id: string;
    body: BlockContent[];
  };
};
export type CodeBlockNode = {
  type: 'code_block';
  content: RichTextContent[];
};
export type ImageNode = {
  type: 'image';
  attrs: ImageAttrs;
};
export type ImageAttrs = {
  id: number;
  alt: string;
  src: string;
  title: string;
  source: string;
  copyright: string;
}