<script setup>

import { IconHandFinger, IconMoodKidFilled } from '@tabler/icons-vue'

import Button from '@/components/base/custom-button'
import ContainerCard from '@/components/container-card.vue'
import LeadBlock from '@/components/lead-block.vue'

defineProps(['title', 'subtitle'])

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
          label="Primary"
        />

        <Button
          label="Secondary"
          variant="secondary"
        />

        <Button
          label="Success"
          variant="success"
        />

        <Button
          label="Warning"
          variant="warning"
        />

        <Button
          label="Danger"
          variant="danger"
        />

        <Button
          label="Disabled"
          :disabled="true"
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
