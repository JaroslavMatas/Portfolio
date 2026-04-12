import type {EntryShotSize} from '@/db/types'

/** `sizes` for next/image — matches `.content-grid` tracks (290px cells, 16px gap). */
export const shotImageSizesProp = (size: EntryShotSize): string => {
  switch (size) {
    case 'large':
      return '594px'
    case 'small':
      return '289px'
    case 'tall':
      return '289px'
    case 'wide':
      return '596px'
  }
}

/** Open Graph / Twitter hint dimensions (approx. grid span minus rounding). */
export const shotOpenGraphDimensions = (size: EntryShotSize): {height: number; width: number} => {
  switch (size) {
    case 'large':
      return {height: 594, width: 594}
    case 'small':
      return {height: 289, width: 289}
    case 'tall':
      return {height: 452, width: 289}
    case 'wide':
      return {height: 218, width: 596}
  }
}
