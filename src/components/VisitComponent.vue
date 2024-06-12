<template>
  <div>
    <div class="flex gap-1 mt-2 bg-slate-300" style="width: 600px; height: 70px;"
         @click="router.push({name: 'video-page',query: {id: props.data.video.id}})">
      <div class="h-full" style="width: 125px">
        <img class="object-cover w-full h-full" :src="'http://localhost:8081/image/'+ props.data.video.imageUrl" alt="">
      </div>
      <div class="text-center text-base" style="width: 275px">
        {{ props.data.video.name }}
      </div>
      <div style="width: 150px">
        <p class="text-center text-sm">{{ props.data.time }}</p>
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