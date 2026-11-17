<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import CardPreview from './components/CardPreview.vue'
import { t } from './lib/i18n'

const route = useRoute()
const wide = computed(() => route.name === 'staples')
</script>

<template>
  <div class="app-shell">
    <SiteHeader />
    <main class="page" :class="{ 'page--wide': wide }">
      <router-view />
    </main>
    <footer class="site-footer">{{ t('footer') }}</footer>
    <CardPreview />
  </div>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--line);
  padding: var(--space-md);
  text-align: center;
  font-family: var(--font-label);
  font-size: 0.7rem;
  color: var(--faint);
}
</style>
