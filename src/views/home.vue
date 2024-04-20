<script setup>

import { computed, ref } from 'vue'
import { vConfetti } from '@neoconfetti/vue'

import { IconBalloon } from '@tabler/icons-vue'

import Buttons from '@/components/buttons.vue'
import Counter from '@/components/counter.vue'
import Potatoes from '@/components/potatoes.vue'

import { DEFAULT_ENV_TEXT } from '@/constants'

const envExample = import.meta.env.VITE_ENV_EXAMPLE ?? ''

const envTextExample = computed(() => {
  return envExample.length ? envExample : DEFAULT_ENV_TEXT
})

const showConfetti = ref(false)

const toggleConfetti = () => {
  showConfetti.value = !showConfetti.value
}

</script>

<template>
  <div
    class="flex flex-col"
  >
    <Counter title="Counter" />
    <Potatoes title="Batatinhas" />
    <Buttons title="Buttons" />

    <div
      style=""
      class="flex flex-row justify-center"
    >
      <div
        v-if="showConfetti"
        v-confetti
      >
      <!-- // -->
      </div>
    </div>

    <p
      class="text-center mt-4"
      @click="toggleConfetti()"
    >
      {{ envTextExample }}
    </p>

    <div
      class="flex flex-row justify-center mt-8"
    >
      <IconBalloon
        :width="48"
        :stroke="2"
        color="#333333"
      />
    </div>
  </div>
</template>
