import { mount } from '@vue/test-utils'
import ProductPage from '@/components/ProductsPage.vue'
import { createTestingPinia } from '@pinia/testing'
import TheLoader from "@/components/TheLoader.vue";
import BoringTable from "@/components/BoringTable.vue";
import ProductModal from "@/components/ProductModal.vue";


describe('Products Page', () => {
  test('the loader is shown when is loading is true', async () => {
    const wrapper = mount(ProductPage, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              products: {
                loading: true
              }
            }
          })
        ]
      }
    })
    expect(wrapper.findComponent(TheLoader).exists()).toBe(true)
  })
  test('the table is shown when products exists and the loading state is false', async () => {
    const wrapper = mount(ProductPage, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              products: {
                loading: false,
                products: mockProducts,
              }
            }
          })
        ]
      }
    })
    expect(wrapper.findComponent(TheLoader).exists()).toBe(false)
    expect(wrapper.findComponent(BoringTable).exists()).toBe(true)
  })
  test('the table is shown when products exists and the loading state is false', async () => {
    const wrapper = mount(ProductPage, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              products: {
                loading: false,
                products: mockProducts,
              }
            }
          })
        ]
      }
    })
    expect(wrapper.findComponent(TheLoader).exists()).toBe(false)
    expect(wrapper.findComponent(BoringTable).exists()).toBe(true)
  })

  test('the empty state is shown when products dont exist and the loading state is false', async () => {
    const wrapper = mount(ProductPage, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              products: {
                loading: false,
                products: [],
              }
            }
          })
        ]
      }
    })
    expect(wrapper.findComponent(TheLoader).exists()).toBe(false)
    expect(wrapper.findComponent(BoringTable).exists()).toBe(false)
    expect(wrapper.find('.empty-state').exists()).toBe(true)
  })

  test('the empty state is shown when products dont exist and the loading state is false', async () => {
    const wrapper = mount(ProductPage, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              products: {
                selectedProduct: mockProducts[0],
              }
            }
          })
        ]
      }
    })
    expect(wrapper.findComponent(ProductModal).exists()).toBe(true)
  })
})


const mockProducts = [
  {
    id: 1,
    title: "Mechanical Keyboard",
    description: "Noisy Mechanical Keyboard",
    price: 100,
    rating: 3,
    brand: "Logitech",
  },
  {
    id: 2,
    title: "Macbook Pro",

    description: "M2",
    price: 1200,
    rating: 5,
    brand: "Apple",
  }]
