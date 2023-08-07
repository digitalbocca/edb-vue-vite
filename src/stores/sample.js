import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSampleStore = defineStore('sample', () => {
  const counter = ref(0)

  const getCounter = computed(() => counter.value)

  function increment (value) {
    counter.value = counter.value + value
  }

  function decrement (value) {
    counter.value = counter.value - value
  }

  return {
    getCounter,
    increment,
    decrement
  }
})
