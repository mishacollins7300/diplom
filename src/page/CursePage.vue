<template>
  <div class="flex flex-col justify-around w-full h-96 rounded-md">
    <div class="text-3xl bg-cyan-100 p-4">{{data.name}}</div>
    <div>{{data.description}}</div>
    <div>{{data.creation_date}}</div>
  </div>
  <div class="text-2xl p-5">
    Видеозаписи
  </div>
  <div class="flex gap-4">
    <div v-for="item in data?.videos" :key="item.id" class="bg-slate-200 w-52 h-36">
    <div>{{item.name}}</div>
    <div>{{item.description}}</div>
    <div>{{item.creation_date}}</div>
  </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter} from 'vue-router'

const router = useRouter()

const data = ref({})
onMounted(() => {
  axios.get('http://localhost:8081/api/v1/class/' + router.currentRoute.value.params.id)
  .then((response) => data.value = response.data)
  .catch(e => console.log(e))
})
</script>

<style scoped>

</style>