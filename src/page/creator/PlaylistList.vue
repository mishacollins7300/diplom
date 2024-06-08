<template>
  <div class="py-5">
    <div class="flex text-2xl mb-10">Список плейлистов</div>
    <div class="flex flex-col gap-3">
      <div class="flex gap-4">
        <el-input v-model="search"/>
        <el-button type="primary" @click="searchPlaylists">Поиск</el-button>
        <el-button type="primary" @click="router.push({path: '/creator/create-playlist'})">Создать</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="Название" width="180"/>
        <el-table-column prop="description" label="Описание" width="180"/>
        <el-table-column prop="videoCount" label="Кол-во видеозаписей" width="180"/>
        <el-table-column prop="creationDate" label="Дата создания" width="180"/>
        <el-table-column label="Действие">
          <template #default>
            <el-button link type="primary" size="small"
                       @click="router.push({name: 'playlist',query: {id: scope.row.id}})">
              Перейти
            </el-button>
            <el-button link type="primary" size="small" @click="deletePlaylist(scope.row.id)">
              Удалить
            </el-button>
            <el-button link type="primary" size="small"
                       @click="router.push({name: '/creator/update-playlist',query: {id: scope.row.id}})">
              Изменить
            </el-button>
            <el-button link type="primary" size="small"
                       @click="router.push({name: 'playlist-statistic',query: {id: scope.row.id}})">
              Статистика
            </el-button>
            <el-button link type="primary" size="small"
                       @click="router.push({name: '/creator/permission-list',query: {playlistId: scope.row.id}})">
              Доступы
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
import {useRouter} from "vue-router";

const router = useRouter()
const tableData = ref([])
const search = ref("")

onMounted(() => {
  axios.get("http://localhost:8081/app/creator/playlists", {headers: authHeader()})
      .then((response) => {
        tableData.value = response.data
      })
})

const searchPlaylists = () => {
  axios.get("http://localhost:8081/app/creator/playlists?search=" + search.value, {headers: authHeader()})
      .then((response) => {
        tableData.value = response.data
      })
}

const deletePlaylist = (id) => {
  axios.delete("http://localhost:8081/app/playlist?id=" + id, {headers: authHeader()})
      .then(() => {
        tableData.value = tableData.value.filter((c) => c.id !== id)
      })
}
</script>

<style scoped>

</style>