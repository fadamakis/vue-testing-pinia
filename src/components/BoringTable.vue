<script setup lang="ts">
import type { PropType } from "vue";
import type { Item } from "@/stores/products";

defineProps({
  items: {
    type: Array as PropType<Item[]>,
    required: true,
  },
  title: {
    type: String,
  },
});

const headers = ["Title", "Description", "Price", "Rating", "Brand"];

const emit = defineEmits(["select"]);

function onSelect(item: Item) {
  emit("select", item);
}
</script>

<template>
  <h2 class="table-title">{{ title }}</h2>
  <table class="boring-table">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id" @click="onSelect(item)">
        <td>
          {{ item.title }}
        </td>
        <td>
          {{ item.description }}
        </td>
        <td>{{ item.price }}€</td>
        <td>{{ item.rating }}✩</td>
        <td>
          {{ item.brand }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.table-title {
  margin: 30px 0 0 0;
}

.boring-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.boring-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

.boring-table th,
.boring-table td {
  padding: 12px 15px;
}

.boring-table tbody tr {
  border-bottom: 1px solid #dddddd;
  cursor: pointer;
}

.boring-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.boring-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.boring-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>
