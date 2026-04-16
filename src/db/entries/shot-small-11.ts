import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -1, y: 14.5},
    origin: 'top top',
    to: {delay: 0.1, duration: 0.8, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's11',
  description:
    'Personal exploration focused on simulating liquid behavior in a controlled 3D environment. The goal was to test new approaches to achieving a more realistic look, particularly in motion, surface tension, and interaction with light. Liquid simulation remains one of the more technically demanding areas in 3D, and this study was aimed at refining both accuracy and visual quality. I handled the full process from setup to final render.',
  image: '/jpg/shot-small-11.jpg',
  properties: [
    {
      name: 'Client',
      value: 'Personal Project',
    },
    {
      name: 'Project',
      value: 'Simulation Studies',
    },
    {
      name: 'Industry',
      value: 'Art / Experimental',
    },
    {
      name: 'Year',
      value: '2025',
    },
  ],
  size: 'small',
  slug: 'liquid-simulation-study',
  title: 'Liquid Simulation Study',
  variant: 'shot',
  videos: {
    mp4: '/mp4/shot-small-11.mp4',
    webm: '/webm/shot-small-11.webm',
  },
}

export default shot
