<script setup>

import { ref } from 'vue'
import { push } from 'notivue'
import { v4 as uuidv4 } from 'uuid'
import { IconShoppingBag } from '@tabler/icons-vue'

import Button from '@/components/base/button'
import HorizontalCard from '@/components/horizontal-card.vue'
import PotatoIcon from '@/components/icons/potato-icon.vue'

defineProps(['title'])

const potatoes = ref([])

function add () {
  potatoes.value.push({ id: uuidv4() })
  push.success('Fritou uma batatinha!')
}

function remove () {
  if (potatoes.value.length) {
    potatoes.value.shift()
    return push.success('Vendeu uma batatinha')
  }
  push.error('Impossível vender sem estoque')
}

</script>

<template>
  <HorizontalCard>
    <div class="flex flex-row gap-2">
      <IconShoppingBag
        class="w-6 h-6"
        :stroke="1.5"
      />
      <span>
        {{ title }}
      </span>
    </div>
    <div
      v-auto-animate
      class="flex flex-row items-center justify-start flex-wrap gap-2 w-full px-8"
    >
      <div
        v-for="batatinha in potatoes"
        :key="batatinha.id"
      >
        <PotatoIcon style="width: 20px;" />
      </div>
    </div>
    <div class="flex flex-row gap-2">
      <Button
        label="Fritar"
        variant="success"
        @clicked="add()"
      />

      <Button
        label="Vender"
        variant="danger"
        @clicked="remove()"
      />
    </div>
  </HorizontalCard>
</template>

<style lang="sass" scoped>

button
  text-transform: uppercase
  font-weight: 700

</style>
