<script setup lang="ts">
import { getCatLink } from '../../utils/catsApi'

const { catId } = defineProps<{ catId: string; small?: boolean }>()

const catLink = getCatLink(catId)
</script>

<template>
  <img
    :class="[small ? 'h-[200px] w-[200px]' : 'h-[70vh] w-[70vw]', 'object-contain']"
    :src="catLink"
    :alt="`cat_${catId}`"
  />
</template>
