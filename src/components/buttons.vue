<script setup>

import { IconHandFinger } from '@tabler/icons-vue'

import Button from '@/components/button.vue'
import HorizontalCard from '@/components/horizontal-card.vue'

defineProps(['title'])

</script>

<template>
  <HorizontalCard>
    <div class="flex flex-row gap-2">
      <IconHandFinger/>
      <span>
        {{ title }}
      </span>
    </div>

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
  </HorizontalCard>
</template>

<style lang="sass" scoped>

button
  text-transform: uppercase
  font-weight: 700

</style>
