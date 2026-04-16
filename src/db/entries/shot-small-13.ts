import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -37, y: 14.5},
    origin: 'top right',
    to: {delay: 0.15, duration: 1, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's13',
  description:
    'Product render of Prager’s Kombucha Black Edition, part of a broader set of visuals created across the brand’s portfolio. Beyond this shot, I developed 3D renders for multiple products including kombuchas, ciders, sodas, and bundled kits. The focus was on maintaining a consistent visual language across formats while highlighting material, lighting, and detail. I handled modeling, lighting, and final rendering.',
  image: '/jpg/shot-small-13.jpg',
  properties: [
    {
      name: 'Client',
      value: 'Prager’s',
    },
    {
      name: 'Project',
      value: 'Prager’s Product Visuals',
    },
    {
      name: 'Industry',
      value: 'Food & Beverage',
    },
    {
      name: 'Link',
      url: 'https://www.pragers.cz/en',
      value: 'pragers.cz',
    },
    {
      name: 'Year',
      value: '2025',
    },
  ],
  size: 'small',
  slug: 'pragers-kombucha-black-edtn-visual',
  title: 'Prager’s - Kombucha Black edtn. Visual',
  variant: 'shot',
}

export default shot
