<script setup>

defineProps({
  title: {
    type: String,
    default: 'Título'
  }
})

</script>

<template>
  <div class="flex flex-row gap-2 items-center">
    <slot />
    <span>
      {{ title }}
    </span>
  </div>
</template>
