<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { FormatId } from '../data/types'
import { FORMAT_LABELS } from '../data/types'
import { t } from '../lib/i18n'
import { getEntry, getEntriesByFormat } from '../data/years'
import { getFormat } from '../data/formats'
import EraDetail from '../components/EraDetail.vue'

const route = useRoute()

const year = computed(() => Number(route.params.year))
const format = computed(() => route.params.format as FormatId)
const entry = computed(() => getEntry(year.value, format.value))
const formatInfo = computed(() => getFormat(format.value))

const siblings = computed(() => {
  const all = getEntriesByFormat(format.value)
  const idx = all.findIndex((e) => e.year === year.value)
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null,
  }
})
</script>

<template>
  <div v-if="entry">
    <header class="page-header">
      <h1>{{ entry.title }}</h1>
      <p class="subtitle">{{ entry.subtitle }}</p>
    </header>

    <section class="section">
      <p class="entry-summary">{{ entry.summary }}</p>
    </section>

    <section class="section">
      <h2 class="section-title">{{ t('yearformat.meta_eras') }}</h2>
      <EraDetail
        :eras="entry.eras"
        :bans="entry.bans"
        :set-releases="entry.setReleases"
        :format-color="formatInfo?.color"
        :format="entry.format"
        :year="entry.year"
      />
    </section>

    <nav class="page-nav-years">
      <router-link
        v-if="siblings.prev"
        :to="`/year/${siblings.prev.year}/${siblings.prev.format}`"
        class="page-nav-btn prev"
      >
        <span class="page-nav-arrow">&larr;</span>
        <span class="page-nav-info">
          <span class="page-nav-label">{{ FORMAT_LABELS[siblings.prev.format] }} {{ siblings.prev.year }}</span>
          <span class="page-nav-sub">{{ siblings.prev.subtitle }}</span>
        </span>
      </router-link>
      <span v-else class="page-nav-btn disabled"></span>

      <router-link to="/timeline" class="page-nav-center">{{ t('nav.timeline') }}</router-link>

      <router-link
        v-if="siblings.next"
        :to="`/year/${siblings.next.year}/${siblings.next.format}`"
        class="page-nav-btn next"
      >
        <span class="page-nav-info">
          <span class="page-nav-label">{{ FORMAT_LABELS[siblings.next.format] }} {{ siblings.next.year }}</span>
          <span class="page-nav-sub">{{ siblings.next.subtitle }}</span>
        </span>
        <span class="page-nav-arrow">&rarr;</span>
      </router-link>
      <span v-else class="page-nav-btn disabled"></span>
    </nav>
  </div>
  <div v-else>
    <header class="page-header">
      <h1>{{ FORMAT_LABELS[format] || format }} {{ year }}</h1>
      <p class="subtitle">{{ t('yearformat.no_data') }}</p>
    </header>
    <p>
      <router-link to="/timeline">{{ t('year.back_timeline') }}</router-link>
    </p>
  </div>
</template>

<style scoped>
.entry-summary {
  font-size: 1rem;
  line-height: 1.65;
  margin-bottom: var(--space-lg);
}

.ban-entry {
  border-left: 3px solid var(--confidence-low);
  padding: var(--space-sm) var(--space-md);
  margin-bottom: var(--space-md);
}

.ban-header {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  margin-bottom: var(--space-xs);
  flex-wrap: wrap;
}

.ban-date {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--muted);
}

.ban-cards {
  font-size: 0.9rem;
}

.ban-explanation {
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--ink-light);
}

.deck-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
}

@media (min-width: 640px) {
  .deck-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.page-nav-years {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--space-sm);
  align-items: stretch;
  margin-top: var(--space-xl);
  padding-top: var(--space-lg);
  border-top: 2px solid var(--ink);
}

.page-nav-btn {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  border: 1px solid var(--line);
  text-decoration: none;
  color: var(--ink);
  transition: border-color 0.15s, background 0.15s;
}

.page-nav-btn.prev {
  justify-content: flex-start;
}

.page-nav-btn.next {
  justify-content: flex-end;
  text-align: right;
}

.page-nav-btn.disabled {
  visibility: hidden;
}

.page-nav-btn:hover {
  border-color: var(--ink);
  background: var(--paper-dark);
}

.page-nav-arrow {
  font-size: 1.4rem;
  line-height: 1;
  flex-shrink: 0;
  color: var(--muted);
}

.page-nav-btn:hover .page-nav-arrow {
  color: var(--ink);
}

.page-nav-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.page-nav-label {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
}

.page-nav-sub {
  font-size: 0.72rem;
  font-style: italic;
  color: var(--muted);
}

.page-nav-center {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-label);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
  text-decoration: none;
  padding: 0 var(--space-sm);
}

.page-nav-center:hover {
  color: var(--ink);
}

@media (max-width: 640px) {
  .page-nav-years {
    grid-template-columns: 1fr 1fr;
  }

  .page-nav-center {
    grid-column: 1 / -1;
    order: -1;
    padding: 0 0 var(--space-sm);
  }
}
</style>
