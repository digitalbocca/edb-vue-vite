<script setup>

import { useNow, useDateFormat } from '@vueuse/core'
import { IconClock } from '@tabler/icons-vue'

import ContainerCard from '@/components/container-card.vue'
import LeadBlock from '@/components/lead-block.vue'

const formatted = useDateFormat(useNow(), 'HH:mm:ss', { locales: 'pt-BR' })

defineProps(['title'])

</script>

<template>
  <ContainerCard>
    <LeadBlock :title="title">
      <IconClock
        :width="24"
        :height="24"
        :stroke="1.5"
      />
    </LeadBlock>

    <div class="text-2xl font-monospace">
      {{ formatted }}
    </div>
  </ContainerCard>
</template>

<style lang="sass" scoped>

button
  text-transform: uppercase
  font-weight: 700

</style>
