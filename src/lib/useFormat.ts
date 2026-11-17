import { computed, ref, shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { FormatData, FormatId } from '../data/types'
import { getFormat, type FormatDef } from '../data/formats'
import { loadFormat } from '../data/load'

export function useFormat() {
  const route = useRoute()
  const formatId = computed(() => String(route.params.format || 'standard') as FormatId)
  const format = computed<FormatDef | undefined>(() => getFormat(formatId.value))
  const data = shallowRef<FormatData | null>(null)
  const loading = ref(false)

  watch(
    formatId,
    async (id) => {
      data.value = null
      const p = loadFormat(id)
      if (!p) return
      loading.value = true
      try {
        const result = await p
        if (formatId.value === id) data.value = result
      } finally {
        loading.value = false
      }
    },
    { immediate: true },
  )

  return { formatId, format, data, loading }
}
