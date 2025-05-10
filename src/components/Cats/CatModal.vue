<script setup lang="ts">
import LikeButton from '../Buttons/LikeButton.vue'
import CatImg from './CatImg.vue'

const { catId } = defineProps<{ catId: string }>()
</script>

<template>
  <div
    class="fixed top-0 right-0 flex h-screen w-screen items-center justify-center backdrop-blur-xs"
    @click="$emit('close')"
  >
    <div
      class="relative flex h-[85vh] w-[85vw] flex-col items-center justify-center gap-5 border border-dashed border-black bg-white dark:border-white dark:bg-black"
      @click="($event) => $event.stopPropagation()"
    >
      <button class="absolute top-5 right-5 cursor-pointer" @click="$emit('close')">✖</button>

      <CatImg :cat-id="catId" />

      <LikeButton :cat-id="catId" />
    </div>
  </div>
</template>
