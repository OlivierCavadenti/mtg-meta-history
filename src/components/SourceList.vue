<script setup lang="ts">
import type { Source } from '../data/types'
import { t } from '../lib/i18n'

defineProps<{
  sources: Source[]
}>()
</script>

<template>
  <div class="source-list" v-if="sources.length">
    <h4 class="source-list-title">{{ t('era.sources') }}</h4>
    <ul>
      <li v-for="(src, i) in sources" :key="i" class="source-item">
        <a :href="src.url" target="_blank" rel="noopener noreferrer" class="source-link">
          {{ src.title }}
        </a>
        <span v-if="src.publisher" class="source-publisher">&mdash; {{ src.publisher }}</span>
        <span v-if="src.date" class="source-date">({{ src.date }})</span>
        <span v-if="src.note" class="source-note">{{ src.note }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.source-list-title {
  font-family: var(--font-label);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
  margin-bottom: var(--space-xs);
}

.source-list ul {
  list-style: none;
  padding: 0;
}

.source-item {
  font-size: 0.82rem;
  margin-bottom: var(--space-xs);
  padding-left: var(--space-sm);
  border-left: 2px solid var(--line-light);
  line-height: 1.4;
}

.source-link {
  color: var(--ink-light);
}

.source-publisher {
  color: var(--muted);
  font-size: 0.78rem;
}

.source-date {
  color: var(--faint);
  font-size: 0.75rem;
}

.source-note {
  display: block;
  color: var(--muted);
  font-size: 0.75rem;
  font-style: italic;
  margin-top: 1px;
}
</style>
