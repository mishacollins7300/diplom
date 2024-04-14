<template>
  <div class="flex flex-col gap-5">
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
      <div
          v-for="(elem, index) in data"
          :key="index"
      >
        <CurseCart :data="elem"></CurseCart>
      </div>
    </div>
    <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="50"
        class="mt-4"
        :page-count="4"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CurseCart from "@/components/CurseCart"
import FilterTable from "@/components/FilterTable"

const filterCurse = ref("")
const filterPrepod = ref("")

const data = [
  {
    name: 55,
    description: ',,a,aa,a',
    data: '21.10.2006',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: 55,
    description: ',,a,aa,a',
    data: '21.10.2006',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: 55,
    description: ',,a,aa,a',
    data: '21.10.2006',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: 55,
    description: ',,a,aa,a',
    data: '21.10.2006',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: 55,
    description: ',,a,aa,a',
    data: '21.10.2006',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },{
    name: 55,
    description: ',,a,aa,a',
    data: '21.10.2006',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: 55,
    description: ',,a,aa,a',
    data: '21.10.2006',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
]

const filterTable = () => {
  const payload = {
    prep: filterPrepod.value,
    curse: filterCurse.value
  }
  console.log(payload)
}
</script>

<style scoped>

</style>