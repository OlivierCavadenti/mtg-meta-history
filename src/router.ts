import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/HomePage.vue'),
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: () => import('./pages/TimelinePage.vue'),
  },
  {
    path: '/year/:year',
    name: 'year',
    component: () => import('./pages/YearPage.vue'),
  },
  {
    path: '/year/:year/:format',
    name: 'year-format',
    component: () => import('./pages/YearFormatPage.vue'),
  },
  {
    path: '/decks',
    name: 'decks',
    component: () => import('./pages/DecksPage.vue'),
  },
  {
    path: '/decks/:slug',
    name: 'deck',
    component: () => import('./pages/DeckPage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./pages/AboutPage.vue'),
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
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: 'smooth', top: 80 })
        }, 300)
      })
    }
    return savedPosition || { top: 0 }
  },
})
