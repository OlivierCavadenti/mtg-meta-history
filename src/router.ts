import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/standard' },
  {
    path: '/:format(standard|pioneer|modern|legacy|vintage|pauper)',
    name: 'format',
    component: () => import('./pages/FormatPage.vue'),
  },
  {
    path: '/:format(standard|pioneer|modern|legacy|vintage|pauper)/staples',
    name: 'staples',
    component: () => import('./pages/StaplesPage.vue'),
  },
  {
    path: '/:format(standard|pioneer|modern|legacy|vintage|pauper)/deck/:id',
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
