import type { AssetContent, BlockContent, RichTextContent, TextAreaContent, TextContent } from '../delivery-api';

/**
 * When the parsing of a component fails, fall back fack to this component.
 * Parsing could fail for several reasons; for example,
 * 1. You changed the schema of a component without updating the content.
 * 2. You have modeled the content incorrectly in your type alias and parser
 */
export type UnknownContent = BlockContent<{
  component: 'unknown';
}>;
export type PageContent = BlockContent<{
  component: 'page';
  body: Content[];
}>;
export type TestimonialContent = BlockContent<{
  component: 'testimonial';
  quote: TextAreaContent;
  name: TextContent;
  title: TextContent;
}>;
export type TestimonialsContent = BlockContent<{
  component: 'testimonials';
  title: TextContent;
  description: TextContent;
  testimonials: Content[];
}>;
export type CardsContent = BlockContent<{
  component: 'cards';
  description: RichTextContent;
  cards: CardContent[];
}>;
export type CardContent = BlockContent<{
  component: 'card';
  description: RichTextContent;
  icon?: AssetContent;
}>;
export type HeroContent = BlockContent<{
  component: 'hero';
  image?: AssetContent;
  imagePadding: boolean;
  textAlignment: 'left' | 'right' | 'center';
  description: RichTextContent;
  backgroundColor: 'beige' | 'white' | 'grey';
}>;
export type StatsContent = BlockContent<{
  component: 'stats';
}>;
export type TabsContent = BlockContent<{
  component: 'tabs';
  description: RichTextContent;
  tabs: TabContent[];
}>;
export type TabContent = BlockContent<{
  component: 'tab';
  title: TextContent;
  content: Content[];
}>;
export type Content = UnknownContent | PageContent | TestimonialContent | TestimonialsContent | CardsContent | HeroContent | StatsContent | TabsContent | TabContent