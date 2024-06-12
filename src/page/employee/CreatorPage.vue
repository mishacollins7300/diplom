<template>


  <div class="p-10">
    <p class="text-2xl">Страница пользователя {{ user.username }}</p>

    <div class="w-52  mt-5" v-if="user.imageUrl">
      <img class="object-cover w-full h-full" :src="'http://localhost:8081/image/'+ user.imageUrl" alt="">
    </div>

    <p class="text-xl mt-5">Информация о пользователе</p>
    <p class="text-base mt-3">Дата регистрации - {{ user.registrationDate }}</p>
    <p class="text-base mt-3">Полное имя - {{ user.fullname }}</p>
    <p class="text-base mt-3 mb-4">Почта - {{ user.mail }}</p>

    <p class="text-xl mt-4">Открытые плейлисты наставника:</P>
    <div class="flex gap-4 mt-3" style="width: 600px">
      <el-input v-model="searchOpen"/>
      <el-button type="primary" @click="searchPlaylistsOpen">Поиск</el-button>
      <el-button type="primary" @click="cleanOpen">Очистить</el-button>
    </div>
    <div v-for="(playlist, index) in openPlaylists" :key="index">
      <PlaylistComponent :data="playlist"></PlaylistComponent>
    </div>

    <p class="text-xl mt-4">Приватные плейлисты, к которым у вас есть доступ:</P>
    <div class="flex gap-4 mt-3" style="width: 600px">
      <el-input v-model="searchPrivate"/>
      <el-button type="primary" @click="searchPlaylistsPrivate">Поиск</el-button>
      <el-button type="primary" @click="cleanPrivate">Очистить</el-button>
    </div>
    <div v-for="(playlist, index) in privatePlaylists" :key="index">
      <PlaylistComponent :data="playlist"></PlaylistComponent>
    </div>
  </div>


</template>

<script setup>
import PlaylistComponent from "@/components/PlaylistComponent.vue";
import {onMounted, ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRoute} from "vue-router";

const user = ref({})
const searchOpen = ref("")
const searchPrivate = ref("")
const openPlaylists = ref([])
const privatePlaylists = ref([])
const route = useRoute()

const searchPlaylistsOpen = () => {
  const id = route.query.id
  axios.get("http://localhost:8081/app/playlists/creator/" + id + "?search=" + searchOpen.value + "&isPrivate=false", {headers: authHeader()})
      .then((response) => {
        openPlaylists.value = response.data
      })
}

const cleanOpen = () => {
  openPlaylists.value = []
}

const searchPlaylistsPrivate = () => {
  const id = route.query.id
  axios.get("http://localhost:8081/app/playlists/creator/" + id + "?search=" + searchPrivate.value + "&isPrivate=true", {headers: authHeader()})
      .then((response) => {
        privatePlaylists.value = response.data
      })
}

const cleanPrivate = () => {
  privatePlaylists.value = []
}

onMounted(() => {
  const id = route.query.id
  axios.get("http://localhost:8081/app/user/" + id, {headers: authHeader()})
      .then((response) => {
        user.value = response.data
      })
})
</script>

<style scoped>

</style>