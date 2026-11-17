<script setup lang="ts">
import { t } from '../lib/i18n'

defineProps<{ label: string }>()
</script>

<template>
  <div class="soon">
    <h1>{{ label }}</h1>
    <p class="kicker">{{ t('soon') }}</p>
    <p class="text">{{ t('soonText') }}</p>
    <router-link to="/standard" class="go">Standard →</router-link>
  </div>
</template>

<style scoped>
.soon {
  padding: var(--space-2xl) 0;
  text-align: center;
}

h1 {
  font-size: clamp(3rem, 8vw, 5.5rem);
  letter-spacing: -0.035em;
}

.text {
  margin: var(--space-sm) auto var(--space-lg);
  color: var(--muted);
  font-style: italic;
}

.kicker {
  font-style: italic;
  color: var(--accent);
}

.go {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.2rem;
}
</style>
