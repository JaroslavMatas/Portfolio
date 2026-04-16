import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -37, y: 14.5},
    origin: 'center right',
    to: {delay: 0.15, duration: 1, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's8',
  description:
    'Character animation focused on OFF, one of five original characters developed for the Planeta Liga universe for Chance Liga. Each character was designed with distinct traits and movement language to represent different aspects of the league. I was responsible for developing the full character set, including modeling and rigging, and creating animations used across multiple outputs. This shot highlights the motion and personality of one character within the broader system.',
  image: '/jpg/shot-small-8.jpg',
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
  slug: 'planeta-liga-character-off',
  title: 'Planeta Liga Character - OFF',
  variant: 'shot',
  videos: {
    mp4: '/webm/shot-small-8.mp4',
    webm: '/webm/shot-small-8.webm',
  },
}

export default shot
