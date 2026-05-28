<script setup lang="ts">
import { computed, watch, nextTick } from 'vue'
import type { MetaEra, BanEntry, SetRelease, FormatId } from '../data/types'
import EraBand from './EraBand.vue'
import BanBand from './BanBand.vue'
import SetReleaseBand from './SetReleaseBand.vue'
import NowMarker from './NowMarker.vue'

const props = defineProps<{
  eras: MetaEra[]
  bans?: BanEntry[]
  setReleases?: SetRelease[]
  formatColor?: string
  format?: FormatId
  year?: number
  focusedEraId?: string | null
}>()

watch(() => props.focusedEraId, async (id) => {
  if (!id) return
  await nextTick()
  const el = document.getElementById(id)
  if (!el) return

  // Find the scrollable ancestor (the .year-detail container or window)
  let parent: HTMLElement | null = el.parentElement
  while (parent && parent !== document.body) {
    const style = window.getComputedStyle(parent)
    if (/(auto|scroll)/.test(style.overflowY)) break
    parent = parent.parentElement
  }

  const offset = 100 // leave room for the sticky header above
  if (parent && parent !== document.body) {
    const elRect = el.getBoundingClientRect()
    const parentRect = parent.getBoundingClientRect()
    const targetTop = parent.scrollTop + (elRect.top - parentRect.top) - offset
    parent.scrollTo({ top: targetTop, behavior: 'smooth' })
  } else {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
  }

  el.classList.add('era-flash')
  setTimeout(() => el.classList.remove('era-flash'), 1500)
})

type TimelineItem =
  | { type: 'era'; data: MetaEra; sortKey: string }
  | { type: 'ban'; data: BanEntry; sortKey: string }
  | { type: 'set'; data: SetRelease; sortKey: string }
  | { type: 'now'; sortKey: string }

const todaySortKey = (() => {
  const d = new Date()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  return `${d.getFullYear()}-${m}-5`
})()

const showNowMarker = computed(() => {
  if (!props.year) return false
  const now = new Date()
  return props.year === now.getFullYear()
})

const timeline = computed(() => {
  const items: TimelineItem[] = []

  for (const era of props.eras) {
    items.push({ type: 'era', data: era, sortKey: era.start + '-2' })
  }

  if (props.bans) {
    for (const ban of props.bans) {
      const banMonth = ban.date.slice(0, 7)
      items.push({ type: 'ban', data: ban, sortKey: banMonth + '-1' })
    }
  }

  if (props.setReleases) {
    for (const rel of props.setReleases) {
      const relMonth = rel.date.slice(0, 7)
      items.push({ type: 'set', data: rel, sortKey: relMonth + '-0' })
    }
  }

  if (showNowMarker.value) {
    items.push({ type: 'now', sortKey: todaySortKey })
  }

  items.sort((a, b) => b.sortKey.localeCompare(a.sortKey))
  return items
})
</script>

<template>
  <div class="era-detail">
    <div class="era-timeline-line"></div>
    <template v-for="item in timeline" :key="item.type + '-' + item.sortKey">
      <EraBand
        v-if="item.type === 'era'"
        :era="(item.data as MetaEra)"
        :format-color="formatColor"
        :format="format"
        :year="year"
        :id="(item.data as MetaEra).id"
      />
      <BanBand
        v-else-if="item.type === 'ban'"
        :ban="(item.data as BanEntry)"
      />
      <SetReleaseBand
        v-else-if="item.type === 'set'"
        :release="(item.data as SetRelease)"
      />
      <NowMarker
        v-else
      />
    </template>
  </div>
</template>

<style scoped>
.era-detail {
  position: relative;
}

.era-timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 35px;
  width: 2px;
  background: var(--line-light);
  z-index: 0;
}

.era-detail > :deep(.era-band),
.era-detail > :deep(.ban-band),
.era-detail > :deep(.set-release-band),
.era-detail > :deep(.now-marker) {
  position: relative;
  z-index: 1;
}

@media (max-width: 480px) {
  .era-timeline-line {
    display: none;
  }
}
</style>

<style>
.era-flash {
  animation: era-flash-bg 1.5s ease;
}

@keyframes era-flash-bg {
  0%, 100% { background: var(--paper); }
  20% { background: color-mix(in srgb, var(--ink) 12%, var(--paper)); }
}
</style>
