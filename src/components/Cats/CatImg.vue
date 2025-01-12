<script setup lang="ts">
import { getCatLink } from '../../utils/catsApi'

const { catId } = defineProps<{ catId: string }>()

const catLink = getCatLink(catId)
</script>

<template>
  <img class="cat-img" :src="catLink" :alt="`cat_${catId}`" />
</template>

<style scoped>
.cat-img {
  height: var(--cat-img-height, 70vh);
  max-width: var(--cat-img-width, 70vw);
}
</style>
