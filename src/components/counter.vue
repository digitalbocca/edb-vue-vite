<script setup>

import CountUp from 'vue-countup-v3'
import { ref } from 'vue'
import { push } from 'notivue'
import { useNow, useDateFormat } from '@vueuse/core'
import { IconCalculator } from '@tabler/icons-vue'
import NumberFlow from '@number-flow/vue'

import Button from '@/components/base/button'
import HorizontalCard from '@/components/horizontal-card.vue'

import { useSampleStore } from '@/stores/sample'

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
      <IconCalculator
        class="w-6 h-6"
        :stroke="1.5"
      />
      <span>
        {{ title }}
      </span>
    </div>
    <div class="flex flex-col items-center">
      <div class="text-xs text-slate-400">
        vue-countup-v3
      </div>
      <div class="text-3xl font-monospace">
        <CountUp
          :start-val="startValue"
          :end-val="sampleStore.getCounter"
        />
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="text-xs text-slate-400">
        @number-flow/vue
      </div>
      <div class="text-3xl font-monospace">
        <NumberFlow
          :value="sampleStore.getCounter"
          :format="{ notation: 'compact' } /* Intl.NumberFormat options */"
          :locales="'pt-BR' /* Intl.NumberFormat locales */"
        />
      </div>
    </div>
    <div class="text-2xl font-monospace">
      {{ formatted }}
    </div>
    <div class="flex flex-row gap-2">
      <Button
        label="+1"
        variant="success"
        @clicked="increment(1)"
      />

      <Button
        label="+5"
        variant="success"
        @clicked="increment(5)"
      />

      <Button
        label="-5"
        variant="danger"
        @clicked="decrement(5)"
      />

      <Button
        label="-1"
        variant="danger"
        @clicked="decrement(1)"
      />
    </div>
  </HorizontalCard>
</template>

<style lang="sass" scoped>

button
  text-transform: uppercase
  font-weight: 700

</style>
