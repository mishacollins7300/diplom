<template>
  <div>
    <div class="flex gap-1 mt-2">
      <p class="text-center" style="width: 70px;">{{ props.data.time }}</p>
      <p class="text-center" style="width: 300px;">{{ props.data.description }}</p>

      <el-button type="primary" @click="editTimecode" :icon="Edit" circle />
      <el-button type="danger" @click="deleteTimecode" :icon="Delete" circle />
    </div>

  </div>
</template>

<script setup>
import {defineProps,defineEmits} from "vue";
import {Delete, Edit} from "@element-plus/icons-vue";

const props = defineProps({
  data: {
    type: Object
  }
})
const emits = defineEmits(['change'])
const deleteTimecode = () => {
  emits('change', {id: props.data.id, action:"delete"})
}

const editTimecode = () => {
  emits('change', {id: props.data.id, action:"edit"})
}
</script>

<style scoped>

</style>