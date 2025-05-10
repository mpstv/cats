<script setup lang="ts">
import { ref } from 'vue'
import CatImg from '../components/Cats/CatImg.vue'
import CatModal from '../components/Cats/CatModal.vue'
import { useCatsStore } from '@/stores/cats'

const activeCat = ref('')
const store = useCatsStore()
</script>

<template>
  <div class="flex flex-row flex-wrap gap-5">
    <p class="text-center grow" v-if="!store.cats.length">You haven't added anything to your favorites yet.</p>

    <div
      v-for="cat in store.cats"
      :key="cat"
      class="flex cursor-pointer flex-col items-center gap-2.5"
    >
      <CatImg :small="true" :key="cat" :cat-id="cat" @click="() => (activeCat = cat)" />
    </div>
  </div>

  <CatModal v-if="activeCat" :cat-id="activeCat" @close="() => (activeCat = '')" />
</template>
