<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { Archetype, Deck, SeasonWithDecks } from '../data/types'
import { useFormat } from '../lib/useFormat'
import { archetypeLabel, formatMonth, locale, seasonYears, t } from '../lib/i18n'
import DeckTile from '../components/DeckTile.vue'
import SoonState from '../components/SoonState.vue'

const { formatId, format, data, loading } = useFormat()
const route = useRoute()

// Season anchors only exist once the data is rendered: scroll to the hash then.
watch(data, async (d) => {
  if (!d || !route.hash) return
  await nextTick()
  document.querySelector(route.hash)?.scrollIntoView()
})

const ARCHETYPES: Archetype[] = ['aggro', 'midrange', 'control', 'combo', 'tempo', 'ramp']
const COLORS = ['W', 'U', 'B', 'R', 'G']

const archetype = ref<Archetype | ''>('')
const colors = ref<string[]>([])
const query = ref('')

function toggleColor(c: string) {
  colors.value = colors.value.includes(c) ? colors.value.filter((x) => x !== c) : [...colors.value, c]
}

function matches(d: Deck): boolean {
  if (archetype.value && d.archetype !== archetype.value) return false
  if (colors.value.length && !colors.value.every((c) => d.colors.includes(c))) return false
  const q = query.value.trim().toLowerCase()
  if (q) {
    const inName = d.name.toLowerCase().includes(q)
    const inList = !inName && [...d.list.main, ...d.list.side].some(([, n]) => n.toLowerCase().includes(q))
    if (!inName && !inList) return false
  }
  return true
}

type Row = SeasonWithDecks & { shown: Deck[] }

const seasons = computed<Row[]>(() => {
  if (!data.value) return []
  return data.value.seasons.map((s) => ({ ...s, shown: s.decks.filter(matches) }))
})

// newest season first
const visible = computed(() => seasons.value.filter((s) => s.shown.length).reverse())
const totalDecks = computed(() => seasons.value.reduce((n, s) => n + s.decks.length, 0))
const shownDecks = computed(() => visible.value.reduce((n, s) => n + s.shown.length, 0))
const filtering = computed(() => !!(archetype.value || colors.value.length || query.value.trim()))

const banLine = (s: Row) =>
  s.bans.map((b) => `${b.cards.join(', ')} (${formatMonth(b.date)})`).join(' · ')

</script>

<template>
  <SoonState v-if="format && !format.ready" :label="format.label" />
  <div v-else-if="loading || !data" class="state">{{ t('loading') }}</div>
  <div v-else class="format-page">
    <header class="intro">
      <h1>{{ format?.label }}</h1>
      <p class="intro-meta">
        {{ seasons[0]?.start.slice(0, 4) }}–{{ new Date().getFullYear() }},
        {{ filtering ? `${shownDecks} / ${totalDecks}` : totalDecks }} {{ t('decksCount') }}
      </p>
    </header>

    <div class="tools">
      <nav class="jump" aria-label="Seasons">
        <a v-for="s in visible" :key="s.id" :href="`#s-${s.id}`">{{ seasonYears(s.start, s.end) }}</a>
      </nav>
      <div class="filters">
        <div class="arch">
          <button type="button" :class="{ on: !archetype }" @click="archetype = ''">{{ t('all') }}</button>
          <button
            v-for="a in ARCHETYPES"
            :key="a"
            type="button"
            :class="{ on: archetype === a }"
            @click="archetype = archetype === a ? '' : a"
          >{{ archetypeLabel(a) }}</button>
        </div>
        <div class="color-filter">
          <button
            v-for="c in COLORS"
            :key="c"
            type="button"
            class="cpip"
            :class="[`cpip-${c.toLowerCase()}`, { on: colors.includes(c) }]"
            :aria-pressed="colors.includes(c)"
            :aria-label="c"
            @click="toggleColor(c)"
          ></button>
        </div>
        <input v-model="query" class="search" type="search" :placeholder="locale === 'fr' ? 'Chercher un deck ou une carte' : 'Search a deck or a card'" />
      </div>
    </div>

    <section v-for="s in visible" :id="`s-${s.id}`" :key="s.id" class="season">
      <div class="season-head">
        <h2 class="season-years">{{ seasonYears(s.start, s.end) }}</h2>
        <p class="season-set">{{ s.set }}<span class="season-count">, {{ s.shown.length }} {{ t('decksCount') }}</span></p>
      </div>
      <p v-if="s.bans.length" class="season-bans">
        <span class="ban-label">{{ t('bans') }}.</span> {{ banLine(s) }}
      </p>
      <div class="grid">
        <DeckTile v-for="d in s.shown" :key="d.id" :deck="d" :cards="data.cards" :format="formatId" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.intro {
  display: flex;
  align-items: baseline;
  gap: var(--space-md);
  flex-wrap: wrap;
  padding-top: var(--space-md);
}

