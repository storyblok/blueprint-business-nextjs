export type SharedLinkContent = {
  fieldtype: 'multilink';
  id: string;
  url: string;
  cached_url: string;
  target?: '_blank' | '_self';
};
export type UrlLinkContent = {
  linktype: 'url';
} & SharedLinkContent;
export type EmailLinkContent = {
  linktype: 'email';
  email?: string;
} & SharedLinkContent;
export type AssetLinkContent = {
  linktype: 'asset';
} & SharedLinkContent;
export type StoryLinkContent = {
  linktype: 'story';
} & SharedLinkContent