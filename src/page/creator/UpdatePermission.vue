<template>
  <div>
    <p class="text-3xl">Создание доступа к плейлисту "Плейлист1"</p>

    <el-form :model="form" class="mt-4" label-width="auto" style="max-width: 600px" label-position="top">
      <el-form-item>
        <el-checkbox label="Временный" size="large" />
      </el-form-item>
      <el-form-item label="Дата">
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="День истечения"
        />
      </el-form-item>
      <el-form-item label="Описание">
        <el-input v-model="form.description" type="textarea" :rows="6"/>
      </el-form-item>
    </el-form>

    <p class="text-2xl">Объект доступа</p>

    <div class="mt-4">
      Логин пользователя: user3333
    </div>

    <div>
      ФИО пользователя: Лёшин В. В.
    </div>

    <p class="text-2xl mt-8">Поиск объекта доступа</p>

    <div class="flex gap-4">
      <el-input/>
      <el-select v-model="value" placeholder="Select" style="width: 240px">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <el-button type="primary" @click="() => console.log(4 )">Поиск</el-button>
    </div>

    <div class="flex flex-col gap-3 mt-3">
      Результаты поиска
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Логин" width="180" />
        <el-table-column prop="name" label="ФИО" width="180" />
        <el-table-column prop="address" label="Действие">
          <template #default>
            <el-button link type="primary" size="small">
              Выбрать
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-button class="mt-4" type="primary" style="width: 150px">Сохранить</el-button>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";

const form = reactive({
  name: '',
  description: 'По просьбе научрука Нирсова до конца семестра',
})

const value1 = ref('')
const value = ref('')
const options = [
  {
    value: 'USER',
    label: 'Пользователь'
  },
  {
    value: 'GROUP',
    label: 'Группа'
  }
];

const tableData = [
  {
    date: 'user1111',
    name: 'Васин В.В. ',
    address: 'Добавить',
  },
  {
    date: 'user2222',
    name: 'Катин В.В. ',
    address: 'Добавить',
  },
  {
    date: 'user3333',
    name: 'Лешин В.В. ',
    address: 'Добавить',
  }
]
</script>

<style scoped>

</style>