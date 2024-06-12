<template>
  <div class="p-10">
    <div class="flex text-2xl mb-10">Список плейлистов</div>
    <div class="flex flex-col gap-3">
      <div class="flex gap-4" style="width: 500px">
        <el-input v-model="search"/>
        <el-button type="primary" @click="searchPlaylists">Поиск</el-button>
      </div>

      <div v-for="(playlist, index) in tableData" :key="index">
        <PlaylistComponent :data="playlist"></PlaylistComponent>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import PlaylistComponent from "@/components/PlaylistComponent.vue";

const tableData = ref([])
const search = ref("")

onMounted(() => {
  axios.get("http://localhost:8081/app/employee/playlists", {headers: authHeader()})
      .then((response) => {
        tableData.value = response.data
      })
})

const searchPlaylists = () => {
  axios.get("http://localhost:8081/app/employee/playlists?search=" + search.value, {headers: authHeader()})
      .then((response) => {
        tableData.value = response.data
      })
}

</script>

<style scoped>

</style>