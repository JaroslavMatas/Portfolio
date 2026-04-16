import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -109, y: -70},
    origin: 'top left',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 'w1',
  description:
    'The Planeta Liga project, developed for the Czech top football competition Chance Liga to connect with a younger audience. The visual system is built around a stylized universe with five original 3D characters, each defined by distinct traits and motion language. I contributed to character development, rigging, environment creation, and large-scale asset production for a wide range of use cases. The focus was on building a flexible visual world that could adapt across formats while maintaining a consistent identity.',
  image: '/jpg/shot-wide-1.jpg',
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
  size: 'wide',
  slug: 'planeta-liga-3d-visuals-development',
  title: 'Planeta Liga 3D Visuals Development',
  variant: 'shot',
}

export default shot
