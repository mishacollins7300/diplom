<template>
  <div class="py-5">
    <div class="flex text-2xl mb-10">Список группы пользователей</div>
    <div class="flex flex-col gap-3">
      <div class="flex gap-4">
        <el-input v-model="searchInput" />
        <el-button type="primary" @click="getGroups">Поиск</el-button>
        <el-button type="primary" @click="createGroup">Создать</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="Название" width="180" />
        <el-table-column prop="description" label="Описание" width="180" />
        <el-table-column prop="count" label="Кол-во участников" width="180" />
        <el-table-column prop="creationDate" label="Дата создания" width="180" />
        <el-table-column label="Действие">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="deleteGroup(scope.row.id)">
              Удалить
            </el-button>
            <el-button link type="primary" size="small" @click="editGroup(scope.row.id)">
              Изменить
            </el-button>
            <el-button link type="primary" size="small" @click="getStatistics(scope.row.id)">
              Статистика
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

const createGroup = () => {
  router.push("/creator/create-group")
}

const getStatistics = (groupId) => {
  router.push({
    name:"group-statistic",
    query: {id: groupId}
  })
}

const editGroup = (groupId) => {
  router.push({
    name:"updateGroup",
    query: {id: groupId}
  })
}

const deleteGroup = (groupId) => {
  axios.delete("http://localhost:8081/app/group?id=" + groupId, {headers: authHeader()})
      .then((response) => {
        tableData.value = response.data
      })
  getGroups()
}

const getGroups = () => {
  axios.get("http://localhost:8081/app/created_groups?search=" + searchInput.value, {headers: authHeader()})
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