<script setup>

defineProps(['title'])

</script>

<template>
  <div class="flex flex-row gap-2 items-center">
    <slot />
    <span>
      {{ title }}
    </span>
  </div>
</template>
