<script setup lang="ts">
import { computed } from 'vue'
import { t, locale } from '../lib/i18n'
import { formats } from '../data/formats'
import { formatDescriptionsFr } from '../data/formats.fr'
import { getEntriesByFormat } from '../data/years'

const localizedFormats = computed(() =>
  formats.map((f) => ({
    ...f,
    description: locale.value === 'fr' ? formatDescriptionsFr[f.id].description : f.description,
  }))
)
</script>

<template>
  <div>
    <header class="page-header">
      <h1>{{ t('formats.title') }}</h1>
      <p class="subtitle">{{ t('formats.subtitle') }}</p>
    </header>

    <div class="formats-list">
      <div v-for="f in localizedFormats" :key="f.id" class="format-card">
        <router-link :to="`/formats/${f.id}`" class="format-card-link">
          <span class="format-card-badge" :style="{ backgroundColor: f.color }">
            {{ f.name }}
          </span>
          <span class="format-card-years">{{ f.yearsActive }}</span>
        </router-link>
        <p class="format-card-desc">{{ f.description }}</p>
        <p class="format-card-count">
          {{ getEntriesByFormat(f.id).length }} {{ t('formats.years_documented') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.formats-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
}

@media (max-width: 640px) {
  .formats-list {
    grid-template-columns: 1fr;
  }
}

.format-card {
  border: 1px solid var(--line);
  padding: var(--space-md);
}

.format-card-link {
  text-decoration: none;
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
}

.format-card-link:hover .format-card-badge {
  opacity: 0.85;
}

.format-card-badge {
  font-family: var(--font-label);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 10px;
  color: white;
}

.format-card-years {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
}

.format-card-desc {
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--ink-light);
  margin-bottom: var(--space-xs);
}

.format-card-count {
  font-family: var(--font-label);
  font-size: 0.72rem;
  color: var(--faint);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
</style>
