<script setup>

import ContainerCard from '@/components/container-card.vue'
import LeadBlock from '@/components/lead-block.vue'
import RotatingText from '@/blocks/TextAnimations/RotatingText/RotatingText.vue'

defineProps({
  title: {
    type: String,
    default: 'Estúdio Digital Bocca'
  }
})

</script>

<template>
  <ContainerCard>
    <LeadBlock :title="title">
      <img
        src="/favicon-32x32.png"
        alt="EDB Logo"
        width="32"
        height="32"
      >
    </LeadBlock>

    <div class="bg-gray-100 p-4 rounded-lg my-4 text-center gap-2 flex flex-row justify-center items-center flex-wrap">
      <span class="text-slate-700 font-monospace">
        npm
      </span>
      <span class="font-monospace text-slate-700">
        init
      </span>
      <span class="font-bold font-monospace text-[#e67e22]">
        @digitalbocca/edb-app
      </span>
      <span class="font-monospace font-bold text-emerald-600">
        vue-vite
      </span>
      <span class="font-monospace text-slate-700">
        ./caminho/do/projeto
      </span>
    </div>

    <div class="flex flex-row items-center justify-center gap-2">
      <h1 class="font-bold text-xl">
        Já configurado
      </h1>
      <RotatingText
        :texts="['Vue', 'Vite', 'Vitest', 'Tailwind', 'Pinia', 'VueUse', 'ESLint', 'Axios', 'Husky', 'NeoConfetti']"
        main-class-name="px-2 sm:px-2 md:px-3 bg-green-600 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-xl"
        :stagger-from="last"
        :initial="{ y: '100%' }"
        :animate="{ y: 0 }"
        :exit="{ y: '-120%' }"
        :stagger-duration="0.025"
        split-level-class-name="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        :transition="{ type: 'spring', damping: 30, stiffness: 400 }"
        :rotation-interval="3000"
      />
    </div>
  </ContainerCard>
</template>

<style lang="sass" scoped>

button
  text-transform: uppercase
  font-weight: 700

</style>
