<template>
  <div class="flex flex-col gap-5 pb-10">
    <div class="text-stone-900">Все доступные курсы</div>
    <FilterTable @filter-table="filterTable">
      <el-input
          v-model="filterCurse"
          style="width: 240px"
          placeholder="Найти курс по названию"
      />
      <el-input
          v-model="filterPrepod"
          style="width: 240px"
          placeholder="Найти курс по преподавателю"
      />
    </FilterTable>
    <div class="grid grid-cols-5 gap-4 place-content-center">
        <CurseCart
            v-for="(elem, index) in curse"
            :key="index"
            :data="elem">
        </CurseCart>
    </div>
  </div>
</template>

<script setup>
import {computed, ref, onMounted} from 'vue'
import { useStore } from 'vuex'
import CurseCart from "@/components/CurseCart"
import FilterTable from "@/components/FilterTable"
import axios from 'axios'

const filterCurse = ref("")
const filterPrepod = ref("")

const store = useStore()

const curseList = computed(() => store.getters.getCurses)
console.log(curseList)
const curse = ref([])
const filterTable = () => {
  const payload = {
    prep: filterPrepod.value,
    curse: filterCurse.value
  }
  console.log(payload)
}

onMounted(() => {
  axios.get('http://localhost:8081/api/v1/classes/recommended')
  .then(function (response) {
    curse.value = response.data.classes
  })
  .catch(function (error) {
    console.log(error);
  });
})
</script>

<style scoped>

</style>