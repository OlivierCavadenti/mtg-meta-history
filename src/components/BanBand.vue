<script setup lang="ts">
import type { BanEntry } from '../data/types'
import { scryfallImageUrl, scryfallCardUrl } from '../lib/scryfall'
import { ref } from 'vue'
import RichText from './RichText.vue'
import SourceList from './SourceList.vue'
import { locale } from '../lib/i18n'

const props = defineProps<{
  ban: BanEntry
}>()

function formatDate(date: string): string {
  const d = new Date(date + 'T00:00:00')
  return d.toLocaleDateString(locale.value === 'fr' ? 'fr-FR' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })
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
  const w = 340
  const h = 474
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
  <div class="ban-band">
    <div class="ban-band-stripe"></div>
    <div class="ban-band-inner">
      <div class="ban-band-header">
        <span class="ban-band-label">BAN</span>
        <span class="ban-band-date">{{ formatDate(ban.date) }}</span>
      </div>

      <div class="ban-band-cards-gallery">
        <div
          v-for="card in ban.cards"
          :key="card"
          class="ban-card-item"
          @mouseenter="onEnter(card, $event)"
          @mousemove="onMove"
          @mouseleave="onLeave"
        >
          <a
            :href="scryfallCardUrl(card)"
            target="_blank"
            rel="noopener noreferrer"
            class="ban-card-link"
          >
            <img
              v-if="!failedImages.has(card)"
              :src="scryfallImageUrl(card, 'normal')"
              :alt="card"
              class="ban-card-img"
              loading="lazy"
              @error="failedImages.add(card)"
            />
            <span v-else class="ban-card-fallback">{{ card }}</span>
          </a>
          <span class="ban-card-name">{{ card }}</span>
        </div>
      </div>

      <p class="ban-band-explanation"><RichText :text="ban.explanation" :known-cards="props.ban.cards" /></p>
      <SourceList v-if="ban.source" :sources="[ban.source]" />
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
.ban-band {
  position: relative;
  margin-bottom: var(--space-md);
  border: 2px solid var(--confidence-low);
  background: color-mix(in srgb, var(--confidence-low) 4%, var(--paper));
}

.ban-band-stripe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: repeating-linear-gradient(
    90deg,
    var(--confidence-low) 0,
    var(--confidence-low) 8px,
    transparent 8px,
    transparent 14px
  );
}

.ban-band-inner {
  padding: var(--space-md);
  padding-top: calc(var(--space-md) + 4px);
}

.ban-band-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.ban-band-label {
  font-family: var(--font-heading);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 2px 10px;
  background: var(--confidence-low);
  color: white;
}

.ban-band-date {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--confidence-low);
  letter-spacing: 0.02em;
}

.ban-band-cards-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.ban-card-item {
  width: 130px;
  flex-shrink: 0;
  cursor: pointer;
}

.ban-card-link {
  display: block;
  text-decoration: none;
}

.ban-card-img {
  display: block;
  width: 130px;
  height: 181px;
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid var(--confidence-low);
  transition: transform 0.15s, box-shadow 0.15s;
  background: var(--paper-dark);
  opacity: 0.85;
}

.ban-card-item:hover .ban-card-img {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(140, 80, 64, 0.3);
  opacity: 1;
}

.ban-card-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 181px;
  border: 2px solid var(--confidence-low);
  border-radius: 6px;
  background: var(--paper-dark);
  font-style: italic;
  font-size: 0.72rem;
  color: var(--muted);
  text-align: center;
  padding: var(--space-xs);
}

.ban-card-name {
  display: block;
  margin-top: 3px;
  font-size: 0.68rem;
  font-family: var(--font-label);
  font-weight: 600;
  color: var(--confidence-low);
  line-height: 1.2;
  text-decoration: line-through;
  text-decoration-color: var(--confidence-low);
}

.ban-band-explanation {
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--ink-light);
}

@media (max-width: 480px) {
  .ban-card-item {
    width: 100px;
  }

  .ban-card-img,
  .ban-card-fallback {
    width: 100px;
    height: 139px;
  }
}
</style>
