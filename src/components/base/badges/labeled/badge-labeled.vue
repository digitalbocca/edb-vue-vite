<script setup>

import { VARIANTS } from '@/constants'

defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => {
      return VARIANTS.includes(value)
    }
  },
  label: {
    type: String,
    default: 'Label'
  }
})

</script>

<template>
  <div
    class="badge-labeled py-1 px-4 flex justify-center items-center text-white text-xs uppercase font-semibold"
    :class="`badge-labeled-${variant}`"
  >
    {{ label }}
  </div>
</template>

<style lang="sass" scoped>

.badge-labeled
  border-radius: 9999px

  &-primary
    background-color: var(--primary-color)

  &-secondary
    background-color: var(--secondary-color)

  &-success
    background-color: var(--success-color)

  &-warning
    background-color: var(--warning-color)

  &-danger
    background-color: var(--danger-color)

  &-disabled
    background-color: var(--disabled-color)

</style>
