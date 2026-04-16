import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -109, y: -70},
    origin: 'top left',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 't5',
  description:
    'Interactive animation created for in-store touchscreens at UGO, where it serves as the entry point to the ordering flow. The scene builds atmosphere around a yellow fridge opening, with cold mist filling the space before revealing all five kombucha flavors on the shelves. The focus was on creating an inviting, sensory moment that draws attention and encourages interaction. I handled the entire process from initial storyboard to final output.',
  image: '/jpg/shot-tall-5.jpg',
  properties: [
    {
      name: 'Client',
      value: 'Prager’s x UGO',
    },
    {
      name: 'Project',
      value: 'Prager’s x UGO Touchscreen Animation',
    },
    {
      name: 'Industry',
      value: 'Food & Beverage',
    },
    {
      name: 'Link',
      url: 'https://www.pragers.cz/en',
      value: 'pragers.cz',
    },
    {
      name: 'Year',
      value: '2026',
    },
  ],
  size: 'tall',
  slug: 'pragers-kombucha-fridge-animation-for-ugo-stores',
  title: 'Prager’s Kombucha Fridge Animation for UGO stores',
  variant: 'shot',
  videos: {
    mp4: '/webm/shot-tall-5.mp4',
    webm: '/webm/shot-tall-5.webm',
  },
}

export default shot
