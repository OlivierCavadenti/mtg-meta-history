<script setup lang="ts">
import { t } from '../lib/i18n'
</script>

<template>
  <div>
    <header class="page-header">
      <h1>{{ t('notfound.title') }}</h1>
      <p class="subtitle">{{ t('notfound.subtitle') }}</p>
    </header>
    <p><router-link to="/">{{ t('notfound.back') }}</router-link></p>
  </div>
</template>
