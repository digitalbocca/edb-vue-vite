<script setup>

import { ref } from 'vue'
import { push } from 'notivue'
import { v4 as uuidv4 } from 'uuid'
import { IconShoppingBag } from '@tabler/icons-vue'

import Button from '@/components/base/custom-button'
import ContainerCard from '@/components/container-card.vue'
import PotatoIcon from '@/components/icons/potato-icon.vue'
import LeadBlock from '@/components/lead-block.vue'

defineProps(['title'])

const potatoes = ref([])

function add () {
  potatoes.value.unshift({ id: uuidv4() })
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
  <ContainerCard>
    <div class="flex flex-col gap-8 md:gap-4 md:grid md:grid-cols-4 w-full">
      <LeadBlock
        :title="title"
        class="justify-center md:justify-start"
      >
        <IconShoppingBag
          :width="24"
          :height="24"
          :stroke="1.5"
        />
      </LeadBlock>
      <div
        v-auto-animate
        class="flex flex-row items-center justify-start flex-wrap gap-2 px-8 col-span-2 col-start-2 col-end-4 w-full"
      >
        <div
          v-for="batatinha in potatoes"
          :key="batatinha.id"
        >
          <PotatoIcon style="width: 20px;" />
        </div>
      </div>
      <div class="flex flex-row justify-center md:justify-end items-center col-start-4">
        <div class="flex flex-row justify-center md:justify-end gap-2 col-start-4">
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
      </div>
    </div>
  </ContainerCard>
</template>

<style lang="sass" scoped>

button
  text-transform: uppercase
  font-weight: 700

</style>
