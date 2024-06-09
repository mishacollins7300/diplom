<template>
  <div>
    <div class="flex gap-1 mt-2">
      <p class="text-center" style="width: 70px;">{{ props.data.time }}</p>
      <p class="text-center" style="width: 300px;">{{ props.data.description }}</p>
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