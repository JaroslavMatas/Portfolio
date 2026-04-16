import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -37, y: 14.5},
    origin: 'top left',
    to: {delay: 0.1, duration: 0.8, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's12',
  description:
    'Concept developed with Black Box Infinite exploring how the Lapz experience could translate into a MotoGP environment. The visual follows a rider inspired by Valentino Rossi, leaning into extreme angles through corners to capture the intensity and precision of the sport. The piece is presented in AR and captured using Apple Vision Pro, placing the animation directly into a real-world environment. I contributed to the visual concept and 3D execution.',
  image: '/webp/shot-small-12.webp',
  properties: [
    {
      name: 'Product',
      value: 'Lapz (Concept)',
    },
    {
      name: 'Project',
      value: 'Lapz MotoGP Exploration',
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
      value: '2025',
    },
  ],
  size: 'small',
  slug: 'lapz-x-motogp-ar-concept',
  title: 'Lapz x MotoGP AR Concept',
  variant: 'shot',
}

export default shot
