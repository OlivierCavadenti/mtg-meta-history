<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CardInfo, CardLine, DeckList } from '../data/types'
import { BASIC_LANDS, cardImage, scryfallSearch } from '../lib/cards'
import { t } from '../lib/i18n'
import { hidePreview, movePreview, showPreview } from '../lib/preview'
import CardRow from './CardRow.vue'

const props = defineProps<{ list: DeckList; cards: Record<string, CardInfo> }>()

type Mode = 'list' | 'visual'
const MODE_KEY = 'mtg-decklist-mode'
function initialMode(): Mode {
  try {
    return localStorage.getItem(MODE_KEY) === 'visual' ? 'visual' : 'list'
  } catch {
    return 'list'
  }
}
const mode = ref<Mode>(initialMode())
function setMode(m: Mode) {
  mode.value = m
  try {
    localStorage.setItem(MODE_KEY, m)
  } catch {
    /* storage unavailable */
  }
}

const info = (name: string) => props.cards[name]
const isLand = (name: string) => info(name)?.t === 'land'
const cmc = (name: string) => info(name)?.c ?? 0
const sum = (lines: CardLine[]) => lines.reduce((s, [n]) => s + n, 0)

function byCmcThenName(a: CardLine, b: CardLine) {
  return cmc(a[1]) - cmc(b[1]) || b[0] - a[0] || a[1].localeCompare(b[1])
}

const spells = computed(() => props.list.main.filter(([, n]) => !isLand(n)))
const lands = computed(() =>
  props.list.main
    .filter(([, n]) => isLand(n))
    .sort((a, b) => Number(BASIC_LANDS.has(a[1])) - Number(BASIC_LANDS.has(b[1])) || b[0] - a[0] || a[1].localeCompare(b[1])),
)

const totalMain = computed(() => sum(props.list.main))
const totalSpells = computed(() => sum(spells.value))
const totalLands = computed(() => sum(lands.value))
const totalSide = computed(() => sum(props.list.side))

const bucket = (name: string) => Math.min(Math.round(cmc(name)), 6)

const columns = computed(() => {
  const map = new Map<number, CardLine[]>()
  for (const line of spells.value) {
    const k = bucket(line[1])
    if (!map.has(k)) map.set(k, [])
    map.get(k)!.push(line)
  }
  return [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([k, lines]) => ({
      label: k === 6 ? '6+' : String(k),
      total: sum(lines),
      lines: lines.sort((a, b) => b[0] - a[0] || a[1].localeCompare(b[1])),
    }))
})

const curve = computed(() => {
  const counts = [0, 0, 0, 0, 0, 0, 0]
  for (const [n, name] of spells.value) counts[bucket(name)] += n
  const max = Math.max(1, ...counts)
  return counts.slice(1).map((c, i) => ({ label: i === 5 ? '6+' : String(i + 1), pct: (c / max) * 100, count: c }))
})

const side = computed(() => [...props.list.side].sort(byCmcThenName))

type Column = { label: string; total: number; lines: CardLine[] }

/** Sideboard columns for the card view: one per mana value, lands last. */
const sideColumns = computed<Column[]>(() => {
  const map = new Map<number, CardLine[]>()
  for (const line of side.value) {
    const k = isLand(line[1]) ? 99 : bucket(line[1])
    if (!map.has(k)) map.set(k, [])
    map.get(k)!.push(line)
  }
  return [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([k, lines]) => ({
      label: k === 99 ? t('lands') : k === 6 ? '6+' : String(k),
      total: sum(lines),
      lines: lines.sort((a, b) => b[0] - a[0] || a[1].localeCompare(b[1])),
    }))
})

const copied = ref(false)
async function copy() {
  const fmt = (lines: CardLine[]) => lines.map(([n, name]) => `${n} ${name}`).join('\n')
  const text = fmt(props.list.main) + (props.list.side.length ? `\n\nSideboard\n${fmt(props.list.side)}` : '')
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
  } catch {
    /* clipboard unavailable */
  }
}
</script>

