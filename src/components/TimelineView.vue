<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { YearFormatEntry, MetaEra } from '../data/types'
import { getAllEntries, getAvailableYears } from '../data/years'
import TimelineYear from './TimelineYear.vue'
import YearDetail from './YearDetail.vue'

type TabId = 'standard' | 'legacy'
const activeTab = ref<TabId>('standard')

const allEntries = computed(() => getAllEntries())
const years = computed(() => getAvailableYears().reverse())

const filteredByYear = computed(() => {
  const grouped = new Map<number, YearFormatEntry[]>()
  for (const year of years.value) {
    const entries = allEntries.value.filter(
      (e) => e.year === year && e.format === activeTab.value
    )
    if (entries.length) grouped.set(year, entries)
  }
  return grouped
})

const selectedEntry = ref<YearFormatEntry | null>(null)
const focusedEraId = ref<string | null>(null)

watch(filteredByYear, (grouped) => {
  if (grouped.size === 0) {
    selectedEntry.value = null
    return
  }
  // Always re-resolve selectedEntry from the current locale's entries
  if (selectedEntry.value) {
    const yearGroup = grouped.get(selectedEntry.value.year)
    const fresh = yearGroup?.find((e) => e.format === selectedEntry.value!.format)
    if (fresh) {
      // Update to the new locale's entry (preserve year/format selection)
      selectedEntry.value = fresh
      return
    }
  }
  // Otherwise pick the first available
  const first = grouped.values().next().value
  if (first && first.length) selectedEntry.value = first[0]
}, { immediate: true })

function onEraClick(entry: YearFormatEntry, era: MetaEra) {
  selectedEntry.value = entry
  focusedEraId.value = era.id
}

function onYearClick(entry: YearFormatEntry) {
  selectedEntry.value = entry
  focusedEraId.value = null
}
</script>

<template>
  <div class="timeline-layout">
    <div class="timeline-left">
      <div class="timeline-tabs">
        <button
          class="timeline-tab"
          :class="{ active: activeTab === 'standard' }"
          @click="activeTab = 'standard'"
        >
          Standard
        </button>
      </div>

      <TimelineYear
        v-for="[year, entries] in filteredByYear"
        :key="year"
        :year="year"
        :entries="entries"
        :selected-entry="selectedEntry"
        :focused-era-id="focusedEraId"
        @era-click="onEraClick"
        @year-click="onYearClick"
      />
    </div>

    <div class="timeline-right">
      <YearDetail :entry="selectedEntry" :focused-era-id="focusedEraId" />
    </div>
  </div>
</template>

<style scoped>
.timeline-layout {
  display: grid;
  grid-template-columns: minmax(420px, 0.9fr) minmax(600px, 1.4fr);
  gap: var(--space-lg);
  align-items: start;
  height: calc(100vh - 130px);
  min-height: 600px;
}

.timeline-left {
  overflow-y: auto;
  padding: 0 var(--space-md) 0 var(--space-sm);
  height: 100%;
}

.timeline-right {
  position: sticky;
  top: var(--space-md);
  height: 100%;
  border: 1px solid var(--line);
  background: var(--paper);
  overflow: hidden;
}

.timeline-tabs {
  display: flex;
  gap: 0;
  margin-bottom: var(--space-lg);
  border-bottom: 2px solid var(--ink);
  position: sticky;
  top: 0;
  background: var(--paper);
  z-index: 10;
}

.timeline-tab {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: var(--space-sm) var(--space-lg);
  border: none;
  background: none;
  color: var(--muted);
  cursor: pointer;
  position: relative;
  bottom: -2px;
  border-bottom: 2px solid transparent;
  transition: color 0.15s, border-color 0.15s;
}

.timeline-tab:hover {
  color: var(--ink);
}

.timeline-tab.active {
  color: var(--ink);
  border-bottom-color: var(--ink);
}

.tab-wip {
  padding: var(--space-xl) 0;
  text-align: center;
  font-style: italic;
  color: var(--muted);
  font-size: 1rem;
}

@media (max-width: 900px) {
  .timeline-layout {
    grid-template-columns: 1fr;
    height: auto;
  }

  .timeline-left {
    overflow-y: visible;
    height: auto;
    padding-right: 0;
  }

  .timeline-right {
    position: static;
    height: auto;
    min-height: 400px;
  }
}
</style>
