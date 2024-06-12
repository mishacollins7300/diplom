<template>
  <div class="p-10">
    <div class="flex text-2xl mb-10">Список группы пользователей</div>
    <div class="flex flex-col gap-3">
      <div class="flex gap-4">
        <el-input v-model="searchInput" />
        <el-button type="primary" @click="getGroups">Поиск</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="creator.username" label="Наставник" width="180" @click="router.go()"/>
        <el-table-column prop="creator.fullname" label="ФИО" width="180" />
        <el-table-column prop="name" label="Название группы" width="180" />
        <el-table-column prop="description" label="Описание" width="180" />
        <el-table-column prop="count" label="Кол-во участников" width="180" />
        <el-table-column prop="creationDate" label="Дата создания" width="180" />
        <el-table-column label="Действие">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="router.push({name: 'employee-group',query: {id: scope.row.id}})">
              Перейти
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
const searchInput = ref('')
const tableData = ref([])

const getGroups = () => {
  axios.get("http://localhost:8081/app/employee/groups?search=" + searchInput.value, {headers: authHeader()})
      .then((response) => {
        tableData.value = response.data
      })
}

onMounted(() => {
  getGroups()
})
</script>

<style scoped>

</style>