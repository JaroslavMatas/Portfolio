import type {EntryShot} from '../types'

const shot: EntryShot = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -37, y: 0},
    origin: 'top top',
    to: {delay: 0.1, duration: 0.8, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 's17',
  description: '',
  image: '/jpg/shot-small-17.jpg',
  properties: [],
  size: 'small',
  slug: 'open-spotify-playlist',
  title: 'Open Spotify Playlist',
  variant: 'shot',
  videos: {
    mp4: '/mp4/shot-small-17.mp4',
    webm: '/webm/shot-small-17.webm',
  },
  link: 'https://open.spotify.com/playlist/5Q0CDoYINomoT5vGLe63t7?si=9ad47535f2fd403f',
  cardUrl: 'https://open.spotify.com/playlist/5Q0CDoYINomoT5vGLe63t7?si=9ad47535f2fd403f',
  cardTarget: '_blank',
}

export default shot