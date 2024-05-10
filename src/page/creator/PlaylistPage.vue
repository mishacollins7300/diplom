<template>
  <div class="py-5">

    <div class="flex text-5xl mb-10">Плейлист "Плейлист1"</div>

    <div class="flex text-2xl mb-10">Первый плейлист</div>

    <el-button type="primary" @click="() => console.log(4 )">Загрузить видеозапись</el-button>

    <div class="flex gap-4 mt-5">
      <el-input style="width: 400px" v-model="name"/>
      <el-button type="primary" style="width: 100px" @click="() => console.log(4 )">Поиск</el-button>
      <el-button type="primary" style="width: 150px" @click="() => console.log(4 )">Сбросить поиск</el-button>
    </div>

    <div class="flex text-2xl mt-10">Видеозаписи</div>

    <VideoCart
        v-for="(elem, index) in videos"
        :key="index"
        :data="elem">
    </VideoCart>
  </div>
</template>

<script setup>
import VideoCart from "@/components/VideoCart.vue";

const videos = [
  {
    name: "Видеозапись1",
    description: "Первая видеозапись",
    image_url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    creation_date: "2022-04-22",
    count: "2"
  },
  {
    name: "Видеозапись2",
    description: "Вторая видеозапись",
    image_url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    creation_date: "2022-04-22",
    count: "0"
  },
  {
    name: "Видеозапись3",
    description: "Третяя видеозапись",
    image_url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    creation_date: "2022-04-22",
    count: "0"
  }
]
</script>

<style scoped>

</style>