<script setup>

import Counter from '@/components/counter.vue'
import Potatoes from '@/components/potatoes.vue'

const envExample = import.meta.env.VITE_ENV_EXAMPLE

</script>

<template>
  <div class="flex flex-col">
    <Counter title="Batatinhas"/>
    <Potatoes title="Batatinhas"/>
    <p class="text-center">
      {{ envExample }}
    </p>
  </div>
</template>
