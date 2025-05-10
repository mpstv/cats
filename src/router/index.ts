import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const enum Routes {
  home= '/',
  favorites = '/favorites',
  about = '/about'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Routes.home,
      name: 'home',
      component: HomeView,
    },
    {
      path: Routes.favorites,
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue'),
    },
    {
      path: Routes.about,
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
