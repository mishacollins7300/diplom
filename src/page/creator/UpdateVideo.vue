<template>
  <div>
    <p class="text-3xl">Создание видео</p>

    <el-form :model="form" label-width="auto" style="max-width: 600px" label-position="top">
      <el-form-item label="Название плейлиста">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="Описание плейлиста">
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

    <el-image style="width: 250px; height: 250px" :src="url" fit="contains"/>


    <p class="text-2xl mt-4">Видеозапись</p>

    <el-upload
        v-model:file-list="fileList"
        class="upload-demo mt-4"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
        :limit="3"
    >
      <el-button type="primary">Загрузить видеозапись</el-button>
      <template #tip>
        <div class="el-upload__tip">
          Видео сохранено "/58af02c2-035e-42f3-a7cc-8616b0901f17/d4047a0c-f2f0-4cc3-b0ed-1b99260726af"
        </div>
      </template>
    </el-upload>

    <el-button class="mt-4" type="primary" style="width: 150px">Сохранить</el-button>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const form = reactive({
  name: 'Видеозапись1',
  description: 'Первая видеозапись',
})

const fileList = [
  {
    name: 'video.mp3',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  }]

const empty = []

const url =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
</script>

<style scoped>

</style>