<script setup lang="ts">
import type { YearFormatEntry, MetaEra } from '../data/types'
import { getFormat } from '../data/formats'
import { getDeckColors } from '../lib/deckColors'
import { locale } from '../lib/i18n'
import ManaSymbols from './ManaSymbols.vue'

const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const monthsFr = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']

function monthName(ym: string): string {
  const m = parseInt(ym.split('-')[1], 10) - 1
  return (locale.value === 'fr' ? monthsFr : monthsEn)[m]
}

defineProps<{
  year: number
  entries: YearFormatEntry[]
  selectedEntry?: YearFormatEntry | null
  focusedEraId?: string | null
}>()

const emit = defineEmits<{
  eraClick: [entry: YearFormatEntry, era: MetaEra]
  yearClick: [entry: YearFormatEntry]
}>()
</script>

<template>
  <div
    class="timeline-year"
    v-for="entry in entries"
    :key="`${entry.year}-${entry.format}`"
    :class="{ 'is-selected': selectedEntry === entry }"
  >
    <a
      href="#"
      class="timeline-year-header"
      @click.prevent="emit('yearClick', entry)"
    >
      <span class="timeline-year-label">{{ year }}</span>
      <span
        class="timeline-year-bar"
        :style="{ backgroundColor: getFormat(entry.format)?.color }"
      ></span>
      <span class="timeline-subtitle">{{ entry.subtitle }}</span>
    </a>
    <div class="timeline-eras">
      <div
        v-for="era in [...entry.eras].reverse()"
        :key="era.id"
        class="timeline-era-item"
        :class="{ 'is-focused': focusedEraId === era.id }"
      >
        <a
          href="#"
          class="timeline-era-link"
          @click.prevent="emit('eraClick', entry, era)"
        >
          <span class="timeline-era-period">{{ monthName(era.start) }}–{{ monthName(era.end) }}</span>
          <span class="timeline-era-title">{{ era.name }}</span>
          <span class="timeline-era-decks">
            <template v-for="(deck, di) in era.dominantDecks" :key="deck">
              <ManaSymbols v-if="getDeckColors(deck)" :colors="getDeckColors(deck)" :size="13" />
              {{ deck }}<span v-if="di < era.dominantDecks.length - 1">,&nbsp;</span>
            </template>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-year {
  margin-bottom: var(--space-xl);
  position: relative;
  padding-left: var(--space-lg);
  border-left: 2px solid var(--line);
}

.timeline-year-header {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  text-decoration: none;
  margin-bottom: var(--space-sm);
  position: relative;
}

.timeline-year-header::before {
  content: '';
  position: absolute;
  left: calc(-1 * var(--space-lg) - 6px);
  top: 0.7em;
  width: 9px;
  height: 9px;
  border: 2px solid var(--ink);
  background: var(--paper);
  border-radius: 50%;
}

.timeline-year-header:hover .timeline-year-label {
  text-decoration: underline;
}

.timeline-year.is-selected .timeline-year-label {
  color: var(--standard);
}

.timeline-era-item.is-focused {
  background: color-mix(in srgb, var(--ink) 6%, transparent);
  border-radius: 3px;
}

.timeline-era-item.is-focused .timeline-era-title {
  color: var(--standard);
}

.timeline-year-label {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1;
}

.timeline-year-bar {
  display: inline-block;
  width: 24px;
  height: 3px;
  flex-shrink: 0;
  position: relative;
  top: -4px;
}

.timeline-subtitle {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.92rem;
  color: var(--muted);
}

.timeline-eras {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.timeline-era-item {
  padding-left: var(--space-sm);
}

.timeline-era-link {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  text-decoration: none;
  padding: 3px 0;
  flex-wrap: wrap;
  cursor: pointer;
  transition: background 0.1s;
  margin: 0 calc(-1 * var(--space-sm));
  padding-left: var(--space-sm);
  padding-right: var(--space-sm);
}

.timeline-era-link:hover {
  background: var(--paper-dark);
}

.timeline-era-link:hover .timeline-era-title {
  text-decoration: underline;
}

.timeline-era-period {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--muted);
  white-space: nowrap;
  min-width: 75px;
}

.timeline-era-title {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--ink);
}

.timeline-era-decks {
  font-size: 0.8rem;
  color: var(--muted);
  font-style: italic;
}

@media (max-width: 640px) {
  .timeline-eras {
    padding-left: var(--space-xs);
  }

  .timeline-era-link {
    flex-direction: column;
    gap: 0;
  }

  .timeline-era-period {
    min-width: unset;
  }
}
</style>
