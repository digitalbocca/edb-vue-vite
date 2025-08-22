<script setup>

import { ref } from 'vue'
import { IconChartInfographic } from '@tabler/icons-vue'
import { useIntervalFn } from '@vueuse/core'

import ContainerCard from '@/components/container-card.vue'
import LeadBlock from '@/components/lead-block.vue'
import StatsBordered from '@/components/base/stats'

const statsElements = ref([
  {
    bigNumber: 50,
    title: 'Example',
    variant: 'primary',
    suffix: '%'
  },
  {
    bigNumber: 75,
    title: 'Example',
    variant: 'secondary',
    suffix: '+'
  },
  {
    bigNumber: 10,
    title: 'Example',
    variant: 'success',
    suffix: '%'
  },
  {
    bigNumber: 40,
    title: 'Example',
    variant: 'warning',
    suffix: 'R$'
  },
  {
    bigNumber: 60,
    title: 'Example',
    variant: 'error',
    suffix: '%'
  }
])

const { resume } = useIntervalFn(() => {
  statsElements.value.forEach((_element, index) => {
    statsElements.value[index].bigNumber = (Math.floor(Math.random() * 100))
  })
}, 5 * 1000)

defineProps({
  title: {
    type: String,
    default: 'Stats'
  }
})

resume()

</script>

<template>
  <div class="flex flex-col">
    <ContainerCard>
      <div class="w-full flex flex-col gap-8">
        <div class="flex flex-row">
          <LeadBlock :title="title">
            <IconChartInfographic
              :width="24"
              :height="24"
              :stroke="1.5"
            />
          </LeadBlock>

          <div class="flex flex-row justify-center flex-wrap gap-2">
            <!-- // -->
          </div>
        </div>
        <div class="flex flex-col lg:flex-row w-full gap-8 justify-center items-center content-center">
          <StatsBordered
            v-for="(stat, index) in statsElements"
            :key="index"
            :big-number="stat.bigNumber"
            :title="stat.variant"
            :variant="stat.variant"
            :suffix="stat.suffix"
          />
        </div>
      </div>
    </ContainerCard>
  </div>
</template>
