<template>
  <div class="flex text-2xl mb-10">Видеозапись1</div>

  <p class="text-2xl mt-4">Описание:</p>
  <p class="text-base mt-3">Первая видеозапись</p>

  <p class="text-2xl mt-4">Автор:</p>
  <p class="text-base mt-3">Танин В. В.</p>

  <video width="500px" class="mt-4"
         height="400px"
         controls="controls">
    <source
        src=
            "https://media.geeksforgeeks.org/wp-content/uploads/20231020155223/
Full-Stack-Development-_-LIVE-Classes-_-GeeksforGeeks.mp4"
        type="video/mp4"/>
  </video>

  <p class="text-xl mt-3">Таймкоды</p>
  <div class="flex gap-1 mt-2">
    <el-input v-model="time" style="width: 70px;"/>
    <el-input v-model="text" style="width: 300px;"/>
    <el-button type="danger" @click="() => console.log(4 )" class="bg-red-600">-</el-button>
  </div>

  <div class="flex gap-1 mt-1">
    <el-input style="width: 70px;" placeholder="0:15"/>
    <el-input style="width: 300px;"/>
    <el-button type="danger" @click="() => console.log(4 )" class="bg-red-600">-</el-button>
  </div>

  <div>
    <el-button class="mt-1" type="success" @click="() => console.log(4 )">+</el-button>
  </div>

  <p class="text-xl mt-3">Комментарии</p>


  <div class="mt-2" v-for="(comm, index) in comments" :key="index">
    <CommentComponent :comment="comm"></CommentComponent>
  </div>
</template>

<script setup>
import CommentComponent from '@/components/CommentComponent'
import {ref} from 'vue'

const time = ref('0:05');
const text = ref('Вступление');

const comments = [
  {
    "text": "Комментарий",
    "creation_date": "2024-05-06",
    "user": "user1111 Васин В.В.",
    "comments": [
      {
        "text": "Комментарий",
        "user": "user1111 Васин В.В.",
        "creation_date": "2024-05-06"
      }
    ]
  }
]
</script>

<style scoped>

</style>