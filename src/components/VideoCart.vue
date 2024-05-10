<template>
  <div class="flex flex-col justify-around w-60 h-96 rounded-md mt-8 items-center" style="width: 600px">
    <div>{{props.data.name}}</div>
    <div>Описание - {{props.data.description}}</div>
    <el-image style="width: 250px; height: 250px" :src="props.data.image_url" fit="contains"/>
    <div>Дата загрузки - {{props.data.creation_date}}</div>
    <div>Количество просмотров - {{props.data.count}}</div>
    <div class="flex gap-4 mt-3">
      <el-button type="primary" style="width: 100px" @click="() => console.log(4 )">Перейти</el-button>
      <el-button type="primary" style="width: 100px" @click="() => console.log(4 )">Удалить</el-button>
      <el-button type="primary" style="width: 100px" @click="() => console.log(4 )">Изменить</el-button>
    </div>
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