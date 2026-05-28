<script setup lang="ts">
import type { YearFormatEntry } from '../data/types'
import { FORMAT_LABELS } from '../data/types'
import { t } from '../lib/i18n'
import { getFormat } from '../data/formats'

defineProps<{
  year: number
  entries: YearFormatEntry[]
}>()
</script>

<template>
  <div class="year-summary">
    <div v-for="entry in entries" :key="entry.format" class="year-format-card">
      <router-link :to="`/year/${year}/${entry.format}`" class="year-format-link">
        <span
          class="year-format-badge"
          :style="{ backgroundColor: getFormat(entry.format)?.color }"
        >
          {{ FORMAT_LABELS[entry.format] }}
        </span>
        <span class="year-format-title">{{ entry.subtitle }}</span>
        <span class="year-format-headline">{{ t('home.deck_to_beat') }}: {{ entry.headlineDeck }}</span>
      </router-link>
      <p class="year-format-summary">{{ entry.summary.slice(0, 200) }}...</p>
    </div>
  </div>
</template>

<style scoped>
.year-format-card {
  border: 1px solid var(--line);
  padding: var(--space-md);
  margin-bottom: var(--space-md);
}

.year-format-link {
  text-decoration: none;
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
  flex-wrap: wrap;
}

.year-format-link:hover .year-format-title {
  text-decoration: underline;
}

.year-format-badge {
  font-family: var(--font-label);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  color: white;
  flex-shrink: 0;
}

.year-format-title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.05rem;
}

.year-format-headline {
  font-size: 0.82rem;
  color: var(--muted);
  font-style: italic;
}

.year-format-summary {
  font-size: 0.88rem;
  color: var(--ink-light);
  line-height: 1.5;
}
</style>
