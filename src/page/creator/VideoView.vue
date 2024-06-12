<template>
  <div class="p-10">
    <div class="flex text-2xl mb-10">Просмотр видео "{{ video.name }}"</div>

    <video id="video" width="500px" class="mt-4"
           height="400px"
           :src="'http://localhost:8081/app/stream/' + video.videoUrl"
           controls preload="none">
    </video>
    <div class="mt-2 flex gap-5 pb-10">
      <img class="object-cover w-10 h-10" :src="'http://localhost:8081/image/'+ video?.user?.imageUrl" alt="">
      <p class="text-base mt-3">{{ video?.user?.fullname }}</p>
    </div>
    <p class="text-2xl mt-2">Описание:</p>
    <p class="text-base mt-3">{{ video.description }}</p>

    <p class="text-xl mt-3">Таймкоды</p>

    <div class="mt-2" v-for="(timeCode, index) in video.timeCodes" :key="index">
      <TimeCodeComponent :data="timeCode" @change="clickTimeCode"></TimeCodeComponent>
    </div>
    <div>
      <el-button class="mt-1" type="success" @click="addTimeCode">+</el-button>
    </div>

    <div :hidden="hidden.value" class="flex gap-3 mt-4" style="width: 700px">
      <div style="width: 70px;">
        <el-input v-model="time"/>
      </div>
      <div style="width: 300px;">
        <el-input v-model="description"/>
      </div>
      <div v-if="timeCodeId && timeCodeId.length > 0">
        <el-button type="danger" @click="endEditing">Сбросить редактирование</el-button>
      </div>
      <div style="width: 100px;">
        <el-button type="primary" @click="saveTimeCode">Сохранить</el-button>
      </div>
    </div>

    <p class="text-xl mt-3">Комментарии</p>

    <div class="mt-2" v-for="(comm, index) in video.comments" :key="index">
      <CommentComponent :comment="comm" @change="commentClick"></CommentComponent>
    </div>

    <div class="flex gap-4 mt-2" style="width: 700px">
      <el-input style="width: 340px" v-model="commentText"/>
      <div style="width: 100px"
           v-if="(commentId && commentId.length > 0) || (commentUpdateId && commentUpdateId.length > 0)">
        <el-button type="danger" @click="endAns">Сбросить</el-button>
      </div>
      <el-button style="width: 150px" type="primary" @click="saveComment">Отправить</el-button>
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
const commentUpdateId = ref('')

const getVideoView = () => {
  const id = route.query.id
  axios.get("http://localhost:8081/app/videos/" + id, {headers: authHeader()})
      .then((response) => {
        video.value = response.data
        video.value.timeCodes = video.value.timeCodes.sort((a, b) => (Number(a.time.replace(/\D/g, '')) > Number(b.time.replace(/\D/g, ''))) ? 1 : ((Number(b.time.replace(/\D/g, '')) > Number(a.time.replace(/\D/g, ''))) ? -1 : 0))
      })
}
onMounted(() => {
  getVideoView()
})
const clickTimeCode = (event) => {
  const action = event.action
  if (action === "delete") {
    axios.delete("http://localhost:8081/app/timecodes/" + event.id, {headers: authHeader()})
    video.value.timeCodes = video.value.timeCodes.filter((c) => c.id !== event.id)
    video.value.timeCodes = video.value.timeCodes.sort((a, b) => (Number(a.time.replace(/\D/g, '')) > Number(b.time.replace(/\D/g, ''))) ? 1
        : ((Number(b.time.replace(/\D/g, '')) > Number(a.time.replace(/\D/g, ''))) ? -1 : 0))
  } else {
    const code = video.value.timeCodes.filter((c) => c.id === event.id)[0]
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
  const videoTime = Number(document.getElementById("video").currentTime.toFixed())
  const timeString = ref('')

  const minutes = String(Math.floor(videoTime / 60))
  timeString.value = minutes.length > 1 ? minutes : "0" + minutes

  timeString.value = timeString.value + ":"

  const secs = String(videoTime % 60)
  timeString.value = timeString.value + (secs.length > 1 ? secs : "0" + secs)

  time.value = timeString.value
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
                video.value.timeCodes = video.value.timeCodes.sort((a, b) => (Number(a.time.replace(/\D/g, '')) > Number(b.time.replace(/\D/g, ''))) ? 1
                    : ((Number(b.time.replace(/\D/g, '')) > Number(a.time.replace(/\D/g, ''))) ? -1 : 0))
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
                video.value.timeCodes = video.value.timeCodes.sort((a, b) => (Number(a.time.replace(/\D/g, '')) > Number(b.time.replace(/\D/g, ''))) ? 1
                    : ((Number(b.time.replace(/\D/g, '')) > Number(a.time.replace(/\D/g, ''))) ? -1 : 0))
              })
        })
  }
}

const saveComment = () => {
  const body = {}
  body.text = commentText.value

  if (commentUpdateId.value && commentUpdateId.value.length > 0) {
    body.id = commentUpdateId.value
    axios.put("http://localhost:8081/app/comment", body, {headers: authHeader()})
        .then(() => {
          commentText.value = ""
          axios.get("http://localhost:8081/app/comments/video/" + video.value.id, {headers: authHeader()})
              .then((response) => {
                video.value.comments = response.data
                commentUpdateId.value = null
              })
        })
  } else {
    body.videoId = video.value.id
    if (commentId.value && commentId.value.length > 0) {
      body.commentId = commentId.value
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
  commentId.value = null
  commentUpdateId.value = null
}

const commentClick = (event) => {
  if (event.action === "ans") {
    commentId.value = event.id
    commentUpdateId.value = null
  } else if (event.action === "upd") {
    commentId.value = null
    commentUpdateId.value = event.id
    commentText.value = event.text
  } else if (event.action === "del") {
    axios.delete("http://localhost:8081/app/comments/" + event.id, {headers: authHeader()})
        .then(() => {
          axios.get("http://localhost:8081/app/comments/video/" + video.value.id, {headers: authHeader()})
              .then((response) => {
                video.value.comments = response.data
              })
        })
  }
}
</script>

<style scoped>

</style>