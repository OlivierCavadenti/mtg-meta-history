<script setup lang="ts">
import { computed } from 'vue'
import type { YearFormatEntry } from '../data/types'
import { FORMAT_LABELS } from '../data/types'
import { getFormat } from '../data/formats'
import { t } from '../lib/i18n'
import EraDetail from './EraDetail.vue'

const props = defineProps<{
  entry: YearFormatEntry | null
  focusedEraId?: string | null
}>()

const formatInfo = computed(() => props.entry ? getFormat(props.entry.format) : undefined)
</script>

<template>
  <div v-if="entry" class="year-detail">
    <header class="year-detail-header">
      <div class="year-detail-title-row">
        <h2 class="year-detail-title">{{ entry.title }}</h2>
        <span
          class="year-detail-format"
          :style="{ backgroundColor: formatInfo?.color }"
        >{{ FORMAT_LABELS[entry.format] }}</span>
      </div>
      <p class="year-detail-subtitle">{{ entry.subtitle }}</p>
    </header>

    <p class="year-detail-summary">{{ entry.summary }}</p>

    <h3 class="year-detail-section">{{ t('yearformat.meta_eras') }}</h3>
    <EraDetail
      :eras="entry.eras"
      :bans="entry.bans"
      :set-releases="entry.setReleases"
      :format-color="formatInfo?.color"
      :format="entry.format"
      :year="entry.year"
      :focused-era-id="focusedEraId"
    />
  </div>
  <div v-else class="year-detail-empty">
    <p>{{ t('filter.label') === 'Filtre' ? 'Sélectionnez une année ou une ère pour voir le détail.' : 'Select a year or era to see details.' }}</p>
  </div>
</template>

<style scoped>
.year-detail {
  height: 100%;
  overflow-y: auto;
  padding: 0 var(--space-lg) var(--space-lg);
}

.year-detail-header {
  margin: 0 calc(-1 * var(--space-lg));
  padding: var(--space-md) var(--space-lg) var(--space-sm);
  border-bottom: 2px solid var(--ink);
  position: sticky;
  top: 0;
  background: var(--paper);
  z-index: 5;
  margin-bottom: var(--space-md);
}

.year-detail-title-row {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-xs);
}

.year-detail-title {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
}

.year-detail-format {
  font-family: var(--font-label);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  color: white;
}

.year-detail-subtitle {
  font-style: italic;
  font-size: 1rem;
  color: var(--muted);
  margin: 0;
}

.year-detail-summary {
  font-size: 0.95rem;
  line-height: 1.65;
  margin-bottom: var(--space-lg);
  color: var(--ink-light);
}

.year-detail-section {
  font-family: var(--font-label);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
  border-bottom: 1px solid var(--line);
  padding-bottom: var(--space-xs);
  margin-bottom: var(--space-md);
}

.year-detail-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--muted);
  font-style: italic;
  padding: var(--space-xl);
  text-align: center;
}
</style>
