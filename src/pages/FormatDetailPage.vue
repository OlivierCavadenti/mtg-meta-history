<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { FormatId } from '../data/types'
import { FORMAT_LABELS } from '../data/types'
import { t } from '../lib/i18n'
import { getFormat } from '../data/formats'
import { getEntriesByFormat } from '../data/years'
import TimelineYear from '../components/TimelineYear.vue'

const route = useRoute()

const formatId = computed(() => route.params.format as FormatId)
const format = computed(() => getFormat(formatId.value))
const entries = computed(() => getEntriesByFormat(formatId.value))

const years = computed(() => {
  const grouped = new Map<number, typeof entries.value>()
  for (const e of entries.value) {
    const arr = grouped.get(e.year) || []
    arr.push(e)
    grouped.set(e.year, arr)
  }
  return grouped
})
</script>

<template>
  <div v-if="format">
    <header class="page-header">
      <h1 :style="{ color: format.color }">{{ format.name }}</h1>
      <p class="subtitle">{{ format.description }}</p>
      <p class="format-years">{{ format.yearsActive }}</p>
    </header>

    <section class="section" v-if="entries.length">
      <h2 class="section-title">{{ t('formats.documented_years') }}</h2>
      <TimelineYear
        v-for="[year, yearEntries] in years"
        :key="year"
        :year="year"
        :entries="yearEntries"
      />
    </section>

    <p v-else class="empty-note">
      {{ t('formats.no_years') }} {{ FORMAT_LABELS[formatId] }} {{ t('formats.yet') }}.
    </p>
  </div>
  <div v-else>
    <header class="page-header">
      <h1>{{ t('deck.not_found') }}</h1>
    </header>
    <p><router-link to="/formats">{{ t('formats.all') }}</router-link></p>
  </div>
</template>

<style scoped>
.format-years {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--muted);
  margin-top: var(--space-xs);
}

.empty-note {
  color: var(--muted);
  font-style: italic;
}
</style>
