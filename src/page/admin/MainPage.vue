<template>
  <div class="p-10">
    <p class="text-6xl text-center my-20">ADMIN CLIENT</p>

    <div class="flex flex-col gap-5">
      <p class="text-3xl">Пользователи</p>

      <div class="flex gap-4">
        <el-input v-model="searchInput" style="width: 300px" placeholder="Поиск по имени или логину"/>
        <el-button type="primary" @click="searchUser">Найти</el-button>
      </div>

      <div class="flex gap-4">
        <el-button type="primary" @click="createUser">Создать пользователя</el-button>
      </div>

      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="username" label="Логин"/>
          <el-table-column prop="fullname" label="ФИО"/>
          <el-table-column prop="mail" label="Почта"/>
          <el-table-column prop="role" label="Роль"/>
          <el-table-column prop="status" label="Статус"/>
          <el-table-column fixed="right" label="Действия" prop="blocked" width="300">
            <template #default="scope">
              <el-button link type="primary" @click="editUser(scope.row.id)" size="small">Изменить</el-button>
              <el-button link type="primary" size="small">Удалить</el-button>
              <el-button link type="primary" @click="blockUser(scope.row.id)" size="small">
                {{ scope.row.blocked ? 'Разблокирвать' : 'Заблокировать' }}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRouter} from "vue-router";

const router = useRouter()
const searchInput = ref('')
const tableData = ref([]);

const searchUser = () => {
  axios.get("http://localhost:8081/app/users?search=" + searchInput.value, {headers: authHeader()})
      .then((response) => {
        tableData.value = response.data
      })
}

const createUser = () => {
  router.push({
    name: "userCreatePage"
  })
}

const getUsers = () => {
  axios.get("http://localhost:8081/app/users", {headers: authHeader()})
      .then((response) => {
        tableData.value = response.data
      })
}

onMounted(() => {
  getUsers()
})

const blockUser = (id) => {
  axios.post("http://localhost:8081/app/user/block?userId=" + id, {headers: authHeader()})
      .then(() => {
        getUsers()
      })
}

const editUser = (userId) => {
  router.push({
    name: "userEditPage",
    query: {userId: userId}
  })
}
</script>