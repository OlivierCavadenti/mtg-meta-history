<script setup lang="ts">
import { computed } from 'vue'
import { manaSymbols, symbolUrl } from '../lib/cards'

const props = defineProps<{ cost: string }>()
const symbols = computed(() => manaSymbols(props.cost))
</script>

<template>
  <span v-if="symbols.length" class="mana" :aria-label="cost">
    <img v-for="(s, i) in symbols" :key="i" :src="symbolUrl(s)" alt="" class="sym" loading="lazy" />
  </span>
</template>

<style scoped>
.mana {
  display: inline-flex;
  align-items: center;
  gap: 1px;
  flex-shrink: 0;
}

.sym {
  width: 13px;
  height: 13px;
  border-radius: 50%;
}
</style>