<template>
  <section class="decklist">
    <div class="bar">
      <div class="counts">
        <strong>{{ totalMain }}</strong> {{ t('cards') }}, {{ totalSpells }} {{ t('spells') }}, {{ totalLands }} {{ t('landsLower') }}
        <span class="curve" aria-hidden="true">
          <span v-for="c in curve" :key="c.label" class="curve-bar" :title="`${c.label}: ${c.count}`">
            <span class="curve-fill" :style="{ height: c.pct + '%' }"></span>
          </span>
        </span>
      </div>
      <div class="actions">
        <button type="button" class="btn" @click="copy">{{ copied ? t('copied') : t('copy') }}</button>
        <div class="toggle">
          <button type="button" class="btn" :class="{ on: mode === 'list' }" @click="setMode('list')">{{ t('list') }}</button>
          <button type="button" class="btn" :class="{ on: mode === 'visual' }" @click="setMode('visual')">{{ t('visual') }}</button>
        </div>
      </div>
    </div>

    <template v-if="mode === 'list'">
      <div class="main">
        <div class="spells">
          <div v-for="col in columns" :key="col.label" class="col">
            <div class="col-head"><span>{{ col.label }}</span><span>{{ col.total }}</span></div>
            <CardRow v-for="[n, name] in col.lines" :key="name" :name="name" :count="n" :info="info(name)" />
          </div>
        </div>
        <div v-if="lands.length" class="lands">
          <div class="col-head"><span>{{ t('lands') }}</span><span>{{ totalLands }}</span></div>
          <CardRow v-for="[n, name] in lands" :key="name" :name="name" :count="n" :info="info(name)" />
        </div>
      </div>

      <div v-if="side.length" class="side">
        <div class="col-head"><span>{{ t('sideboard') }}</span><span>{{ totalSide }}</span></div>
        <div class="side-grid">
          <CardRow v-for="[n, name] in side" :key="name" :name="name" :count="n" :info="info(name)" />
        </div>
      </div>
    </template>

    <template v-else>
      <div class="main main--stack">
        <div class="stacks">
          <div v-for="col in columns" :key="col.label" class="stack-col">
            <div class="col-head"><span>{{ col.label }}</span><span>{{ col.total }}</span></div>
            <div class="stack">
              <a
                v-for="[n, name] in col.lines"
                :key="name"
                class="scard"
                :href="scryfallSearch(name)"
                target="_blank"
                rel="noopener noreferrer"
                @mouseenter="showPreview(cardImage(info(name), name, 'large'), $event)"
                @mousemove="movePreview"
                @mouseleave="hidePreview"
              >
                <img :src="cardImage(info(name), name, 'normal')" :alt="name" loading="lazy" />
                <span class="scount">&times;{{ n }}</span>
              </a>
            </div>
          </div>
        </div>
        <div v-if="lands.length" class="lands lands--stack">
          <div class="col-head"><span>{{ t('lands') }}</span><span>{{ totalLands }}</span></div>
          <div class="stack">
            <a
              v-for="[n, name] in lands"
              :key="name"
              class="scard"
              :href="scryfallSearch(name)"
              target="_blank"
              rel="noopener noreferrer"
              @mouseenter="showPreview(cardImage(info(name), name, 'large'), $event)"
              @mousemove="movePreview"
              @mouseleave="hidePreview"
            >
              <img :src="cardImage(info(name), name, 'normal')" :alt="name" loading="lazy" />
              <span class="scount">&times;{{ n }}</span>
            </a>
          </div>
        </div>
      </div>
      <div v-if="side.length" class="side">
        <div class="col-head"><span>{{ t('sideboard') }}</span><span>{{ totalSide }}</span></div>
        <div class="stacks stacks--side">
          <div v-for="col in sideColumns" :key="col.label" class="stack-col">
            <div class="stack">
              <a
                v-for="[n, name] in col.lines"
                :key="name"
                class="scard"
                :href="scryfallSearch(name)"
                target="_blank"
                rel="noopener noreferrer"
                @mouseenter="showPreview(cardImage(info(name), name, 'large'), $event)"
                @mousemove="movePreview"
                @mouseleave="hidePreview"
              >
                <img :src="cardImage(info(name), name, 'normal')" :alt="name" loading="lazy" />
                <span class="scount">&times;{{ n }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<style scoped>
.decklist {
  border-top: 3px solid var(--ink);
  padding-top: var(--space-md);
}

.bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--space-md);
  flex-wrap: wrap;
  margin-bottom: var(--space-md);
}

