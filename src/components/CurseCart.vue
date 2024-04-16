<template>
  <div class="flex flex-col justify-around w-60 h-96 rounded-md">
    <router-link :to="'/curse/' + props.data.id"><div class="text-lg bg-cyan-100 p-4">{{props.data.name}}</div></router-link>
    <div>{{props.data.description}}</div>
    <div>{{props.data.creation_date}}</div>
    <div>{{props.data.user.fullname}}</div>
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