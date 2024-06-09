<template>
  <div class="flex flex-col justify-around w-60 h-96 rounded-md mt-8 items-center bg-slate-50" style="width: 600px">
    <div>{{ props.data.name }}</div>
    <div>Описание - {{ props.data.description }}</div>
    <el-image style="width: 250px; height: 250px" :src="'http://localhost:8081/image/' + props.data.imageUrl"
              fit="contain"/>
    <div>Дата загрузки - {{ props.data.creationTime }}</div>
    <div>Количество просмотров - {{ props.data.count }}</div>
    <div class="flex gap-4 mt-3">
      <el-button type="primary" style="width: 100px"
                 @click="router.push({name: 'video-page',query: {id: props.data.id}})">
        Перейти
      </el-button>

    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()

const props = defineProps({
  data: {
    type: Object
  }
})
</script>

<style scoped>

</style>