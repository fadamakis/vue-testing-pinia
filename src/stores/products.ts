import { ref } from 'vue'
import { defineStore } from 'pinia'

export type Item = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
};

export const useProducts = defineStore('products', () => {
  const products = ref([])
  const loading = ref(false)

  async function fetchData() {
    loading.value = true
    const response = await fetch('https://dummyjson.com/products?limit=10').then((res) =>
      res.json()
    )
    products.value = response.products
    loading.value = false
  }

  const selectedProduct = ref()

  function onSelect(item: Item) {
    selectedProduct.value = item
  }

  return { products, loading, fetchData, selectedProduct, onSelect }
})
