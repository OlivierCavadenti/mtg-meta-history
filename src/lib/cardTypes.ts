import { ref, computed } from 'vue'

export type CardType = 'creature' | 'planeswalker' | 'battle' | 'instant' | 'sorcery' | 'artifact' | 'enchantment' | 'land' | 'unknown'

export type CardInfo = {
  type: CardType
  cmc: number
  img?: string // normal-size image URL
  imgLarge?: string // large-size image URL
}

const INDEX_KEY = 'mtg-card-index-v3'
const META_KEY = 'mtg-card-index-meta-v3'
const REFRESH_INTERVAL = 7 * 24 * 60 * 60 * 1000 // 7 days

const SCRYFALL_BULK_META = 'https://api.scryfall.com/bulk-data'

type IndexMeta = {
  updatedAt: number
  bulkUpdatedAt?: string
  count?: number
}

function loadIndex(): Record<string, CardInfo> {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(localStorage.getItem(INDEX_KEY) || '{}')
  } catch {
    return {}
  }
}

function loadMeta(): IndexMeta | null {
  if (typeof window === 'undefined') return null
  try {
    return JSON.parse(localStorage.getItem(META_KEY) || 'null')
  } catch {
    return null
  }
}

function saveIndex(idx: Record<string, CardInfo>, meta: IndexMeta) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(INDEX_KEY, JSON.stringify(idx))
    localStorage.setItem(META_KEY, JSON.stringify(meta))
  } catch {
    /* quota */
  }
}

const cardIndex = ref<Record<string, CardInfo>>(loadIndex())
const loading = ref(false)
const progress = ref(0) // 0..1
const error = ref<string | null>(null)

function parseTypeLine(typeLine: string): CardType {
  const t = (typeLine || '').toLowerCase()
  if (t.includes('land')) return 'land'
  if (t.includes('creature')) return 'creature'
  if (t.includes('planeswalker')) return 'planeswalker'
  if (t.includes('battle')) return 'battle'
  if (t.includes('instant')) return 'instant'
  if (t.includes('sorcery')) return 'sorcery'
  if (t.includes('artifact')) return 'artifact'
  if (t.includes('enchantment')) return 'enchantment'
  return 'unknown'
}

async function downloadBulkData(): Promise<void> {
  if (loading.value) return
  loading.value = true
  error.value = null
  progress.value = 0

  try {
    // 1. Get the latest bulk data URL (oracle_cards = one entry per unique card, smallest set)
    const metaRes = await fetch(SCRYFALL_BULK_META)
    if (!metaRes.ok) throw new Error('Failed to fetch bulk-data metadata')
    const metaJson = await metaRes.json() as { data: { type: string; download_uri: string; updated_at: string; size: number }[] }
    const oracle = metaJson.data.find((b) => b.type === 'oracle_cards')
    if (!oracle) throw new Error('oracle_cards bulk not found')

    // 2. Download the bulk JSON with progress tracking
    const res = await fetch(oracle.download_uri)
    if (!res.ok) throw new Error(`Failed to fetch bulk JSON: ${res.status}`)

    const total = oracle.size
    const reader = res.body?.getReader()
    if (!reader) throw new Error('No reader')

    const chunks: Uint8Array[] = []
    let received = 0
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      if (value) {
        chunks.push(value)
        received += value.length
        progress.value = Math.min(0.95, received / total)
      }
    }

    // 3. Parse the JSON
    const blob = new Blob(chunks)
    const text = await blob.text()
    const cards = JSON.parse(text) as {
      name: string
      type_line: string
      cmc?: number
      image_uris?: { normal?: string; large?: string }
      card_faces?: { name?: string; type_line?: string; cmc?: number; image_uris?: { normal?: string; large?: string } }[]
    }[]

    // 4. Strip to essential fields and index by every face name
    const idx: Record<string, CardInfo> = {}

    function addEntry(name: string, info: CardInfo) {
      if (!name) return
      if (!(name in idx)) idx[name] = info
    }

    for (const card of cards) {
      if (!card.name) continue
      const baseImgs = card.image_uris
      const baseInfo: CardInfo = {
        type: parseTypeLine(card.type_line),
        cmc: typeof card.cmc === 'number' ? card.cmc : 0,
      }
      if (baseImgs?.normal) baseInfo.img = baseImgs.normal
      if (baseImgs?.large) baseInfo.imgLarge = baseImgs.large

      if (card.card_faces && card.card_faces.length > 0) {
        // Double-faced or split card: index each face with its own image when available
        for (const face of card.card_faces) {
          if (!face.name) continue
          const faceImgs = face.image_uris || baseImgs
          const faceInfo: CardInfo = {
            type: parseTypeLine(face.type_line || card.type_line),
            cmc: typeof face.cmc === 'number' ? face.cmc : baseInfo.cmc,
          }
          if (faceImgs?.normal) faceInfo.img = faceImgs.normal
          if (faceImgs?.large) faceInfo.imgLarge = faceImgs.large
          addEntry(face.name, faceInfo)
        }
        // Also index full combined name → front face
        const frontImgs = card.card_faces[0]?.image_uris || baseImgs
        const combinedInfo: CardInfo = { ...baseInfo }
        if (frontImgs?.normal) combinedInfo.img = frontImgs.normal
        if (frontImgs?.large) combinedInfo.imgLarge = frontImgs.large
        addEntry(card.name, combinedInfo)
      } else {
        addEntry(card.name, baseInfo)
      }
    }

    const meta: IndexMeta = {
      updatedAt: Date.now(),
      bulkUpdatedAt: oracle.updated_at,
      count: Object.keys(idx).length,
    }

    saveIndex(idx, meta)
    cardIndex.value = idx
    progress.value = 1
  } catch (e: unknown) {
    const err = e instanceof Error ? e.message : 'Unknown error'
    error.value = err
    console.warn('Bulk card index download failed:', err)
  } finally {
    loading.value = false
  }
}

// Bootstrap: load on first import, refresh if stale
function bootstrap() {
  if (typeof window === 'undefined') return
  const meta = loadMeta()
  const empty = Object.keys(cardIndex.value).length === 0
  const stale = !meta || (Date.now() - meta.updatedAt) > REFRESH_INTERVAL
  if (empty || stale) {
    // Don't block — fire and forget
    downloadBulkData()
  }
}

bootstrap()

export function useCardTypes(_names?: string[]) {
  // The bulk index is shared — names argument is ignored, kept for API compatibility
  // ready is true when we have any data (we don't wait for specific cards since
  // the bulk index either has them all, or never will for fictional ones)
  const ready = computed(() => Object.keys(cardIndex.value).length > 0 && !loading.value)
  return { info: cardIndex, ready, loading, progress, error, refresh: downloadBulkData }
}

export function getCardInfo(name: string): CardInfo | undefined {
  return cardIndex.value[name]
}

export function getCardImage(name: string, size: 'normal' | 'large' = 'normal'): string | undefined {
  const info = cardIndex.value[name]
  if (!info) return undefined
  return size === 'large' ? (info.imgLarge || info.img) : (info.img || info.imgLarge)
}

export { downloadBulkData }
