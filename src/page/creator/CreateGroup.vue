<template>
    <div class="py-5">
      <div class="flex text-2xl mb-10">Создание группы пользователей</div>
      <el-form :model="form" label-width="auto" style="max-width: 600px" label-position="top">
        <el-form-item label="Название группы" >
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Описание группы пользователей">
          <el-input v-model="form.name" type="textarea" />
        </el-form-item>
        <el-form-item label="Поиск пользователей">
          <div class="flex gap-4">
            <el-input v-model="form.name" />
            <el-button type="primary" @click="() => console.log(4 )">Поиск</el-button>
          </div>
        </el-form-item>
      </el-form>
      <div class="flex flex-col gap-3 mb-3">
        Найденные пользователи
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Логин" width="180" />
          <el-table-column prop="name" label="ФИО" width="180" />
          <el-table-column prop="address" label="Действие">
            <template #default>
              <el-button link type="primary" size="small">
                Добавить
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-button type="primary" size="small">
        Загрузить json с пользователями
      </el-button>
      <div class="flex flex-col gap-3 mt-3">
        Добавленные пользователи
        <el-table :data="tableDataAdded" style="width: 100%">
          <el-table-column prop="date" label="Логин" width="180" />
          <el-table-column prop="name" label="ФИО" width="180" />
          <el-table-column prop="address" label="Действие">
            <template #default>
              <el-button link type="primary" size="small">
                Удалить
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-button type="primary" size="small">
        Сохранить
      </el-button>
    </div>
</template>
  
<script setup>
  import {reactive} from "vue";

  const form = reactive({
    name: '',
    description: '',
  })

  const tableDataAdded = []

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