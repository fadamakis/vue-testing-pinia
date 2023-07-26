import { mount } from '@vue/test-utils'
import TheCounter from '@/components/TheCounter.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('Counter Component', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('the count initially should be 0', async () => {
    const wrapper = mount(TheCounter)
    expect(wrapper.find('.count span').text()).toBe('0')
  })
  test('clicking the button should increment counter by 1', async () => {
    const wrapper = mount(TheCounter)
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.count span').text()).toBe('1')
  })
  test('double counter should be twice the counter value', async () => {
    const wrapper = mount(TheCounter)
    expect(wrapper.find('.count span').text()).toBe('0')
    expect(wrapper.find('.double-count span').text()).toBe('0')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.count span').text()).toBe('1')
    expect(wrapper.find('.double-count span').text()).toBe('2')
  })
})

