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
      <router-view v-slot="{ Component, route: r }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="r.path" />
        </transition>
      </router-view>
    </main>
    <footer class="site-footer">
      <span class="colophon-mark" aria-hidden="true"></span>
      <p>{{ t('footer') }}</p>
      <!-- Wizards of the Coast Fan Content Policy statement, verbatim (the policy gives it in English) -->
      <p class="fan-content" lang="en">
        MTG Meta History is unofficial Fan Content permitted under the
        <a href="https://company.wizards.com/en/legal/fancontentpolicy" target="_blank" rel="noopener noreferrer">Fan Content Policy</a>.
        Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast.
        ©Wizards of the Coast LLC.
      </p>
    </footer>
    <CardPreview />
  </div>
</template>

<style scoped>
.site-footer {
  padding: var(--space-xl) var(--space-md) var(--space-lg);
  text-align: center;
  font-style: italic;
  font-size: 0.85rem;
  color: var(--muted);
}

.site-footer p {
  margin: var(--space-sm) auto 0;
}

.fan-content {
  max-width: 62ch;
  font-size: 0.78rem;
  color: var(--faint);
}

.fan-content a {
  color: inherit;
}

/* colophon: a short double rule, like the end of a printed article */
.colophon-mark {
  display: block;
  width: 56px;
  margin: 0 auto;
  border-top: 4px double var(--ink);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.18s var(--ease-out), transform 0.18s var(--ease-out);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-leave-to {
  opacity: 0;
}
</style>
