<script setup lang="ts">
defineProps<{
  colors: string
  size?: number
}>()

const SYMBOL_URL = 'https://svgs.scryfall.io/card-symbols'

function parseColors(colors: string): string[] {
  const mapping: Record<string, string> = {
    W: 'W', U: 'U', B: 'B', R: 'R', G: 'G', C: 'C',
    w: 'W', u: 'U', b: 'B', r: 'R', g: 'G', c: 'C',
  }
  return [...colors].map((c) => mapping[c]).filter(Boolean)
}
</script>

<template>
  <span class="mana-symbols">
    <img
      v-for="sym in parseColors(colors)"
      :key="sym"
      :src="`${SYMBOL_URL}/${sym}.svg`"
      :alt="sym"
      class="mana-symbol"
      :style="{ width: (size || 14) + 'px', height: (size || 14) + 'px' }"
    />
  </span>
</template>

<style scoped>
.mana-symbols {
  display: inline-flex;
  align-items: center;
  gap: 1px;
  vertical-align: middle;
}

.mana-symbol {
  display: inline-block;
  border-radius: 50%;
}
</style>
