<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { CardInfo, CardLine, Deck, FormatId, ListsFile, ResultsFile } from '../data/types'
import { loadLists, loadResults } from '../data/load'
import { formatDate, formatMonth, t } from '../lib/i18n'
import DeckModal, { type ModalList } from './DeckModal.vue'

const props = defineProps<{ deck: Deck; format: FormatId; cards: Record<string, CardInfo> }>()

const PAGE = 25
const TOP8 = new Set(['1', '2', '3', '4', '3-4', '5', '6', '7', '8', '5-8'])

const file = ref<ResultsFile | null>(null)
const lists = ref<ListsFile | null>(null)
watch(
  () => [props.format, props.deck.season] as const,
  async ([f, s]) => {
    file.value = null
    lists.value = null
    const [loaded, loadedLists] = await Promise.all([loadResults(f, s), loadLists(f, s)])
    if (props.format !== f || props.deck.season !== s) return
    file.value = loaded ?? null
    lists.value = loadedLists ?? null
  },
  { immediate: true },
)

type Row = { id: string; date: string; rank: string; player: string; event: string; url: string; top8: boolean; hasList: boolean }

const rows = computed<Row[]>(() => {
  const f = file.value
  if (!f) return []
  return (f.decks[props.deck.id] ?? []).map(([key, id, rank, player, source]) => {
    const [event, date] = f.events[key] ?? ['', '']
    const url = source ?? `https://www.mtgtop8.com/event?e=${key.split('@')[0]}&d=${id}&f=${f.code}`
    return { id: String(id), date, rank, player, event, url, top8: TOP8.has(rank), hasList: !!lists.value?.lists[String(id)] }
  })
})
const sampleId = computed(() => String(file.value?.rep[props.deck.id] ?? ''))

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

// modal: the clicked list, and the previous / next list in the table's order
const openRow = ref<Row | null>(null)
const withLists = computed(() => filtered.value.filter((r) => r.hasList))
const openIndex = computed(() => (openRow.value ? withLists.value.findIndex((r) => r.id === openRow.value!.id) : -1))

function decode(flat: number[], names: string[]): CardLine[] {
  const out: CardLine[] = []
  for (let i = 0; i < flat.length; i += 2) out.push([flat[i], names[flat[i + 1]]])
  return out
}

const modalList = computed<ModalList | null>(() => {
  const r = openRow.value
  const l = lists.value
  const pair = r && l ? l.lists[r.id] : undefined
  if (!r || !l || !pair) return null
  return {
    title: props.deck.name,
    main: decode(pair[0], l.names),
    side: decode(pair[1], l.names),
    player: r.player,
    event: r.event,
    rank: r.rank,
    date: r.date,
    url: r.url,
  }
})
/** cards of these lists that no sample list has come with the lists file */
const modalCards = computed(() => (lists.value ? { ...props.cards, ...lists.value.info } : props.cards))

function open(r: Row) {
  if (r.hasList) openRow.value = r
  else window.open(r.url, '_blank', 'noopener')
}

function step(delta: number) {
  const next = withLists.value[openIndex.value + delta]
  if (next) openRow.value = next
}
</script>

<template>
  <section class="results">
    <template v-if="rows.length">
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
          <tr v-for="r in visible" :key="r.id" class="row" :class="{ rep: r.id === sampleId }" @click="open(r)">
            <td class="date">{{ formatDate(r.date) }}</td>
            <td class="num">{{ rankLabel(r.rank) }}</td>
            <td>{{ r.player }}</td>
            <td>
              <button v-if="r.hasList" type="button" class="event" @click.stop="open(r)">{{ r.event }}</button>
              <a v-else :href="r.url" target="_blank" rel="noopener noreferrer" class="event" @click.stop>{{ r.event }}</a>
              <span v-if="r.id === sampleId" class="mark">, {{ t('isSample') }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-if="!expanded && filtered.length > PAGE" class="more">
        <button type="button" class="link" @click="expanded = true">{{ t('showAll') }} ({{ filtered.length }})</button>
      </p>
    </template>
    <p v-else class="caption">{{ t('loading') }}</p>
    <DeckModal
      :list="modalList"
      :cards="modalCards"
      :season="deck.season"
      :has-prev="openIndex > 0"
      :has-next="openIndex >= 0 && openIndex < withLists.length - 1"
      @close="openRow = null"
      @prev="step(-1)"
      @next="step(1)"
    />
  </section>
</template>

<style scoped>
/* same frame as the sample decklist, under the tabs */
.results {
  border-top: 3px solid var(--ink);
  padding-top: var(--space-md);
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
  transition: background-color 0.2s var(--ease-out);
}

.row {
  cursor: pointer;
}

.row:hover td {
  background: var(--paper-dark);
}

.date {
  white-space: nowrap;
  color: var(--ink-light);
}

.num {
  white-space: nowrap;
  font-variant-numeric: lining-nums tabular-nums;
}

.event {
  font: inherit;
  padding: 0;
  border: none;
  background: none;
  color: var(--ink);
  text-align: left;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: var(--line);
  text-underline-offset: 3px;
}

.row:hover .event {
  text-decoration-color: currentColor;
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

@media (prefers-reduced-motion: reduce) {
  td {
    transition: none;
  }
}
</style>
