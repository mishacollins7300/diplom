<template>
  <div class="fixed shadow-md w-full bg-white z-10">
    <el-page-header>
      <template #content>
        <div class="flex items-center">

          <el-button text>
            <router-link to="/admin">Главная</router-link>
          </el-button>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center gap-4">
          <div>
            {{ user.value?.username }}
          </div>
          <div>
            {{ user.value?.fullname }}
          </div>
          <el-button @click="test">Выйти</el-button>
        </div>
      </template>
    </el-page-header>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const router = useRouter()
const store = useStore()
const user = store.getters.getUser

const test = () => {
  router.push("/login")
}
onMounted(() => {
  document.getElementsByClassName('el-page-header__back')[0].style.display = 'none'
  document.getElementsByClassName('el-divider el-divider--vertical')[0].style.display = 'none'
})
</script>

<style>
.el-page-header > .el-page-header__header {
  height: 50px;
  padding: 5px;
}
</style>