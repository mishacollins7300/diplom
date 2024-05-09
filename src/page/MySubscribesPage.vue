<template>
  <div class="flex flex-col gap-5 pb-10">
    <div class="text-stone-900 text-3xl">Мои подписки</div>
    <FilterTable @filter-table="filterTable">
      <el-input
          v-model="filterCurse"
          style="width: 240px"
          placeholder="Найти курс по названию"
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
import {computed, ref, onMounted} from 'vue'
import { useStore } from 'vuex'
import CurseCart from "@/components/CurseCart"
import FilterTable from "@/components/FilterTable"
import axios from "axios"

const filterCurse = ref("")

const store = useStore()

const curseList = computed(() => store.getters.getCurses)

const filterTable = () => {
  const payload = {
    curse: filterCurse.value
  }
  console.log(payload, curseList)
}
const data = ref({})
onMounted(() => {
  axios.get('http://localhost:8081/api/v1/classes/recommended')
  .then(function (response) {
    data.value = response.data.classes
  })
  .catch(function (error) {
    console.log(error);
  });
})
</script>

<style scoped>

</style>