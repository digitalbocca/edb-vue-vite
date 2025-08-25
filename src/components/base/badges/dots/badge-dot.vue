<script setup>

import { VARIANTS } from '@/constants'

defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => {
      return VARIANTS.includes(value)
    }
  }
})

</script>

<template>
  <div :class="`dot dot-${variant}`" />
</template>

<style lang="sass" scoped>

.dot
  width: 12px
  height: 12px
  border-radius: 9999px
  padding: 0
  margin: 0

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
