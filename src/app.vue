<script setup>

import { Notivue, Notifications, NotivueSwipe } from 'notivue'

</script>

<template>
  <Notivue v-slot="item">
    <NotivueSwipe :item="item">
      <Notifications :item="item"/>
    </NotivueSwipe>
  </Notivue>

  <RouterView/>
</template>
