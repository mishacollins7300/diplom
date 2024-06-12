<template>
  <div class="p-10">
    <p class="mb-10 text-2xl">История просмотра</p>

    <div v-for="(playlist, index) in visits" :key="index">
      <VisitComponent :data="playlist"></VisitComponent>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import VisitComponent from "@/components/VisitComponent.vue";

const visits = ref([])

const getVideos = () => {
  axios.get("http://localhost:8081/app/history", {headers: authHeader()})
      .then((response) => {
        visits.value = response.data
      })
}

onMounted(() => {
  getVideos()
})
</script>

<style scoped>

</style>