<script setup>

import { IconDots } from '@tabler/icons-vue'

import BadgeDot from '@/components/base/badges/dots'
import ContainerCard from '@/components/container-card.vue'
import LeadBlock from '@/components/lead-block.vue'

defineProps({
  title: {
    type: String,
    default: 'Dots Badge'
  }
})

</script>

<template>
  <div class="flex flex-col">
    <ContainerCard>
      <LeadBlock :title="title">
        <IconDots
          :width="24"
          :height="24"
          :stroke="1.5"
        />
      </LeadBlock>

      <div class="flex flex-row justify-center flex-wrap gap-4">
        <BadgeDot variant="primary" />
        <BadgeDot variant="secondary" />
        <BadgeDot variant="success" />
        <BadgeDot variant="warning" />
        <BadgeDot variant="danger" />
        <BadgeDot variant="disabled" />
      </div>
    </ContainerCard>
  </div>
</template>
