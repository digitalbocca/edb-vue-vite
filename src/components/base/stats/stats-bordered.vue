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
        <slot name="prefix" />
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
  border-color: var(--primary-color)

  &:hover
    border-color: var(--primary-color-hover)

.secondary
  border-color: var(--secondary-color)

  &:hover
    border-color: var(--secondary-color-hover)

.success
  border-color: var(--success-color)

  &:hover
    border-color: var(--success-color-hover)

.warning
  border-color: var(--warning-color)

  &:hover
    border-color: var(--warning-color-hover)

.danger
  border-color: var(--danger-color)

  &:hover
    border-color: var(--danger-color-hover)

.stats-container
  min-width: 120px
  height: 150px
  border-top-style: solid
  border-top-width: 2px
  padding-top: 4px
  transition: border-color 0.2s ease, border-top-width 0.2s ease, padding-top 0.2s ease

  &:hover
    border-top-width: 6px
    padding-top: 0px

</style>
