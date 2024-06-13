<template>
  <div class="p-10">

    <div class="flex text-5xl mb-10">Плейлист "{{ playlist.name }}"</div>

    <div class="flex text-2xl mb-4">{{ playlist.description }}</div>

    <div class="mt-2 flex gap-5 pb-5">
      <img class="object-cover w-10 h-10" :src="'http://localhost:8081/image/'+ playlist?.userResponse?.imageUrl" alt="">
      <p class="text-base mt-3">{{ playlist?.userResponse?.fullname }}</p>
    </div>

    <div class="flex text-2xl mt-10">Видеозаписи:</div>

    <div class="flex gap-4 mt-5">
      <el-input style="width: 400px" v-model="search"/>
      <el-button type="primary" style="width: 100px" @click="searchVideo">Поиск</el-button>
    </div>

    <EmployeeVideoCard
        v-for="(elem, index) in videos"
        :key="index"
        :data="elem">
    </EmployeeVideoCard>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRoute} from "vue-router";
import EmployeeVideoCard from "@/components/EmployeeVideoCard.vue";

const route = useRoute()
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