<script setup>

import { computed } from 'vue'

const props = defineProps([
  'label',
  'variant'
])

defineEmits([
  'clicked'
])

const buttonVariantClass = computed(() => {
  const variants = {
    primary: 'bg-cyan-600',
    secondary: 'bg-sky-600',
    success: 'bg-emerald-600',
    warning: 'bg-yellow-600',
    danger: 'bg-red-600'
  }

  return props.variant ? variants[props.variant] : variants.primary
})

</script>

<template>
  <button
    class="rounded text-white hover:cursor-pointer py-2 px-4"
    :class="buttonVariantClass"
    @click="$emit('clicked')"
  >
    {{ label }}
  </button>
</template>
