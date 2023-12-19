<script setup>

import { computed } from 'vue'

import Buttons from '@/components/buttons.vue'
import Counter from '@/components/counter.vue'
import Potatoes from '@/components/potatoes.vue'

import { DEFAULT_ENV_TEXT } from '@/constants'

const envExample = import.meta.env.VITE_ENV_EXAMPLE ?? ''

const envTextExample = computed(() => {
  return envExample.length ? envExample : DEFAULT_ENV_TEXT
})

</script>

<template>
  <div class="flex flex-col">
    <Counter title="Counter"/>
    <Potatoes title="Batatinhas"/>
    <Buttons title="Buttons"/>

    <p class="text-center mt-4">
      {{ envTextExample }}
    </p>
  </div>
</template>
