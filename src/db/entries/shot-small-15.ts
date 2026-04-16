import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: 73, y: 0},
    origin: 'top left',
    to: {delay: 0.15, duration: 1, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's15',
  description:
    'On-screen motion elements designed for the Fantastic Future podcast, used directly within YouTube episodes. The nametag system introduces the hosts - Petr Mára, Jaroslav Beck, and Lubomír Šmíd - through animated overlays integrated into the video. The visuals build on a liquid glass-inspired aesthetic influenced by Apple, adapted into a custom motion language. I designed and animated the elements as part of a broader identity system.',
  image: '/jpg/shot-small-15.jpg',
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
  slug: 'fantastic-future-host-nametags',
  title: 'Fantastic Future - Host Nametags',
  variant: 'shot',
  videos: {
    mp4: '/mp4/shot-small-15.mp4',
    webm: '/webm/shot-small-15.webm',
  },
}

export default shot
