<template>
  <div class="p-10">

    <div v-if="playlists && playlists.length > 0">
      <p class="text-2xl mb-4"> У вас есть персональные доступы к следующим плейлистам: </p>

      <div class="flex gap-4 mb-4" style="width: 500px">
        <el-input v-model="search"/>
        <el-button type="primary" @click="searchPlaylists">Поиск</el-button>
      </div>

      <div v-for="(playlist, index) in playlists" :key="index">
        <PlaylistComponent :data="playlist"></PlaylistComponent>
      </div>
    </div>
    <div v-else>
      <p class="text-2xl mb-4"> У вас нет действующих персональных доступов </p>
    </div>


  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import PlaylistComponent from "@/components/PlaylistComponent.vue";

const search = ref("")
const playlists = ref([])

onMounted(() => {
  axios.get("http://localhost:8081/app/employee/permissions/playlists", {headers: authHeader()})
      .then((response) => {
        playlists.value = response.data
      })
})

const searchPlaylists = () => {
  axios.get("http://localhost:8081/app/employee/permissions/playlists?search=" + search.value, {headers: authHeader()})
      .then((response) => {
        playlists.value = response.data
      })
}
</script>

<style scoped>

</style>