import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -109, y: -70},
    origin: 'top left',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 't4',
  description:
    '3D animation developed as a teaser visual for Paola Paola, centered around a floating pool ring. The scene builds on a clean, minimal composition while evoking a relaxed summer mood through water movement and reflections. I focused on achieving a soft, realistic feel and handled the full production from scene setup to final output.',
  image: '/jpg/shot-tall-4.jpg',
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
  slug: 'paola-paola-floating-ring-teaser',
  title: 'Paola Paola Floating Ring Teaser',
  variant: 'shot',
  videos: {
    mp4: '/webm/shot-tall-4.mp4',
    webm: '/webm/shot-tall-4.webm',
  },
}

export default shot
