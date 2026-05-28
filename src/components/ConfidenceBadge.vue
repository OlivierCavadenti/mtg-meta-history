<script setup lang="ts">
import { t } from '../lib/i18n'

defineProps<{
  level: 'high' | 'medium' | 'low'
}>()
</script>

<template>
  <span class="confidence-badge" :class="level" :title="t(`confidence.${level}`)">
    {{ level }}
  </span>
</template>

<style scoped>
.confidence-badge {
  font-family: var(--font-label);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 1px 6px;
  border: 1px solid;
  border-radius: var(--radius-sm);
}

.confidence-badge.high {
  color: var(--confidence-high);
  border-color: var(--confidence-high);
}

.confidence-badge.medium {
  color: var(--confidence-medium);
  border-color: var(--confidence-medium);
}

.confidence-badge.low {
  color: var(--confidence-low);
  border-color: var(--confidence-low);
}
</style>
