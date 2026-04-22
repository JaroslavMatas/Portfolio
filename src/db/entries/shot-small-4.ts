import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -1, y: 70},
    origin: 'bottom bottom',
    to: {delay: 0.2, duration: 1.2, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's4',
  description:
    '3D visual created for a web experience presenting the Ambiente Collectors Cards project by Ambiente. I developed a detailed 3D model of the card pack, carefully matching the real-world design, and animated it for use on the site. The sequence is complemented by a simple card animation, followed by a featured card with a custom animated effect I created to enhance its presence. My focus was on accurate product representation and smooth integration into the web environment.',
  image: '/jpg/shot-small-4.jpg',
  properties: [
    {
      name: 'Client',
      value: 'Ambiente',
    },
    {
      name: 'Project',
      value: 'Ambiente Collectors Cards Web',
    },
    {
      name: 'Industry',
      value: 'Hospitality',
    },
    {
      name: 'Link',
      url: 'https://www.ambi.cz/',
      value: 'ambi.cz',
    },
    {
      name: 'Year',
      value: '2026',
    },
  ],
  size: 'small',
  slug: 'ambiente-collectors-cards-web-animation',
  title: 'Ambiente Collectors Cards Web Animation',
  variant: 'shot',
  videos: {
    mp4: '/mp4/shot-small-4.mp4',
    webm: '/webm/shot-small-4.webm',
  },
}

export default shot
