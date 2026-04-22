import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: 37, y: 14.5},
    origin: 'center right',
    to: {delay: 0.1, duration: 0.8, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's9',
  description:
    'Character study of KAP from the Planeta Liga universe for Chance Liga. As part of a set of five original characters, I was responsible for modeling, rigging, and preparing assets for various outputs. This shot highlights both the technical structure and final execution.',
  image: '/jpg/shot-small-9.jpg',
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
  slug: 'planeta-liga-kap',
  title: 'Planeta Liga - KAP',
  variant: 'shot',
  videos: {
    mp4: '/mp4/shot-small-9.mp4',
    webm: '/webm/shot-small-9.webm',
  },
}

export default shot
