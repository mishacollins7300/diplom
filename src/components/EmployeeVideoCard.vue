<template>
  <div class="flex gap-4 justify-around w-60 h-60 rounded-md mt-8 items-center bg-slate-300" style="width: 600px">

    <div style="width: 150px">
      <el-image class="object-cover w-full h-full" style="width: 150px; height: 150px"
                :src="'http://localhost:8081/image/' + props.data.imageUrl"
                fit="contain"/>
    </div>
    <div class="flex flex-col" style="width: 400px">
      <p class="text-1xl">{{ props.data.name }}</p>
      <p class="text-base mt-4">{{ props.data.description }}</p>
      <p class="mt-10 text-base">Дата загрузки - {{ props.data.creationTime }}</p>
      <p class="mt-2 text-base">Количество просмотров - {{ props.data.count }}</p>
      <div class="flex gap-4 mt-4">
        <el-button type="primary" style="width: 100px"
                   @click="router.push({name: 'video-page',query: {id: props.data.id}})">
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