<template>
  <div class="p-10">
    <p class="text-6xl text-center my-20">ADMIN CLIENT</p>

    <div class="flex flex-col gap-5 items-center">
      <p class="text-3xl">Создание пользователя</p>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Почта</el-text>
        <el-input style="width: 300px" placeholder=""/>
      </div>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Роль</el-text>
        <el-select v-model="value" placeholder="Select" style="width: 240px">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Имя</el-text>
        <el-input style="width: 300px" placeholder=""/>
      </div>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Фамилия</el-text>
        <el-input style="width: 300px" placeholder=""/>
      </div>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Отчество</el-text>
        <el-input style="width: 300px" placeholder=""/>
      </div>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Фото профиля</el-text>
        <el-button type="primary">Загрузить</el-button>
      </div>

      <el-image style="width: 250px; height: 250px" :src="url" fit="contains"/>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Статус</el-text>
        <el-input
            v-model="textarea"
            style="width: 240px"
            :rows="2"
            type="textarea"
            placeholder=""
        />
      </div>

      <el-button type="primary" style="width: 150px">Сохранить</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const textarea = ref('')

const value = ref('')

const options = [
  {
    value: 'USER',
    label: 'USER'
  },
  {
    value: 'CREATOR',
    label: 'CREATOR'
  },
  {
    value: 'ADMIN',
    label: 'ADMIN'
  }
];

const url =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
</script>

<style scoped>

</style>