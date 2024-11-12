<script setup>

import CountUp from 'vue-countup-v3'
import { ref } from 'vue'
import { push } from 'notivue'
import { IconCalculator } from '@tabler/icons-vue'
import NumberFlow from '@number-flow/vue'

import Button from '@/components/base/button'
import ContainerCard from '@/components/container-card.vue'
import LeadBlock from '@/components/lead-block.vue'

import { useSampleStore } from '@/stores/sample'

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
  <ContainerCard>
    <LeadBlock :title="title">
      <IconCalculator
        :width="24"
        :height="24"
        :stroke="1.5"
      />
    </LeadBlock>

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
  </ContainerCard>
</template>

<style lang="sass" scoped>

button
  text-transform: uppercase
  font-weight: 700

</style>
