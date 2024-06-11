<template>
  <div>
    <div class="flex gap-1 mt-2">
      <p class="text-center" style="width: 70px;">{{ props.data.time }}</p>
      <p class="text-center" style="width: 300px;">{{ props.data.description }}</p>
      <el-button type="danger" @click="deleteTimecode" class="bg-red-600">-</el-button>
    </div>

  </div>
</template>

<script setup>
import {defineProps,defineEmits} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";

const props = defineProps({
  data: {
    type: Object
  }
})
const emits = defineEmits(['delete', ''])
const deleteTimecode = () => {
  emits('delete', props.data.id)
  axios.delete("http://localhost:8081/app/timecodes/" + props.data.id, {headers: authHeader()})
}
</script>

<style scoped>

</style>