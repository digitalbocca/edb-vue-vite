<script setup>

import { ref } from 'vue'
import { IconTimeDuration0 } from '@tabler/icons-vue'
import { useIntervalFn } from '@vueuse/core'

import ContainerCard from '@/components/container-card.vue'
import LeadBlock from '@/components/lead-block.vue'

const progressElements = ref([
  { progress: 50, color: '#3498db' },
  { progress: 50, color: '#34495e' },
  { progress: 50, color: '#2ecc71' },
  { progress: 50, color: '#e67e22' },
  { progress: 50, color: '#e74c3c' }
])

const { resume } = useIntervalFn(() => {
  progressElements.value.forEach((_element, index) => {
    progressElements.value[index].progress = (Math.floor(Math.random() * 100))
  })
}, 5 * 1000)

defineProps({
  title: {
    type: String,
    default: 'Progress Container'
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
