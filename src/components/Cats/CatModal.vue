<script setup lang="ts">
import LikeButton from '../Buttons/LikeButton.vue'
import CatImg from './CatImg.vue'

const { catId } = defineProps<{ catId: string }>()
</script>

<template>
  <div class="wrapper" @click="$emit('close')">
    <div class="container" @click="($event) => $event.stopPropagation()">
      <button class="close-button" @click="$emit('close')">✖</button>

      <CatImg :cat-id="catId" />

      <LikeButton :cat-id="catId" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  border: 1px dashed var(--text-color);
  height: 85vh;
  width: 85vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: var(--background-color);
}

.close-button {
  all: unset;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: var(--text-color);
}
</style>
