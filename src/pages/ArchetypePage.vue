<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useFormat } from '../lib/useFormat'
import { buildLineages, cardTracks, coreCards } from '../lib/lineage'
import { predecessorsOf, successorOf } from '../data/lineageLinks'
import { cardImage, scryfallSearch } from '../lib/cards'
import { hidePreview, movePreview, showPreview } from '../lib/preview'
import { formatNumber, seasonEndYear, seasonYears, t } from '../lib/i18n'
import ColorPips from '../components/ColorPips.vue'
import ManaCost from '../components/ManaCost.vue'
import SoonState from '../components/SoonState.vue'

const route = useRoute()
const { formatId, format, data, loading } = useFormat()

const lineages = computed(() => (data.value ? buildLineages(data.value) : undefined))
const lineage = computed(() => lineages.value?.get(String(route.params.slug)))
/** the archetype it turned into, and the ones it came from (src/data/lineageLinks.ts) */
const successor = computed(() => {
  const s = lineage.value && successorOf(formatId.value, lineage.value.slug)
  return s ? lineages.value?.get(s) : undefined
})
const predecessors = computed(() =>
  lineage.value
    ? predecessorsOf(formatId.value, lineage.value.slug).map((s) => lineages.value?.get(s)).filter((l) => !!l)
    : [],
)
const entries = computed(() => lineage.value?.entries ?? [])
const latest = computed(() => entries.value[entries.value.length - 1])
const tracks = computed(() => (lineage.value ? cardTracks(lineage.value) : []))
const core = computed(() => coreCards(tracks.value, entries.value.length))
const cards = computed(() => data.value?.cards ?? {})

const span = computed(() => {
  const e = entries.value
  if (!e.length) return ''
  const a = e[0].season.start.slice(0, 4)
  const last = e[e.length - 1].season
  const endYear = String(seasonEndYear(last.start, last.end))
  return a === endYear ? a : `${a}–${endYear}`
})

const maxShare = computed(() => Math.max(1, ...entries.value.map((e) => e.deck.stats.share)))

/* evolution table: cards played in at least two seasons first; the rest behind a toggle */
const showAll = ref(false)
const recurring = computed(() => tracks.value.filter((tr) => tr.seasons >= 2))
const visibleTracks = computed(() =>
  showAll.value || recurring.value.length === 0 ? tracks.value : recurring.value,
)
const hidden = computed(() => tracks.value.length - visibleTracks.value.length)

/** the image of a card as printed in the latest season that plays it */
function imgFor(name: string, version: 'normal' | 'large' = 'normal'): string {
  const tr = tracks.value.find((x) => x.name === name)
  let season = latest.value?.season.id
  if (tr) {
    for (let i = tr.counts.length - 1; i >= 0; i--) {
      if (tr.counts[i] > 0) {
        season = entries.value[i].season.id
        break
      }
    }
  }
  return cardImage(cards.value[name], name, version, season)
}

const shortYear = (start: string, end?: string) => seasonYears(start, end)

watchEffect(() => {
  if (lineage.value) document.title = `${lineage.value.name} · ${span.value} · MTG Meta History`
})
</script>

