<script setup>

import { IconLabelFilled } from '@tabler/icons-vue'

import { VARIANTS } from '@/constants'
import BadgeLabeled from '@/components/base/badges/labeled'
import ContainerCard from '@/components/container-card.vue'
import LeadBlock from '@/components/lead-block.vue'

defineProps({
  title: {
    type: String,
    default: 'Label Badge'
  }
})

</script>

<template>
  <div class="flex flex-col">
    <ContainerCard>
      <LeadBlock :title="title">
        <IconLabelFilled
          :width="24"
          :height="24"
          :stroke="1.5"
        />
      </LeadBlock>

      <div class="flex flex-row justify-center flex-wrap gap-4">
        <BadgeLabeled
          v-for="label in VARIANTS"
          :key="label"
          :variant="label"
          :label="label"
        />
      </div>
    </ContainerCard>
  </div>
</template>
