import type {EntryContact} from '../types'

const contact: EntryContact = {
  animation: {
    from: {opacity: 0, scale: 0.88, x: -1, y: 41.5},
    origin: 'bottom left',
    to: {delay: 0.15, duration: 1, ease: 'bezier-out-back', opacity: 1, scale: 1, x: 0, y: 0},
  },
  area: 'contact',
  contacts: [
    {
      type: 'Email',
      url: 'mailto:jaroslavmatas3090@gmail.com',
    },
    {
      type: 'Instagram',
      url: 'https://www.instagram.com/jaroslavmatas_/',
    },
    {
      type: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jaroslav-matas-4a4b05250/',
    },
  ],
  slug: 'contact',
  variant: 'contact',
}

export default contact