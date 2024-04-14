<template>
<div class="flex gap-4">
  <slot></slot>
  <el-button
      type="primary"
      @click="filterTable"
  >
    Найти
  </el-button>
</div>
</template>

<script setup>
import { defineEmits } from "vue";
const emits = defineEmits(['filterTable'])

const filterTable = () => {
  emits('filterTable')
}
</script>

<style scoped>

</style>