<template>
  <div class="flex flex-col justify-around w-60 h-96 rounded-md mt-8 items-center bg-slate-50" style="width: 600px">
    <div>{{ props.data.name }}</div>
    <div>Описание - {{ props.data.description }}</div>
    <el-image style="width: 250px; height: 250px" :src="'http://localhost:8081/image/' + props.data.image_url"
              fit="contain"/>
    <div>Дата загрузки - {{ props.data.creationTime }}</div>
    <div>Количество просмотров - {{ props.data.count }}</div>
    <div class="flex gap-4 mt-3">
      <el-button type="primary" style="width: 100px"
                 @click="router.push({name: 'video',query: {id: props.data.id}})">
        Перейти
      </el-button>
      <el-button type="primary" style="width: 100px" @click="deleteVideo">Удалить</el-button>
      <el-button type="primary" style="width: 100px"
                 @click="router.push({name: 'update-video',query: {id: props.data.id}})">
        Изменить
      </el-button>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRouter} from "vue-router";

const router = useRouter()

const deleteVideo = () => {
  axios.delete("http://localhost:8081/app/video/" + props.data.id, {headers: authHeader()})
  router.go();
}

const props = defineProps({
  data: {
    type: Object
  }
})
</script>

<style scoped>

</style>