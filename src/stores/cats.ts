import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { getCats, setCats } from '@/stores/utils/catsLocalStorage'

export const useCatsStore = defineStore('cats', () => {
  const cats: Ref<string[]> = ref(getCats())

  function addOrRemoveCat(catId: string) {
    if (cats.value.includes(catId)) {
      cats.value = cats.value.filter((el) => el !== catId)
    } else {
      cats.value = [...cats.value, catId]
    }

    setCats(cats.value)
  }

  return { cats, addOrRemoveCat }
})
