<template>
  <div class="py-5">
    <div class="flex text-2xl mb-10">{{ title.value }}</div>
    <div class="flex flex-col gap-3">
      <div class="flex gap-4">
        <el-input v-model="search"/>
        <el-button type="primary" @click="searchPermissions">Поиск</el-button>
      </div>
      <div class="flex gap-4">
        <el-button type="primary" @click="() => router.push({ path: '/creator/create-permission' })">Создать</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="username" label="Пользователь" width="180"/>
        <el-table-column prop="user_group" label="Группа пользователей" width="180"/>
        <el-table-column prop="playlist_name" label="Плейлист" width="180"/>
        <el-table-column prop="creation_date" label="Дата создания" width="180"/>
        <el-table-column prop="inspire_date" label="Дата истечения" width="180"/>
        <el-table-column label="Действие">
          <template #default>
            <el-button link type="primary" size="small">
              Редактировать
            </el-button>
            <el-button link type="primary" size="small">
              Удалить
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRoute, useRouter} from "vue-router";

const title = ref('Список доступов')
const route = useRoute()
const router = useRouter()
const search = ref('')
const tableData = ref([])

onMounted(() => {
  const playlistId = route.query.playlistId
  if (playlistId) {
    const playlistName = ref('')
    axios.get("http://localhost:8081/app/playlists/" + playlistId, {headers: authHeader()})
        .then((response) => {
          playlistName.value = response.data.name
        })
    title.value = 'Список доступов к плейлисту ' + playlistName.value
  }
  axios.get("http://localhost:8081/app/creator/permissions?playlistId=" + playlistId, {headers: authHeader()})
      .then((response) => {
        tableData.value = response.data
      })
})

const searchPermissions = () => {
  const playlistId = route.query.playlistId
  axios.get("http://localhost:8081/app/creator/permissions?playlistId=" + playlistId + "&search=" + search.value, {headers: authHeader()})
      .then((response) => {
        tableData.value = response.data
      })
}
</script>

<style scoped>

</style>