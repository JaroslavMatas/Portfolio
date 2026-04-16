import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: 109, y: 70},
    origin: 'bottom left',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's2',
  description:
    'A thoughtfully designed donate page fosters trust and confidence, increasing the likelihood that donors will complete their contributions and have a positive experience. With this in mind,extra attention was given to making the Lapz Donate Page feel polished, inviting, and impactful.',
  image: '/jpg/shot-small-2.jpg',
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
  slug: 'lapz-donate-page',
  title: 'Lapz - Donate Page',
  variant: 'shot',
  videos: {
    mp4: '/webm/shot-small-2.mp4',
    webm: '/webm/shot-small-2.webm',
  },
}

export default shot
