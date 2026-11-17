<script setup lang="ts">
import { computed } from 'vue'
import type { CardInfo } from '../data/types'
import { cardImage, cardTone, scryfallSearch } from '../lib/cards'
import { hidePreview, movePreview, showPreview } from '../lib/preview'
import ManaCost from './ManaCost.vue'

const props = defineProps<{ name: string; count: number; info?: CardInfo }>()

const art = computed(() => cardImage(props.info, props.name, 'art_crop'))
const full = computed(() => cardImage(props.info, props.name, 'normal'))
const tone = computed(() => cardTone(props.info))
</script>

<template>
  <a
    class="row"
    :href="scryfallSearch(name)"
    target="_blank"
    rel="noopener noreferrer"
    :style="{ '--tone': tone }"
    @mouseenter="showPreview(full, $event)"
    @mousemove="movePreview"
    @mouseleave="hidePreview"
  >
    <img class="art" :src="art" alt="" loading="lazy" />
    <span class="count">{{ count }}</span>
    <span class="name">{{ name }}</span>
    <ManaCost v-if="info && info.t !== 'land'" :cost="info.m" class="cost" />
  </a>
</template>

<style scoped>
.row {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  height: 28px;
  padding: 0 0.45rem 0 0.55rem;
  overflow: hidden;
  border-radius: var(--radius-md);
  border-left: 5px solid color-mix(in srgb, var(--tone) 60%, black);
  background: var(--tone);
  color: var(--row-ink);
  text-decoration: none;
  font-family: var(--font-label);
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1;
}

.art {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 72%;
  object-fit: cover;
  object-position: center 30%;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, rgb(0 0 0 / 0.85) 55%, black 100%);
  mask-image: linear-gradient(to right, transparent 0%, rgb(0 0 0 / 0.85) 55%, black 100%);
  transition: transform 0.25s ease;
}

.row:hover .art {
  transform: scale(1.06);
}

.count,
.name,
.cost {
  position: relative;
  z-index: 1;
  text-shadow: 0 1px 2px rgb(0 0 0 / 0.75);
}

.count {
  width: 1ch;
  text-align: right;
  opacity: 0.9;
}

.name {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.cost {
  padding: 2px 3px;
  border-radius: 8px;
  background: rgb(0 0 0 / 0.35);
}
</style>
