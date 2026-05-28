<script setup lang="ts">
import { computed, ref } from 'vue'
import type { KeyCard } from '../data/types'
import { scryfallImageUrl, scryfallCardUrl } from '../lib/scryfall'

const props = defineProps<{
  text: string
  knownCards?: (KeyCard | string)[]
}>()

function getCardNames(): string[] {
  if (!props.knownCards || !props.knownCards.length) return []
  return props.knownCards
    .map((c) => (typeof c === 'string' ? c : c.name))
    .sort((a, b) => b.length - a.length)
}

type Segment = { type: 'text'; value: string } | { type: 'card'; value: string }

const segments = computed((): Segment[] => {
  const cards = getCardNames()
  if (!cards.length) return [{ type: 'text', value: props.text }]

  const pattern = new RegExp(
    `(${cards.map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'g'
  )

  const result: Segment[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(props.text)) !== null) {
    if (match.index > lastIndex) {
      result.push({ type: 'text', value: props.text.slice(lastIndex, match.index) })
    }
    result.push({ type: 'card', value: match[1] })
    lastIndex = pattern.lastIndex
  }

  if (lastIndex < props.text.length) {
    result.push({ type: 'text', value: props.text.slice(lastIndex) })
  }

  return result
})

const hovered = ref<string | null>(null)
const popupX = ref(0)
const popupY = ref(0)
const imgLoaded = ref(false)

function onEnter(card: string, e: MouseEvent) {
  hovered.value = card
  imgLoaded.value = false
  updatePos(e)
}

function onMove(e: MouseEvent) {
  updatePos(e)
}

function onLeave() {
  hovered.value = null
}

function updatePos(e: MouseEvent) {
  const w = 244
  const h = 340
  let x = e.clientX + 14
  let y = e.clientY - h / 2
  if (x + w > window.innerWidth - 10) x = e.clientX - w - 14
  if (y + h > window.innerHeight - 10) y = window.innerHeight - h - 10
  if (y < 10) y = 10
  popupX.value = x
  popupY.value = y
}
</script>

<template>
  <span class="rich-text">
    <template v-for="(seg, i) in segments" :key="i">
      <span v-if="seg.type === 'text'">{{ seg.value }}</span>
      <a
        v-else
        :href="scryfallCardUrl(seg.value)"
        target="_blank"
        rel="noopener noreferrer"
        class="rich-card-ref"
        @mouseenter="onEnter(seg.value, $event)"
        @mousemove="onMove"
        @mouseleave="onLeave"
      >{{ seg.value }}</a>
    </template>
    <Teleport to="body">
      <div
        v-if="hovered"
        class="card-hover-popup"
        :style="{ left: popupX + 'px', top: popupY + 'px' }"
      >
        <img
          :src="scryfallImageUrl(hovered, 'normal')"
          :alt="hovered"
          class="card-hover-img"
          :class="{ loaded: imgLoaded }"
          @load="imgLoaded = true"
        />
        <div v-if="!imgLoaded" class="card-hover-loading">
          <span>{{ hovered }}</span>
        </div>
      </div>
    </Teleport>
  </span>
</template>

<style scoped>
.rich-text {
  display: contents;
}

.rich-card-ref {
  font-weight: 700;
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px dotted var(--line);
  cursor: pointer;
  transition: border-color 0.15s;
}

.rich-card-ref:hover {
  border-bottom-color: var(--ink);
}
</style>

<style>
.card-hover-popup {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  width: 244px;
  height: 340px;
}

.card-hover-img {
  display: block;
  width: 244px;
  height: 340px;
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  opacity: 0;
  transition: opacity 0.15s;
}

.card-hover-img.loaded {
  opacity: 1;
}

.card-hover-loading {
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
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
}

.card-hover-loading span {
  color: var(--paper);
  font-style: italic;
  font-size: 0.82rem;
  text-align: center;
  padding: 1rem;
}
</style>
