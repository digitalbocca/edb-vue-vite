<script setup>

defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  label: {
    type: String,
    default: 'Label'
  }
})

</script>

<template>
  <div
    class="badge-labeled py-1 px-4 flex justify-center items-center"
    :class="`badge-labeled-${variant}`"
  >
    <span class="flex h-full p-0 m-0 text-white text-xs uppercase">
      {{ label }}
    </span>
  </div>
</template>

<style lang="sass" scoped>

.badge-labeled
  border-radius: 9999px
  font-weight: 700 !important

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
