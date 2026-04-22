import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -109, y: -70},
    origin: 'top left',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 't3',
  description:
    '3D animation created for social media to announce a new drop from 9Viper. The visual centers around a custom belt, framed within a motorsport-inspired aesthetic. The piece combines an original 3D Pirelli tyre model with F1-inspired sound design to build a fast, high-energy atmosphere. I was responsible for modeling, animation, sound design and overall visual direction.',
  image: '/jpg/shot-tall-3.jpg',
  properties: [
    {
      name: 'Client',
      value: '9Viper',
    },
    {
      name: 'Project',
      value: '9Viper Drop Campaign',
    },
    {
      name: 'Industry',
      value: 'Fashion',
    },
    {
      name: 'Link',
      url: 'https://www.nineviper.com/',
      value: 'nineviper.com',
    },
    {
      name: 'Year',
      value: '2025',
    },
  ],
  size: 'tall',
  slug: '9viper-belt-drop-animation',
  title: '9Viper Belt Drop Animation',
  variant: 'shot',
  videos: {
    mp4: '/mp4/shot-tall-3.mp4',
    webm: '/webm/shot-tall-3.webm',
  },
}

export default shot
