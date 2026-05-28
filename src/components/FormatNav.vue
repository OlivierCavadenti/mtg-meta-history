<script setup lang="ts">
import { formats } from '../data/formats'

defineProps<{
  activeFormat?: string
}>()
</script>

<template>
  <nav class="format-nav">
    <router-link
      v-for="f in formats"
      :key="f.id"
      :to="`/formats/${f.id}`"
      class="format-nav-item"
      :class="{ active: activeFormat === f.id }"
      :style="{ '--fmt-color': f.color }"
    >
      {{ f.name }}
    </router-link>
  </nav>
</template>

<style scoped>
.format-nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.format-nav-item {
  font-family: var(--font-label);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-decoration: none;
  padding: 3px 10px;
  border: 1px solid var(--line);
  color: var(--muted);
  transition: all 0.15s;
}

.format-nav-item:hover,
.format-nav-item.active {
  border-color: var(--fmt-color);
  color: var(--fmt-color);
  background: color-mix(in srgb, var(--fmt-color) 8%, transparent);
}
</style>
