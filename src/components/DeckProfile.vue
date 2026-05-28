<script setup lang="ts">
import type { RepresentativeDeck, FormatId } from '../data/types'
import { FORMAT_LABELS, ARCHETYPE_LABELS } from '../data/types'
import { t } from '../lib/i18n'
import CardGallery from './CardGallery.vue'

defineProps<{
  deck: RepresentativeDeck
  format: FormatId
  year: number
}>()
</script>

<template>
  <div class="deck-profile">
    <div class="deck-profile-header">
      <h3 class="deck-profile-name">{{ deck.name }}</h3>
      <div class="deck-profile-meta">
        <span class="deck-profile-archetype">{{ ARCHETYPE_LABELS[deck.archetype] }}</span>
        <span class="deck-profile-period">{{ deck.period }}</span>
        <span class="deck-profile-format">{{ FORMAT_LABELS[format] }} {{ year }}</span>
      </div>
    </div>
    <p class="deck-profile-summary">{{ deck.summary }}</p>
    <div class="deck-profile-cards">
      <h4 class="deck-profile-section-title">{{ t('deck.key_cards') }}</h4>
      <CardGallery :cards="deck.keyCards" />
    </div>
    <div v-if="deck.source" class="deck-profile-source">
      <a :href="deck.source.url" target="_blank" rel="noopener noreferrer">
        {{ deck.source.title || t('deck.view_decklists') }}
      </a>
      <span v-if="deck.source.publisher"> &mdash; {{ deck.source.publisher }}</span>
    </div>
  </div>
</template>

<style scoped>
.deck-profile {
  border: 1px solid var(--line);
  padding: var(--space-md);
}

.deck-profile-header {
  margin-bottom: var(--space-sm);
}

.deck-profile-name {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  margin-bottom: 2px;
}

.deck-profile-meta {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.deck-profile-archetype,
.deck-profile-period,
.deck-profile-format {
  font-family: var(--font-label);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--muted);
}

.deck-profile-archetype {
  border: 1px solid var(--line);
  padding: 1px 6px;
}

.deck-profile-summary {
  font-size: 0.88rem;
  line-height: 1.5;
  margin-bottom: var(--space-sm);
}

.deck-profile-section-title {
  font-family: var(--font-label);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
  margin-bottom: var(--space-xs);
}

.deck-card-tag {
  font-style: italic;
  font-size: 0.88rem;
}

.deck-profile-source {
  margin-top: var(--space-sm);
  font-size: 0.8rem;
  color: var(--muted);
}

.deck-profile-source a {
  color: var(--ink-light);
}
</style>
