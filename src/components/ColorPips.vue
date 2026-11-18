<script setup lang="ts">
import { computed } from 'vue'
import { colorOrder, symbolUrl } from '../lib/cards'

// A deck's colors as Magic's own mana symbols (Scryfall SVGs), colorless as {C}.
const props = withDefaults(defineProps<{ colors: string; size?: number }>(), { size: 13 })
const list = computed(() => (props.colors ? [...colorOrder(props.colors)] : ['C']))
</script>

<template>
  <span class="pips" :aria-label="colors || 'C'">
    <img
      v-for="c in list"
      :key="c"
      :src="symbolUrl(c)"
      alt=""
      class="pip"
      :style="{ width: size + 'px', height: size + 'px' }"
    />
  </span>
</template>

<style scoped>
.pips {
  display: inline-flex;
  gap: 1px;
  vertical-align: -0.1em;
}

.pip {
  display: inline-block;
  border-radius: 50%;
}
</style>
