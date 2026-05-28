<script setup lang="ts">
import SiteHeader from './SiteHeader.vue'
import { t } from '../lib/i18n'
</script>

<template>
  <div class="app-shell">
    <SiteHeader />
    <main class="page">
      <router-view />
    </main>
    <footer class="site-footer">
      <span>{{ t('site.footer') }}</span>
      <span class="site-footer-sep">·</span>
      <span class="site-footer-legal">{{ t('site.footer.legal') }}</span>
    </footer>
  </div>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--line);
  padding: var(--space-xs) var(--space-md);
  text-align: center;
  font-size: 0.7rem;
  color: var(--faint);
  max-width: 1800px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  flex-wrap: wrap;
  line-height: 1.4;
}

.site-footer-sep {
  color: var(--line);
}

.site-footer-legal {
  color: var(--faint);
}
</style>
