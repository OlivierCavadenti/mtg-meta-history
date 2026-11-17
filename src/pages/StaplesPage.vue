<script setup lang="ts">
import { computed } from 'vue'
import { useFormat } from '../lib/useFormat'
import { computeStaples } from '../lib/staples'
import { cardImage, scryfallSearch } from '../lib/cards'
import { seasonYears, t } from '../lib/i18n'
import SoonState from '../components/SoonState.vue'

const { format, data, loading } = useFormat()

// staples are computed oldest-first (a card belongs to the season it first became a staple), shown newest-first
const seasons = computed(() => (data.value ? computeStaples(data.value).reverse() : []))
const total = computed(() => seasons.value.reduce((n, s) => n + s.cards.length, 0))
</script>

<template>
  <SoonState v-if="format && !format.ready" :label="format.label" />
  <div v-else-if="loading || !data" class="state">{{ t('loading') }}</div>
  <div v-else class="staples">
    <p class="count">{{ format?.label }}, {{ total }} {{ t('staplesIntro') }}.</p>
    <div class="wall">
      <template v-for="s in seasons" :key="s.id">
        <div :id="`s-${s.id}`" class="divider">
          <span class="years">{{ seasonYears(s.start, s.end) }}</span>
          <span class="set">{{ s.set }}</span>
        </div>
        <a
          v-for="c in s.cards"
          :key="c.name"
          class="card"
          :href="scryfallSearch(c.name)"
          target="_blank"
          rel="noopener noreferrer"
          :title="c.name"
        >
          <img :src="cardImage(data.cards[c.name], c.name, 'normal')" :alt="c.name" loading="lazy" />
        </a>
      </template>
    </div>
  </div>
</template>

<style scoped>
.staples {
  padding: var(--space-sm) var(--space-md) 0;
}

.count {
  padding: var(--space-sm) var(--space-xs) 0;
  font-style: italic;
  color: var(--muted);
  max-width: none;
}

.wall {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 8px;
}

@media (max-width: 1100px) {
  .wall {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .wall {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.divider:first-child {
  margin-top: 0;
}

.divider {
  grid-column: 1 / -1;
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  padding: var(--space-lg) var(--space-xs) var(--space-xs);
  border-top: 3px solid var(--ink);
  margin-top: var(--space-md);
  scroll-margin-top: var(--header-h);
}

.years {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.9rem;
  line-height: 1;
  letter-spacing: -0.02em;
}

.set {
  font-style: italic;
  font-size: 1rem;
  color: var(--muted);
}

.card {
  display: block;
  aspect-ratio: 488 / 680;
  border-radius: 4.75% / 3.5%;
  overflow: hidden;
  background: var(--paper-deep);
  transition: transform 0.15s ease;
}

.card:hover {
  transform: scale(1.04);
  position: relative;
  z-index: 2;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 640px) {
  .wall {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4px;
  }
}
</style>
