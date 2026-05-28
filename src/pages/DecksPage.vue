<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ArchetypeType, FormatId, RepresentativeDeck } from '../data/types'
import { ARCHETYPE_LABELS, FORMAT_LABELS } from '../data/types'
import { getAllEntries } from '../data/years'
import { getDeckColors } from '../lib/deckColors'
import { scryfallImageUrl } from '../lib/scryfall'
import ManaSymbols from './../components/ManaSymbols.vue'
import { t, locale } from '../lib/i18n'

type DeckRow = RepresentativeDeck & {
  year: number
  format: FormatId
  colors: string
}

const allDecks = computed<DeckRow[]>(() => {
  const rows: DeckRow[] = []
  for (const entry of getAllEntries()) {
    for (const deck of entry.representativeDecks) {
      rows.push({
        ...deck,
        year: entry.year,
        format: entry.format,
        colors: getDeckColors(deck.name),
      })
    }
  }
  return rows
})

const search = ref('')
const filterArchetype = ref<ArchetypeType | ''>('')
const filterFormat = ref<FormatId | ''>('')
const filterYearMin = ref<number | ''>('')
const filterYearMax = ref<number | ''>('')
const filterColor = ref<string>('')

const availableYears = computed(() => {
  const ys = [...new Set(allDecks.value.map((d) => d.year))].sort((a, b) => a - b)
  return ys
})

const availableFormats = computed(() => {
  return [...new Set(allDecks.value.map((d) => d.format))]
})

const archetypeOptions: ArchetypeType[] = ['aggro', 'control', 'combo', 'midrange', 'tempo', 'ramp', 'prison', 'hybrid']
const colorOptions = ['W', 'U', 'B', 'R', 'G', 'C']

const filtered = computed<DeckRow[]>(() => {
  return allDecks.value.filter((d) => {
    if (search.value && !d.name.toLowerCase().includes(search.value.toLowerCase())) return false
    if (filterArchetype.value && d.archetype !== filterArchetype.value) return false
    if (filterFormat.value && d.format !== filterFormat.value) return false
    if (filterYearMin.value !== '' && d.year < Number(filterYearMin.value)) return false
    if (filterYearMax.value !== '' && d.year > Number(filterYearMax.value)) return false
    if (filterColor.value && !d.colors.includes(filterColor.value)) return false
    return true
  }).sort((a, b) => b.year - a.year || a.name.localeCompare(b.name))
})

function resetFilters() {
  search.value = ''
  filterArchetype.value = ''
  filterFormat.value = ''
  filterYearMin.value = ''
  filterYearMax.value = ''
  filterColor.value = ''
}
</script>

<template>
  <div class="decks-page">
    <header class="decks-header">
      <h1 class="decks-title">{{ locale === 'fr' ? 'Decks' : 'Decks' }}</h1>
      <p class="decks-count">{{ filtered.length }} / {{ allDecks.length }}</p>
    </header>

    <div class="decks-filters">
      <input
        v-model="search"
        type="search"
        :placeholder="locale === 'fr' ? 'Rechercher un deck...' : 'Search deck...'"
        class="decks-search"
      />

      <select v-model="filterFormat" class="decks-select">
        <option value="">{{ locale === 'fr' ? 'Tous les formats' : 'All formats' }}</option>
        <option v-for="f in availableFormats" :key="f" :value="f">{{ FORMAT_LABELS[f] }}</option>
      </select>

      <select v-model="filterArchetype" class="decks-select">
        <option value="">{{ locale === 'fr' ? 'Tous les archétypes' : 'All archetypes' }}</option>
        <option v-for="a in archetypeOptions" :key="a" :value="a">{{ ARCHETYPE_LABELS[a] }}</option>
      </select>

      <select v-model.number="filterYearMin" class="decks-select decks-year">
        <option value="">{{ locale === 'fr' ? 'Année min' : 'Year min' }}</option>
        <option v-for="y in availableYears" :key="y" :value="y">{{ y }}</option>
      </select>

      <select v-model.number="filterYearMax" class="decks-select decks-year">
        <option value="">{{ locale === 'fr' ? 'Année max' : 'Year max' }}</option>
        <option v-for="y in availableYears" :key="y" :value="y">{{ y }}</option>
      </select>

      <div class="decks-colors">
        <button
          v-for="c in colorOptions"
          :key="c"
          class="decks-color-btn"
          :class="{ active: filterColor === c }"
          @click="filterColor = filterColor === c ? '' : c"
          :title="c"
        >
          <ManaSymbols :colors="c" :size="16" />
        </button>
      </div>

      <button class="decks-reset" @click="resetFilters">
        {{ locale === 'fr' ? 'Reset' : 'Reset' }}
      </button>
    </div>

    <div class="decks-grid">
      <router-link
        v-for="deck in filtered"
        :key="`${deck.slug}-${deck.year}`"
        :to="`/decks/${deck.slug}`"
        class="deck-card"
      >
        <div class="deck-card-images">
          <img
            v-for="card in deck.keyCards.slice(0, 3)"
            :key="card"
            :src="scryfallImageUrl(card, 'normal')"
            :alt="card"
            class="deck-card-img"
            loading="lazy"
          />
        </div>
        <div class="deck-card-body">
          <div class="deck-card-title-row">
            <ManaSymbols v-if="deck.colors" :colors="deck.colors" :size="14" />
            <h3 class="deck-card-name">{{ deck.name }}</h3>
          </div>
          <div class="deck-card-meta">
            <span class="deck-card-archetype">{{ ARCHETYPE_LABELS[deck.archetype] }}</span>
            <span class="deck-card-format">{{ FORMAT_LABELS[deck.format] }} {{ deck.year }}</span>
          </div>
          <p class="deck-card-summary">{{ deck.summary }}</p>
        </div>
      </router-link>

      <p v-if="filtered.length === 0" class="decks-empty">
        {{ t('no_results') }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.decks-page {
  padding-bottom: var(--space-xl);
}

.decks-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 2px solid var(--ink);
}