<template>
  <SoonState v-if="format && !format.ready" :label="format.label" />
  <div v-else-if="loading || !data" class="state">{{ t('loading') }}</div>
  <div v-else-if="!lineage || !latest" class="state">{{ t('notFound') }}</div>
  <article v-else class="archetype">
    <nav class="crumbs">
      <router-link :to="`/${formatId}`">{{ format?.label }}</router-link>,
      <router-link :to="`/${formatId}/archetypes`">{{ t('archetypes') }}</router-link>
    </nav>

    <header class="head">
      <h1>{{ lineage.name }} <ColorPips :colors="latest.deck.colors" :size="16" /></h1>
      <p class="meta">
        {{ entries.length }} {{ entries.length > 1 ? t('seasonsPlural') : t('seasonSingular') }}, {{ span }}.
        {{ lineage.top8 }} {{ t('top8') }}, {{ lineage.wins }} {{ lineage.wins > 1 ? t('wins') : t('win') }}.
      </p>
      <p v-if="successor || predecessors.length" class="links">
        <router-link v-for="p in predecessors" :key="p!.slug" :to="`/${formatId}/archetype/${p!.slug}`">← {{ t('cameFrom') }} {{ p!.name }}</router-link>
        <router-link v-if="successor" :to="`/${formatId}/archetype/${successor.slug}`">{{ t('becomes') }} {{ successor.name }} →</router-link>
      </p>
    </header>

    <!-- one column per season the archetype performed in -->
    <section class="timeline" :aria-label="t('timeline')">
      <router-link
        v-for="(e, i) in entries"
        :key="e.deck.id"
        v-reveal="i % 8"
        :to="`/${formatId}/deck/${e.deck.id}`"
        class="step"
      >
        <span class="step-year">{{ shortYear(e.season.start, e.season.end) }}</span>
        <span class="step-art">
          <img v-fade :src="cardImage(cards[e.deck.cover], e.deck.cover, 'art_crop', e.season.id)" :alt="e.deck.cover" loading="lazy" />
        </span>
        <span class="step-bar" aria-hidden="true">
          <span class="step-fill" :style="{ height: (e.deck.stats.share / maxShare) * 100 + '%' }"></span>
        </span>
        <span class="step-stats">
          {{ formatNumber(e.deck.stats.share) }} %<br />
          <span class="step-sub">{{ e.deck.stats.top8 }} {{ t('top8') }}</span>
        </span>
        <span v-if="e.deck.name !== lineage.name" class="step-name">{{ e.deck.name }}</span>
      </router-link>
    </section>
    <p class="caption">{{ t('timelineCaption') }}</p>

    <section v-if="core.length" class="core">
      <h2>{{ t('core') }}</h2>
      <p class="caption">{{ t('coreCaption') }}</p>
      <div class="core-grid">
        <a
          v-for="c in core"
          :key="c.name"
          v-tilt
          class="core-card"
          :href="scryfallSearch(c.name)"
          target="_blank"
          rel="noopener noreferrer"
          :title="c.name"
        >
          <img v-fade :src="imgFor(c.name)" :alt="c.name" loading="lazy" />
        </a>
      </div>
    </section>

    <section class="evolution">
      <h2>{{ t('evolution') }}</h2>
      <p class="caption">{{ t('evolutionCaption') }}</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col" class="card-col">{{ t('cardWord') }}</th>
              <th v-for="e in entries" :key="e.deck.id" scope="col" class="year-col">
                <router-link :to="`/${formatId}/deck/${e.deck.id}`">{{ shortYear(e.season.start, e.season.end) }}</router-link>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="tr in visibleTracks"
              :key="tr.name"
              @mouseenter="showPreview(imgFor(tr.name, 'large'), $event)"
              @mousemove="movePreview"
              @mouseleave="hidePreview"
            >
              <th scope="row" class="card-col">
                <span class="card-name">{{ tr.name }}</span>
                <ManaCost v-if="cards[tr.name] && cards[tr.name].t !== 'land'" :cost="cards[tr.name].m" />
              </th>
              <td
                v-for="(n, i) in tr.counts"
                :key="i"
                class="cell"
                :class="{ empty: n === 0, light: n === 1 }"
                :style="n ? { '--level': Math.min(n, 4) / 4 } : undefined"
              >{{ n || '' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button v-if="hidden > 0 || showAll" type="button" class="more" @click="showAll = !showAll">
        {{ showAll ? t('showRecurring') : `${t('showAllCards')} (+${hidden})` }}
      </button>
    </section>
  </article>
</template>

<style scoped>
.crumbs {
  font-style: italic;
  color: var(--muted);
  margin-bottom: var(--space-md);
}

.crumbs a {
  color: var(--muted);
}

h1 {
  font-size: clamp(2.6rem, 6vw, 4.4rem);
  line-height: 0.95;
  letter-spacing: -0.035em;
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.links {
  margin-top: var(--space-sm);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
}

.links a {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--accent);
  text-underline-offset: 4px;
}

.meta {
  margin-top: var(--space-sm);
  font-style: italic;
  color: var(--muted);
  font-size: 1.05rem;
}

h2 {
  font-size: 1.35rem;
  border-top: 1px solid var(--ink);
  padding-top: var(--space-xs);
}

.caption {
  font-style: italic;
  font-size: 0.88rem;
  color: var(--muted);
  margin: 0.2rem 0 var(--space-md);
}

/* ---- timeline ---- */
.timeline {
  display: flex;
  gap: var(--space-sm);
  overflow-x: auto;
  padding: var(--space-lg) 0 var(--space-xs);
  margin-top: var(--space-md);
  border-top: 3px solid var(--ink);
  scrollbar-width: thin;
}

.step {
  flex: 0 0 132px;
  display: grid;
  grid-template-rows: auto auto 64px auto auto;
  gap: 0.3rem;
  text-decoration: none;
  color: var(--ink);
}

.step-year {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.05rem;
  font-variant-numeric: lining-nums;
}

.step-art {
  display: block;
  aspect-ratio: 626 / 457;
  padding: 2px;
  border: 1px solid var(--ink);
  background: var(--paper);
  overflow: hidden;
  transition: border-color 0.25s var(--ease-out);
}

.step-art img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.8s var(--ease-out), opacity 0.45s var(--ease-out);
}

.step:hover .step-art {
  border-color: var(--accent);
}

.step:hover .step-art img {
  transform: scale(1.05);
}

/* share of the season's top 8s, on a scale common to the whole lineage */
.step-bar {
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid var(--ink);
}

.step-fill {
  display: block;
  width: 100%;
  min-height: 2px;
  background: var(--accent);
  opacity: 0.8;
  border-radius: 2px 2px 0 0;
}

.step-stats {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1.15;
  font-variant-numeric: lining-nums;
}

.step-sub {
  font-family: var(--font-body);
  font-weight: 400;
  font-style: italic;
  font-size: 0.8rem;
  color: var(--muted);
}

.step-name {
  font-style: italic;
  font-size: 0.8rem;
  color: var(--ink-light);
}

/* ---- core ---- */
.core {
  margin-top: var(--space-xl);
}

.core-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: var(--space-sm);
}

