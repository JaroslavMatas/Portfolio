import type {EntryShot, EntryShotSize, ShotArea} from '../types'

const indexedPrefixToSize = (prefix: string): EntryShotSize | null => {
  switch (prefix) {
    case 'l':
      return 'large'
    case 's':
      return 'small'
    case 't':
      return 'tall'
    case 'w':
      return 'wide'
    default:
      return null
  }
}

/** `s12` → `s`, `painting` → null */
const indexedShotPrefix = (area: ShotArea): string | null => {
  const m = /^([slwt])\d+$/.exec(area)
  return m?.[1] ?? null
}

export const assertShotSizeMatchesArea = (entry: EntryShot): void => {
  const prefix = indexedShotPrefix(entry.area)
  if (!prefix) {
    return
  }

  const expected = indexedPrefixToSize(prefix)
  if (!expected) {
    return
  }

  if (entry.size !== expected) {
    throw new Error(
      `Shot "${entry.slug}": area "${entry.area}" expects size "${expected}" (grid span), got "${entry.size}"`
    )
  }
}
