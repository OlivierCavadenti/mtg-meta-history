<script setup lang="ts">
import { t } from '../lib/i18n'
</script>

<template>
  <div class="state">
    <p>{{ t('notFound') }}</p>
    <p><router-link to="/standard">Standard →</router-link></p>
  </div>
</template>
