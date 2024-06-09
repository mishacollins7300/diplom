<template>
  <div class="p-10 flex flex-col gap-4">

    <p class="text-3xl">Редактирование плейлиста "{{ title }}"</p>

    <el-form label-width="auto" style="max-width: 600px" label-position="top">
      <el-form-item>
        <el-checkbox label="Публичный" v-model="checkBox" size="large"/>
      </el-form-item>
      <el-form-item label="Название плейлиста">
        <el-input v-model="name"/>
      </el-form-item>
      <el-form-item label="Описание плейлиста">
        <el-input v-model="description" type="textarea" :rows="6"/>
      </el-form-item>
    </el-form>

    <el-button type="primary" style="width: 150px" @click="savePlaylist">Сохранить</el-button>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const name = ref('')
const description = ref('')
const checkBox = ref(false)
const route = useRoute()
const title = ref("")

const savePlaylist = () => {
  const playlist = {}
  playlist.id = route.query.id
  playlist.name = name.value
  playlist.description = description.value
  playlist.isPublic = checkBox.value
  axios.put("http://localhost:8081/app/playlist", playlist, {headers: authHeader()})
      .then(() => {
        router.go(-1);
      })
}

onMounted(() => {
  const playlistId = route.query.id
  axios.get("http://localhost:8081/app/playlists/" + playlistId, {headers: authHeader()})
      .then((response) => {
        name.value = response.data.name
        description.value = response.data.description
        checkBox.value = response.data.isPublic
        title.value = response.data.name
      })
})
</script>

<style scoped>

</style>