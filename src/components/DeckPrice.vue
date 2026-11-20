<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { DeckList, FormatId, PriceFile } from '../data/types'
import { loadPrices } from '../data/load'
import { formatDate, locale, t } from '../lib/i18n'
import { buyList, cardKingdomUrl, cardmarketWantsUrl, deckPrice, formatPrice, listText, tcgplayerUrl, type Currency } from '../lib/shop'

const props = defineProps<{ list: DeckList; format: FormatId }>()

const prices = ref<PriceFile | null>(null)
watch(
  () => props.format,
  async (f) => {
    prices.value = null
    const loaded = (await loadPrices(f)) ?? null
    if (props.format === f) prices.value = loaded
  },
  { immediate: true },
)

const lines = computed(() => buyList(props.list))
const copies = computed(() => lines.value.reduce((s, [n]) => s + n, 0))

/** euros first in French (Cardmarket), dollars first in English (TCGplayer) */
const currencies = computed<Currency[]>(() => (locale.value === 'fr' ? ['EUR', 'USD'] : ['USD', 'EUR']))
const STORE: Record<Currency, string> = { EUR: 'Cardmarket', USD: 'TCGplayer' }

const totals = computed(() =>
  prices.value ? currencies.value.map((c) => ({ currency: c, ...deckPrice(lines.value, prices.value!, c) })) : [],
)
const shown = computed(() => totals.value.filter((p) => p.lines.length > 0))
const primary = computed(() => shown.value[0])
const priciest = computed(() => primary.value?.lines.slice(0, 3) ?? [])

/** French puts a non-breaking space before a colon */
const colon = computed(() => (locale.value === 'fr' ? ' :' : ':'))

const missingNote = (n: number) => `${n} ${n > 1 ? t('priceMissingMany') : t('priceMissingOne')}`

const copied = ref(false)
function copyForCardmarket() {
  // the link opens normally; the list goes to the clipboard to paste into a wants list
  navigator.clipboard
    ?.writeText(listText(lines.value))
    .then(() => (copied.value = true))
    .catch(() => {
      /* clipboard unavailable */
    })
}
</script>

<template>
  <section v-if="shown.length" class="price">
    <h2>{{ t('priceTitle') }}</h2>
    <p class="totals">
      <template v-for="(p, i) in shown" :key="p.currency">
        <span class="total">≈ {{ formatPrice(p.total, p.currency, locale) }}</span>
        {{ t('priceOn') }} {{ STORE[p.currency] }}<template v-if="p.missing">
          ({{ missingNote(p.missing) }})</template><template v-if="i < shown.length - 1"> · </template>
      </template>
    </p>
    <p class="caption">
      {{ copies }} {{ t('priceCards') }}. {{ t('priceSource') }}
      {{ prices?.date ? formatDate(prices.date) : '' }}.
    </p>
    <p v-if="priciest.length && primary" class="caption">
      {{ t('priciest') }}{{ colon }}
      <template v-for="(l, i) in priciest" :key="l.name">
        {{ l.count }} {{ l.name }} ({{ formatPrice(l.sub, primary.currency, locale) }})<template v-if="i < priciest.length - 1">, </template>
      </template>.
    </p>
    <p class="stores">
      {{ t('buy') }}{{ colon }}
      <a :href="cardmarketWantsUrl(locale)" target="_blank" rel="noopener noreferrer" @click="copyForCardmarket">Cardmarket</a> <span class="hint">({{ copied ? t('cardmarketCopied') : t('cardmarketHint') }})</span>,
      <a :href="tcgplayerUrl(lines)" target="_blank" rel="noopener noreferrer">TCGplayer</a>,
      <a :href="cardKingdomUrl(lines)" target="_blank" rel="noopener noreferrer">Card Kingdom</a>.
    </p>
  </section>
</template>

<style scoped>
.price {
  margin-top: var(--space-xl);
  max-width: var(--measure);
}

h2 {
  font-size: 1.35rem;
  border-top: 1px solid var(--ink);
  padding-top: var(--space-xs);
  margin-bottom: var(--space-sm);
}

.totals {
  font-size: 1.15rem;
}

.total {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.5rem;
  font-variant-numeric: lining-nums;
}

.caption {
  margin-top: var(--space-xs);
  font-style: italic;
  color: var(--muted);
}

.stores {
  margin-top: var(--space-sm);
}

.stores a {
  text-underline-offset: 3px;
}

.hint {
  font-style: italic;
  color: var(--muted);
}
</style>
