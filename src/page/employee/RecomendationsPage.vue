<template>
  <div class="p-10">

    <div class="flex text-2xl mt-10">Рекомендации для пользователя:</div>

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
import EmployeeVideoCard from "@/components/EmployeeVideoCard.vue";
import {onMounted, ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";

const search = ref('')
const videos = ref([])

onMounted(() => {
  axios.get("http://localhost:8081/app/video/recomedations?search=", {headers: authHeader()})
      .then((response) => {
        videos.value = response.data
      })
})

const searchVideo = () => {
  axios.get("http://localhost:8081/app/video/recomedations?search=" + search.value, {headers: authHeader()})
      .then((response) => {
        videos.value = response.data
      })
}
</script>

<style scoped>

</style>