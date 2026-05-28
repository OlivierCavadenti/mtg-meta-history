<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { FORMAT_LABELS, ARCHETYPE_LABELS } from '../data/types'
import { t } from '../lib/i18n'
import CardGallery from '../components/CardGallery.vue'
import DecklistView from '../components/DecklistView.vue'
import { findDeckBySlug } from '../data/years'
import { getFormat } from '../data/formats'

const route = useRoute()

const slug = computed(() => route.params.slug as string)
const result = computed(() => findDeckBySlug(slug.value))
const deck = computed(() => result.value?.deck)
const entry = computed(() => result.value?.entry)
const formatInfo = computed(() => entry.value ? getFormat(entry.value.format) : undefined)
</script>

<template>
  <div v-if="deck && entry">
    <header class="page-header">
      <h1>{{ deck.name }}</h1>
      <p class="subtitle">
        {{ ARCHETYPE_LABELS[deck.archetype] }} &mdash;
        {{ FORMAT_LABELS[entry.format] }} {{ entry.year }}
      </p>
    </header>

    <section class="section">
      <div class="deck-meta-grid">
        <div class="deck-meta-item">
          <span class="deck-meta-label">{{ t('deck.format') }}</span>
          <span class="deck-meta-value format-tag" :style="{ color: formatInfo?.color }">
            {{ FORMAT_LABELS[entry.format] }}
          </span>
        </div>
        <div class="deck-meta-item">
          <span class="deck-meta-label">{{ t('deck.year') }}</span>
          <span class="deck-meta-value">{{ entry.year }}</span>
        </div>
        <div class="deck-meta-item">
          <span class="deck-meta-label">{{ t('deck.archetype') }}</span>
          <span class="deck-meta-value">{{ ARCHETYPE_LABELS[deck.archetype] }}</span>
        </div>
        <div class="deck-meta-item">
          <span class="deck-meta-label">{{ t('deck.period') }}</span>
          <span class="deck-meta-value">{{ deck.period }}</span>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">{{ t('deck.summary') }}</h2>
      <p class="deck-summary">{{ deck.summary }}</p>
    </section>

    <section class="section">
      <h2 class="section-title">{{ t('deck.key_cards') }}</h2>
      <CardGallery :cards="deck.keyCards" />
    </section>

    <section v-if="deck.decklist" class="section">
      <h2 class="section-title">{{ t('deck.decklists') }}</h2>
      <DecklistView :decklist="deck.decklist" />
    </section>

    <section v-else-if="deck.source" class="section">
      <h2 class="section-title">{{ t('deck.decklists') }}</h2>
      <p>
        <a :href="deck.source.url" target="_blank" rel="noopener noreferrer">
          {{ deck.source.title || t('deck.view_decklists') }}
        </a>
        <span v-if="deck.source.publisher" class="source-pub"> &mdash; {{ deck.source.publisher }}</span>
      </p>
    </section>

    <nav class="page-nav">
      <router-link :to="`/year/${entry.year}/${entry.format}`">
        &larr; {{ FORMAT_LABELS[entry.format] }} {{ entry.year }}
      </router-link>
      <router-link to="/timeline">{{ t('nav.timeline') }}</router-link>
    </nav>
  </div>
  <div v-else>
    <header class="page-header">
      <h1>{{ t('deck.not_found') }}</h1>
      <p class="subtitle">{{ t('deck.no_match') }} "{{ slug }}" {{ t('deck.in_archive') }}.</p>
    </header>
    <p><router-link to="/timeline">{{ t('year.back_timeline') }}</router-link></p>
  </div>
</template>

<style scoped>
.deck-meta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--space-md);
  border: 1px solid var(--line);
  padding: var(--space-md);
}

.deck-meta-label {
  display: block;
  font-family: var(--font-label);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--muted);
  margin-bottom: 2px;
}

.deck-meta-value {
  font-size: 0.95rem;
  font-weight: 600;
}

.format-tag {
  font-family: var(--font-heading);
}

.deck-summary {
  font-size: 1rem;
  line-height: 1.65;
}

.card-list {
  columns: 2;
  column-gap: var(--space-lg);
  font-size: 0.92rem;
}

.card-list li {
  margin-bottom: var(--space-xs);
}

.source-pub {
  color: var(--muted);
  font-size: 0.85rem;
}

.page-nav {
  display: flex;
  gap: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--line);
  font-size: 0.88rem;
}
</style>
