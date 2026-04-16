import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -109, y: -70},
    origin: 'top left',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 't6',
  description:
    'Vector-style animation created for social media to promote Prager’s Soda. The concept builds on the product’s packaging illustration, which I reinterpreted and expanded into a short narrative. The story follows an explorer moving through a jungle, discovering a waterfall and seamlessly transitioning into the product reveal. I redesigned the original artwork for animation and handled the full process from concept to final output.',
  image: '/jpg/shot-tall-6.jpg',
  properties: [
    {
      name: 'Client',
      value: 'Prager’s',
    },
    {
      name: 'Project',
      value: 'Prager’s Soda Explorer Animation',
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
      value: '2025',
    },
  ],
  size: 'tall',
  slug: 'pragers-soda-explorer-animation',
  title: 'Prager’s Soda Explorer Animation',
  variant: 'shot',
  videos: {
    mp4: '/webm/shot-tall-6.mp4',
    webm: '/webm/shot-tall-6.webm',
  },
}

export default shot
