<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { Deck, FormatId, ResultsFile } from '../data/types'
import { loadResults } from '../data/load'
import { formatDate, formatMonth, t } from '../lib/i18n'

const props = defineProps<{ deck: Deck; format: FormatId }>()

const PAGE = 25
const TOP8 = new Set(['1', '2', '3', '4', '3-4', '5', '6', '7', '8', '5-8'])

const file = ref<ResultsFile | null>(null)
watch(
  () => [props.format, props.deck.season] as const,
  async ([f, s]) => {
    file.value = null
    const loaded = (await loadResults(f, s)) ?? null
    if (props.format === f && props.deck.season === s) file.value = loaded
  },
  { immediate: true },
)

type Row = { date: string; rank: string; player: string; event: string; url: string; top8: boolean }

const rows = computed<Row[]>(() => {
  const f = file.value
  if (!f) return []
  return (f.decks[props.deck.id] ?? []).map(([key, deckRef, rank, player]) => {
    const [event, date] = f.events[key] ?? ['', '']
    const e = key.split('@')[0]
    const url = typeof deckRef === 'number' ? `https://www.mtgtop8.com/event?e=${e}&d=${deckRef}&f=${f.code}` : deckRef
    return { date, rank, player, event, url, top8: TOP8.has(rank) }
  })
})

const newestFirst = ref(false)
const top8Only = ref(false)
const expanded = ref(false)
watch(
  () => props.deck.id,
  () => (expanded.value = false),
)

const filtered = computed(() => {
  const list = top8Only.value ? rows.value.filter((r) => r.top8) : rows.value
  return newestFirst.value ? [...list].reverse() : list
})
const visible = computed(() => (expanded.value ? filtered.value : filtered.value.slice(0, PAGE)))
const top8Count = computed(() => rows.value.filter((r) => r.top8).length)

/** "1" -> "#1", "5-8" -> "#5–8"; ranks that are not finishes (leagues, "Other") stay blank */
const rankLabel = (r: string) => (/^\d/.test(r) ? `#${r.replace('-', '–')}` : '')
</script>

<template>
  <section v-if="rows.length > 1" class="results">
    <h2>{{ t('resultsTitle') }}</h2>
    <p class="caption">
      {{ rows.length }} {{ t('resultsCaptionA') }} ({{ formatMonth(rows[0].date) }} – {{ formatMonth(rows[rows.length - 1].date) }}),
      {{ t('resultsCaptionB') }} {{ top8Count }} {{ t('top8') }}. {{ t('resultsCaptionC') }}
    </p>
    <div class="controls">
      <button type="button" class="link" :class="{ on: !newestFirst }" @click="newestFirst = false">{{ t('oldestFirst') }}</button>
      <button type="button" class="link" :class="{ on: newestFirst }" @click="newestFirst = true">{{ t('newestFirst') }}</button>
      <span class="sep" aria-hidden="true">·</span>
      <button type="button" class="link" :class="{ on: !top8Only }" @click="top8Only = false">{{ t('everyFinish') }}</button>
      <button type="button" class="link" :class="{ on: top8Only }" @click="top8Only = true">{{ t('top8Only') }}</button>
    </div>
    <table>
      <thead>
        <tr>
          <th scope="col">{{ t('colDate') }}</th>
          <th scope="col" class="num">{{ t('colRank') }}</th>
          <th scope="col">{{ t('colPlayer') }}</th>
          <th scope="col">{{ t('colEvent') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in visible" :key="r.url + i" :class="{ rep: r.url === deck.list.url }">
          <td class="date">{{ formatDate(r.date) }}</td>
          <td class="num">{{ rankLabel(r.rank) }}</td>
          <td>{{ r.player }}</td>
          <td>
            <a :href="r.url" target="_blank" rel="noopener noreferrer">{{ r.event }}</a>
            <span v-if="r.url === deck.list.url" class="mark">, {{ t('shownAbove') }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="!expanded && filtered.length > PAGE" class="more">
      <button type="button" class="link" @click="expanded = true">{{ t('showAll') }} ({{ filtered.length }})</button>
    </p>
  </section>
</template>

<style scoped>
.results {
  margin-top: var(--space-xl);
}

h2 {
  font-size: 1.35rem;
  border-top: 1px solid var(--ink);
  padding-top: var(--space-xs);
  margin-bottom: var(--space-sm);
}

.caption {
  font-style: italic;
  color: var(--muted);
  max-width: var(--measure);
}

.controls {
  margin: var(--space-sm) 0 var(--space-md);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  align-items: baseline;
}

.link {
  font-family: var(--font-body);
  font-size: 0.95rem;
  padding: 0;
  border: none;
  background: none;
  color: var(--muted);
  cursor: pointer;
}

.link:hover {
  color: var(--ink);
}

.link.on {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.sep {
  color: var(--faint);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.98rem;
}

/* sentence-case italic captions rather than the base uppercase labels */
th {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.9rem;
  font-weight: 400;
  text-transform: none;
  letter-spacing: normal;
  color: var(--muted);
  padding: 0 var(--space-sm) var(--space-xs) 0;
  border-bottom: 1px solid var(--ink);
}

td {
  padding: 0.4rem var(--space-sm) 0.4rem 0;
  border-bottom: 1px solid var(--line-light);
  vertical-align: baseline;
}

.date {
  white-space: nowrap;
  color: var(--ink-light);
}

.num {
  white-space: nowrap;
  font-variant-numeric: lining-nums tabular-nums;
}

td a {
  color: var(--ink);
  text-underline-offset: 3px;
}

.rep td {
  background: var(--paper-deep);
}

.mark {
  font-style: italic;
  color: var(--muted);
}

.more {
  margin-top: var(--space-sm);
}

@media (max-width: 640px) {
  table {
    font-size: 0.9rem;
  }

  th:nth-child(3),
  td:nth-child(3) {
    display: none;
  }
}
</style>
