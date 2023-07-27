<script setup lang="ts">
// @ts-ignore
import GridLoader from "vue-spinner/src/GridLoader.vue";
</script>

<template>
  <div class="loader">
    <GridLoader />
  </div>
</template>

<style scoped lang="scss">
.loader {
  position: fixed;
  z-index: 2;
  background: white;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 90px;
  height: 90px;
  padding: 16px;
  border-radius: 4px;
}
</style>
