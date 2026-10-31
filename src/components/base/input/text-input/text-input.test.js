import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TextInput from '@/components/base/input/text-input'

const Form = {
  components: { TextInput },
  data: () => ({ name: '', email: '' }),
  template: `
    <div>
      <TextInput v-model="name" label="Nome" />
      <TextInput v-model="email" label="E-mail" />
    </div>
  `
}

describe('TextInput component', () => {
  it('Label points to its own input', () => {
    const wrapper = mount(TextInput, { props: { label: 'Nome', modelValue: '' } })

    const inputId = wrapper.find('input').attributes('id')

    expect(inputId).toBeTruthy()
    expect(wrapper.find('label').attributes('for')).toBe(inputId)
  })

  it('Each instance gets a unique id when several are on the same page', () => {
    const wrapper = mount(Form)

    const inputs = wrapper.findAll('input')
    const labels = wrapper.findAll('label')

    expect(inputs[0].attributes('id')).not.toBe(inputs[1].attributes('id'))
    expect(labels[0].attributes('for')).toBe(inputs[0].attributes('id'))
    expect(labels[1].attributes('for')).toBe(inputs[1].attributes('id'))
  })
})
