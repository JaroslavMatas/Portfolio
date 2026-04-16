import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: 37, y: -15},
    origin: 'top left',
    to: {delay: 0.1, duration: 0.8, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's19',
  description:
    'Poster design created for a live event celebrating the first anniversary of the Fantastic Future podcast, hosted by Petr Mára, Jaroslav Beck, and Lubomír Šmid. The visual builds on the project’s identity system, translating its futuristic aesthetic into a static format. The poster was used as the official event visual and also served as a foundation for future promotional materials. I was responsible for the full design and visual direction.',
  image: '/jpg/shot-small-19.jpg',
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
  slug: 'fantastic-future-live-event-poster-design',
  title: 'Fantastic Future Live Event Poster Design',
  variant: 'shot',
}

export default shot
