<script setup lang="ts">
import { computed } from 'vue'
import type { CardInfo, Deck } from '../data/types'
import { cardImage } from '../lib/cards'
import { archetypeLabel, t } from '../lib/i18n'
import ColorPips from './ColorPips.vue'

const props = defineProps<{ deck: Deck; cards: Record<string, CardInfo>; format: string }>()

const art = computed(() => cardImage(props.cards[props.deck.cover], props.deck.cover, 'art_crop'))
const wins = computed(() => props.deck.stats.wins)
</script>

<template>
  <router-link :to="`/${format}/deck/${deck.id}`" class="tile" :class="`tier-${deck.tier}`">
    <div class="frame">
      <img :src="art" :alt="deck.cover" loading="lazy" />
    </div>
    <h3>{{ deck.name }} <ColorPips :colors="deck.colors" :size="9" /></h3>
    <p class="meta">
      <span v-if="deck.tier === 1" class="kicker">{{ t('deckToBeat') }}.</span>
      {{ archetypeLabel(deck.archetype) }}, {{ deck.stats.top8 }} {{ t('top8') }}<template v-if="wins">, {{ wins }} {{ wins > 1 ? t('wins') : t('win') }}</template>
    </p>
  </router-link>
</template>

<style scoped>
.tile {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--ink);
}

.tier-1 {
  grid-column: span 2;
}

.frame {
  aspect-ratio: 626 / 457;
  overflow: hidden;
  background: var(--paper-deep);
  border: 1px solid var(--ink);
}

.tier-1 .frame {
  aspect-ratio: 1252 / 457;
}

.frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.92);
  transition: filter 0.2s;
}

.tile:hover .frame img {
  filter: saturate(1.1);
}

.tile:hover h3 {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

.kicker {
  color: var(--accent);
}

h3 {
  margin-top: 0.4rem;
  font-size: 1.12rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.tier-1 h3 {
  font-size: 1.45rem;
}

.meta {
  margin-top: 0.15rem;
  font-size: 0.84rem;
  font-style: italic;
  color: var(--muted);
}

@media (max-width: 520px) {
  .tier-1 {
    grid-column: span 1;
  }

  .tier-1 .frame {
    aspect-ratio: 626 / 457;
  }

  .tier-1 h3 {
    font-size: 1.12rem;
  }
}
</style>