.decks-title {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  margin: 0;
}

.decks-count {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--muted);
}

.decks-filters {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
  margin-bottom: var(--space-lg);
  align-items: center;
}

.decks-search {
  flex: 1;
  min-width: 200px;
  padding: 6px 10px;
  font-family: var(--font-body);
  font-size: 0.88rem;
  border: 1px solid var(--line);
  background: var(--paper);
  color: var(--ink);
}

.decks-search:focus {
  outline: none;
  border-color: var(--ink);
}

.decks-select {
  padding: 6px 10px;
  font-family: var(--font-label);
  font-size: 0.8rem;
  border: 1px solid var(--line);
  background: var(--paper);
  color: var(--ink-light);
  cursor: pointer;
}

.decks-year {
  min-width: 90px;
}

.decks-colors {
  display: flex;
  gap: 2px;
}

.decks-color-btn {
  padding: 4px 6px;
  border: 1px solid var(--line);
  background: var(--paper);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}

.decks-color-btn:hover {
  border-color: var(--ink);
}

.decks-color-btn.active {
  border-color: var(--ink);
  background: var(--paper-dark);
}

.decks-reset {
  padding: 6px 12px;
  font-family: var(--font-label);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border: 1px solid var(--line);
  background: none;
  color: var(--muted);
  cursor: pointer;
}

.decks-reset:hover {
  border-color: var(--ink);
  color: var(--ink);
}

.decks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-md);
}

.deck-card {
  border: 1px solid var(--line);
  text-decoration: none;
  color: var(--ink);
  background: var(--paper);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.deck-card:hover {
  border-color: var(--ink);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.deck-card-images {
  display: flex;
  gap: 0;
  background: var(--paper-dark);
  height: 130px;
  overflow: hidden;
}

.deck-card-img {
  width: 33.33%;
  height: 100%;
  object-fit: cover;
  object-position: center 18%;
}

.deck-card-body {
  padding: var(--space-sm) var(--space-md) var(--space-md);
}

.deck-card-title-row {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: 3px;
}

.deck-card-name {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
}

.deck-card-meta {
  display: flex;
  gap: var(--space-sm);
  font-family: var(--font-label);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--muted);
  margin-bottom: var(--space-xs);
}

.deck-card-archetype {
  padding: 1px 6px;
  border: 1px solid var(--line);
}

.deck-card-format {
  color: var(--faint);
}

.deck-card-summary {
  font-size: 0.82rem;
  line-height: 1.45;
  color: var(--ink-light);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.decks-empty {
  grid-column: 1 / -1;
  text-align: center;
  padding: var(--space-xl);
  color: var(--muted);
  font-style: italic;
}
</style>
