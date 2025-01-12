<script setup lang="ts">
const { disabled } = defineProps<{ disabled: boolean }>()
</script>

<template>
  <button class="default-button" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style scoped>
.default-button {
  all: unset;
  cursor: pointer;
}

.default-button:disabled {
  opacity: 0.5;
}
</style>
