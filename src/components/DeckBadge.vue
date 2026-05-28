<script setup lang="ts">
import { ref, computed } from 'vue'
import type { FormatId } from '../data/types'
import { ARCHETYPE_LABELS } from '../data/types'
import { scryfallImageUrl } from '../lib/scryfall'
import { getDeckColors } from '../lib/deckColors'
import { lookupDeck, findRepresentativeSlug } from '../lib/deckLookup'
import { t } from '../lib/i18n'
import ManaSymbols from './ManaSymbols.vue'

const props = defineProps<{
  name: string
  slug?: string
  variant?: 'dominant' | 'challenger' | 'default'
  contextYear?: number
  contextFormat?: FormatId
}>()

const hovered = ref(false)
const popupX = ref(0)
const popupY = ref(0)

const ctx = computed(() => ({ year: props.contextYear, format: props.contextFormat }))
const info = computed(() => lookupDeck(props.name, ctx.value))
const effectiveSlug = computed(() => props.slug || findRepresentativeSlug(props.name, ctx.value))

function onEnter(e: MouseEvent) {
  hovered.value = true
  updatePos(e)
}

function onMove(e: MouseEvent) {
  updatePos(e)
}

function onLeave() {
  hovered.value = false
}

function updatePos(e: MouseEvent) {
  const w = 420
  const h = 360
  let x = e.clientX + 14
  let y = e.clientY + 14
  if (x + w > window.innerWidth - 12) x = e.clientX - w - 14
  if (y + h > window.innerHeight - 12) y = window.innerHeight - h - 12
  if (y < 12) y = 12
  popupX.value = x
  popupY.value = y
}
</script>

<template>
  <component
    :is="effectiveSlug ? 'router-link' : 'span'"
    :to="effectiveSlug ? `/decks/${effectiveSlug}` : undefined"
    class="deck-badge"
    :class="variant || 'default'"
    @mouseenter="onEnter"
    @mousemove="onMove"
    @mouseleave="onLeave"
  >
    <ManaSymbols v-if="getDeckColors(name)" :colors="getDeckColors(name)" :size="12" />
    {{ name }}
    <Teleport to="body">
      <div
        v-if="hovered"
        class="deck-popup"
        :style="{ left: popupX + 'px', top: popupY + 'px' }"
      >
        <div class="deck-popup-header">
          <span class="deck-popup-name">
            <ManaSymbols v-if="getDeckColors(name)" :colors="getDeckColors(name)" :size="14" />
            {{ info.name }}
          </span>
          <span v-if="info.archetype" class="deck-popup-archetype">
            {{ ARCHETYPE_LABELS[info.archetype] }}
          </span>
        </div>
        <p v-if="info.summary" class="deck-popup-summary">{{ info.summary }}</p>
        <div v-if="info.keyCards.length" class="deck-popup-cards">
          <img
            v-for="card in info.keyCards.slice(0, 5)"
            :key="card"
            :src="scryfallImageUrl(card, 'normal')"
            :alt="card"
            class="deck-popup-card-img"
            loading="lazy"
          />
        </div>
        <span v-if="info.keyCards.length" class="deck-popup-hint">
          {{ t('deck.key_cards') }}: {{ info.keyCards.join(', ') }}
        </span>
        <p v-if="info.appearances.length > 1" class="deck-popup-appearances">
          {{ info.appearances.length }}× —
          {{ info.appearances.map(a => `${a.format} ${a.year}`).filter((v, i, arr) => arr.indexOf(v) === i).join(' · ') }}
        </p>
      </div>
    </Teleport>
  </component>
</template>

<style scoped>
.deck-badge {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-family: var(--font-label);
  font-size: 0.76rem;
  padding: 2px 8px;
  border: 1px solid var(--line);
  text-decoration: none;
  color: var(--ink-light);
  transition: border-color 0.15s, background 0.15s;
  cursor: pointer;
}

.deck-badge.dominant {
  border-color: var(--ink);
  font-weight: 700;
  background: color-mix(in srgb, var(--ink) 7%, transparent);
  color: var(--ink);
}

.deck-badge.challenger {
  color: var(--muted);
  border-style: solid;
  border-color: var(--line);
  background: transparent;
}

.deck-badge:hover {
  border-color: var(--ink);
  background: var(--paper-dark);
}
</style>

<style>
.deck-popup {
  position: fixed;
  z-index: 9998;
  pointer-events: none;
  width: 420px;
  background: var(--paper);
  border: 2px solid var(--ink);
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.28);
  padding: 16px;
}

.deck-popup-header {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.deck-popup-name {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--ink);
}

.deck-popup-archetype {
  font-family: var(--font-label);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border: 1px solid var(--line);
  color: var(--muted);
}

.deck-popup-summary {
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--ink-light);
  margin-bottom: 10px;
}

.deck-popup {
  max-height: 80vh;
  overflow-y: auto;
}

.deck-popup-cards {
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
}

.deck-popup-card-img {
  width: 74px;
  height: 103px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid var(--line);
}

.deck-popup-hint {
  display: block;
  font-size: 0.68rem;
  font-style: italic;
  color: var(--faint);
  line-height: 1.3;
}

.deck-popup-appearances {
  font-size: 0.65rem;
  color: var(--faint);
  margin-top: 6px;
  font-style: italic;
}
</style>
