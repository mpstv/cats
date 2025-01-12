<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="top-bar">
    <div class="logo">
      <RouterLink to="/"><img src="./assets/logo.png" alt="logo" /></RouterLink>
      <h1>Cats!</h1>
    </div>

    <div class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/favorites">Favorites</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>
.top-bar {
  min-height: 60px;
  border-bottom: 1px dashed var(--text-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 40px;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
}

.logo h1 {
  margin: 0;
}

.logo img {
  height: 80px;
}

.links {
  display: flex;
  flex-direction: row;
  gap: 100px;
  padding-right: 60px;
}

.links a {
  color: var(--text-color);
  text-decoration: none;
  padding: 5px 10px;
}

.links a:hover {
  outline: 1px dashed var(--text-color);
}
</style>