.core-card {
  display: block;
  aspect-ratio: 488 / 680;
  border-radius: 4.75% / 3.5%;
  overflow: hidden;
  background: var(--paper-deep);
  box-shadow: var(--shadow-card);
}

.core-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ---- evolution table ---- */
.evolution {
  margin-top: var(--space-xl);
}

.table-wrap {
  overflow-x: auto;
  border-top: 2px solid var(--ink);
}

table {
  width: auto;
  min-width: 100%;
  font-size: 0.85rem;
  font-variant-numeric: tabular-nums lining-nums;
}

th,
td {
  border-bottom: 1px solid var(--line-light);
  padding: 0;
}

thead th {
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: none;
  color: var(--ink-light);
  padding: 0.35rem 0.3rem;
  white-space: nowrap;
}

.year-col a {
  color: inherit;
  text-decoration: none;
}

.year-col a:hover {
  text-decoration: underline;
}

/* the site's base table style sets th in small caps: not here */
th {
  text-transform: none;
  letter-spacing: 0;
  color: var(--ink);
}

.card-col {
  position: sticky;
  left: 0;
  z-index: 1;
  background: var(--paper);
  text-align: left;
  min-width: 15rem;
  padding: 0.25rem var(--space-sm) 0.25rem 0;
  font-weight: 400;
}

tbody .card-col {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
}

.card-name {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cell {
  min-width: 2.6rem;
  text-align: center;
  font-family: var(--font-heading);
  font-weight: 700;
  /* sequential, one hue: more copies, more ink */
  background: color-mix(in srgb, var(--ink) calc(var(--level, 0) * 72%), transparent);
  color: var(--paper);
  border-left: 2px solid var(--paper);
}

.cell.light {
  color: var(--ink);
}

.cell.empty {
  background: transparent;
}

tbody tr:hover .card-col,
tbody tr:hover .cell.empty {
  background: var(--paper-dark);
}

.more {
  margin-top: var(--space-sm);
  font-family: var(--font-body);
  font-size: 0.95rem;
  background: none;
  border: none;
  padding: 0;
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
}

@media (max-width: 640px) {
  .card-col {
    min-width: 10rem;
  }

  .step {
    flex-basis: 108px;
  }
}
</style>
