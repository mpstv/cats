<script setup lang="ts">
import { ref } from 'vue'
import { fetchCat } from '../utils/catsApi'
import LikeButton from '../components/Buttons/LikeButton.vue'
import DefaultButton from '../components/Buttons/DefaultButton.vue'
import CatImg from '../components/Cats/CatImg.vue'

const loading = ref(true)
const catId = ref('')

async function nextCat() {
  loading.value = true

  catId.value = await fetchCat()

  loading.value = false
}

nextCat()
</script>

<template>
  <div class="container">
    <p v-if="loading" class="loading">Loading...</p>
    <CatImg v-else :cat-id="catId" />

    <div class="buttons">
      <LikeButton :disabled="loading" :cat-id="catId" />

      <DefaultButton :disabled="loading" @click="nextCat">↻</DefaultButton>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 1.5em;
}

.loading {
  padding: 0;
  margin: 0;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.buttons {
  display: flex;
  flex-direction: row;
  gap: 40px;
}
</style>
