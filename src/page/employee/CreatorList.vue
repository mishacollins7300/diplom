<template>


  <div class="p-10">
    <div class="flex flex-col gap-5">
      <p class="text-3xl">Наставники</p>

      <div class="flex gap-4">
        <el-input v-model="search" style="width: 300px" placeholder="Поиск по имени или логину"/>
        <el-button type="primary" @click="getCreators">Найти</el-button>
      </div>

      <div>
        <el-table :data="tableData" style="width: 500px">
          <el-table-column prop="username" label="Логин"/>
          <el-table-column prop="fullname" label="ФИО"/>
          <el-table-column prop="status" label="Статус"/>
          <el-table-column fixed="right" label="Действия" prop="blocked" width="100">
            <template #default="scope">
              <el-button link type="primary" @click="router.push({name: 'employee-creator',query: {id: scope.row.id}})" size="small">Перейти</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>


</template>

<script setup>

import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";

const router = useRouter()
const tableData = ref([])
const search = ref("")

const getCreators = () => {
  axios.get("http://localhost:8081/app/creators?search=" + search.value, {headers: authHeader()})
      .then((response) => {
        tableData.value = response.data
      })
}

onMounted(() => {
  getCreators()
})

</script>

<style scoped>

</style>