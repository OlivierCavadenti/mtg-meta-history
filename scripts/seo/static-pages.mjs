// Post-build: one static HTML page per route, so search engines and link previews see a real
// page (200, its own title, description, image and a short text) before the app boots.
// Also writes sitemap.xml and robots.txt. Node stdlib only; reads the generated data.
// Usage: node scripts/seo/static-pages.mjs   (after vite build, from the repository root)
import { mkdirSync, readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const SITE = 'https://oliviercavadenti.github.io/mtg-meta-history'
const DIST = 'dist'
const DATA = 'src/data'
const template = readFileSync(join(DIST, 'index.html'), 'utf8')

// formats published on the site (src/data/formats.ts, ready: true)
const formatsSrc = readFileSync(join(DATA, 'formats.ts'), 'utf8')
const FORMATS = [...formatsSrc.matchAll(/\{ id: '([a-z]+)', label: '([^']+)', ready: true \}/g)].map((m) => ({ id: m[1], label: m[2] }))

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const art = (id) => `https://cards.scryfall.io/art_crop/front/${id[0]}/${id[1]}/${id}.jpg`

/** seasons of a format: generated JSON (Limited) or the hand-written seasons.ts */
function seasonsOf(format) {
  const json = join(DATA, format, 'seasons.json')
  if (existsSync(json)) return JSON.parse(readFileSync(json, 'utf8'))
  const ts = readFileSync(join(DATA, format, 'seasons.ts'), 'utf8')
  return [...ts.matchAll(/\{ id: '([^']+)', start: '([^']+)', set: ('[^']*'|"[^"]*")/g)].map((m) => ({
    id: m[1], start: m[2], set: m[3].slice(1, -1),
  }))
}

/** "2005–06" from a season start and the next one, as on the site */
function years(s, next) {
  const y1 = Number(s.start.slice(0, 4))
  const y2 = next ? Number(next.start.slice(0, 4)) - (next.start.slice(5) === '01-01' ? 1 : 0) : new Date().getUTCFullYear()
  return y2 <= y1 ? String(y1) : `${y1}–${String(y2).slice(2)}`
}

function page(route, { title, description, image, body }) {
  // GitHub Pages serves a folder's index.html at its URL with a trailing slash
  const url = route ? `${SITE}/${route}/` : `${SITE}/`
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="MTG Meta History" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    image ? `<meta property="og:image" content="${image}" />` : '',
    `<meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}" />`,
  ].filter(Boolean).join('\n    ')
  let html = template.replace(/<title>[^<]*<\/title>/, head)
  // crawlable text inside the mount point: Vue replaces it when the app starts
  if (body) html = html.replace('<div id="app"></div>', `<div id="app">${body}</div>`)
  const dir = join(DIST, route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  return url
}

const urls = []
for (const f of FORMATS) {
  const seasons = seasonsOf(f.id)
  const cards = JSON.parse(readFileSync(join(DATA, f.id, 'cards.json'), 'utf8'))
  const decks = readdirSync(join(DATA, f.id, 'decks'))
    .map((file) => JSON.parse(readFileSync(join(DATA, f.id, 'decks', file), 'utf8')))
    .flatMap((s) => s.decks)
  // chronological: season order of the format (Limited set codes do not sort by date)
  const order = new Map(seasons.map((s, i) => [s.id, i]))
  decks.sort((a, b) => (order.get(a.season) ?? 0) - (order.get(b.season) ?? 0))
  const label = (season) => {
    const i = seasons.findIndex((s) => s.id === season)
    if (i < 0) return season
    return seasons[i].code ? seasons[i].set : years(seasons[i], seasons[i + 1])
  }
  const byYear = new Map()
  for (const d of decks) {
    if (!byYear.has(d.season)) byYear.set(d.season, [])
    byYear.get(d.season).push(d)
  }
  const first = decks.reduce((m, d) => (d.first && d.first < m ? d.first : m), '9999')
  const cover = decks.find((d) => d.tier === 1 && cards[d.cover]?.i)
  const listing = seasons
    .filter((s) => byYear.has(s.id))
    .reverse()
    .map((s) => `<h2>${esc(label(s.id))}, ${esc(s.set)}</h2><ul>${byYear.get(s.id).map((d) => `<li><a href="/mtg-meta-history/${f.id}/deck/${d.id}/">${esc(d.name)}</a></li>`).join('')}</ul>`)
    .join('')
  urls.push(page(f.id, {
    title: `${f.label} · MTG Meta History`,
    description: `${f.label} : ${decks.length} decks, tous les archétypes qui ont performé, saison par saison depuis ${first.slice(0, 4)}, avec leur decklist.`,
    image: cover ? art(cards[cover.cover].i) : undefined,
    body: `<h1>${esc(f.label)}</h1>${listing}`,
  }))
  for (const [view, fr] of [['archetypes', 'Archétypes'], ['staples', 'Staples'], ['colors', 'Couleurs']]) {
    urls.push(page(`${f.id}/${view}`, {
      title: `${fr} · ${f.label} · MTG Meta History`,
      description: `${f.label} : ${fr.toLowerCase()} à travers toute l'histoire du format.`,
      image: cover ? art(cards[cover.cover].i) : undefined,
    }))
  }
  // decks
  for (const d of decks) {
    const img = cards[d.cover]?.i
    const why = (d.why?.fr ?? []).map((w) => `<li>${esc(w)}</li>`).join('')
    urls.push(page(`${f.id}/deck/${d.id}`, {
      title: `${d.name} · ${label(d.season)} · ${f.label} · MTG Meta History`,
      description: d.summary?.fr || d.summary?.en || d.name,
      image: img ? art(d.season && cards[d.cover].e?.[d.season] ? cards[d.cover].e[d.season] : img) : undefined,
      body: `<h1>${esc(d.name)}</h1><p>${esc(f.label)}, ${esc(label(d.season))}</p><p>${esc(d.summary?.fr ?? '')}</p><ul>${why}</ul>`
        + (d.list?.main?.length ? `<h2>Decklist</h2><ul>${d.list.main.map(([n, c]) => `<li>${n} ${esc(c)}</li>`).join('')}</ul>` : ''),
    }))
  }
  // archetype histories: slug = deck id without its season suffix
  const slugs = new Map()
  for (const d of decks) {
    const slug = d.id.endsWith(`-${d.season}`) ? d.id.slice(0, -(d.season.length + 1)) : d.id
    if (!slugs.has(slug)) slugs.set(slug, [])
    slugs.get(slug).push(d)
  }
  for (const [slug, ds] of slugs) {
    if (ds.length < 2) continue
    const last = ds[ds.length - 1]
    urls.push(page(`${f.id}/archetype/${slug}`, {
      title: `${last.name} · ${f.label} · MTG Meta History`,
      description: `${last.name} en ${f.label} : ${ds.length} saisons, son évolution carte par carte.`,
      image: cards[last.cover]?.i ? art(cards[last.cover].i) : undefined,
    }))
  }
}

// home page (written last: every other page is built from the original template)
urls.unshift(page('', {
  title: 'MTG Meta History · Encyclopédie des decks de Magic: The Gathering',
  description: `Tous les decks qui ont performé en ${FORMATS.map((f) => f.label).join(', ')}, saison par saison, avec leur decklist, leurs cartes clés et leur histoire.`,
}))

writeFileSync(join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`)
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`)
console.log(`static pages: ${urls.length - 1} routes, sitemap.xml, robots.txt`)
