<script setup lang="ts">
import { computed, ref } from 'vue'
import { useFormat } from '../lib/useFormat'
import { buildLineages, type Lineage } from '../lib/lineage'
import { locale, seasonEndYear, seasonYears, t } from '../lib/i18n'
import ColorPips from '../components/ColorPips.vue'
import SoonState from '../components/SoonState.vue'

const { formatId, format, data, loading } = useFormat()

type Sort = 'longest' | 'recent' | 'name'
const sort = ref<Sort>('longest')
const query = ref('')
const showSingle = ref(false)

const seasons = computed(() => data.value?.seasons ?? [])
const all = computed<Lineage[]>(() => (data.value ? [...buildLineages(data.value).values()] : []))

const lastStart = (l: Lineage) => l.entries[l.entries.length - 1].season.start
const firstStart = (l: Lineage) => l.entries[0].season.start
const firstResult = (l: Lineage) => l.entries[0].deck.first

const list = computed(() => {
  const q = query.value.trim().toLowerCase()
  return all.value
    // the newest archetypes often have a single season so far: always show them in that sort
    .filter((l) => showSingle.value || sort.value === 'recent' || l.entries.length > 1)
    .filter((l) => !q || l.name.toLowerCase().includes(q) || l.entries.some((e) => e.deck.name.toLowerCase().includes(q)))
    .sort((a, b) => {
      if (sort.value === 'name') return a.name.localeCompare(b.name)
      // newest archetypes first: by the date of their first recorded result, as on the Decks page
      if (sort.value === 'recent') return firstResult(b).localeCompare(firstResult(a)) || lastStart(b).localeCompare(lastStart(a))
      return b.entries.length - a.entries.length || b.top8 - a.top8
    })
})

/** label every n-th season on the axis so labels never collide */
const axisStep = computed(() => Math.max(1, Math.ceil(seasons.value.length / 8)))

const multi = computed(() => all.value.filter((l) => l.entries.length > 1).length)

/** for the lifeline: share of top 8s in each season of the format (0 when absent) */
function life(l: Lineage): { id: string; share: number; label: string }[] {
  const by = new Map(l.entries.map((e) => [e.season.id, e.deck.stats.share]))
  return seasons.value.map((s) => ({ id: s.id, share: by.get(s.id) ?? 0, label: seasonYears(s.start, s.end) }))
}
const maxShare = computed(() => Math.max(1, ...all.value.flatMap((l) => l.entries.map((e) => e.deck.stats.share))))

const spanOf = (l: Lineage) => {
  const a = firstStart(l).slice(0, 4)
  const last = l.entries[l.entries.length - 1].season
  const b = String(seasonEndYear(last.start, last.end))
  return a === b ? a : `${a}–${b}`
}
</script>

