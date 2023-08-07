<script setup>

import CountUp from 'vue-countup-v3'
import { ref } from 'vue'
import { usePush } from 'notivue'
import { useNow, useDateFormat } from '@vueuse/core'

import { useSampleStore } from '@/stores/sample'
import { IconCalculator } from '@tabler/icons-vue'

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
  <div class="flex flex-row justify-between items-center gap-4 p-4 m-4 bg-slate-100 rounded">
    <div class="flex flex-row gap-2">
      <IconCalculator/>
      <span>
        {{ title }}
      </span>
    </div>
    <div class="text-3xl font-bold font-mono">
      <CountUp
        :start-val="startValue"
        :end-val="sampleStore.getCounter"
      />
    </div>
    <div class="font-bold font-mono">
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
  </div>
</template>
