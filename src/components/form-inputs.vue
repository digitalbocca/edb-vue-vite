<script setup>

import { ref } from 'vue'
import { IconForms } from '@tabler/icons-vue'

import HorizontalCard from '@/components/horizontal-card.vue'
import BaseTextInput from '@/components/base/input/text-input'

defineProps(['title'])

const inputRef = ref('')

</script>

<template>
  <div class="flex flex-col">
    <HorizontalCard>
      <div class="flex flex-row gap-2">
        <IconForms
          class="w-6 h-6"
          :stroke="1.5"
        />
        <span>
          {{ title }}
        </span>
      </div>

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
    </HorizontalCard>
  </div>
</template>
