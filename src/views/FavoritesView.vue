<script setup lang="ts">
import { ref } from 'vue'
import CatImg from '../components/Cats/CatImg.vue'
import CatModal from '../components/Cats/CatModal.vue'
import { useCatsStore } from '@/stores/cats'

const activeCat = ref('')
const store = useCatsStore()
</script>

<template>
  <div class="container">
    <div v-for="cat in store.cats" :key="cat" class="cat">
      <CatImg :key="cat" :cat-id="cat" @click="() => (activeCat = cat)" />
    </div>
  </div>

  <CatModal v-if="activeCat" :cat-id="activeCat" @close="() => (activeCat = '')" />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}

.cat {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  --cat-img-height: 200px;
  --cat-img-width: 200px;
}
</style>
