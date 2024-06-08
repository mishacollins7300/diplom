<template>
  <div class="py-5">
    <div class="flex text-2xl mb-10">Создание группы пользователей</div>
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
            <template #default>
              <el-button link type="primary" size="small" @click="addUser(scope.row.id)">
                {{ tableDataAdded.value.filter((c) => c.id === scope.row.id).length === 0 ? 'Добавить' : '-' }}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <el-button type="primary" size="small">
      Загрузить json с пользователями
    </el-button>
    <div class="flex flex-col gap-3 mt-3">
      Добавленные пользователи
      <el-table :data="tableDataAdded" style="width: 100%">
        <el-table-column prop="username" label="Логин" width="180"/>
        <el-table-column prop="fullname" label="ФИО" width="180"/>
        <el-table-column label="Действие">
          <template #default>
            <el-button link type="primary" size="small" @click="deleteUser(scope.row.id)">
              Удалить
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-button type="primary" size="small" @click="saveGroup">
      Сохранить
    </el-button>
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRouter} from "vue-router";

const router = useRouter()
const search = ref('')
const name = ref('')
const description = ref('')
const tableDataAdded = ref([])
const tableData = ref([])

const saveGroup = () => {
  const group = ref({})
  group.value.name = name.value
  group.value.description = description.value
  group.value.users = tableDataAdded.value.map((c) => c.id)
  axios.post("http://localhost:8081/app/group", group.value, {headers: authHeader()})
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
  if (tableDataAdded.value.filter((c) => c.id === id).length === 0) {
    tableDataAdded.value.push(tableData.value.filter((c) => c.id === id))
  }
}
</script>

<style scoped>

</style>    