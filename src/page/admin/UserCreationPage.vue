<template>
  <div class="p-10">
    <p class="text-6xl text-center my-20">ADMIN CLIENT</p>

    <div class="flex flex-col gap-5 items-center">
      <p class="text-3xl">Создание пользователя</p>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Логин</el-text>
        <el-input v-model="user.username" style="width: 300px"></el-input>
      </div>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Почта</el-text>
        <el-input v-model="user.mail" style="width: 300px" placeholder=""/>
      </div>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Роль</el-text>
        <el-select v-model="user.role" placeholder="Select" style="width: 240px">
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
        <el-input v-model="user.fullname" style="width: 300px" placeholder=""/>
      </div>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Статус</el-text>
        <el-input
            v-model="user.status"
            style="width: 400px"
            :rows="2"
            type="textarea"
            placeholder=""
        />
      </div>

      <el-button type="primary" @click.prevent="createUser" style="width: 150px">Сохранить</el-button>


    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRouter} from "vue-router";

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
const user = ref({})
const router = useRouter()

const createUser = () => {
  axios.post("http://localhost:8081/app/user", user.value, {headers: authHeader()})
      .then((response) => {
        user.value = response.data
        router.go();
      })
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>