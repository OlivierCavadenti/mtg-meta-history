<script setup lang="ts">
import { computed } from 'vue'
import type { SetRelease } from '../data/types'
import { locale } from '../lib/i18n'

const props = defineProps<{
  release: SetRelease
}>()

function formatDate(date: string): string {
  const d = new Date(date + 'T00:00:00')
  return d.toLocaleDateString(locale.value === 'fr' ? 'fr-FR' : 'en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  })
}

const isFuture = computed(() => {
  const releaseDate = new Date(props.release.date + 'T00:00:00')
  return releaseDate > new Date()
})

const upcomingLabel = computed(() => locale.value === 'fr' ? 'À VENIR' : 'UPCOMING')
</script>

<template>
  <div class="set-release-band" :class="{ 'is-future': isFuture }">
    <span class="set-release-icon">&#9670;</span>
    <span class="set-release-label">{{ isFuture ? upcomingLabel : 'SET' }}</span>
    <span class="set-release-date">{{ formatDate(release.date) }}</span>
    <span class="set-release-name">{{ release.name }}</span>
    <span class="set-release-code">({{ release.code }})</span>
    <span v-if="release.note" class="set-release-note">&mdash; {{ release.note }}</span>
  </div>
</template>

<style scoped>
.set-release-band {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  flex-wrap: wrap;
  padding: var(--space-xs) var(--space-md);
  margin-bottom: var(--space-md);
  border: 1px dashed var(--modern);
  background: color-mix(in srgb, var(--modern) 5%, var(--paper));
  position: relative;
}

.set-release-band.is-future {
  border-style: dotted;
  border-color: var(--faint);
  background: color-mix(in srgb, var(--faint) 5%, var(--paper));
  opacity: 0.75;
}

.set-release-icon {
  color: var(--modern);
  font-size: 0.7rem;
}

.is-future .set-release-icon {
  color: var(--faint);
}

.set-release-label {
  font-family: var(--font-heading);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 1px 7px;
  background: var(--modern);
  color: white;
}

.is-future .set-release-label {
  background: var(--faint);
}

.set-release-date {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--modern);
}

.is-future .set-release-date {
  color: var(--muted);
}

.set-release-name {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--ink);
}

.is-future .set-release-name {
  color: var(--ink-light);
  font-style: italic;
}

.set-release-code {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--muted);
}

.set-release-note {
  font-size: 0.78rem;
  font-style: italic;
  color: var(--muted);
}
</style>
