<template>
  <div class="flex flex-col justify-around w-60 h-96 shadow-2xl p-4 rounded-md" @click="() => router.push('/curse/' + props.data)">
    <div class="text-lg bg-cyan-100 p-4">{{props.data.name}}</div>
    <div>{{props.data.description}}</div>
    <div>{{props.data.data}}</div>
    <div>{{props.data.prepod}}</div>
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