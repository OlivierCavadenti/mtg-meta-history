import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/standard' },
  {
    path: '/:format(standard|pioneer|modern|legacy|vintage|pauper|premodern|limited)',
    name: 'format',
    component: () => import('./pages/FormatPage.vue'),
  },
  {
    path: '/:format(standard|pioneer|modern|legacy|vintage|pauper|premodern|limited)/staples',
    name: 'staples',
    component: () => import('./pages/StaplesPage.vue'),
  },
  {
    path: '/:format(standard|pioneer|modern|legacy|vintage|pauper|premodern|limited)/archetypes',
    name: 'archetypes',
    component: () => import('./pages/ArchetypesPage.vue'),
  },
  {
    path: '/:format(standard|pioneer|modern|legacy|vintage|pauper|premodern|limited)/archetype/:slug',
    name: 'archetype',
    component: () => import('./pages/ArchetypePage.vue'),
  },
  {
    path: '/:format(standard|pioneer|modern|legacy|vintage|pauper|premodern|limited)/colors',
    name: 'colors',
    component: () => import('./pages/ColorsPage.vue'),
  },
  {
    path: '/:format(standard|pioneer|modern|legacy|vintage|pauper|premodern|limited)/deck/:id',
    name: 'deck',
    component: () => import('./pages/DeckPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('./pages/NotFoundPage.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 110 }
    return { top: 0 }
  },
})

// After a deploy, a tab (or a cached index.html) can still reference chunks from the
// previous build, which no longer exist. Reload the target page instead of failing.
const RELOAD_KEY = 'mtg-chunk-reload'
router.onError((error, to) => {
  const msg = error instanceof Error ? error.message : String(error)
  if (!/dynamically imported module|Importing a module script failed|Failed to fetch/i.test(msg)) return
  try {
    if (sessionStorage.getItem(RELOAD_KEY) === to.fullPath) return
    sessionStorage.setItem(RELOAD_KEY, to.fullPath)
  } catch {
    /* storage unavailable: reload anyway */
  }
  window.location.assign(router.resolve(to.fullPath).href)
})

router.afterEach(() => {
  try {
    sessionStorage.removeItem(RELOAD_KEY)
  } catch {
    /* storage unavailable */
  }
})
