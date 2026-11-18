<script setup lang="ts">
import { computed } from 'vue'
import type { CardInfo, Deck } from '../data/types'
import { cardImage } from '../lib/cards'
import { archetypeLabel, t } from '../lib/i18n'
import ColorPips from './ColorPips.vue'

const props = defineProps<{ deck: Deck; cards: Record<string, CardInfo>; format: string; index?: number }>()

const art = computed(() => cardImage(props.cards[props.deck.cover], props.deck.cover, 'art_crop', props.deck.season))
const wins = computed(() => props.deck.stats.wins)
</script>

<template>
  <router-link v-reveal="index" :to="`/${format}/deck/${deck.id}`" class="tile" :class="`tier-${deck.tier}`">
    <div class="frame">
      <div class="window">
        <img v-fade :src="art" :alt="deck.cover" loading="lazy" />
      </div>
    </div>
    <h3>{{ deck.name }} <ColorPips :colors="deck.colors" :size="13" /></h3>
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

/* passe-partout: the art sits in a thin paper mat inside an ink rule */
.frame {
  padding: 3px;
  border: 1px solid var(--ink);
  background: var(--paper);
  transition: border-color 0.3s var(--ease-out);
}

.window {
  aspect-ratio: 626 / 457;
  overflow: hidden;
  background: var(--paper-deep);
}

.tier-1 .window {
  aspect-ratio: 1252 / 457;
}

.window img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.9) sepia(0.06);
  transform: scale(1.001);
  transition:
    transform 1.2s var(--ease-out),
    filter 0.6s var(--ease-out),
    opacity 0.45s var(--ease-out);
}

.tile:hover .window img {
  transform: scale(1.045);
  filter: none;
}

.tile:hover .frame {
  border-color: var(--accent);
}

h3 {
  margin-top: 0.45rem;
  font-size: 1.12rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.01em;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.25s var(--ease-out);
}

.tile:hover h3 {
  text-decoration-color: currentColor;
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

.kicker {
  color: var(--accent);
}

@media (max-width: 520px) {
  .tier-1 {
    grid-column: span 1;
  }

  .tier-1 .window {
    aspect-ratio: 626 / 457;
  }

  .tier-1 h3 {
    font-size: 1.12rem;
  }
}
</style>
