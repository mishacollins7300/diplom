<template>
  <div class="p-10">
    <div class="flex text-3xl mb-10">Статистика по плейлисту {{ playlist.name }}</div>

    <p class="text-2xl mt-3">Описание</p>

    <p class="text-base mt-3">{{ playlist.description }}</p>

    <p class="text-2xl mt-5">Видеоматериалы</p>

    <p class="text-base mt-3">Всего видеозаписей - {{ stat.videoCount }}</p>

    <el-table :data="stat.videoResponses" class="mt-5" style="width: 100%">
      <el-table-column prop="name" label="Название видеозаписи" width="180"/>
      <el-table-column prop="description" label="Описание" width="300"/>
      <el-table-column prop="visitCount" label="Кол-во просмотров" width="180"/>
      <el-table-column prop="commentCount" label="Кол-во комментариев" width="180"/>
    </el-table>

    <p class="text-base mt-4">Статистика просмотров по доступам:</p>

    <el-table :data="stat.stats" style="width: 100%">
      <el-table-column prop="username" label="Пользователь" width="180"/>
      <el-table-column prop="groupName" label="Группа пользователей" width="180"/>
      <el-table-column label="Видеозапись" width="180">
        <template #default="scope">
          <el-button link size="small" :type="scope.row.isWatched ? 'success' : 'danger'">{{
              scope.row.videoName
            }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRoute} from "vue-router";

const route = useRoute()
const stat = ref({})
const playlist = ref({})

onMounted(() => {
  const id = route.query.id
  axios.get("http://localhost:8081/app/playlists/" + id, {headers: authHeader()})
      .then((response) => {
        playlist.value = response.data
      })

  axios.get("http://localhost:8081/app/stat/playlist/" + id, {headers: authHeader()})
      .then((response) => {
        stat.value = response.data
      })
})
</script>

<style scoped>

</style>