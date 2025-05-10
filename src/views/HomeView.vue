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
  <div class="flex flex-col items-center gap-5 text-2xl">
    <p v-if="loading" class="m-0 flex h-[70vh] flex-col items-center justify-center p-0">
      Loading...
    </p>

    <CatImg v-else :cat-id="catId" />

    <div class="flex flex-row gap-10">
      <LikeButton :disabled="loading" :cat-id="catId" />

      <DefaultButton :disabled="loading" @click="nextCat">↻</DefaultButton>
    </div>
  </div>
</template>
