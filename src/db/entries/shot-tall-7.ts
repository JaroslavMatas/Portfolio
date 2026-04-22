import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -109, y: -70},
    origin: 'top left',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 't7',
  description:
    'Visual piece introducing the collaboration between 9Viper and jewelry designer Ondřej Stára. The video presents three custom rings, modeled one-to-one based on the physical designs. The central concept places the ring as a keychain attached to a Dodge Viper key, subtly referencing the brand’s identity and motorsport influence. I handled precise modeling, animation, and overall concept development.',
  image: '/jpg/shot-tall-7.jpg',
  properties: [
    {
      name: 'Client',
      value: '9Viper x Ondrej Stara',
    },
    {
      name: 'Project',
      value: '9Viper x Ondřej Stára Collaboration',
    },
    {
      name: 'Industry',
      value: 'Fashion',
    },
    {
      name: 'Link',
      url: 'https://ondrejstara.com/',
      value: 'ondrejstara.com',
    },
    {
      name: 'Year',
      value: '2025',
    },
  ],
  size: 'tall',
  slug: '9viper-x-ondrej-stara-drs-active-ring',
  title: '9Viper x Ondrej Stara DRS Active Ring',
  variant: 'shot',
  videos: {
    mp4: '/mp4/shot-tall-7.mp4',
    webm: '/webm/shot-tall-7.webm',
  },
}

export default shot
