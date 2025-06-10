export type ItalicMark = {
  type: 'italic';
};
export type BoldMark = {
  type: 'bold';
};
export type UnderlineMark = {
  type: 'underline';
};
export type StrikethroughMark = {
  type: 'strike';
};
export type SuperScriptMark = {
  type: 'superscript';
};
export type SubScriptMark = {
  type: 'subscript';
};
export type CodeMark = {
  type: 'code';
};
export type UrlLinkAttrs = {
  linktype: 'url';
  href: string;
};
export type StoryLinkAttrs = {
  linktype: 'story';
  href: string;
  uuid: string;
};
export type EmailLinkAttrs = {
  linktype: 'email';
  href: string;
};
export type AssetLinkAttrs = {
  linktype: 'asset';
  href: string;
};
export type LinkAttrs = UrlLinkAttrs | StoryLinkAttrs | EmailLinkAttrs | AssetLinkAttrs;
export type LinkMark = {
  type: 'link';
  attrs: LinkAttrs;
};
export type TextStyleAttrs = {
  color: string;
};
export type TextStyleMark = {
  type: 'textStyle';
  attrs: TextStyleAttrs;
};
export type HighlightAttrs = {
  color: string;
};
export type HighlightMark = {
  type: 'highlight';
  attrs: HighlightAttrs;
};
export type StyledAttrs = {
  class: string;
};
export type StyledMark = {
  type: 'styled';
  attrs: StyledAttrs;
};
export type Mark = ItalicMark | BoldMark | UnderlineMark | StrikethroughMark | SuperScriptMark | SubScriptMark | CodeMark | LinkMark | TextStyleMark | HighlightMark | StyledMark