import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -109, y: -70},
    origin: 'top left',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 't1',
  description:
    'A personal 3D exploration featuring a Mercedes-Benz suspended in a dreamlike environment, wrapped in translucent plastic tightened by thin straps. The focus of the piece was on achieving a believable plastic simulation while maintaining a soft, atmospheric mood. I developed the concept and handled the full process from simulation to final render.',
  image: '/jpg/shot-tall-1.jpg',
  properties: [
    {
      name: 'Client',
      value: 'Personal',
    },
    {
      name: 'Industry',
      value: 'Art / Experimental',
    },
    {
      name: 'Year',
      value: '2024',
    },
  ],
  size: 'tall',
  slug: 'mercedes-benz-physics-exploration',
  title: 'Mercedes-Benz Physics Exploration',
  variant: 'shot',
  videos: {
    mp4: '/mp4/shot-tall-1.mp4',
    webm: '/webm/shot-tall-1.webm',
  },
}

export default shot