<script setup lang="ts">
import { computed, watch, nextTick, ref } from 'vue'
import type { MetaEra, BanEntry, SetRelease, FormatId } from '../data/types'
import { FORMAT_LABELS } from '../data/types'
import EraBand from './EraBand.vue'
import BanBand from './BanBand.vue'
import SetReleaseBand from './SetReleaseBand.vue'
import { t } from '../lib/i18n'

const props = defineProps<{
  era: MetaEra | null
  bans?: BanEntry[]
  setReleases?: SetRelease[]
  format?: FormatId
  year?: number
  formatColor?: string
  subtitle?: string
}>()

const emit = defineEmits<{
  close: []
}>()

const panelRef = ref<HTMLElement | null>(null)

watch(() => props.era, async (newEra) => {
  if (newEra) {
    await nextTick()
    panelRef.value?.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

const nearbyBans = computed(() => {
  if (!props.bans || !props.era) return []
  const eraStart = props.era.start
  const eraEnd = props.era.end
  return props.bans.filter((b) => {
    const banMonth = b.date.slice(0, 7)
    return banMonth >= eraStart && banMonth <= eraEnd
  })
})

const nearbyReleases = computed(() => {
  if (!props.setReleases || !props.era) return []
  const eraStart = props.era.start
  const eraEnd = props.era.end
  return props.setReleases.filter((r) => {
    const relMonth = r.date.slice(0, 7)
    return relMonth >= eraStart && relMonth <= eraEnd
  })
})
</script>

<template>
  <Teleport to="body">
    <transition name="panel">
      <div v-if="era" class="era-panel-overlay" @click.self="emit('close')">
        <div class="era-panel" ref="panelRef">
          <div class="era-panel-header">
            <div>
              <span class="era-panel-format" v-if="format && year">
                {{ FORMAT_LABELS[format!] }} {{ year }}
              </span>
              <span class="era-panel-subtitle" v-if="subtitle"> &mdash; {{ subtitle }}</span>
            </div>
            <button class="era-panel-close" @click="emit('close')" aria-label="Close">&times;</button>
          </div>

          <div class="era-panel-body">
            <SetReleaseBand
              v-for="rel in nearbyReleases"
              :key="rel.date"
              :release="rel"
            />

            <EraBand
              :era="era"
              :format-color="formatColor"
              :format="format"
              :year="year"
            />

            <BanBand
              v-for="ban in nearbyBans"
              :key="ban.date"
              :ban="ban"
            />
          </div>

          <div class="era-panel-footer">
            <router-link
              v-if="format && year"
              :to="`/year/${year}/${format}`"
              class="era-panel-fullpage"
              @click="emit('close')"
            >
              {{ t('filter.label') === 'Filtre' ? 'Voir la page complète' : 'View full page' }} &rarr;
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.era-panel-overlay {
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(30, 26, 21, 0.3);
  display: flex;
  justify-content: flex-end;
}

.era-panel {
  width: min(620px, 90vw);
  height: 100vh;
  background: var(--paper);
  border-left: 2px solid var(--ink);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.15);
}

.era-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) var(--space-lg);
  border-bottom: 1px solid var(--line);
  position: sticky;
  top: 0;
  background: var(--paper);
  z-index: 10;
}

.era-panel-format {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--ink);
}

.era-panel-subtitle {
  font-style: italic;
  font-size: 0.85rem;
  color: var(--muted);
}

.era-panel-close {
  background: none;
  border: 1px solid var(--line);
  font-size: 1.4rem;
  line-height: 1;
  padding: 2px 10px;
  cursor: pointer;
  color: var(--muted);
  transition: all 0.15s;
}

.era-panel-close:hover {
  border-color: var(--ink);
  color: var(--ink);
}

.era-panel-body {
  flex: 1;
  padding: var(--space-lg);
  overflow-y: auto;
}

.era-panel-footer {
  padding: var(--space-md) var(--space-lg);
  border-top: 1px solid var(--line);
  text-align: center;
}

.era-panel-fullpage {
  font-family: var(--font-label);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: var(--muted);
  padding: var(--space-xs) var(--space-md);
  border: 1px solid var(--line);
  transition: all 0.15s;
}

.era-panel-fullpage:hover {
  border-color: var(--ink);
  color: var(--ink);
  background: var(--paper-dark);
}

.panel-enter-active,
.panel-leave-active {
  transition: opacity 0.2s ease;
}

.panel-enter-active .era-panel,
.panel-leave-active .era-panel {
  transition: transform 0.25s ease;
}

.panel-enter-from {
  opacity: 0;
}
.panel-enter-from .era-panel {
  transform: translateX(100%);
}

.panel-leave-to {
  opacity: 0;
}
.panel-leave-to .era-panel {
  transform: translateX(100%);
}

@media (max-width: 480px) {
  .era-panel {
    width: 100vw;
  }
}
</style>
