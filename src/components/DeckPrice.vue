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

type Tile = { store: string; url: string; amount?: string; missing: number; copy?: boolean }

const tiles = computed<Tile[]>(() => {
  const p = prices.value
  if (!p) return []
  const total = (c: Currency) => {
    const d = deckPrice(lines.value, p, c)
    return d.lines.length ? { amount: `≈ ${formatPrice(d.total, c, locale.value)}`, missing: d.missing } : { missing: 0 }
  }
  const cardmarket: Tile = { store: 'Cardmarket', url: cardmarketWantsUrl(locale.value), copy: true, ...total('EUR') }
  const tcgplayer: Tile = { store: 'TCGplayer', url: tcgplayerUrl(lines.value), ...total('USD') }
  // Scryfall has no Card Kingdom prices: the store shows its own once the list is loaded
  const cardKingdom: Tile = { store: 'Card Kingdom', url: cardKingdomUrl(lines.value), missing: 0 }
  return locale.value === 'fr' ? [cardmarket, tcgplayer, cardKingdom] : [tcgplayer, cardKingdom, cardmarket]
})
const priced = computed(() => tiles.value.some((x) => x.amount))

const unpriced = (n: number) => `${t('excl')} ${n} ${n > 1 ? t('cards') : t('cardOne')}`

const copied = ref(false)
function onClick(tile: Tile) {
  if (!tile.copy) return
  // Cardmarket takes no prefilled list: the link opens its wants lists, the list goes to the clipboard
  navigator.clipboard
    ?.writeText(listText(lines.value))
    .then(() => (copied.value = true))
    .catch(() => {
      /* clipboard unavailable */
    })
}
</script>

<template>
  <section v-if="priced" class="price">
    <h2>{{ t('priceTitle') }}</h2>
    <div class="tiles">
      <a
        v-for="tile in tiles"
        :key="tile.store"
        class="tile"
        :href="tile.url"
        target="_blank"
        rel="noopener noreferrer"
        :title="tile.copy ? t('cardmarketTitle') : undefined"
        @click="onClick(tile)"
      >
        <span class="store">{{ tile.store }}</span>
        <span v-if="tile.amount" class="amount">{{ tile.amount }}</span>
        <span v-else class="amount amount--none">{{ t('prefilled') }}</span>
        <span v-if="tile.missing" class="missing">{{ unpriced(tile.missing) }}</span>
        <span class="action">{{ tile.copy ? (copied ? t('copiedPaste') : t('copyOpen')) : t('buyArrow') }}</span>
      </a>
    </div>
    <p v-if="prices?.date" class="caption">{{ t('priceNoteA') }} {{ formatDate(prices.date) }}, {{ t('priceNoteB') }}.</p>
  </section>
</template>

<style scoped>
.price {
  margin-top: var(--space-xl);
}

h2 {
  font-size: 1.35rem;
  border-top: 1px solid var(--ink);
  padding-top: var(--space-xs);
  margin-bottom: var(--space-md);
}

.tiles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 11rem));
  gap: var(--space-sm);
}

/* a square printed frame per store, the whole tile is the link */
.tile {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  padding: var(--space-sm);
  border: 1px solid var(--ink);
  background: var(--paper);
  color: var(--ink);
  text-decoration: none;
  transition: background-color 0.25s var(--ease-out);
}

.tile:hover {
  background: var(--paper-deep);
}

.store {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.05rem;
}

.amount {
  margin-top: auto;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.9rem;
  line-height: 1;
  font-variant-numeric: lining-nums;
}

.amount--none {
  font-family: var(--font-body);
  font-weight: 400;
  font-style: italic;
  font-size: 1rem;
  color: var(--muted);
}

.missing {
  margin-top: 0.2rem;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--muted);
}

.action {
  margin-top: auto;
  font-size: 0.92rem;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.caption {
  margin-top: var(--space-sm);
  font-size: 0.9rem;
  font-style: italic;
  color: var(--muted);
}

@media (max-width: 520px) {
  .tiles {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-xs);
  }

  .tile {
    padding: var(--space-xs);
  }

  .amount {
    font-size: 1.35rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tile {
    transition: none;
  }
}
</style>
