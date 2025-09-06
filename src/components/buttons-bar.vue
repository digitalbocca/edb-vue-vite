<script setup>

import { ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import { IconHandFinger, IconMoodKidFilled } from '@tabler/icons-vue'

import Button from '@/components/base/custom-button'
import ContainerCard from '@/components/container-card.vue'
import LeadBlock from '@/components/lead-block.vue'
import { VARIANTS, BUTTON_COLOR_CHANGE_TIMEOUT } from '@/constants'

defineProps({
  title: {
    type: String,
    default: 'Buttons'
  },
  subtitle: {
    type: String,
    default: 'Buttons with icons'
  }
})

const coloredButtonsVariant = ref(0)

useIntervalFn(() => {
  const condition = coloredButtonsVariant.value >= VARIANTS.length - 1
  condition ? coloredButtonsVariant.value = 0 : coloredButtonsVariant.value++
}, BUTTON_COLOR_CHANGE_TIMEOUT, { immediate: true })

</script>

<template>
  <div class="flex flex-col">
    <ContainerCard>
      <LeadBlock :title="title">
        <IconHandFinger
          :width="24"
          :height="24"
          :stroke="1.5"
        />
      </LeadBlock>

      <div class="flex flex-row justify-center flex-wrap gap-2">
        <Button
          v-for="variant in VARIANTS"
          :key="variant"
          :variant="variant"
          :label="`${variant.charAt(0).toUpperCase()}${variant.slice(1)}`"
          :disabled="variant === 'disabled'"
        />
        <Button
          :variant="VARIANTS[coloredButtonsVariant]"
          :label="'Changing Color'"
          :disabled="VARIANTS[coloredButtonsVariant] === 'disabled'"
        />
      </div>
    </ContainerCard>

    <ContainerCard>
      <div class="flex flex-row gap-2">
        <IconHandFinger
          width="24"
          height="24"
          :stroke="1.5"
        />
        <span>
          {{ subtitle }}
        </span>
      </div>

      <div class="flex flex-row justify-center flex-wrap gap-2">
        <Button
          label="Icon Prepend"
          variant="secondary"
        >
          <IconMoodKidFilled
            class="w-6 h-6"
            :stroke="2"
          />
        </Button>

        <Button
          label="Icon Append"
          icon-position="append"
        >
          <IconMoodKidFilled
            class="w-6 h-6"
            :stroke="2"
          />
        </Button>

        <Button
          icon-position="append"
          variant="success"
        >
          <IconMoodKidFilled
            class="w-6 h-6"
            :stroke="2"
          />
        </Button>
      </div>
    </ContainerCard>
  </div>
</template>
