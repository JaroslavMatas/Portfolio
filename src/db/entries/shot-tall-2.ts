import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -109, y: -70},
    origin: 'top left',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 't2',
  description:
    'Motion piece created as part of a teaser campaign for Paola Paola. The animation captures a light, Mediterranean summer atmosphere through a towel moving naturally in the wind. I focused on subtle cloth simulation, lighting, and timing to create a calm, sensory-driven visual.',
  image: '/jpg/shot-tall-2.jpg',
  properties: [
    {
      name: 'Client',
      value: 'Paola Paola',
    },
    {
      name: 'Project',
      value: 'Paola Paola Launch Teasers',
    },
    {
      name: 'Industry',
      value: 'Food & Beverage',
    },
    {
      name: 'Link',
      url: 'https://heypaola.com/',
      value: 'heypaola.com',
    },
    {
      name: 'Year',
      value: '2025',
    },
  ],
  size: 'tall',
  slug: 'paola-paola-towel-motion-teaser',
  title: 'Paola Paola Towel Motion Teaser',
  variant: 'shot',
  videos: {
    mp4: '/webm/shot-tall-2.mp4',
    webm: '/webm/shot-tall-2.webm',
  },
}

export default shot
