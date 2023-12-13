<script setup>

import CountUp from 'vue-countup-v3'
import { ref } from 'vue'
import { usePush } from 'notivue'
import { useNow, useDateFormat } from '@vueuse/core'
import { IconCalculator } from '@tabler/icons-vue'

import HorizontalCard from '@/components/horizontal-card.vue'

import { useSampleStore } from '@/stores/sample'

const push = usePush()
const formatted = useDateFormat(useNow(), 'HH:mm:ss', { locales: 'pt-BR' })
const sampleStore = useSampleStore()

defineProps(['title'])

const startValue = ref(0)

function increment (value) {
  startValue.value = sampleStore.getCounter
  sampleStore.increment(value)
  push.success(`Adicionou ${value}`)
}

function decrement (value) {
  startValue.value = sampleStore.getCounter
  sampleStore.decrement(value)
  push.success(`Removeu ${value}`)
}

</script>

<template>
  <HorizontalCard>
    <div class="flex flex-row gap-2">
      <IconCalculator/>
      <span>
        {{ title }}
      </span>
    </div>
    <div class="text-3xl font-monospace">
      <CountUp
        :start-val="startValue"
        :end-val="sampleStore.getCounter"
      />
    </div>
    <div class="text-2xl font-monospace">
      {{ formatted }}
    </div>
    <div class="flex flex-row gap-2">
      <button
        class="rounded bg-green-700 text-white hover:cursor-pointer py-2 px-4"
        @click="increment(1)"
      >
        +1
      </button>
      <button
        class="rounded bg-green-700 text-white hover:cursor-pointer py-2 px-4"
        @click="increment(5)"
      >
        +5
      </button>
      <button
        class="rounded bg-red-700 text-white hover:cursor-pointer py-2 px-4"
        @click="decrement(5)"
      >
        -5
      </button>
      <button
        class="rounded bg-red-700 text-white hover:cursor-pointer py-2 px-4"
        @click="decrement(1)"
      >
        -1
      </button>
    </div>
  </HorizontalCard>
</template>

<style lang="sass" scoped>

button
  text-transform: uppercase
  font-weight: 700

</style>
