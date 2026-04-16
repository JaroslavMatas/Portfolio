import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: 1, y: 14.5},
    origin: 'center left',
    to: {delay: 0.1, duration: 0.8, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's10',
  description:
    'Set of 24 individual 3D circuits for the Lapz visionOS app, based on real Formula 1 tracks. The stylized design keeps the experience clean and readable at a glance, while still allowing deeper exploration of details like elevation, corner width, and curbs. In the app, miniature cars move around each circuit in real time, driven by live telemetry data. I contributed to the design system and 3D execution across the full set.',
  image: '/jpg/shot-small-10.jpg',
  properties: [
    {
      name: 'Product',
      value: 'Lapz - Watch F1 in visionoS',
    },
    {
      name: 'Project',
      value: 'Lapz - visionOS',
    },
    {
      name: 'Industry',
      value: 'AR / Motorsports',
    },
    {
      name: 'Link',
      url: 'https://www.lapz.io/',
      value: 'lapz.io',
    },
    {
      name: 'Year',
      value: '2024',
    },
  ],
  size: 'small',
  slug: 'lapz-f1-circuits-design',
  title: 'Lapz - F1 Circuits Design',
  variant: 'shot',
  videos: {
    mp4: '/webm/shot-small-10.mp4',
    webm: '/webm/shot-small-10.webm',
  },
}

export default shot
