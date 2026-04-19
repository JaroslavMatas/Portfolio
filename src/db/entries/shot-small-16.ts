import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: 37, y: 0},
    origin: 'top right',
    to: {delay: 0.1, duration: 0.8, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's16',
  description:
    'Real-world capture of the Prager’s kombucha animation running on UGO in-store touchscreens. The video shows how the visual integrates into the ordering experience and functions as an interactive entry point. This shot highlights the final deployment and user-facing context of the project.',
  image: '/jpg/shot-small-16.jpg',
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
      url: 'https://www.ugo.cz/',
      value: 'ugo.cz',
    },
    {
      name: 'Year',
      value: '2026',
    },
  ],
  size: 'small',
  slug: 'pragers-kombucha-touchscreen-in-store',
  title: 'Prager’s Kombucha Touchscreen in Store',
  variant: 'shot',
  videos: {
    mp4: '/webm/shot-small-16.mp4',
    webm: '/webm/shot-small-16.webm',
  },
}

export default shot
