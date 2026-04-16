import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: 37, y: 0},
    origin: 'top left',
    to: {delay: 0.15, duration: 1, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's14',
  description:
    'Looped 3D logo animation created as part of a broader visual identity for the Fantastic Future podcast. The mark features two glass “F” forms floating in space, reflecting the project’s sleek, future-oriented direction inspired by Apple’s liquid glass aesthetic. Alongside this piece, I developed a full motion and design system including intro, outro, transitions, and social media assets. I was responsible for the visual direction, 3D design, and animation.',
  image: '/jpg/shot-small-14.jpg',
  properties: [
    {
      name: 'Client',
      value: 'Fantastic Future Podcast',
    },
    {
      name: 'Project',
      value: 'Fantastic Future - Visual Identity',
    },
    {
      name: 'Industry',
      value: 'Tech & Entertainment',
    },
    {
      name: 'Link',
      url: 'https://www.youtube.com/playlist?list=PLntoqYQ2pPwe6z8oQjglv7ESpfayYAF58',
      value: 'Fantastic Future Youtube',
    },
    {
      name: 'Year',
      value: '2025',
    },
  ],
  size: 'small',
  slug: 'fantastic-future-logo-animation',
  title: 'Fantastic Future Logo Animation',
  variant: 'shot',
  videos: {
    mp4: '/mp4/shot-small-14.mp4',
    webm: '/webm/shot-small-14.webm',
  },
}

export default shot
