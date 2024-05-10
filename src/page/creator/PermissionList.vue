<template>
  <div class="py-5">
    <div class="flex text-2xl mb-10">Доступы к плейлисту "Плейлист1"</div>
    <div class="flex flex-col gap-3">
      <div class="flex gap-4">
        <el-input v-model="name"/>
        <el-button type="primary" @click="() => console.log(4 )">Поиск</el-button>
        <el-button type="primary" @click="() => console.log(4 )">Создать</el-button>
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
import {ref} from "vue";

const name = ref('')
const tableData = [
  {
    creation_date: '2022-04-22',
    inspire_date: '-',
    username: 'user1111',
    user_group: ''
  },
  {
    creation_date: '2022-04-22',
    inspire_date: '-',
    username: '',
    user_group: 'Группа1'
  },
  {
    creation_date: '2022-04-22',
    inspire_date: '2024-05-11',
    username: 'user2222',
    user_group: ''
  },
]
</script>

<style scoped>

</style>