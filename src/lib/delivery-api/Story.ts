import { object, parseString, parseUnknown } from 'pure-parse';
export type Story = {
  uuid: string;
  content: unknown;
};
export const parseStory = object<Story>({
  uuid: parseString,
  content: parseUnknown
})