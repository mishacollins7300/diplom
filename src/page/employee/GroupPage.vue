<template>
  <div class="p-10">
    <div class="flex text-3xl mb-10">Группа пользователей "{{ name }}"</div>

    <p class="mt-4 text-2xl">Описание группы:</p>
    <p class="mt-3 text-xl">{{ description }}</p>

    <p class="text-base mt-4">Дата создания группы - {{group.creationDate}}</p>
    <p class="text-base mt-3">Количество участников - {{group.count}}</p>

    <p class="mt-4 text-2xl"> Наставник группы:</p>
    <div class="mt-3 flex gap-5">
      <img class="object-cover w-10 h-10" :src="'http://localhost:8081/image/'+ group?.creator?.imageUrl" alt="">
      <p class="text-base mt-3">{{ group?.creator?.fullname }}</p>
    </div>

    <p class="mt-4 text-2xl"> Плейлисты, к которым даны доступы:</p>
    <div v-for="(playlist, index) in playlists" :key="index">
      <PlaylistComponent :data="playlist"></PlaylistComponent>
    </div>

    <div class="flex flex-col gap-3 mt-3">
      <p class="text-2xl">Добавленные пользователи</p>
      <el-table :data="group.users" style="width: 100%">
        <el-table-column prop="username" label="Логин" width="180"/>
        <el-table-column prop="fullname" label="ФИО" width="180"/>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRoute} from "vue-router";
import PlaylistComponent from "@/components/PlaylistComponent.vue";

// const router = useRouter()
const name = ref('')
const description = ref('')
const group = ref([])
const route = useRoute()
const playlists = ref([])

onMounted(() => {
  const groupId = route.query.id
  axios.get("http://localhost:8081/app/group?id=" + groupId, {headers: authHeader()})
      .then((response) => {
        group.value = response.data
        name.value = response.data.name
        description.value = response.data.description
        axios.get("http://localhost:8081/app/employee/group/playlists/" + groupId, {headers: authHeader()})
            .then((response) => {
              playlists.value = response.data
            })
      })
})
</script>

<style scoped>

</style>