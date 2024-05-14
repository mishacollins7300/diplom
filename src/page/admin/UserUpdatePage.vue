<template>
  <div class="p-10">
    <p class="text-6xl text-center my-20">ADMIN CLIENT</p>

    <div class="flex flex-col gap-5 items-center">
      <p class="text-3xl">Редактирование пользователя user1111</p>

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
        <el-text class="mx-1" size="large">Фото профиля</el-text>
        <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar"/>
          <el-icon v-else class="avatar-uploader-icon">
            <Plus/>
          </el-icon>
        </el-upload>
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

      <el-button type="primary" @click="editUser" style="width: 150px">Сохранить</el-button>
    </div>
  </div>

</template>

<script setup>
import {ref, onMounted} from 'vue'
import {useRouter} from "vue-router";
import axios from "axios";
import authHeader from "@/app/auth-header";

const user = ref({})
const imageUrl = ref('')
const router = useRouter()

const handleAvatarSuccess = (uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw)
}

onMounted(() => {
  console.log(router)
  axios.get("http://localhost:8081/app/user?userId=" + router.currentRoute.value.query.userId, {headers: authHeader()})
      .then((response) => {
        user.value = response.data
      })
})

const editUser = () => {
  axios.put("http://localhost:8081/app/user", user.value, {headers: authHeader()})
      .then((response) => {
        user.value = response.data
      })
}

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

</script>

<style scoped>

</style>