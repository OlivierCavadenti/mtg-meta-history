<script setup lang="ts">
import type { KeyCard } from '../data/types'
import { scryfallImageUrl, scryfallCardUrl } from '../lib/scryfall'
import { ref } from 'vue'

defineProps<{
  cards: (KeyCard | string)[]
}>()

function cardName(c: KeyCard | string): string {
  return typeof c === 'string' ? c : c.name
}

function cardRole(c: KeyCard | string): string | undefined {
  return typeof c === 'string' ? undefined : c.role
}

const failedImages = ref(new Set<string>())

const hovered = ref<string | null>(null)
const popupX = ref(0)
const popupY = ref(0)

function onEnter(name: string, e: MouseEvent) {
  hovered.value = name
  updatePos(e)
}

function onMove(e: MouseEvent) {
  updatePos(e)
}

function onLeave() {
  hovered.value = null
}

function updatePos(e: MouseEvent) {
  const w = 400
  const h = 558
  let x = e.clientX + 16
  let y = e.clientY - h / 2
  if (x + w > window.innerWidth - 12) x = e.clientX - w - 16
  if (y + h > window.innerHeight - 12) y = window.innerHeight - h - 12
  if (y < 12) y = 12
  popupX.value = x
  popupY.value = y
}
</script>

<template>
  <div class="card-gallery">
    <div
      v-for="card in cards"
      :key="cardName(card)"
      class="card-gallery-item"
      @mouseenter="onEnter(cardName(card), $event)"
      @mousemove="onMove"
      @mouseleave="onLeave"
    >
      <a
        :href="scryfallCardUrl(cardName(card))"
        target="_blank"
        rel="noopener noreferrer"
        class="card-gallery-link"
      >
        <img
          v-if="!failedImages.has(cardName(card))"
          :src="scryfallImageUrl(cardName(card), 'large')"
          :alt="cardName(card)"
          class="card-gallery-img"
          loading="lazy"
          @error="failedImages.add(cardName(card))"
        />
        <span v-else class="card-gallery-fallback">{{ cardName(card) }}</span>
      </a>
      <div class="card-gallery-caption">
        <span class="card-gallery-name">{{ cardName(card) }}</span>
        <span v-if="cardRole(card)" class="card-gallery-role">{{ cardRole(card) }}</span>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="hovered && !failedImages.has(hovered)"
        class="card-popup"
        :style="{ left: popupX + 'px', top: popupY + 'px' }"
      >
        <img
          :src="scryfallImageUrl(hovered, 'large')"
          :alt="hovered"
          class="card-popup-img"
        />
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.card-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.card-gallery-item {
  width: 220px;
  flex-shrink: 0;
  cursor: pointer;
}

.card-gallery-link {
  display: block;
  text-decoration: none;
}

.card-gallery-img {
  display: block;
  width: 220px;
  height: 307px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--line);
  transition: transform 0.15s, box-shadow 0.15s;
  background: var(--paper-dark);
}

.card-gallery-item:hover .card-gallery-img {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.card-gallery-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 307px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--paper-dark);
  font-style: italic;
  font-size: 0.78rem;
  color: var(--muted);
  text-align: center;
  padding: var(--space-sm);
}

.card-gallery-caption {
  margin-top: 4px;
}

.card-gallery-name {
  display: block;
  font-size: 0.74rem;
  font-weight: 600;
  font-family: var(--font-label);
  line-height: 1.2;
  color: var(--ink);
}

.card-gallery-role {
  display: block;
  font-size: 0.66rem;
  color: var(--muted);
  line-height: 1.3;
  font-style: italic;
}

@media (max-width: 480px) {
  .card-gallery-item {
    width: 150px;
  }

  .card-gallery-img,
  .card-gallery-fallback {
    width: 150px;
    height: 209px;
  }
}
</style>

<style>
.card-popup {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
}

.card-popup-img {
  display: block;
  width: 400px;
  height: 558px;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
</style>
