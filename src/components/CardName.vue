<script setup lang="ts">
import { ref } from 'vue'
import { scryfallImageUrl, scryfallCardUrl } from '../lib/scryfall'

const props = defineProps<{
  name: string
  role?: string
  showImage?: boolean
}>()

const hovered = ref(false)
const imgLoaded = ref(false)
const imgError = ref(false)
const tooltipX = ref(0)
const tooltipY = ref(0)

function onEnter(e: MouseEvent) {
  hovered.value = true
  updatePosition(e)
}

function onMove(e: MouseEvent) {
  updatePosition(e)
}

function onLeave() {
  hovered.value = false
  imgLoaded.value = false
}

function updatePosition(e: MouseEvent) {
  const offset = 12
  const imgW = 244
  const imgH = 340
  let x = e.clientX + offset
  let y = e.clientY + offset
  if (x + imgW > window.innerWidth - 8) x = e.clientX - imgW - offset
  if (y + imgH > window.innerHeight - 8) y = window.innerHeight - imgH - 8
  if (y < 8) y = 8
  tooltipX.value = x
  tooltipY.value = y
}

const imageUrl = scryfallImageUrl(props.name, 'normal')
const cardUrl = scryfallCardUrl(props.name)
</script>

<template>
  <a
    :href="cardUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="card-name"
    :title="role"
    @mouseenter="onEnter"
    @mousemove="onMove"
    @mouseleave="onLeave"
  >
    {{ name }}
    <Teleport to="body">
      <div
        v-if="hovered && !imgError"
        class="card-tooltip"
        :style="{ left: tooltipX + 'px', top: tooltipY + 'px' }"
      >
        <img
          :src="imageUrl"
          :alt="name"
          class="card-tooltip-img"
          :class="{ loaded: imgLoaded }"
          @load="imgLoaded = true"
          @error="imgError = true"
        />
        <div v-if="!imgLoaded" class="card-tooltip-loading">
          <span class="card-tooltip-name">{{ name }}</span>
        </div>
      </div>
    </Teleport>
  </a>
</template>

<style scoped>
.card-name {
  font-style: italic;
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px dotted var(--line);
  cursor: pointer;
  transition: border-color 0.15s;
}

.card-name:hover {
  border-bottom-color: var(--ink);
}
</style>

<style>
.card-tooltip {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  width: 244px;
  height: 340px;
}

.card-tooltip-img {
  display: block;
  width: 244px;
  height: 340px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
  opacity: 0;
  transition: opacity 0.15s;
}

.card-tooltip-img.loaded {
  opacity: 1;
}

.card-tooltip-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 244px;
  height: 340px;
  background: var(--ink);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
}

.card-tooltip-name {
  color: var(--paper);
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.85rem;
  text-align: center;
  padding: 1rem;
}
</style>
