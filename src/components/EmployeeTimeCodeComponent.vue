<template>
  <div>
    <div class="flex gap-1 mt-2">
      <p class="text-center">{{ props.data.time }}</p>
      <p class="w-8 text-center">-</p>
      <p class="text-center">{{ props.data.description }}</p>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  data: {
    type: Object
  }
})
</script>

<style scoped>

</style>