<script setup lang="ts">
import { computed } from 'vue'
import { locale } from '../lib/i18n'

const today = new Date()
const todayStr = computed(() => {
  return today.toLocaleDateString(locale.value === 'fr' ? 'fr-FR' : 'en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  })
})

const label = computed(() => locale.value === 'fr' ? 'PRÉSENT' : 'NOW')
</script>

<template>
  <div class="now-marker">
    <span class="now-marker-label">{{ label }}</span>
    <span class="now-marker-line"></span>
    <span class="now-marker-date">{{ todayStr }}</span>
  </div>
</template>

<style scoped>
.now-marker {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-xs) var(--space-sm);
  margin: var(--space-md) 0;
  border-top: 2px solid var(--ink);
  border-bottom: 2px solid var(--ink);
  background: color-mix(in srgb, var(--ink) 4%, var(--paper));
  position: relative;
}

.now-marker-label {
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  background: var(--ink);
  color: var(--paper);
  padding: 3px 10px;
}

.now-marker-line {
  flex: 1;
  height: 1px;
  background: var(--ink);
  position: relative;
}

.now-marker-line::before,
.now-marker-line::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 6px;
  height: 6px;
  background: var(--ink);
  border-radius: 50%;
  transform: translateY(-50%);
}

.now-marker-line::before { left: 0; }
.now-marker-line::after { right: 0; }

.now-marker-date {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--ink);
}
</style>
