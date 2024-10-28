<script setup>

import { computed, ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  iconPosition: {
    type: String,
    default: 'prepend'
  }
})

defineEmits([
  'clicked'
])

const variants = {
  primary: 'primary-button',
  secondary: 'secondary-button',
  success: 'success-button',
  warning: 'warning-button',
  danger: 'danger-button'
}

const buttonVariant = ref('')

const buttonVariantClass = computed(() => buttonVariant.value)

const buttonIconPositionClass = computed(() => {
  return props.iconPosition === 'append' ? 'flex-row-reverse gap-2' : 'flex-row gap-2'
})

function handleVariantClass () {
  const displayVariantConditions = props.variant && variants[props.variant]

  buttonVariant.value = displayVariantConditions ? variants[props.variant] : variants.primary
}

handleVariantClass()

</script>

<template>
  <button
    class="custom-button rounded text-white hover:cursor-pointer py-2 px-4 flex items-center justify-center"
    :class="`${buttonVariantClass} ${buttonIconPositionClass}`"
    :disabled="disabled"
    @click="$emit('clicked')"
  >
    <slot />
    {{ label }}
  </button>
</template>

<style lang="sass" scoped>

.primary-button
  background-color: #3498db

  &:hover
    background-color: #2980b9

.secondary-button
  background-color: #34495e

  &:hover
    background-color: #2c3e50

.success-button
  background-color: #2ecc71

  &:hover
    background-color: #27ae60

.warning-button
  background-color: #e67e22

  &:hover
    background-color: #d35400

.danger-button
  background-color: #e74c3c

  &:hover
    background-color: #c0392b

.custom-button
  transition: background-color 0.2s ease
  font-weight: 700

  &:disabled
    background-color: #bdc3c7
    cursor: not-allowed

</style>