h1 {
  font-size: clamp(3rem, 8vw, 5.5rem);
  line-height: 0.9;
  letter-spacing: -0.035em;
}

.intro-meta {
  font-style: italic;
  font-size: 1.05rem;
  color: var(--muted);
}

.tools {
  position: sticky;
  top: var(--header-h);
  z-index: 20;
  background: var(--paper);
  border-bottom: 1px solid var(--line);
  padding: var(--space-sm) 0;
  margin: var(--space-md) 0 var(--space-xl);
}

.jump {
  display: flex;
  gap: 0.15rem 0.7rem;
  flex-wrap: wrap;
  font-family: var(--font-heading);
  font-size: 0.92rem;
}

.jump a {
  color: var(--muted);
  text-decoration: none;
}

.jump a:hover {
  color: var(--ink);
  text-decoration: underline;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-sm) var(--space-lg);
  margin-top: var(--space-sm);
}

.arch {
  display: flex;
  flex-wrap: wrap;
  gap: 0 var(--space-md);
}

.arch button {
  font-family: var(--font-body);
  font-size: 0.95rem;
  background: none;
  border: none;
  padding: 0;
  color: var(--muted);
  cursor: pointer;
}

.arch button.on {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.color-filter {
  display: flex;
  gap: 6px;
}

.cpip {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid var(--ink);
  cursor: pointer;
  opacity: 0.3;
  padding: 0;
}

.cpip.on {
  opacity: 1;
}

.cpip-w { background: var(--pip-w); }
.cpip-u { background: var(--pip-u); }
.cpip-b { background: var(--pip-b); }
.cpip-r { background: var(--pip-r); }
.cpip-g { background: var(--pip-g); }

.search {
  margin-left: auto;
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.95rem;
  padding: 0.15rem 0;
  border: none;
  border-bottom: 1px solid var(--ink);
  background: transparent;
  color: var(--ink);
  min-width: 240px;
}

.search:focus {
  outline: none;
  border-bottom-width: 2px;
}

.season {
  margin-bottom: var(--space-2xl);
  scroll-margin-top: calc(var(--header-h) + 110px);
}

.season-head {
  display: flex;
  align-items: baseline;
  gap: var(--space-md);
  flex-wrap: wrap;
  border-top: 3px solid var(--ink);
  padding-top: var(--space-xs);
}

.season-years {
  font-size: 3.2rem;
  line-height: 1;
  letter-spacing: -0.04em;
}

.season-set {
  font-size: 1.15rem;
  font-style: italic;
}

.season-count {
  color: var(--muted);
}

.season-bans {
  margin-top: 0.15rem;
  font-size: 0.9rem;
  color: var(--ink-light);
  max-width: none;
}

.ban-label {
  color: var(--accent);
  font-style: italic;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-auto-flow: dense;
  gap: var(--space-lg) var(--space-md);
  margin-top: var(--space-md);
}

@media (max-width: 640px) {
  .tools {
    position: static;
  }

  .search {
    margin-left: 0;
    width: 100%;
  }

  .season-years {
    font-size: 2.4rem;
  }

  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-md) var(--space-sm);
  }
}
</style>
