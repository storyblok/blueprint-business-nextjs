import { Story } from '@/components'
import { Content } from '@/lib'

const randomUid = () => Math.random().toString(16).slice(2)

type ExampleStory = Story & {
  content: Content
}

export const offlineDevModeStory: ExampleStory = {
  content: {
    component: 'page',
    _uid: randomUid(),
    body: [
      {
        component: 'hero',
        _uid: randomUid(),
      },
      {
        component: 'whyChoose',
        _uid: randomUid(),
      },
      {
        component: 'cards',
        _uid: randomUid(),
      },
      {
        component: 'stats',
        _uid: randomUid(),
      },
      {
        component: 'getInTouch',
        _uid: randomUid(),
      },
    ],
  },
}
