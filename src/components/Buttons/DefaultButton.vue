<script setup lang="ts">
const { disabled } = defineProps<{ disabled: boolean }>()
</script>

<template>
  <button class="cursor-pointer disabled:opacity-50" :disabled="disabled">
    <slot></slot>
  </button>
</template>
