import { mount } from '@vue/test-utils'
import TheCounter from '@/components/TheCounter.vue'
import { createTestingPinia } from '@pinia/testing'

describe('Counter Component', () => {
  test('the count initially should be 0', async () => {
    const wrapper = mount(TheCounter, {
      global: {
        plugins: [
          createTestingPinia()
        ]
      }
    })
    expect(wrapper.find('.count span').text()).toBe('0')
  })
  test('the count initially should be 0', async () => {
    const wrapper = mount(TheCounter, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              counter: {
                count: 20
              }
            }
          })
        ]
      }
    })
    expect(wrapper.find('.count span').text()).toBe('20')
  })
  test('clicking the button should increment counter by 1', async () => {
    const wrapper = mount(TheCounter, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })]
      }
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.count span').text()).toBe('1')
  })
  test.skip('double counter should be twice the counter value', async () => {
    const wrapper = mount(TheCounter, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
    expect(wrapper.find('.count span').text()).toBe('0')
    expect(wrapper.find('.double-count span').text()).toBe('0')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.count span').text()).toBe('1')
    expect(wrapper.find('.double-count span').text()).toBe('2')
  })
})
