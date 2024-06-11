<template>
  <div class="p-10">
    <div class="flex text-2xl mb-10">{{ title }}</div>
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
        <el-table-column prop="description" label="Описание" width="300"/>
        <el-table-column prop="playlist_name" label="Плейлист" width="180"/>
        <el-table-column prop="creation_date" label="Дата создания" width="180"/>
        <el-table-column prop="inspire_date" label="Дата истечения" width="180"/>
        <el-table-column label="Действие">
          <template #default="scope">
            <el-button link type="primary" size="small"
                       @click="router.push({name: 'update-permission',query: {id: scope.row.id}})">
              Редактировать
            </el-button>
            <el-button link type="primary" size="small" @click="deletePermission(scope.row.id)">
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
  if (playlistId !== undefined && playlistId != null) {
    const playlistName = ref('')
    axios.get("http://localhost:8081/app/playlists/" + playlistId, {headers: authHeader()})
        .then((response) => {
          playlistName.value = response.data.name
        })
    title.value = 'Список доступов к плейлисту ' + playlistName.value
  }

  axios.get("http://localhost:8081/app/creator/permissions?playlistId=" + (playlistId === undefined ? "" : playlistId),
      {headers: authHeader()})
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

const deletePermission = (id) => {
  axios.delete("http://localhost:8081/app/creator/permissions?id=" + id, {headers: authHeader()})
  tableData.value = tableData.value.filter((c) => c.id !== id)
}
</script>

<style scoped>

</style>