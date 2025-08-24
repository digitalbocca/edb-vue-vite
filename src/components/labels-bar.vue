<script setup>

import { IconLabelFilled } from '@tabler/icons-vue'

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
          variant="primary"
          label="Primary"
        />
        <BadgeLabeled
          variant="secondary"
          label="Secondary"
        />
        <BadgeLabeled
          variant="success"
          label="Success"
        />
        <BadgeLabeled
          variant="warning"
          label="Warning"
        />
        <BadgeLabeled
          variant="danger"
          label="Danger"
        />
        <BadgeLabeled
          variant="disabled"
          label="Disabled"
        />
      </div>
    </ContainerCard>
  </div>
</template>
