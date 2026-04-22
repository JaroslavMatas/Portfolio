import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -1, y: 70},
    origin: 'bottom right',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's3',
  description:
    'Teaser created for Planeta Liga, a project developed for the Czech top football competition Chance Liga to engage a younger audience. The video introduces a stylized universe built around a cast of original 3D characters, each representing different traits and energy. I contributed across the full 3D pipeline, including character development, rigging, animation, and environment creation, with a focus on building a cohesive visual world scalable across multiple formats.',
  image: '/jpg/shot-small-3.jpg',
  properties: [
    {
      name: 'Client',
      value: 'Chance Liga',
    },
    {
      name: 'Project',
      value: 'Planeta Liga',
    },
    {
      name: 'Industry',
      value: 'Sports & Entertainment',
    },
    {
      name: 'Link',
      url: 'https://planetaliga.cz/',
      value: 'planetaliga.cz',
    },
    {
      name: 'Year',
      value: '2026',
    },
  ],
  size: 'small',
  slug: 'planeta-liga-teaser',
  title: 'Planeta Liga Teaser',
  variant: 'shot',
  videos: {
    mp4: '/mp4/shot-small-3.mp4',
    webm: '/webm/shot-small-3.webm',
  },
}

export default shot