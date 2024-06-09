<template>
  <div class="p-10">
    <div class="flex text-2xl mb-10">Редактирование группы пользователей {{ title }}</div>
    <el-form label-width="auto" style="max-width: 600px" label-position="top">
      <el-form-item label="Название группы">
        <el-input v-model="name"/>
      </el-form-item>
      <el-form-item label="Описание группы пользователей">
        <el-input v-model="description" type="textarea"/>
      </el-form-item>
    </el-form>


    <div>
      <el-form-item label="Поиск пользователей">
        <div class="flex gap-4">
          <el-input v-model="search"/>
          <el-button type="primary" @click="searchUser">Поиск</el-button>
        </div>
      </el-form-item>
      <div class="flex flex-col gap-3 mb-3">
        Найденные пользователи
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="username" label="Логин" width="180"/>
          <el-table-column prop="fullname" label="ФИО" width="180"/>
          <el-table-column label="Действие">
            <template #default="scope">
              <el-button link type="primary" size="small" @click="addUser(scope.row.id)">
                Добавить
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="flex flex-col gap-3 mt-3">
      Добавленные пользователи
      <el-table :data="tableDataAdded" style="width: 100%">
        <el-table-column prop="username" label="Логин" width="180"/>
        <el-table-column prop="fullname" label="ФИО" width="180"/>
        <el-table-column label="Действие">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="deleteUser(scope.row.id)">
              Удалить
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-button type="primary" class="mt-5" @click="saveGroup">
      Сохранить
    </el-button>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const search = ref('')
const name = ref('')
const title = ref('')
const description = ref('')
const tableDataAdded = ref([])
const tableData = ref([])
const route = useRoute()

const saveGroup = () => {
  const group = {}
  group.id = route.query.id
  group.name = name.value
  group.description = description.value
  group.users = tableDataAdded.value.map((c) => c.id)
  axios.put("http://localhost:8081/app/group", group, {headers: authHeader()})
      .then(() => {
        router.go(-1)
      })
}

const deleteUser = (id) => {
  tableDataAdded.value = tableDataAdded.value.filter((c) => c.id !== id)
}

const searchUser = () => {
  axios.get("http://localhost:8081/app/users?search=" + search.value, {headers: authHeader()})
      .then((response) => {
        tableData.value = response.data
      })
}

const addUser = (id) => {
  if (tableDataAdded.value.filter((c) => c.id === id).length < 1) {
    tableDataAdded.value.push(tableData.value.filter((c) => c.id === id)[0])
  }
}

onMounted(() => {
  const groupId = route.query.id
  axios.get("http://localhost:8081/app/group?id=" + groupId, {headers: authHeader()})
      .then((response) => {
        tableDataAdded.value = response.data.users
        name.value = response.data.name
        title.value = response.data.name
        description.value = response.data.description
      })
})
</script>

<style scoped>

</style>