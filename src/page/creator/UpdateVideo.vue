<template>
  <div class="p-10">
    <p class="text-3xl">Создание видео</p>

    <el-form :model="form" class="mt-4" label-width="auto" style="max-width: 600px" label-position="top">
      <el-form-item label="Название видеозаписи">
        <el-input v-model="name"/>
      </el-form-item>
      <el-form-item label="Описание видеозаписи">
        <el-input v-model="description" type="textarea" :rows="6"/>
      </el-form-item>
    </el-form>

    <p class="text-2xl">Изображение на превью</p>
    <div class="flex gap-4">
      <el-upload
          class="upload-demo"
          :action="'http://localhost:8081/app/upload/video'"
          :auto-upload="true"
          :multiple="false"
          limit="1"
          accept="image/*"
          type="file"
          :on-success="getImage">
        <el-button class="mt-5" type="primary">Загрузить изображение</el-button>
      </el-upload>
    </div>

    <p class="text-2xl mt-4">Видеозапись</p>

    <div class="flex gap-4">
      <el-upload
          class="upload-demo"
          :action="'http://localhost:8081/app/upload/video'"
          :auto-upload="true"
          :multiple="false"
          limit="1"
          accept="file/*"
          type="file"
          :on-success="getVideo">
        <el-button class="mt-5" type="primary">Загрузить видеозапись</el-button>
      </el-upload>
    </div>

    <el-button class="mt-4" type="primary" style="width: 150px" @click="saveVideo">Сохранить</el-button>

  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import axios from "axios";
import authHeader from "@/app/auth-header";

const name = ref("")
const description = ref("")
const imageUrl = ref("")
const videoUrl = ref("")
const route = useRoute()
const router = useRouter()

const getImage = (response) => {
  console.log(response)
  imageUrl.value = response.value
}

const getVideo = (response) => {
  console.log(response)
  videoUrl.value = response.value
}

const saveVideo = () => {
  const video = {}
  video.id = route.query.id
  video.description = description.value
  video.imageUrl = imageUrl.value
  video.videoUrl = videoUrl.value
  video.name = name.value
  axios.put("http://localhost:8081/app/video", video, {headers: authHeader()})
      .then(() => {
        router.go(-1)
      })
}

onMounted(() => {
  const id = route.query.id
  axios.get("http://localhost:8081/app/videos/" + id, {headers: authHeader()})
      .then((response) => {
        const video = response.data
        name.value = video.name
        description.value = video.description
        imageUrl.value = video.imageUrl
        videoUrl.value = video.videoUrl
      })
})
</script>

<style scoped>

</style>