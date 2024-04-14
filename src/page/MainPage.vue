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
            v-for="(elem, index) in data"
            :key="index"
            :data="elem">
        </CurseCart>
    </div>
    <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="5"
        class="mt-4"
        :page-count="4"
    />
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import { useStore } from 'vuex'
import CurseCart from "@/components/CurseCart"
import FilterTable from "@/components/FilterTable"

const filterCurse = ref("")
const filterPrepod = ref("")

const store = useStore()

const curseList = computed(() => store.getters.getCurses)
console.log(curseList)
const data = [
  {
    name: "Английский язык для технических направлений",
    description: 'Курс английского языка для студентов технических направлений: программирование, математические науки и строительство',
    data: '2015-10-1',
    prepod: 'Керзин С. Д.',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: "Программирование систем для Андроид",
    description: 'Программирование систем для платформы анроид на языке Java',
    data: '2015-10-1',
    prepod: 'Керзин С. Д.',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: "Менеджмент 3 курс",
    description: 'Курс менеджмента для студентов международного факультета',
    data: '2015-10-1',
    prepod: 'Треновна С. Д.',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: "Моделирование в среде Blender",
    description: 'Курс моделирования для студентов направлений ПИ и ИСЭ',
    data: '2015-10-1',
    prepod: 'Руков С. Д.',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: "Английский язык для технических направлений",
    description: 'Курс английского языка для студентов технических направлений: программирование, математические науки и строительство',
    data: '2015-10-1',
    prepod: 'Керзин С. Д.',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: "Программирование систем для Андроид",
    description: 'Программирование систем для платформы анроид на языке Java',
    data: '2015-10-1',
    prepod: 'Керзин С. Д.',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: "Менеджмент 3 курс",
    description: 'Курс менеджмента для студентов международного факультета',
    data: '2015-10-1',
    prepod: 'Треновна С. Д.',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: "Моделирование в среде Blender",
    description: 'Курс моделирования для студентов направлений ПИ и ИСЭ',
    data: '2015-10-1',
    prepod: 'Руков С. Д.',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: "Английский язык для технических направлений",
    description: 'Курс английского языка для студентов технических направлений: программирование, математические науки и строительство',
    data: '2015-10-1',
    prepod: 'Керзин С. Д.',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: "Программирование систем для Андроид",
    description: 'Программирование систем для платформы анроид на языке Java',
    data: '2015-10-1',
    prepod: 'Керзин С. Д.',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: "Менеджмент 3 курс",
    description: 'Курс менеджмента для студентов международного факультета',
    data: '2015-10-1',
    prepod: 'Треновна С. Д.',
    img: 'http://localhost:8080/src/assets/img/image.png'
  },
  {
    name: "Моделирование в среде Blender",
    description: 'Курс моделирования для студентов направлений ПИ и ИСЭ',
    data: '2015-10-1',
    prepod: 'Руков С. Д.',
    img: 'http://localhost:8080/src/assets/img/image.png'
  }
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