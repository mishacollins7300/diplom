<template>
  <div>
    <p class="text-3xl">Создание видео</p>

    <el-form :model="form" class="mt-4" label-width="auto" style="max-width: 600px" label-position="top">
      <el-form-item label="Название видеозаписи">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="Описание видеозаписи">
        <el-input v-model="form.description" type="textarea" :rows="6"/>
      </el-form-item>
    </el-form>

    <p class="text-2xl">Изображение на превью</p>

    <el-upload
        v-model:file-list="empty"
        class="upload-demo mt-4"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
        :limit="3"
    >
      <el-button type="primary">Загрузить изображение</el-button>

    </el-upload>

    <p class="text-2xl mt-4">Видеозапись</p>

    <el-upload
        v-model:file-list="fileList"
        class="upload-demo mt-4"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
        :limit="3"
    >
      <el-button type="primary">Загрузить видеозапись</el-button>

    </el-upload>

    <el-button class="mt-4" type="primary" style="width: 150px">Сохранить</el-button>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const form = reactive({
  name: '',
  description: '',
})

const fileList = []

const empty = []
</script>

<style scoped>

</style>