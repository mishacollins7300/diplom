<template>
  <div class="flex text-2xl mb-10">{{ video.value.name }}</div>

  <p class="text-2xl mt-4">Описание:</p>
  <p class="text-base mt-3">{{ video.value.description }}</p>

  <p class="text-2xl mt-4">Автор:</p>
  <div class="flex gap-5 pb-10" v-if="video.user.imageUrl">
    <img class="object-cover w-10 h-10" :src="'http://localhost:8081/image/'+ video.user.imageUrl" alt="">
    <p class="text-base mt-3">{{ video.user.fullname }}</p>
  </div>

  <video width="500px" class="mt-4"
         height="400px"
         :src="'http://localhost:8081/app/video/' + video.video_url"
         controls preload="none">
  </video>

  <p class="text-xl mt-3">Таймкоды</p>

  <div class="mt-2" v-for="(timeCode, index) in video.value.timeCodes" :key="index">
    <TimeCodeComponent :data="timeCode"></TimeCodeComponent>
  </div>
  <div>
    <el-button class="mt-1" type="success" @click="addTimeCode">+</el-button>
  </div>

  <p class="text-xl mt-3">Комментарии</p>

  <div class="mt-2" v-for="(comm, index) in video.value.comments" :key="index">
    <CommentComponent :comment="comm"></CommentComponent>
  </div>
</template>

<script setup>
import CommentComponent from '@/components/CommentComponent'
import TimeCodeComponent from '@/components/TimeCodeComponent'
import {onMounted, ref} from 'vue'
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRoute} from "vue-router";

const route = useRoute()
const video = ref({})

onMounted(() => {
  const id = route.query.id
  axios.get("http://localhost:8081/app/video/" + id, {headers: authHeader()})
      .then((response) => {
        video.value = response.data
      })
})

const addTimeCode = () => {
  console.log("dsds")
}
</script>

<style scoped>

</style>