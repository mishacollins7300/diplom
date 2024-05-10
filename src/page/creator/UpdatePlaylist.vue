<template>
  <div class="flex flex-col gap-4">

    <p class="text-3xl">Редактирование плейлиста "Плейлист1"</p>

    <el-form :model="form" label-width="auto" style="max-width: 600px" label-position="top">
      <el-form-item label="Название плейлиста">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="Описание плейлиста">
        <el-input v-model="form.description" type="textarea" :rows="6"/>
      </el-form-item>
    </el-form>

    <el-button type="primary" style="width: 150px">Сохранить</el-button>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const form = reactive({
  name: 'Плейлист1',
  description: 'Первый плейлист',
})
</script>

<style scoped>

</style>