import { equals, object, oneOf, parseString } from 'pure-parse';
import type { AssetLinkAttrs, BoldMark, CodeMark, EmailLinkAttrs, HighlightAttrs, HighlightMark, ItalicMark, LinkMark, StoryLinkAttrs, StrikethroughMark, StyledAttrs, StyledMark, SubScriptMark, SuperScriptMark, TextStyleAttrs, TextStyleMark, UnderlineMark, UrlLinkAttrs } from '../../delivery-api';
export const parseItalicMark = object<ItalicMark>({
  type: equals('italic')
});
export const parseBoldMark = object<BoldMark>({
  type: equals('bold')
});
export const parseUnderlineMark = object<UnderlineMark>({
  type: equals('underline')
});
export const parseStrikethroughMark = object<StrikethroughMark>({
  type: equals('strike')
});
export const parseSuperScriptMark = object<SuperScriptMark>({
  type: equals('superscript')
});
export const parseSubScriptMark = object<SubScriptMark>({
  type: equals('subscript')
});
export const parseCodeMark = object<CodeMark>({
  type: equals('code')
});
export const parseUrlLinkAttrs = object<UrlLinkAttrs>({
  linktype: equals('url'),
  href: parseString
});
export const parseStoryLinkAttrs = object<StoryLinkAttrs>({
  linktype: equals('story'),
  href: parseString,
  uuid: parseString
});
export const parseEmailLinkAttrs = object<EmailLinkAttrs>({
  linktype: equals('email'),
  href: parseString
});
export const parseAssetLinkAttrs = object<AssetLinkAttrs>({
  linktype: equals('asset'),
  href: parseString
});
export const parseLinkAttrs = oneOf(parseUrlLinkAttrs, parseStoryLinkAttrs, parseEmailLinkAttrs, parseAssetLinkAttrs);
export const parseLinkMark = object<LinkMark>({
  type: equals('link'),
  attrs: parseLinkAttrs
});
export const parseTextStyleAttrs = object<TextStyleAttrs>({
  color: parseString
});
export const parseTextStyleMark = object<TextStyleMark>({
  type: equals('textStyle'),
  attrs: parseTextStyleAttrs
});
export const parseHighlightAttrs = object<HighlightAttrs>({
  color: parseString
});
export const parseHighlightMark = object<HighlightMark>({
  type: equals('highlight'),
  attrs: parseHighlightAttrs
});
export const parseStyledAttrs = object<StyledAttrs>({
  class: parseString
});
export const parseStyledMark = object<StyledMark>({
  type: equals('styled'),
  attrs: parseStyledAttrs
});
export const parseMark = oneOf(parseItalicMark, parseBoldMark, parseUnderlineMark, parseStrikethroughMark, parseSuperScriptMark, parseSubScriptMark, parseCodeMark, parseLinkMark, parseTextStyleMark, parseHighlightMark, parseStyledMark)