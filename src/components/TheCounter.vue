
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>


<template>
  <div class="counter">
    <h1>Counter</h1>
    <p class="count">The current count is: <span>{{ store.count }}</span></p>
    <p class="double-count">The double count is: <span>{{ store.doubleCount }}</span></p>
    <button @click="store.increment()">
      Increment
    </button>
  </div>
</template>


<style>
.counter {
  width: 300px;
  margin: 20px auto;
}
button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: none;
  font-size: 14px;

  &:hover {
    background-color: #0e6fd6;
  }
}
</style>