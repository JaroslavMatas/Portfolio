import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: 109, y: 70},
    origin: 'bottom left',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's1',
  description:
    'A looping 3D animation created for the call-to-action section of the Lapz website, showing the car evolving from sketch to wireframe to final render.',
  image: '/jpg/shot-small-1.jpg',
  properties: [
    {
      name: 'Product',
      value: 'Lapz - Watch F1 in visionOS',
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
  slug: 'lapz-cta-section',
  title: 'Lapz - CTA Section',
  variant: 'shot',
  videos: {
    mp4: '/mp4/shot-small-1.mp4',
    webm: '/webm/shot-small-1.webm',
  },
}

export default shot