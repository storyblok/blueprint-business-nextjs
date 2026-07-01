import Page from '../storyblok/Page'
import TeamMembers from '../storyblok/TeamMembers'
import Testimonials from '../storyblok/Testimonials'
import Testimonial from '../storyblok/Testimonial'
import Cards from '../storyblok/Cards'
import Hero from '../storyblok/Hero'
import Tabs from '../storyblok/Tabs'
import Card from '../storyblok/Card'
import Button from '../storyblok/Button'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teamMembers: TeamMembers,
    testimonials: Testimonials,
    testimonial: Testimonial,
    cards: Cards,
    card: Card,
    hero: Hero,
    tabs: Tabs,
    button: Button,
  },
  apiOptions: {
    /** Set the correct region for your space. Learn more: https:/www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
    region: process.env.STORYBLOK_REGION || 'eu',
    /** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
    endpoint: process.env.STORYBLOK_API_BASE_URL
      ? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
      : undefined,
  },
})
