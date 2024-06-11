<template>
  <div class="p-10">
    <div class="flex text-3xl mb-10">Статистика по группе "{{ group.name }}"</div>

    <p class="text-2xl mt-5">Информация по группе</p>

    <p class="text-1xl mt-4">Описание:</p>
    <p class="text-base mt-3">{{group.description}}</p>
    <p class="text-base mt-4">Дата создания - {{group.creationDate}}</p>
    <p class="text-base mt-4">Количество пользователей - {{group.count}}</p>

    <el-table :data="group.users" style="width: 100%">
      <el-table-column prop="username" label="Логин" width="180"/>
      <el-table-column prop="fullname" label="ФИО" width="180"/>
      <el-table-column prop="status" label="Статус" width="280"/>
    </el-table>

    <p class="text-2xl mt-5">Доступы</p>

    <p class="text-base mt-4">Всего доступов к плейлистам - {{stat.permissionsCount}}</p>

    <el-table :data="stat.playlists" style="width: 100%">
      <el-table-column prop="name" label="Название" width="180"/>
      <el-table-column prop="description" label="Описание" width="280"/>
      <el-table-column prop="permissionDescription" label="Описание доступа" width="280"/>
    </el-table>

    <p class="text-1xl mt-4 mb-4">Статистика просмотров:</p>

    <el-table :data="stat.stats" style="width: 100%">
      <el-table-column prop="username" label="Пользователь" width="180" />
      <el-table-column prop="playlistName" label="Плейлист" width="180" />
      <el-table-column prop="videoName" label="Видеозапись" width="180">
        <template #default="scope">
          <el-button link size="small" :type="scope.row.isWatched ? 'success' : 'danger'">{{
              scope.row.videoName
            }}</el-button>
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
const group = ref({})

onMounted(() => {
  const id = route.query.id
  axios.get("http://localhost:8081/app/stat/group/" + id, {headers: authHeader()})
      .then((response) => {
        stat.value = response.data
      })

  axios.get("http://localhost:8081/app/group?id=" + id, {headers: authHeader()})
      .then((response) => {
        group.value = response.data
      })
})

</script>

<style scoped>

</style>