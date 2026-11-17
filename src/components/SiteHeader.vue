<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { FORMATS } from '../data/formats'
import { locale, t, toggleLocale } from '../lib/i18n'

const route = useRoute()
const current = computed(() => (typeof route.params.format === 'string' ? route.params.format : 'standard'))
const onStaples = computed(() => route.name === 'staples')
</script>

<template>
  <header class="header">
    <div class="inner">
      <router-link to="/standard" class="brand">MTG Meta History</router-link>
      <nav class="formats" aria-label="Formats">
        <router-link
          v-for="f in FORMATS"
          :key="f.id"
          :to="onStaples ? `/${f.id}/staples` : `/${f.id}`"
          class="format"
          :class="{ active: current === f.id, soon: !f.ready }"
        >{{ f.label }}</router-link>
      </nav>
      <div class="views">
        <router-link :to="`/${current}`" class="view" :class="{ active: !onStaples }">{{ t('decks') }}</router-link>
        <router-link :to="`/${current}/staples`" class="view" :class="{ active: onStaples }">{{ t('staples') }}</router-link>
        <button class="locale" type="button" @click="toggleLocale()">{{ locale === 'fr' ? 'en' : 'fr' }}</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--paper);
  border-bottom: 1px solid var(--ink);
}

.inner {
  max-width: var(--page-max);
  margin: 0 auto;
  padding: 0 var(--space-md);
  height: var(--header-h);
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.brand {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.15rem;
  text-decoration: none;
  white-space: nowrap;
}

.formats {
  display: flex;
  align-self: stretch;
  gap: var(--space-lg);
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1;
}

.format {
  display: flex;
  align-items: center;
  font-family: var(--font-heading);
  font-size: 1.02rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  color: var(--ink);
  border-bottom: 3px solid transparent;
}

.format.soon {
  color: var(--faint);
}

.format.active {
  border-bottom-color: var(--accent);
}

.views {
  display: flex;
  align-items: baseline;
  gap: var(--space-md);
}

.view,
.locale {
  font-family: var(--font-body);
  font-size: 0.95rem;
  text-decoration: none;
  color: var(--muted);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.view.active {
  color: var(--ink);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.locale {
  font-style: italic;
}

@media (max-width: 760px) {
  .inner {
    height: auto;
    flex-wrap: wrap;
    gap: var(--space-xs) var(--space-md);
    padding-top: var(--space-sm);
  }

  .brand {
    flex: 1;
  }

  .formats {
    order: 3;
    flex-basis: 100%;
  }

  .format {
    padding-bottom: var(--space-xs);
  }
}
</style>
