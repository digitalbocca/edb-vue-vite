<script setup>

defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})

</script>

<template>
  <div class="dot-wrapper">
    <div :class="`dot dot-${variant}`" />
  </div>
</template>

<style lang="sass" scoped>

.dot
  width: 100%
  height: 100%
  border-radius: 9999px

.dot-wrapper
  width: 12px
  height: 12px
  border-radius: 9999px
  padding: 0
  margin: 0

.dot-primary
  background-color: var(--primary-color)

.dot-secondary
  background-color: var(--secondary-color)

.dot-success
  background-color: var(--success-color)

.dot-warning
  background-color: var(--warning-color)

.dot-danger
  background-color: var(--danger-color)

.dot-disabled
  background-color: var(--disabled-color)

</style>
