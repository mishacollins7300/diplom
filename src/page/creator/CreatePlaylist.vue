<template>
  <div class="flex flex-col gap-4">

    <p class="text-3xl">Создание плейлиста</p>

    <el-form label-width="auto" style="max-width: 600px" label-position="top">
      <el-form-item>
        <el-checkbox label="Публичный" v-model="checkBox" size="large"/>
      </el-form-item>
      <el-form-item label="Название плейлиста">
        <el-input v-model="name"/>
      </el-form-item>
      <el-form-item label="Описание плейлиста">
        <el-input v-model="description" type="textarea" :rows="6"/>
      </el-form-item>
    </el-form>

    <el-button type="primary" style="width: 150px" @click="savePlaylist">Сохранить</el-button>
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRouter} from "vue-router";

const router = useRouter()
const name = ref('')
const description = ref('')
const checkBox = ref(false)

const savePlaylist = () => {
  axios.post("http://localhost:8081/app/playlist", {
    name: name.value,
    description: description.value,
    isPublic: checkBox.value
  }, {headers: authHeader()})
      .then(() => {
        router.go(-1);
      })
}
</script>

<style scoped>

</style>