.counts {
  display: flex;
  align-items: flex-end;
  gap: 0.35rem;
  font-style: italic;
  font-size: 0.95rem;
  color: var(--muted);
}

.counts strong {
  font-style: normal;
  font-family: var(--font-heading);
  font-size: 1.6rem;
  line-height: 1;
  color: var(--ink);
}

.curve {
  display: inline-flex;
  align-items: flex-end;
  gap: 3px;
  height: 24px;
  margin-left: var(--space-sm);
}

.curve-bar {
  width: 8px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  border-bottom: 2px solid var(--ink-light);
}

.curve-fill {
  width: 100%;
  background: var(--ink-light);
}

.actions {
  display: flex;
  align-items: baseline;
  gap: var(--space-lg);
}

.toggle {
  display: flex;
  gap: var(--space-md);
}

.btn {
  font-family: var(--font-body);
  font-size: 0.95rem;
  padding: 0;
  border: none;
  background: none;
  color: var(--muted);
  cursor: pointer;
}

.btn:hover {
  color: var(--ink);
}

.btn.on {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 250px;
  gap: var(--space-md);
}

.spells {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
  gap: var(--space-md) var(--space-sm);
  align-content: start;
}

.col,
.lands {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.lands {
  border-left: 1px solid var(--line);
  padding-left: var(--space-md);
}

.col-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--ink-light);
  padding: 0 2px 4px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 3px;
}

.col-head span + span {
  font-family: var(--font-body);
  font-weight: 400;
  font-style: italic;
  font-size: 0.85rem;
  color: var(--muted);
}

.side {
  margin-top: var(--space-lg);
}

.side-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 3px var(--space-sm);
}

/* Card view: columns of overlapping cards. Each card leaves visible its title bar
   (name and mana cost) plus a thin band of art that holds the count, so nothing on the
   title line is hidden. Vertical margins in % resolve against the column width, which
   is also the card width: a card is 139.3% of its width tall. */
.stacks {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--space-md) var(--space-sm);
  align-content: start;
}

.stacks--side {
  margin-top: var(--space-xs);
}

.main--stack {
  grid-template-columns: minmax(0, 1fr) 190px;
}

.stack {
  display: flex;
  flex-direction: column;
  padding-top: 2px;
}

.scard {
  position: relative;
  display: block;
  aspect-ratio: 488 / 680;
  border-radius: 4.75% / 3.4%;
  overflow: hidden;
  background: var(--paper-deep);
  outline: 1px solid rgb(0 0 0 / 0.25);
}

.scard + .scard {
  /* show 30% of the previous card's width (about 21% of its height): the title bar
     plus a band of art that holds the count */
  margin-top: -109.3%;
}

.scard:hover {
  outline: 2px solid var(--accent);
  z-index: 1;
}

.scard img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.scount {
  position: absolute;
  top: 11.5%;
  right: 7%;
  padding: 0 0.35rem;
  background: var(--ink);
  color: var(--paper);
  border-radius: 3px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.78rem;
  line-height: 1.35;
}

@media (max-width: 720px) {
  .main {
    grid-template-columns: 1fr;
  }

  .lands {
    border-left: none;
    padding-left: 0;
  }
}
</style>
