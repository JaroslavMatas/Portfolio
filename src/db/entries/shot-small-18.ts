import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -37, y: 0},
    origin: 'top left',
    to: {delay: 0.15, duration: 1, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's18',
  description:
    'Animated UI elements created for use within Fantastic Future podcast episodes, prompting viewer interaction directly in the video. The visuals appear as subtle pop-up overlays, blending with the footage while maintaining a clear call to action. The design builds on a liquid glass-like motion language inspired by Apple, adapted into a cohesive system across the content. I developed the visual style and handled the animation.',
  image: '/jpg/shot-small-18.jpg',
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
  slug: 'fantastic-future-like-comment',
  title: 'Fantastic Future - Like & Comment UI',
  variant: 'shot',
  videos: {
    mp4: '/mp4/shot-small-18.mp4',
    webm: '/webm/shot-small-18.webm',
  },
}

export default shot
