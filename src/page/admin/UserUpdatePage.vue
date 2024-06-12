<template>
  <div class="p-10">
    <p class="text-6xl text-center my-20">ADMIN CLIENT</p>

    <div class="flex flex-col gap-5 items-center">
      <p class="text-3xl">Редактирование пользователя {{ username }}</p>

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
            :on-success="()=>{router.go();}">
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
const router = useRouter()
const username = ref('')

onMounted(() => {
  axios.get("http://localhost:8081/app/user/" + router.currentRoute.value.query.userId, {headers: authHeader()})
      .then((response) => {
        user.value = response.data
        username.value = response.data.username
      })
})

const editUser = () => {
  axios.put("http://localhost:8081/app/user", user.value, {headers: authHeader()})
      .then((response) => {
        user.value = response.data
        router.go(-1)
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