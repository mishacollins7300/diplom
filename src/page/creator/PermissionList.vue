<template>
  <div class="py-5">
    <div class="flex text-2xl mb-10">Доступы к плейлисту "Плейлист1"</div>
    <div class="flex flex-col gap-3">
      <div class="flex gap-4">
        <el-input v-model="name"/>
        <el-button type="primary" @click="() => console.log(4 )">Поиск</el-button>
      </div>
      <div class="flex gap-4">
        <el-button type="primary" @click="() => router.push({ path: '/creator/create-permission' })">Создать</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="username" label="Пользователь" width="180"/>
        <el-table-column prop="user_group" label="Группа пользователей" width="180"/>
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
import {useRouter} from "vue-router";

const router = useRouter()
const name = ref('')
const tableData = ref([])

onMounted(() => {
  axios.get("http://localhost:8081/app/creator/permissions", {headers: authHeader()})
      .then((response) => {
        tableData.value = response.data
      })
})
</script>

<style scoped>

</style>