<script setup lang="ts">
import type { FormatId } from '../data/types'
import { FORMAT_LABELS } from '../data/types'
import { t } from '../lib/i18n'

defineProps<{
  formats: FormatId[]
  selectedFormat: FormatId | null
}>()

const emit = defineEmits<{
  select: [format: FormatId | null]
}>()
</script>

<template>
  <div class="filter-bar">
    <span class="filter-label">{{ t('filter.label') }}:</span>
    <button
      class="filter-btn"
      :class="{ active: selectedFormat === null }"
      @click="emit('select', null)"
    >
      {{ t('filter.all') }}
    </button>
    <button
      v-for="f in formats"
      :key="f"
      class="filter-btn"
      :class="{ active: selectedFormat === f }"
      :style="{ '--fmt-color': `var(--${f})` }"
      @click="emit('select', f)"
    >
      {{ FORMAT_LABELS[f] }}
    </button>
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  flex-wrap: wrap;
  margin-bottom: var(--space-lg);
}

.filter-label {
  font-family: var(--font-label);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
  margin-right: var(--space-xs);
}

.filter-btn {
  font-family: var(--font-label);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 3px 10px;
  border: 1px solid var(--line);
  background: none;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.15s;
}

.filter-btn:hover {
  border-color: var(--ink);
  color: var(--ink);
}

.filter-btn.active {
  border-color: var(--fmt-color, var(--ink));
  color: var(--fmt-color, var(--ink));
  background: color-mix(in srgb, var(--fmt-color, var(--ink)) 8%, transparent);
  font-weight: 600;
}
</style>
