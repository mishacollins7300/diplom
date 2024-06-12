<template>
  <div class="flex gap-4 justify-around w-60 rounded-md mt-4 items-center bg-slate-300" style="width: 600px; height: 280px">

    <div style="width: 150px">
      <el-image class="object-cover w-full h-full" style="width: 150px; height: 150px"
                :src="'http://localhost:8081/image/' + props.data.userResponse.imageUrl"
                fit="contain"/>
      <p class="text-1xl">{{ props.data.userResponse.fullname }}</p>
    </div>
    <div class="flex flex-col" style="width: 400px">
      <p class="text-2xl">{{ props.data.name }}</p>
      <p class="text-base mt-4">{{ props.data.description }}</p>
      <p class="mt-10 text-base">Количество посещений - {{ props.data.visitsCount }}</p>
      <p class="mt-2 text-base">Количество видеозаписей - {{ props.data.videoCount }}</p>
      <p class="mt-2 text-base">Дата создания - {{ props.data.creationDate }}</p>
      <div class="flex gap-4 mt-4">
        <el-button type="primary" style="width: 100px"
                   @click="router.push({name: 'employee-playlist-page',query: {id: props.data.id}})">
          Перейти
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()

const props = defineProps({
  data: {
    type: Object
  }
})
</script>

<style scoped>

</style>