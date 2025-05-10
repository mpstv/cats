<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Routes } from './router';

const links = [
  {
    text: 'Home',
    url: Routes.home,
  },
  {
    text: 'Favorites',
    url: Routes.favorites,
  },
  {
    text: 'About',
    url: Routes.about,
  },
]
</script>

<template>
  <nav
    class="mb-4 flex min-h-16 flex-row items-center justify-between border-b border-dashed border-black px-10 py-1.5 dark:border-white"
  >
    <div class="flex flex-row items-center gap-12">
      <RouterLink :to="Routes.home">
        <img class="h-20 min-h-20 w-20 min-w-20" src="./assets/logo.png" alt="logo" />
      </RouterLink>

      <h1 class="m-0">Cats!</h1>
    </div>

    <div class="flex flex-row items-center gap-24">
      <RouterLink
        v-for="link in links"
        :to="link.url"
        :key="link.url"
        class="px-1 py-2 no-underline hover:outline hover:outline-black hover:outline-dashed dark:hover:outline-white"
      >
        {{ link.text }}
      </RouterLink>
    </div>
  </nav>

  <RouterView />
</template>
