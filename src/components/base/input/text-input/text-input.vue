<script setup>

import { computed, ref } from 'vue'

defineProps({
  label: {
    type: String,
    required: true
  }
})

const model = defineModel({ required: true, type: String })

const isFocused = ref(false)

const labelState = computed(() => {
  const dimensionsConditions = [
    isFocused.value,
    model.value
  ]

  const textColor = isFocused.value ? 'text-primary' : 'text-gray-600'

  const labelContainerClass = dimensionsConditions.some(el => el) ? 'focus-label' : 'py-2 px-4'
  const labelTextClass = dimensionsConditions.some(el => el) ? `text-xs ${textColor}` : `text-sm ${textColor}`

  return {
    labelContainerClass,
    labelTextClass
  }
})

</script>

<template>
  <div class="relative top-0 left-0 w-80 h-[49px]">
    <div class="absolute w-80 h-[49px]">
      <div
        class="absolute top-0 left-0 transition-all duration-200 ease-in-out"
        :class="labelState.labelContainerClass"
      >
        <label
          for="text-input"
          class="transition-all duration-200 ease-in-out"
          :class="labelState.labelTextClass"
        >
          {{ label }}
        </label>
      </div>
      <input
        id="text-input"
        v-model="model"
        class="text-input w-full bg-white rounded-sm py-2 px-4 border-gray-300 border-2 transition-colors duration-200 ease-in-out focus:border-2 focus:outline-hidden focus:border-color-lime-500 focus:transition-colors focus:duration-200 focus:ease-in-out focus:ring-transparent focus:ring-0"
        type="text"
        autocomplete="off"
        @focus="() => isFocused = true"
        @blur="() => isFocused = false"
      >
    </div>
  </div>
</template>

<style lang="sass" scoped>

.text-input
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

  &:focus
    border-color: var(--primary-color)
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

.focus-label
  transform: translate(0px, -50%)
  background-color: #fff
  padding: 0 4px
  margin-left: 8px
  border-radius: 4px

.text-primary
  color: var(--primary-color)

</style>
