import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -1, y: 70},
    origin: 'bottom right',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's3',
  description:
    'Teaser created to launch Planeta Liga, a project developed for the Czech top football competition Chance Liga to engage a younger audience. The video introduces a stylized universe of the league through a cast of original 3D characters, each representing different traits and energy. I contributed extensive 3D work across the piece, including character development, rigging, animation, and environment creation, as well as preparing assets for a wide range of outputs. My focus was on building a cohesive visual world that could scale across formats.',
  image: '/jpg/shot-small-3.jpg',
  properties: [
    {
      name: 'Client',
      value: 'Chance League',
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
    mp4: '/webm/shot-small-3.mp4',
    webm: '/webm/shot-small-3.webm',
  },
}

export default shot
