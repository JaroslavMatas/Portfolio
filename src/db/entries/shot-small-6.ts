import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -109, y: 70},
    origin: 'bottom left',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's6',
  description:
    'A refined touch on the Lapz website is the way Vision Pro elegantly follows the passing cars, enhancing the overall feel of the experience with smooth motion.',
  image: '/jpg/shot-small-6.jpg',
  properties: [
    {
      name: 'Product',
      value: 'Lapz - Watch F1 in visionoS',
    },
    {
      name: 'Project',
      value: 'Lapz - Website',
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
  slug: 'lapz-vision-pro-section',
  title: 'Lapz - Vision Pro Section',
  variant: 'shot',
  videos: {
    mp4: '/webm/shot-small-6.mp4',
    webm: '/webm/shot-small-6.webm',
  },
}

export default shot
