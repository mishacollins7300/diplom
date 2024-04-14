<template>
  <div class="w-28 min-h-14">
    <div class="text-lg">{{props.data.name}}</div>
    <div>{{props.data.description}}</div>
    <div>{{props.data.data}}</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Object
  }
})
</script>

<style scoped>

</style>