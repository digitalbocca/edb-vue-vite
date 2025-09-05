<script setup>

import { ref } from 'vue'
import { IconTimeDuration0 } from '@tabler/icons-vue'
import { useIntervalFn } from '@vueuse/core'

import ContainerCard from '@/components/container-card.vue'
import LeadBlock from '@/components/lead-block.vue'
import {
  DEFAULT_PROGRESS_BAR_PERCENT,
  MAX_PROGRESS_BAR_PERCENT,
  PROGRESS_BAR_TIMEOUT,
  HEX_COLOR_PRIMARY,
  HEX_COLOR_SECONDARY,
  HEX_COLOR_SUCCESS,
  HEX_COLOR_WARNING,
  HEX_COLOR_DANGER
} from '@/constants'

const PROGRESS_COLORS = [
  HEX_COLOR_PRIMARY,
  HEX_COLOR_SECONDARY,
  HEX_COLOR_SUCCESS,
  HEX_COLOR_WARNING,
  HEX_COLOR_DANGER
]

const progressElements = ref(
  PROGRESS_COLORS.map(color => ({
    progress: DEFAULT_PROGRESS_BAR_PERCENT,
    color
  }))
)

useIntervalFn(() => {
  progressElements.value.forEach((el) => {
    el.progress = Math.floor(Math.random() * MAX_PROGRESS_BAR_PERCENT)
  })
}, PROGRESS_BAR_TIMEOUT)

defineProps({
  title: {
    type: String,
    default: 'Progress Container'
  }
})

</script>

<template>
  <div class="flex flex-col">
    <ContainerCard>
      <div class="w-full flex flex-col gap-8">
        <div class="flex flex-row">
          <LeadBlock :title="title">
            <IconTimeDuration0
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
          <ve-progress
            v-for="(element, index) in progressElements"
            :key="index"
            :progress="element.progress"
            :size="80"
            :color="element.color"
          />
        </div>
      </div>
    </ContainerCard>
  </div>
</template>
