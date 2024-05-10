<template>
  <div class="py-5">
    <div class="flex text-2xl mb-10">Список плейлистов</div>
    <div class="flex flex-col gap-3">
      <div class="flex gap-4">
        <el-input v-model="name"/>
        <el-button type="primary" @click="() => console.log(4 )">Поиск</el-button>
        <el-button type="primary" @click="() => console.log(4 )">Создать</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="Название" width="180"/>
        <el-table-column prop="desc" label="Описание" width="180"/>
        <el-table-column prop="cont" label="Кол-во видеозаписей" width="180"/>
        <el-table-column prop="date" label="Дата создания" width="180"/>
        <el-table-column label="Действие">
          <template #default>
            <el-button link type="primary" size="small">
              Перейти
            </el-button>
            <el-button link type="primary" size="small">
              Удалить
            </el-button>
            <el-button link type="primary" size="small">
              Изменить
            </el-button>
            <el-button link type="primary" size="small">
              Статистика
            </el-button>
            <el-button link type="primary" size="small">
              Доступы
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
    name: 'Плейлист1',
    desc: 'Первый плейлист',
    cont: '3'
  },
  {
    date: '2012-05-22',
    name: 'Плейлист2',
    desc: 'Второй плейлист',
    cont: '0'
  },
  {
    date: '2022-04-22',
    name: 'Программирование Java',
    desc: 'Программная инженерия',
    cont: '0'
  },
]
</script>

<style scoped>

</style>