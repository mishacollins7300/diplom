<template>
  <div>
    <div class="flex gap-1 mt-2">
      <p style="width: 70px;">{{ props.data.time }}</p>
      <el-input v-model="description" style="width: 300px;"/>
      <el-button type="danger" @click="() => console.log(4 )" class="bg-red-600">-</el-button>
    </div>

  </div>
</template>

<script setup>
import {defineProps, ref} from "vue";

const description = ref("")

const props = defineProps({
  data: {
    type: Object
  }
})

</script>

<style scoped>

</style>