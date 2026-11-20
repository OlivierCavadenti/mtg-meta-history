<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { FORMATS } from '../data/formats'
import { locale, t, toggleLocale } from '../lib/i18n'

const route = useRoute()
const current = computed(() => (typeof route.params.format === 'string' ? route.params.format : 'standard'))
const onStaples = computed(() => route.name === 'staples')
const onColors = computed(() => route.name === 'colors')
const onArchetypes = computed(() => route.name === 'archetypes' || route.name === 'archetype')
</script>

<template>
  <header class="header">
    <div class="inner">
      <router-link to="/standard" class="brand">MTG Meta History</router-link>
      <nav class="formats" aria-label="Formats">
        <router-link
          v-for="f in FORMATS"
          :key="f.id"
          :to="onStaples ? `/${f.id}/staples` : onColors ? `/${f.id}/colors` : onArchetypes ? `/${f.id}/archetypes` : `/${f.id}`"
          class="format"
          :class="{ active: current === f.id, soon: !f.ready }"
        >{{ f.label }}</router-link>
      </nav>
      <div class="views">
        <router-link :to="`/${current}`" class="view" :class="{ active: !onStaples && !onColors && !onArchetypes }">{{ t('decks') }}</router-link>
        <router-link :to="`/${current}/archetypes`" class="view" :class="{ active: onArchetypes }">{{ t('archetypes') }}</router-link>
        <router-link :to="`/${current}/staples`" class="view" :class="{ active: onStaples }">{{ t('staples') }}</router-link>
        <router-link :to="`/${current}/colors`" class="view" :class="{ active: onColors }">{{ t('colorsView') }}</router-link>
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
  background: var(--paper) var(--grain);
  /* printed masthead: a double rule */
  border-bottom: 4px double var(--ink);
}

.inner {
  max-width: var(--page-max);
  margin: 0 auto;
  padding: 0 var(--space-md);
  height: calc(var(--header-h) - 4px);
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
  position: relative;
  transition: color 0.2s var(--ease-out);
}

/* underline grows from the left on hover and stays for the active format */
.format::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 3px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s var(--ease-out);
}

.format:hover::after {
  transform: scaleX(0.35);
}

.format.active::after {
  transform: scaleX(1);
}

.format.soon {
  color: var(--faint);
}


.views {
  display: flex;
  align-self: stretch;
  align-items: stretch;
  gap: var(--space-lg);
}

/* the views (Decks, Archetypes, Staples, Colors) carry the same weight as the format bar */
.view {
  position: relative;
  display: flex;
  align-items: center;
  font-family: var(--font-heading);
  font-size: 1.08rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--ink-light);
  white-space: nowrap;
  transition: color 0.2s var(--ease-out);
}

.view::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 3px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s var(--ease-out);
}

.view:hover {
  color: var(--ink);
}

.view:hover::after {
  transform: scaleX(0.35);
}

.view.active {
  color: var(--ink);
}

.view.active::after {
  transform: scaleX(1);
}

.locale {
  align-self: center;
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.95rem;
  color: var(--muted);
  background: none;
  border: none;
  border-left: 1px solid var(--line);
  padding: 0 0 0 var(--space-md);
  cursor: pointer;
}

.locale:hover {
  color: var(--ink);
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
