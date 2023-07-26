<script setup lang="ts">
import { ref } from "vue";
import TheLoader from "@/components/TheLoader.vue";

const props = defineProps({
  productId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
});

const emit = defineEmits(["close"]);

const product = ref();
const loading = ref(false);

async function fetchProduct() {
  loading.value = true;
  const response = await fetch(
    `https://dummyjson.com/products/${props.productId}`
  ).then((res) => res.json());
  product.value = response;
  loading.value = false;
}

fetchProduct();
</script>

<template>
  <TheLoader v-if="loading" />
  <div class="modal" v-if="product">
    <div class="modal__content">
      <div class="modal__left">
        <img class="modal__img" :src="product?.images[0]" alt="" />
      </div>

      <div class="modal__right">
        <button @click="emit('close')" class="modal__close">✕</button>
        <div class="detail">
          <h2 class="detail__title">{{ product.title }}</h2>
          <p class="detail__description">
            {{ product.description }}
          </p>
          <div class="detail__availability">
            <p class="detail__quantity">{{ product.stock }} available</p>
            <p class="detail__price">{{ product.price }}€</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-overlay" @click="emit('close')"></div>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal {
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .modal__close {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 30px;
    cursor: pointer;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
  .modal__content {
    display: flex;
  }
  .modal__left {
    margin-right: 20px;
  }
  .modal__img {
    width: 180px;
  }
  .detail {
    .detail__title {
      font-size: 40px;
      margin: 10px 0;
    }
    .detail__description {
      margin: 0;
      font-style: italic;
      color: #666;
    }

    .detail__price {
      font-size: 30px;
      margin: 10px 0;
      font-weight: bold;
      color: #009879;
    }
    .detail__availability {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
  }
}
</style>
