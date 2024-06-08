<template>
  <div class="py-5">

    <div class="flex text-5xl mb-10">Плейлист "{{ playlist.name }}"</div>

    <div class="flex text-2xl mb-10">{{ playlist.description }}</div>

    <el-button type="primary"
               @click="router.push({path: '/creator/create-video'})">
      Добавить видеозапись
    </el-button>

    <div class="flex gap-4 mt-5">
      <el-input style="width: 400px" v-model="search"/>
      <el-button type="primary" style="width: 100px" @click="searchVideo">Поиск</el-button>
    </div>

    <div class="flex text-2xl mt-10">Видеозаписи:</div>

    <VideoCart
        v-for="(elem, index) in videos"
        :key="index"
        :data="elem">
    </VideoCart>
  </div>
</template>

<script setup>
import VideoCart from "@/components/VideoCart.vue";
import {onMounted, ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute();
const playlist = ref({})
const search = ref('')
const videos = ref([])

onMounted(() => {
  const id = route.query.id
  axios.get("http://localhost:8081/app/playlists/" + id, {headers: authHeader()})
      .then((response) => {
        playlist.value = response.data
      })
  axios.get("http://localhost:8081/app/videos?playlistId=" + id + "&search=" + search.value, {headers: authHeader()})
      .then((response) => {
        videos.value = response.data
      })
})

const searchVideo = () => {
  const id = route.query.id
  axios.get("http://localhost:8081/app/videos?playlistId=" + id + "&search=" + search.value, {headers: authHeader()})
      .then((response) => {
        videos.value = response.data
      })
}
</script>

<style scoped>

</style>