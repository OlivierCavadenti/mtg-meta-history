<script setup lang="ts">
import { preview } from '../lib/preview'
</script>

<template>
  <img
    v-show="preview.visible && preview.url"
    class="card-preview"
    :src="preview.url"
    alt=""
    :style="{ transform: `translate(${preview.x}px, ${preview.y}px)` }"
  />
</template>

<style scoped>
.card-preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 349px;
  border-radius: 12px;
  pointer-events: none;
  z-index: 200;
  background: var(--paper-deep);
  outline: 1px solid var(--ink);
}
</style>
