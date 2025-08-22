<script setup>

import NumberFlow from '@number-flow/vue'

defineProps({
  bigNumber: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    default: 'Stat'
  },
  variant: {
    type: String,
    default: 'primary'
  },
  suffix: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <div
    class="flex flex-col justify-between items-center stats-container "
    :class="variant"
  >
    <div class="flex flex-col justify-center items-center grow">
      <h2 class="text-6xl font-extrabold font-serif">
        <NumberFlow
          :value="bigNumber"
          :format="{ notation: 'compact' } /* Intl.NumberFormat options */"
          :locales="'pt-BR' /* Intl.NumberFormat locales */"
          class="font-display"
        />
        <span class="font-display text-slate-500 text-2xl">
          {{ suffix || '' }}
        </span>
      </h2>
    </div>
    <p class="text-slate-600 text-xl">
      {{ title }}
    </p>
  </div>
</template>

<style lang="sass" scoped>

.primary
  border-color: #3498db

  &:hover
    border-color: #2980b9

.secondary
  border-color: #34495e

  &:hover
    border-color: #2c3e50

.success
  border-color: #2ecc71

  &:hover
    border-color: #27ae60

.warning
  border-color: #e67e22

  &:hover
    border-color: #d35400

.danger
  border-color: #e74c3c

  &:hover
    border-color: #c0392b

.stats-container
  min-width: 120px
  height: clamp(150px, 150px, 150px)
  border-top-style: solid
  border-top-width: 2px
  transition: border-color 0.2s ease

</style>
