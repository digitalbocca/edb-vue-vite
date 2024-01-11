import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '@/components/base/button'

describe('Button component', () => {
  it('Default primary button is created when variant prop is not set', () => {
    const wrapper = mount(Button)

    const buttonClasses = wrapper.classes()

    expect(buttonClasses).toContain('primary-button')
  })
})
