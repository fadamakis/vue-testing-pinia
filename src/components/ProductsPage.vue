<script setup lang="ts">
import BoringTable from "@/components/BoringTable.vue";
import ProductModal from "@/components/ProductModal.vue";
import { storeToRefs } from "pinia";
import { useProducts } from "@/stores/products";
import TheLoader from "@/components/TheLoader.vue";

const productsStore = useProducts();
const { fetchData, onSelect } = productsStore;
const { products, loading, selectedProduct } = storeToRefs(productsStore);

fetchData();
</script>

<template>
  <div class="container">
    <ProductModal
      v-if="selectedProduct"
      :product-id="selectedProduct.id"
      @close="selectedProduct = null"
    />
    <TheLoader v-if="loading" />
    <BoringTable :items="products" v-else-if="products.length" @select="onSelect" />
    <div v-else class="empty-state">No products found</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.empty-state {
  margin-top: 30px;
  font-size: 1.2em;
  text-align: center;
}
</style>
