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
        class="text-input w-full"
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
  @apply bg-white rounded py-2 px-4
  @apply border border-gray-300 border-2
  @apply transition-colors duration-200 ease-in-out
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

  &:focus
    @apply border-2 outline-none
    @apply transition-colors duration-200 ease-in-out ring-transparent ring-0
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
