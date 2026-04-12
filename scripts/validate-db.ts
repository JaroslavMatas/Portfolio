import {assertShotSizeMatchesArea} from '../src/db/utils/shot-layout'
import {assertUniqueSlugs, assertValidSlug} from '../src/db/utils/slug'
import {entries} from '../src/db/index'

const slugs = entries.map(e => e.slug)

for (const e of entries) {
  assertValidSlug(e.slug, `${e.variant}:${e.area}`)
  if (e.variant === 'shot') {
    assertShotSizeMatchesArea(e)
  }
}

assertUniqueSlugs(slugs, 'src/db/entries')

console.log(`✅ DB ok (${entries.length} entries, ${slugs.length} slugs)`)
