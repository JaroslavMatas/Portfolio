import contact from './entries/contact'
import cv from './entries/cv'
import gallery from './entries/gallery'
import map from './entries/map'
import profile from './entries/profile'
import large1 from './entries/shot-large-1'
import small1 from './entries/shot-small-1'
import small2 from './entries/shot-small-2'
import small3 from './entries/shot-small-3'
import small4 from './entries/shot-small-4'
import small5 from './entries/shot-small-5'
import small6 from './entries/shot-small-6'
import small7 from './entries/shot-small-7'
import small8 from './entries/shot-small-8'
import small9 from './entries/shot-small-9'
import small10 from './entries/shot-small-10'
import small11 from './entries/shot-small-11'
import small12 from './entries/shot-small-12'
import small13 from './entries/shot-small-13'
import small14 from './entries/shot-small-14'
import small15 from './entries/shot-small-15'
import small16 from './entries/shot-small-16'
import small17 from './entries/shot-small-17'
import small18 from './entries/shot-small-18'
import small19 from './entries/shot-small-19'
import tall1 from './entries/shot-tall-1'
import tall2 from './entries/shot-tall-2'
import tall3 from './entries/shot-tall-3'
import tall4 from './entries/shot-tall-4'
import tall5 from './entries/shot-tall-5'
import tall6 from './entries/shot-tall-6'
import tall7 from './entries/shot-tall-7'
import wide1 from './entries/shot-wide-1'
import about from './entries/about'
import painting from './entries/painting'
import technologies from './entries/technologies'

import type {Entries} from './types'

export const entries: Entries = [
  contact,
  cv,
  gallery,
  map,
  profile,
  large1,
  small1,
  small10,
  small11,
  small12,
  small13,
  small14,
  small15,
  small16,
  small17,
  small18,
  small19,
  small2,
  small3,
  small4,
  small5,
  small6,
  small7,
  small8,
  small9,
  tall1,
  tall2,
  tall3,
  tall4,
  tall5,
  tall6,
  tall7,
  wide1,
  technologies,
  about,
  painting,
]

export * from './cv'
export * from './types'

export const getEntryBySlug = (slug: string) => {
  return entries.find(e => e.slug === slug)
}
