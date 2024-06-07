<template>
  <div class="p-10">
    <p class="text-6xl text-center my-20">ADMIN CLIENT</p>

    <div class="flex flex-col gap-5 items-center">
      <p class="text-3xl">Редактирование пользователя user1111</p>

      <div class="w-52 h-52" v-if="user.imageUrl">
        <img class="object-cover" :src="'http://localhost:8081/image/'+ user.imageUrl" alt="">
      </div>

<!--      <form method="post" :action="'http://localhost:8081/upload/user/' + user.id" enctype="multipart/form-data">-->
<!--        <div class="form-group">-->
<!--          <input type="file" name="file" accept="image/*" class="form-control-file">-->
<!--        </div>-->
<!--        <button type="submit" @click="loadImage" class="btn btn-primary">Upload image</button>-->
<!--      </form>-->

      <div class="flex gap-4">
        <el-text class="mx-1" size="large">Фото профиля</el-text>
        <el-upload
            class="upload-demo"
            :action="'http://localhost:8081/upload/user/' + user.id"
            :auto-upload="true"
            :multiple="false"
            limit="1"
            accept="image/*"
            type="file"
            :on-success="()=>{router.go();}"
        >
          <el-button type="primary">Выберите изображение</el-button>

          <!--          <el-button class="ml-3" type="success" @click.stop="test">-->
          <!--            upload to server-->
          <!--          </el-button>-->
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
// const uploadRef = ref()

onMounted(() => {
  console.log(router)
  axios.get("http://localhost:8081/app/user?userId=" + router.currentRoute.value.query.userId, {headers: authHeader()})
      .then((response) => {
        user.value = response.data
      })
})


const selectedFile = ref({})
const editUser = () => {
  user.value.image = selectedFile
  axios.put("http://localhost:8081/app/user", user.value, {headers: authHeader()})
      .then((response) => {
        user.value = response.data
      })
}

// const test = (uploadFile, uploadFiles) => {
//   uploadRef.value = uploadFiles
//   selectedFile.value = uploadFiles[0];
// }

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