<template>
  <SoonState v-if="format && !format.ready" :label="format.label" />
  <div v-else-if="loading || !data" class="state">{{ t('loading') }}</div>
  <div v-else class="archetypes">
    <header class="intro">
      <p v-if="sort === 'recent'" class="lede">{{ t('archetypesRecentIntro') }}</p>
      <p v-else class="lede">{{ multi }} {{ t('archetypesIntro') }}</p>
      <div class="controls">
        <nav class="sorts">
          <button type="button" :class="{ on: sort === 'longest' }" @click="sort = 'longest'">{{ t('sortLongest') }}</button>
          <button type="button" :class="{ on: sort === 'recent' }" @click="sort = 'recent'">{{ t('sortLatest') }}</button>
          <button type="button" :class="{ on: sort === 'name' }" @click="sort = 'name'">{{ t('sortName') }}</button>
        </nav>
        <label v-if="sort !== 'recent'" class="single"><input v-model="showSingle" type="checkbox" /> {{ t('showSingle') }}</label>
        <input v-model="query" class="search" type="search" :placeholder="locale === 'fr' ? 'Chercher un archétype' : 'Search an archetype'" />
      </div>
      <!-- year axis aligned with the lifelines below -->
      <div class="axis" aria-hidden="true">
        <span></span>
        <span></span>
        <span class="life axis-life">
          <span v-for="(s, i) in seasons" :key="s.id" class="axis-tick">{{ i % axisStep === 0 ? s.start.slice(0, 4) : '' }}</span>
        </span>
      </div>
    </header>

    <ol class="rows">
      <li v-for="(l, i) in list" :key="l.slug" v-reveal="i % 6">
        <router-link :to="`/${formatId}/archetype/${l.slug}`" class="row">
          <span class="name">{{ l.name }} <ColorPips :colors="l.entries[l.entries.length - 1].deck.colors" :size="12" /></span>
          <span class="span">{{ spanOf(l) }}, {{ l.entries.length }} {{ l.entries.length > 1 ? t('seasonsPlural') : t('seasonSingular') }}</span>
          <!-- lifeline: one cell per season of the format, ink by share of top 8s -->
          <span class="life" aria-hidden="true">
            <span
              v-for="c in life(l)"
              :key="c.id"
              class="tick"
              :class="{ on: c.share > 0 }"
              :style="c.share > 0 ? { '--level': 0.25 + 0.75 * Math.min(1, c.share / maxShare) } : undefined"
              :title="c.share > 0 ? `${c.label}: ${c.share} %` : c.label"
            ></span>
          </span>
        </router-link>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.intro {
  /* pinned under the site header while the list scrolls */
  position: sticky;
  top: var(--header-h);
  z-index: 20;
  background: var(--paper) var(--grain);
  padding: var(--space-md) 0 0;
  margin-top: calc(-1 * var(--space-lg));
  border-bottom: 3px solid var(--ink);
}

.axis {
  display: grid;
  grid-template-columns: minmax(12rem, 1.2fr) minmax(9rem, 0.7fr) minmax(0, 2fr);
  gap: var(--space-md);
  margin-top: var(--space-sm);
  padding-bottom: 0.2rem;
}

.axis .axis-life {
  height: auto;
}

.axis-tick {
  flex: 1;
  min-width: 0;
  overflow: visible;
  white-space: nowrap;
  font-family: var(--font-heading);
  font-size: 0.72rem;
  color: var(--muted);
  font-variant-numeric: lining-nums;
}

.lede {
  font-style: italic;
  color: var(--ink-light);
}

.controls {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-sm) var(--space-lg);
  margin-top: var(--space-sm);
}

.sorts {
  display: flex;
  gap: var(--space-md);
}

.sorts button {
  font-family: var(--font-body);
  font-size: 0.95rem;
  background: none;
  border: none;
  padding: 0;
  color: var(--muted);
  cursor: pointer;
}

.sorts button.on {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.single {
  font-style: italic;
  color: var(--muted);
  font-size: 0.92rem;
}

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
  min-width: 200px;
}

.search:focus {
  outline: none;
  border-bottom-width: 2px;
}

.rows {
  list-style: none;
  padding: 0;
}

.row {
  display: grid;
  grid-template-columns: minmax(12rem, 1.2fr) minmax(9rem, 0.7fr) minmax(0, 2fr);
  align-items: center;
  gap: var(--space-md);
  padding: 0.55rem 0;
  border-bottom: 1px solid var(--line-light);
  text-decoration: none;
  color: var(--ink);
  transition: background-color 0.2s var(--ease-out);
}

.row:hover {
  background: var(--paper-dark);
}

.name {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.08rem;
}

.row:hover .name {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.span {
  font-style: italic;
  font-size: 0.88rem;
  color: var(--muted);
}

.life {
  display: flex;
  gap: 2px;
  height: 18px;
}

.tick {
  flex: 1;
  border-bottom: 1px solid var(--line);
}

.tick.on {
  border-bottom: none;
  border-radius: 2px;
  background: color-mix(in srgb, var(--accent) calc(var(--level, 0.3) * 100%), transparent);
}

@media (max-width: 720px) {
  .intro {
    position: static;
    margin-top: calc(-1 * var(--space-md));
  }

  .axis {
    display: none;
  }

  .row {
    grid-template-columns: 1fr;
    gap: 0.2rem;
  }

  .search {
    margin-left: 0;
    width: 100%;
  }
}
</style>
