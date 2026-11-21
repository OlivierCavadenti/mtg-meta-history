<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import type { CardInfo, DeckList as DeckListData } from '../data/types'
import { formatDate, t } from '../lib/i18n'
import CardPreview from './CardPreview.vue'
import DeckList from './DeckList.vue'

export type ModalList = DeckListData & { title: string }

const props = defineProps<{
  list: ModalList | null
  cards: Record<string, CardInfo>
  season: string
  hasPrev: boolean
  hasNext: boolean
}>()
const emit = defineEmits<{ close: []; prev: []; next: [] }>()

const dialog = ref<HTMLDialogElement | null>(null)
const sheet = ref<HTMLElement | null>(null)

watch(
  () => props.list,
  async (list, before) => {
    await nextTick()
    const d = dialog.value
    if (!d) return
    if (list && !d.open) {
      d.showModal()
      // the page behind stays still while the list is open
      document.documentElement.style.overflow = 'hidden'
    } else if (!list && d.open) {
      d.close()
    }
    if (list && before && list !== before) sheet.value?.scrollTo({ top: 0 })
  },
)

function onClose() {
  document.documentElement.style.overflow = ''
  emit('close')
}

/** a click on the backdrop (outside the sheet) closes */
function onDialogClick(e: MouseEvent) {
  if (e.target === dialog.value) dialog.value?.close()
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft' && props.hasPrev) emit('prev')
  if (e.key === 'ArrowRight' && props.hasNext) emit('next')
}

const rankLabel = (r: string) => (/^\d/.test(r) ? `#${r.replace('-', '–')}` : '')

onBeforeUnmount(() => {
  document.documentElement.style.overflow = ''
})
</script>

<template>
  <dialog ref="dialog" class="modal" :aria-label="list?.title" @close="onClose" @click="onDialogClick" @keydown="onKey">
    <div v-if="list" ref="sheet" class="sheet">
      <header class="head">
        <div>
          <p class="meta">
            <template v-if="rankLabel(list.rank)">{{ rankLabel(list.rank) }}, </template>{{ list.player }}, {{ list.event }},
            {{ formatDate(list.date) }}
          </p>
          <h2>{{ list.title }}</h2>
        </div>
        <nav class="nav">
          <button type="button" class="link" :disabled="!hasPrev" @click="emit('prev')">← {{ t('prev') }}</button>
          <button type="button" class="link" :disabled="!hasNext" @click="emit('next')">{{ t('next') }} →</button>
          <a class="link" :href="list.url" target="_blank" rel="noopener noreferrer">{{ t('onSource') }}</a>
          <button type="button" class="link close" @click="dialog?.close()">{{ t('close') }}</button>
        </nav>
      </header>
      <DeckList :list="list" :cards="cards" :season="season" />
    </div>
    <!-- the page's card preview sits under the dialog's top layer: the dialog has its own -->
    <CardPreview />
  </dialog>
</template>

<style scoped>
.modal {
  /* the base reset removes the margin that centers a dialog */
  margin: auto;
  width: min(1240px, 94vw);
  max-width: none;
  max-height: 92vh;
  padding: 0;
  border: 1px solid var(--ink);
  background: var(--paper);
  color: var(--ink);
}

.modal::backdrop {
  background: rgb(20 16 12 / 0.55);
}

.modal[open] {
  animation: open 0.35s var(--ease-out) both;
}

@keyframes open {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.sheet {
  max-height: 92vh;
  overflow-y: auto;
  padding: var(--space-lg) var(--space-xl) var(--space-xl);
  background-image: var(--grain);
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-lg);
  flex-wrap: wrap;
  margin-bottom: var(--space-md);
}

.meta {
  font-style: italic;
  color: var(--muted);
}

h2 {
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  line-height: 1;
  letter-spacing: -0.02em;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-md);
}

.link {
  font-family: var(--font-body);
  font-size: 0.95rem;
  padding: 0;
  border: none;
  background: none;
  color: var(--muted);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.link:hover {
  color: var(--ink);
}

.link:disabled {
  color: var(--faint);
  text-decoration: none;
  cursor: default;
}

.close {
  color: var(--ink);
}

@media (max-width: 640px) {
  .sheet {
    padding: var(--space-md);
  }
}

@media (prefers-reduced-motion: reduce) {
  .modal[open] {
    animation: none;
  }
}
</style>
