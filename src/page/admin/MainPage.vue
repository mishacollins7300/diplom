<template>
  <div class="p-10">
    <p class="text-6xl text-center my-20">ADMIN CLIENT</p>

    <div class="flex flex-col gap-5">
      <p class="text-3xl">Пользователи</p>

      <div class="flex gap-4">
        <el-input v-model="searchInput" style="width: 300px" placeholder="Поиск по имени или логину"/>
        <el-button type="primary">Найти</el-button>
      </div>

      <div class="flex gap-4">
        <el-button type="primary">Создать пользователя</el-button>
        <el-button type="primary">Загрузить JSON с пользователями</el-button>
      </div>

      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="login" label="Логин" />
          <el-table-column prop="name" label="ФИО" />
          <el-table-column prop="mail" label="Почта" />
          <el-table-column prop="role" label="Роль" />
          <el-table-column prop="status" label="Статус" />
          <el-table-column fixed="right" label="Действия" prop="blocked" width="300">
            <template #default="scope">
              <el-button link type="primary" size="small">Изменить</el-button>
              <el-button link type="primary" size="small">Удалить</el-button>
              <el-button link type="primary" size="small">{{ scope.row.blocked ? 'Разблокирвать' : 'Заблокировать' }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const searchInput = ref('')

const tableData = [
  {
    login: 'user1111',
    name: 'Васин В. В.',
    mail: 'vo@mail.ru',
    role: 'USER',
    status: '11',
    blocked: false,
  },
  {
    login: 'user2222',
    name: 'Катин В. В.',
    mail: 'ko@mail.ru',
    role: 'USER',
    status: '',
    blocked: false,
  },
  {
    login: 'user3333',
    name: 'Лёшин В. В.',
    mail: 'lo@mail.ru',
    role: 'USER',
    status: '',
    blocked: false,
  },
  {
    login: 'user4444',
    name: 'Санин В. В.',
    mail: 'so@mail.ru',
    role: 'USER',
    status: 'Статус',
    blocked: true,
  },
  {
    login: 'creator1',
    name: 'Танин В. В.',
    mail: 'to@mail.ru',
    role: 'CREATOR',
    status: '',
    blocked: false,
  },
  {
    login: 'creator2',
    name: 'Колин В. В.',
    mail: 'koo@mail.ru',
    role: 'CREATOR',
    status: '',
    blocked: false,
  },
  {
    login: 'admin1',
    name: 'Сидоров В. В.',
    mail: 'sio@mail.ru',
    role: 'ADMIN',
    status: '',
    blocked: false,
  },
]
</script>