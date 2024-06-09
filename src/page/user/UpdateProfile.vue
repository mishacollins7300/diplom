<template>
  <div class="p-10">

    <div class="flex flex-col gap-5 items-center">
      <p class="text-3xl">Профиль пользователя </p>

      <div class="w-52 h-52" v-if="user.imageUrl">
        <img class="object-cover w-full h-full" :src="'http://localhost:8081/image/'+ user.imageUrl" alt="">
      </div>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Фото профиля</el-text>
        <el-upload
            class="upload-demo"
            :action="'http://localhost:8081/upload/user/image/' + user.id"
            :auto-upload="true"
            :multiple="false"
            limit="1"
            accept="image/*"
            type="file"
            :on-success="()=>{router.go();}"
        >
          <el-button type="primary">Выберите изображение</el-button>
        </el-upload>
      </div>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Логин</el-text>
        <el-input v-model="user.username" style="width: 300px"></el-input>
      </div>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Почта</el-text>
        <el-input v-model="user.mail" style="width: 300px" placeholder=""/>
      </div>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Роль: {{ user.role }}</el-text>
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

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Введите старый пароль</el-text>
        <el-input type="password" v-model="oldPass" style="width: 300px" placeholder=""/>
      </div>

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Введите новый пароль</el-text>
        <el-input type="password" v-model="newPass" style="width: 300px" placeholder=""/>
      </div>

      <el-button type="primary" @click="editUser" style="width: 150px">Сохранить</el-button>
    </div>
  </div>

</template>

<script setup>
import {ref, onMounted} from 'vue'
import {useRoute, useRouter} from "vue-router";
import axios from "axios";
import authHeader from "@/app/auth-header";

const user = ref({})
const router = useRouter()
const route = useRoute()
const newPass = ref("")
const oldPass = ref("")

onMounted(() => {
  const userId = route.query.id
  axios.get("http://localhost:8081/app/user?userId=" + userId, {headers: authHeader()})
      .then((response) => {
        user.value = response.data
      })
})


const editUser = () => {
  user.value.id = route.query.id
  user.value.oldPass = oldPass.value
  user.value.newPass = newPass.value
  axios.put("http://localhost:8081/app/auth/profile", user.value, {headers: authHeader()})
      .then((response) => {
        user.value = response.data
        router.go();
      })
}

</script>

<style>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

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