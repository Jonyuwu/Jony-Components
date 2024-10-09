// JCardContainer.test.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { JCardContainer } from '@/components/Card'

describe('J_CardContainer', () => {
  it('reder correctly default values', () => {
    const wrapper = mount(JCardContainer)

    console.log(wrapper.classes())

    expect(wrapper.exists()).toBe(true)
  })

  it('render correctly default with props', () => {
    const wrapper = mount(JCardContainer, {
      props: {
        type: 'rounded',
        bgColor: 'black',
        padding: 'md'
      }
    })
    console.log([wrapper.classes()])

    expect(wrapper.classes()).toContain('rounded-md')
    expect(wrapper.classes()).toContain('bg-black')
    expect(wrapper.classes()).toContain('p-4')
  })
})
