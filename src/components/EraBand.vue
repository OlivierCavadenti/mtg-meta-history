<script setup lang="ts">
import { computed } from 'vue'
import type { MetaEra, FormatId } from '../data/types'
import { t, locale } from '../lib/i18n'
import RichText from './RichText.vue'
import CardGallery from './CardGallery.vue'
import DeckBadge from './DeckBadge.vue'
import ConfidenceBadge from './ConfidenceBadge.vue'
import SourceList from './SourceList.vue'

const props = defineProps<{
  era: MetaEra
  formatColor?: string
  format?: FormatId
  year?: number
}>()

const allCardNames = computed(() => props.era.keyCards.map((c) => c.name))

function findSlug(deckName: string, format?: FormatId, year?: number): string | undefined {
  if (!format || !year) return undefined
  const base = deckName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')
  return `${base}-${format}-${year}`
}

const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const monthsFr = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']

function formatMonth(ym: string): string {
  const [y, m] = ym.split('-')
  const months = locale.value === 'fr' ? monthsFr : monthsEn
  return `${months[parseInt(m, 10) - 1]} ${y}`
}
</script>

<template>
  <div class="era-band" :style="{ '--era-color': formatColor || 'var(--ink)' }">
    <div class="era-band-datebar">
      <span class="era-band-date-start">{{ formatMonth(era.start) }}</span>
      <span class="era-band-date-sep"></span>
      <span class="era-band-date-end">{{ formatMonth(era.end) }}</span>
    </div>
    <div class="era-band-content">
      <div class="era-band-header">
        <h3 class="era-band-title">{{ era.name }}</h3>
        <ConfidenceBadge :level="era.confidence" />
      </div>
      <p class="era-band-summary"><RichText :text="era.summary" :known-cards="allCardNames" /></p>
      <div class="era-band-decks">
        <DeckBadge
          v-for="d in era.dominantDecks"
          :key="d"
          :name="d"
          :slug="findSlug(d, format, year)"
          :context-year="year"
          :context-format="format"
          variant="dominant"
        />
        <DeckBadge
          v-for="d in era.challengers"
          :key="d"
          :name="d"
          :context-year="year"
          :context-format="format"
          variant="challenger"
        />
      </div>
      <div v-if="era.whyItDominated.length" class="era-section">
        <h4 class="era-section-title">{{ t('era.why_dominated') }}</h4>
        <ul>
          <li v-for="reason in era.whyItDominated" :key="reason"><RichText :text="reason" :known-cards="allCardNames" /></li>
        </ul>
      </div>
      <div v-if="era.whyItEnded" class="era-section">
        <h4 class="era-section-title">{{ t('era.why_ended') }}</h4>
        <p><RichText :text="era.whyItEnded" :known-cards="allCardNames" /></p>
      </div>
      <div v-if="era.keyCards.length" class="era-section">
        <h4 class="era-section-title">{{ t('era.key_cards') }}</h4>
        <CardGallery :cards="era.keyCards" />
      </div>
      <SourceList :sources="era.sources" />
    </div>
  </div>
</template>

<style scoped>
.era-band {
  border: 1px solid var(--line);
  margin-bottom: var(--space-md);
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
}

.era-band-datebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0;
  padding: var(--space-md) var(--space-sm);
  background: color-mix(in srgb, var(--era-color) 8%, var(--paper));
  border-right: 3px solid var(--era-color);
  min-width: 72px;
}

.era-band-date-start,
.era-band-date-end {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: 0.02em;
  white-space: nowrap;
  line-height: 1.3;
}

.era-band-date-sep {
  display: block;
  width: 1px;
  height: 16px;
  background: var(--era-color);
  margin: 2px 0;
}

.era-band-content {
  padding: var(--space-md);
}

.era-band-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--space-sm);
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.era-band-title {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
}

.era-band-summary {
  margin-bottom: var(--space-sm);
  font-size: 0.92rem;
  line-height: 1.55;
}

.era-band-decks {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
  margin-bottom: var(--space-sm);
}

.era-section {
  margin-top: var(--space-sm);
  margin-bottom: var(--space-sm);
}

.era-section-title {
  font-family: var(--font-label);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
  margin-bottom: var(--space-xs);
}

.era-section ul {
  font-size: 0.88rem;
  line-height: 1.5;
}

.era-section p {
  font-size: 0.88rem;
  line-height: 1.5;
}

.key-cards-table {
  font-size: 0.85rem;
}

.key-cards-table td:first-child {
  white-space: nowrap;
}

@media (max-width: 480px) {
  .era-band {
    grid-template-columns: 1fr;
  }

  .era-band-datebar {
    flex-direction: row;
    border-right: none;
    border-bottom: 3px solid var(--era-color);
    padding: var(--space-xs) var(--space-md);
    gap: var(--space-sm);
    min-width: unset;
  }

  .era-band-date-sep {
    width: 20px;
    height: 1px;
    margin: 0;
  }
}
</style>
