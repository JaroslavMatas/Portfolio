import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -109, y: 70},
    origin: 'bottom bottom',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's5',
  description:
    'Lapz’s hero scroll animation guides users through a cinematic journey. Walking them down the Monaco tunnel and seamlessly transitioning to a bird’s-eye view, immersively introducing Lapz’s core features through interactive and playful storytelling.',
  image: '/jpg/shot-small-5.jpg',
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
  slug: 'lapz-homepage',
  title: 'Lapz - Homepage',
  variant: 'shot',
  videos: {
    mp4: '/webm/shot-small-5.mp4',
    webm: '/webm/shot-small-5.webm',
  },
}

export default shot
