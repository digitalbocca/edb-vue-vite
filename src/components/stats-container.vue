<script setup>

import { ref } from 'vue'
import { IconChartInfographic, IconCaretUpFilled, IconCaretDownFilled } from '@tabler/icons-vue'
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
    variant: 'danger',
    suffix: '%'
  }
])

const { resume } = useIntervalFn(() => {
  statsElements.value.forEach((el) => {
    el.bigNumber = Math.floor(Math.random() * 100)
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
        </div>
        <div class="flex flex-col lg:flex-row w-full gap-8 justify-center items-center content-center">
          <StatsBordered
            v-for="(stat, index) in statsElements"
            :key="index"
            :big-number="stat.bigNumber"
            :title="`${stat.title} ${stat.variant.charAt(0).toUpperCase()}${stat.variant.slice(1)}`"
            :variant="stat.variant"
            :suffix="stat.suffix"
          >
            <template #prefix>
              <IconCaretUpFilled
                v-if="stat.variant === 'success' || stat.variant === 'primary'"
                :width="32"
                :height="32"
                :stroke="1.5"
                class="inline text-green-500"
              />
              <IconCaretDownFilled
                v-else-if="stat.variant === 'danger' || stat.variant === 'warning'"
                :width="32"
                :height="32"
                :stroke="1.5"
                class="inline text-red-500"
              />
            </template>
          </StatsBordered>
        </div>
      </div>
    </ContainerCard>
  </div>
</template>
