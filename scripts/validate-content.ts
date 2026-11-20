// Validates the generated deck encyclopedia data (src/data/{format}).
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { CardInfo, Deck, Season } from '../src/data/types'
import { STANDARD_SEASONS } from '../src/data/standard/seasons'
import { MODERN_SEASONS } from '../src/data/modern/seasons'
import { PREMODERN_SEASONS } from '../src/data/premodern/seasons'
import { PIONEER_SEASONS } from '../src/data/pioneer/seasons'
import { LEGACY_SEASONS } from '../src/data/legacy/seasons'
import { VINTAGE_SEASONS } from '../src/data/vintage/seasons'
import { PAUPER_SEASONS } from '../src/data/pauper/seasons'
import LIMITED_SEASONS from '../src/data/limited/seasons.json'

const FORMATS: [string, Season[]][] = [
  ['standard', STANDARD_SEASONS],
  ['modern', MODERN_SEASONS],
  ['pioneer', PIONEER_SEASONS],
  ['legacy', LEGACY_SEASONS],
  ['vintage', VINTAGE_SEASONS],
  ['pauper', PAUPER_SEASONS],
  ['premodern', PREMODERN_SEASONS],
  ['limited', LIMITED_SEASONS as Season[]],
]
const ARCH = new Set(['aggro', 'midrange', 'control', 'combo', 'tempo', 'ramp'])

const errors: string[] = []
let total = 0

function checkFormat(format: string, seasons: Season[]) {
  const root = join(import.meta.dirname, '../src/data', format)
  const cards = JSON.parse(readFileSync(join(root, 'cards.json'), 'utf8')) as Record<string, CardInfo>
  const seasonIds = new Set(seasons.map((s) => s.id))
  const ids = new Set<string>()

  for (const file of readdirSync(join(root, 'decks')).sort()) {
    const { season, decks } = JSON.parse(readFileSync(join(root, 'decks', file), 'utf8')) as { season: string; decks: Deck[] }
    if (!seasonIds.has(season)) errors.push(`${format}/${file}: unknown season ${season}`)
    for (const d of decks) {
      total++
      const where = `${format}/${season}/${d.id}`
      if (ids.has(d.id)) errors.push(`${where}: duplicate id`)
      ids.add(d.id)
      if (!ARCH.has(d.archetype)) errors.push(`${where}: bad archetype`)
      if (!d.summary.fr || !d.summary.en) errors.push(`${where}: missing summary`)
      if (d.why.fr.length < 2 || d.why.en.length < 2) errors.push(`${where}: needs 2+ why bullets`)
      // Limited design archetypes (2011-2020): sources, key cards, no list
      if (d.sources) {
        if (!d.sources.length) errors.push(`${where}: no sources`)
        for (const c of [...d.keyCards, d.cover]) if (!cards[c]) errors.push(`${where}: no card data for ${c}`)
        continue
      }
      const main = d.list.main.reduce((s, [n]) => s + n, 0)
      if (main < 40) errors.push(`${where}: main deck has ${main} cards`)
      const names = new Set([...d.list.main, ...d.list.side].map(([, n]) => n))
      for (const c of [...d.keyCards, d.cover]) if (!names.has(c)) errors.push(`${where}: ${c} not in list`)
      for (const n of names) if (!cards[n]) errors.push(`${where}: no card data for ${n}`)
    }
  }
}

for (const [format, seasons] of FORMATS) checkFormat(format, seasons)

console.log(`${total} decks checked, ${errors.length} error(s).`)
for (const e of errors) console.log(' - ' + e)
if (errors.length) process.exit(1)
