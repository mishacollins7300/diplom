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
      <TimeCodeComponent :data="timeCode" @change="clickTimeCode"></TimeCodeComponent>
    </div>
    <div>
      <el-button class="mt-1" type="success" @click="addTimeCode">+</el-button>
    </div>

    <div :hidden="hidden.value" class="flex gap-3 mt-4" style="width: 450px">
      <div class="w-2/12">
        <el-input v-model="time"/>
      </div>
      <div class="w-8/12">
        <el-input v-model="description"/>
      </div>
      <div v-if="timeCodeId && timeCodeId.length > 0">
        <el-button type="danger" @click="endEditing">Сбросить редактирование</el-button>
      </div>
      <div class="w-2/12">
        <el-button type="primary" @click="saveTimeCode">Сохранить</el-button>
      </div>
    </div>

    <p class="text-xl mt-3">Комментарии</p>

    <div class="mt-2" v-for="(comm, index) in video.comments" :key="index">
      <CommentComponent :comment="comm" @change="commentClick"></CommentComponent>
    </div>
    <div v-if="commentId && commentId.length > 0">
      <el-button type="danger" @click="endAns">Сбросить редактирование</el-button>
    </div>
    <div class="flex gap-4 w-96 mt-2">
      <el-input v-model="commentText"/>
      <el-button type="primary" @click="saveComment">Отправить</el-button>
    </div>
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
const commentText = ref("")
const hidden = ref(true)
const time = ref("")
const description = ref("")
const timeCodeId = ref("")
const commentId = ref('')

const getVideoView = () => {
  const id = route.query.id
  axios.get("http://localhost:8081/app/videos/" + id, {headers: authHeader()})
      .then((response) => {
        video.value = response.data
      })
}
onMounted(() => {
  getVideoView()
})
const clickTimeCode = (event) => {
  const action = event.value.action
  if (action === "delete") {
    axios.delete("http://localhost:8081/app/timecodes/" + event.value.id, {headers: authHeader()})
    video.value.timeCodes = video.value.timeCodes.filter((c) => c.id !== event.value.id)
  } else {
    const code = video.value.timeCodes.filter((c) => c.id === event.value.id)[0]
    time.value = code.time
    description.value = code.description
    timeCodeId.value = code.id
  }
}

const endAns = () => {
  commentId.value = null
}

const endEditing = () => {
  timeCodeId.value = null
}

const addTimeCode = () => {
  hidden.value = false
  time.value = document.getElementById("video").currentTime.toFixed()
}

const saveTimeCode = () => {
  const body = {}
  body.time = time.value
  body.description = description.value
  body.videoId = video.value.id

  if (timeCodeId.value && timeCodeId.value.length > 0) {
    body.id = timeCodeId.value
    axios.put("http://localhost:8081/app/timecodes", body, {headers: authHeader()})
        .then(() => {
          timeCodeId.value = null
          time.value = ""
          description.value = ""
          axios.get("http://localhost:8081/app/timecodes/video/" + video.value.id, {headers: authHeader()})
              .then((response) => {
                video.value.timeCodes = response.data
              })
        })
  } else {
    axios.post("http://localhost:8081/app/timecodes", body, {headers: authHeader()})
        .then(() => {
          time.value = ""
          description.value = ""
          axios.get("http://localhost:8081/app/timecodes/video/" + video.value.id, {headers: authHeader()})
              .then((response) => {
                video.value.timeCodes = response.data
              })
        })
  }
}

const saveComment = () => {
  const body = {}
  body.text = commentText.value
  body.videoId = video.value.id
  if (commentId.value && commentId.value.length > 0) {
    body.id = commentId.value
  }
  axios.post("http://localhost:8081/app/comment", body, {headers: authHeader()})
      .then(() => {
        commentText.value = ""
        axios.get("http://localhost:8081/app/comments/video/" + video.value.id, {headers: authHeader()})
            .then((response) => {
              video.value.comments = response.data
            })
      })
}

const commentClick = (event) => {
  if (event.value.action === "ans") {
    commentId.value = event.value.id
  }
}
</script>

<style scoped>

</style>