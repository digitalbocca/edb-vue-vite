<script setup>

import { ref } from 'vue'
import { IconForms } from '@tabler/icons-vue'

import ContainerCard from '@/components/container-card.vue'
import BaseTextInput from '@/components/base/input/text-input'
import LeadBlock from '@/components/lead-block.vue'

defineProps({
  title: {
    type: String,
    default: 'Campos de formulário'
  }
})

const inputRef = ref('')

</script>

<template>
  <div class="flex flex-col">
    <ContainerCard>
      <LeadBlock :title="title">
        <IconForms
          :width="24"
          :height="24"
          :stroke="1.5"
        />
      </LeadBlock>

      <div class="flex flex-row justify-center flex-wrap gap-2">
        <BaseTextInput
          v-model="inputRef"
          :label="'Sample Input'"
        />
      </div>

      <div class="flex flex-col justify-center w-48">
        <div class="text-xs text-slate-500">
          Input Value:
        </div>
        <div class="truncate">
          <template v-if="inputRef.trim().length">
            {{ inputRef }}
          </template>
          <template v-else>
            <span class="text-slate-400">
              No value
            </span>
          </template>
        </div>
      </div>
    </ContainerCard>
  </div>
</template>
