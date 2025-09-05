import { nextTick } from 'vue'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Button from '@/components/base/custom-button'

describe('Button component', () => {
  it('Default primary button is created when variant prop is not set', () => {
    const wrapper = mount(Button)

    const buttonClasses = wrapper.classes()

    expect(buttonClasses).toContain('primary-button')
  })

  it('Displays the correct button style for each variant', () => {
    const primaryButton = mount(Button, {
      props: {
        variant: 'primary'
      }
    })

    const secondaryButton = mount(Button, {
      props: {
        variant: 'secondary'
      }
    })

    const successButton = mount(Button, {
      props: {
        variant: 'success'
      }
    })

    const warningButton = mount(Button, {
      props: {
        variant: 'warning'
      }
    })

    const dangerButton = mount(Button, {
      props: {
        variant: 'danger'
      }
    })

    const primaryButtonClasses = primaryButton.classes()
    const secondaryButtonClasses = secondaryButton.classes()
    const successButtonClasses = successButton.classes()
    const warningButtonClasses = warningButton.classes()
    const dangerButtonClasses = dangerButton.classes()

    expect(primaryButtonClasses).toContain('primary-button')
    expect(secondaryButtonClasses).toContain('secondary-button')
    expect(successButtonClasses).toContain('success-button')
    expect(warningButtonClasses).toContain('warning-button')
    expect(dangerButtonClasses).toContain('danger-button')
  })

  it('Should display the primary button when a non-existent variant is provided', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'batatinha'
      }
    })

    const buttonClasses = wrapper.classes()

    expect(buttonClasses).toContain('primary-button')
  })

  it('It should disable the button if the disabled property is true', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    })

    const buttonAttrs = wrapper.attributes()

    expect(buttonAttrs).toHaveProperty('disabled')
  })

  it('Should emit an event when clicked', async () => {
    const wrapper = mount(Button)

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('clicked')
  })

  it('Shouldn\'t emit the click event if the button is disabled', async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).not.toHaveProperty('clicked')
  })

  it('Should display the icon and label in correct order', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Icon Content'
      },
      props: {
        label: 'Label Content'
      }
    })

    const buttonContent = wrapper.text()

    expect(buttonContent).toBe('Icon Content Label Content')
  })

  it('Should contain \'flex-row-reverse\' class when the iconPosition is \'append\'', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Icon Content'
      },
      props: {
        label: 'Label Content',
        iconPosition: 'append'
      }
    })

    const buttonClasses = wrapper.classes()

    expect(buttonClasses).toContain('flex-row-reverse')
  })

  it('Atualiza a classe quando o prop "variant" muda após o mount', async () => {
    const wrapper = mount(Button, { props: { variant: 'primary' } })

    expect(wrapper.classes()).toContain('primary-button')

    await wrapper.setProps({ variant: 'danger' })
    await nextTick()

    expect(wrapper.classes()).toContain('danger-button')
  })
})
