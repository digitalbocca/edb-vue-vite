<script setup>

import { computed, ref } from 'vue'
import { vConfetti } from '@neoconfetti/vue'
import { IconBalloon } from '@tabler/icons-vue'

import ClockBar from '@/components/clock-bar.vue'
import ButtonsBar from '@/components/buttons-bar.vue'
import FormInputs from '@/components/form-inputs.vue'
import CounterWrapper from '@/components/counter-wrapper.vue'
import StatsContainer from '@/components/stats-container.vue'
import PotatoesKitchen from '@/components/potatoes-kitchen.vue'
import ChartsContainer from '@/components/charts-container.vue'
import ProgressContainer from '@/components/progress-container.vue'
import { DEFAULT_ENV_TEXT } from '@/constants'

const envExample = import.meta.env.VITE_ENV_EXAMPLE ?? ''

const envTextExample = computed(() => {
  return envExample.length ? envExample : DEFAULT_ENV_TEXT
})

const showConfetti = ref(false)

const toggleConfetti = () => {
  showConfetti.value = !showConfetti.value
}

</script>

<template>
  <div
    class="flex flex-col container mx-auto"
  >
    <ClockBar title="Horário" />
    <CounterWrapper title="Números animados" />
    <PotatoesKitchen title="Animação em itens" />
    <ButtonsBar
      title="Botões"
      subtitle="Icon Buttons"
    />
    <FormInputs
      title="Campos de formulário"
    />
    <StatsContainer
      title="Stats"
    />
    <ProgressContainer
      title="Progresso"
    />
    <ChartsContainer
      title="Gráficos"
    />

    <div class="flex flex-row justify-center">
      <div
        v-if="showConfetti"
        v-confetti
      >
      <!-- // -->
      </div>
    </div>

    <p
      class="cursor-pointer hover:animate-jump hover:animate-once hover:animate-duration-[600ms] hover:animate-delay-0 hover:animate-ease-linear text-center mt-4"
      @click="toggleConfetti()"
    >
      {{ envTextExample }}
    </p>

    <div
      class="flex flex-row justify-center mt-8"
    >
      <IconBalloon
        :width="48"
        :stroke="2"
        color="#333333"
      />
    </div>
  </div>
</template>
