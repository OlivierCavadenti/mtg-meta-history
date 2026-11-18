// Validates the generated deck encyclopedia data (src/data/{format}).
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { CardInfo, Deck, Season } from '../src/data/types'
import { STANDARD_SEASONS } from '../src/data/standard/seasons'
import { MODERN_SEASONS } from '../src/data/modern/seasons'

const FORMATS: [string, Season[]][] = [
  ['standard', STANDARD_SEASONS],
  ['modern', MODERN_SEASONS],
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
