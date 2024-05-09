<template>
  <div class="py-5">
    <div class="flex text-2xl">Список группы пользователей</div>
    <div>
      <div class="flex gap-4">
        <el-input v-model="name" />
        <el-button type="primary" @click="() => console.log(4 )">Поиск</el-button>
        <el-button type="primary" @click="() => console.log(4 )">Создать</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="Название" width="180" />
        <el-table-column prop="desc" label="Описание" width="180" />
        <el-table-column prop="count" label="Кол-во участников" width="180" />
        <el-table-column prop="date" label="Дата создания" width="180" />
        <el-table-column label="Действие">
          <template #default>
            <el-button link type="primary" size="small">
              Удалить
            </el-button>
            <el-button link type="primary" size="small">
              Изменить
            </el-button>
            <el-button link type="primary" size="small">
              Статистика
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";

const name = ref()
const tableData = [
  {
    date: '2022-04-22',
    name: 'Группа1',
    desc: 'Первая группа',
    cont: '3'
  },
  {
    date: '2012-05-22',
    name: 'Группа2',
    desc: 'Вторая группа',
    cont: '3'
  },
  {
    date: '2022-04-22',
    name: 'Пибд',
    desc: 'Программная инженерия',
    cont: '3'
  },
  {
    date: '2022-04-22',
    name: 'Группа1',
    desc: 'Первая группа',
    cont: '3'
  },
]
</script>

<style scoped>

</style>