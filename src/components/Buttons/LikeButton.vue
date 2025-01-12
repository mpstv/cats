<script setup lang="ts">
import DefaultButton from './DefaultButton.vue'
import { useCatsStore } from '@/stores/cats'

const { disabled, catId } = defineProps<{
  disabled?: boolean
  catId: string
}>()

const store = useCatsStore()
</script>

<template>
  <DefaultButton
    :disabled="disabled"
    :class="{ active: store.cats.includes(catId) }"
    @click="() => store.addOrRemoveCat(catId)"
  >
    ♥
  </DefaultButton>
</template>

<style scoped>
.active {
  color: red;
}
</style>
