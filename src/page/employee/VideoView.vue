<template>
  <div class="p-10">
    <div class="flex text-2xl mb-10">Просмотр видео "{{ video.name }}"</div>

    <p class="text-2xl mt-4">Описание:</p>
    <p class="text-base mt-3">{{ video.description }}</p>

    <!--    <p class="text-2xl mt-4">Автор:</p>-->
    <!--    <div class="flex gap-5 pb-10">-->
    <!--      <img class="object-cover w-10 h-10" :src="'http://localhost:8081/image/'+ video?.user?.imageUrl" alt="">-->
    <!--      <p class="text-base mt-3">{{ video.user.fullname }}</p>-->
    <!--    </div>-->

    <video id="video" width="500px" class="mt-4"
           height="400px"
           :src="'http://localhost:8081/app/stream/' + video.videoUrl"
           controls preload="none">
    </video>

    <p class="text-xl mt-3">Таймкоды</p>

    <div class="mt-2" v-for="(timeCode, index) in video.timeCodes" :key="index">
      <EmployeeTimeCodeComponent :data="timeCode"></EmployeeTimeCodeComponent>
    </div>

    <p class="text-xl mt-3">Комментарии</p>

    <div class="mt-2" v-for="(comm, index) in video.comments" :key="index">
      <CommentComponent :comment="comm"></CommentComponent>
    </div>
    <div class="flex gap-4 w-96 mt-2">
      <el-input v-model="commentText"/>
      <el-button type="primary" @click="saveComment">Отправить</el-button>
    </div>
  </div>
</template>

<script setup>
import CommentComponent from '@/components/CommentComponent'
import EmployeeTimeCodeComponent from '@/components/EmployeeTimeCodeComponent.vue'
import {onMounted, ref} from 'vue'
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRoute} from "vue-router";

const route = useRoute()
const video = ref({})
const commentText = ref("")

onMounted(() => {
  const id = route.query.id
  axios.get("http://localhost:8081/app/videos/" + id, {headers: authHeader()})
      .then((response) => {
        video.value = response.data
        console.log(video.value)
      })
  axios.post("http://localhost:8081/app/visits?videoId=" + id, null, {headers: authHeader()})
})

const saveComment = () => {
  const body = {}
  body.text = commentText.value
  body.videoId = video.value.id
  axios.post("http://localhost:8081/app/comment", body, {headers: authHeader()})
      .then(() => {
        commentText.value = ""
        axios.get("http://localhost:8081/app/comments/video/" + video.value.id, {headers: authHeader()})
            .then((response) => {
              video.value.comments = response.data
            })
      })
}
</script>

<style scoped>

</style>