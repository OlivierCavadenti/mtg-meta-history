<script setup lang="ts">
import { computed } from 'vue'
import { colorOrder } from '../lib/cards'

const props = withDefaults(defineProps<{ colors: string; size?: number }>(), { size: 10 })
const list = computed(() => (props.colors ? [...colorOrder(props.colors)] : ['C']))
</script>

<template>
  <span class="pips" :aria-label="colors || 'C'">
    <span
      v-for="c in list"
      :key="c"
      class="pip"
      :class="`pip-${c.toLowerCase()}`"
      :style="{ width: size + 'px', height: size + 'px' }"
    ></span>
  </span>
</template>

<style scoped>
.pips {
  display: inline-flex;
  gap: 2px;
  vertical-align: middle;
}

.pip {
  display: inline-block;
  border-radius: 50%;
  border: 1px solid var(--ink);
}

.pip-w { background: var(--pip-w); }
.pip-u { background: var(--pip-u); }
.pip-b { background: var(--pip-b); }
.pip-r { background: var(--pip-r); }
.pip-g { background: var(--pip-g); }
.pip-c { background: var(--tone-c); }
</style>
