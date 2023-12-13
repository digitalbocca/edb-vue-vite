<script setup>

import { ref } from 'vue'
import { usePush } from 'notivue'
import { v4 as uuidv4 } from 'uuid'
import { IconShoppingBag } from '@tabler/icons-vue'

import HorizontalCard from '@/components/horizontal-card.vue'
import PotatoIcon from '@/components/icons/potato-icon.vue'

const push = usePush()

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
      <IconShoppingBag/>
      <span>
        {{ title }}
      </span>
    </div>
    <div
      class="flex flex-row items-center justify-start flex-wrap gap-2"
      v-auto-animate
    >
      <div
        v-for="batatinha in potatoes"
        :key="batatinha.id"
      >
        <PotatoIcon style="width: 20px;"/>
      </div>
    </div>
    <div class="flex flex-row gap-2">
      <button
        class="rounded bg-green-700 text-white hover:cursor-pointer py-2 px-4"
        @click="add()"
      >
        Fritar
      </button>
      <button
        class="rounded bg-red-700 text-white hover:cursor-pointer py-2 px-4"
        @click="remove()"
      >
        Vender
      </button>
    </div>
  </HorizontalCard>
</template>

<style lang="sass" scoped>

button
  text-transform: uppercase
  font-weight: 700

</style>
