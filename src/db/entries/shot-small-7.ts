import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -37, y: 14.5},
    origin: 'bottom left',
    to: {delay: 0.15, duration: 1, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's7',
  description:
    'In F1, weather can decide the whole race. Teams watch radar data all the time to plan strategy and tire choices. We recreated this idea at home by building a large 3D entity placed above the user. The entity displays an animated heatmap texture that visualizes live weather data.',
  image: '/jpg/shot-small-7.jpg',
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
  slug: 'lapz-weather-radar',
  title: 'Lapz - Weather Radar',
  variant: 'shot',
  videos: {
    mp4: '/mp4/shot-small-7.mp4',
    webm: '/webm/shot-small-7.webm',
  },
}

export default shot
