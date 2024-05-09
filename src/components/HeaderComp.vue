<template>
  <div class="fixed shadow-md w-full bg-white z-10">
    <el-page-header>
      <template #content>
        <div class="flex items-center">
          <el-button
              text
          >
            <router-link to="/">Курсы</router-link>
          </el-button>
          <el-button text>
            <router-link to="/recomended-curce">Рекомендованые курсы</router-link>
          </el-button>
          <el-button text>
            <router-link to="/my-subscribes">Мои подписки</router-link>
          </el-button>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center gap-4">
          <div>
            admin1
          </div>
          <div>
            Сидоров В. В.
          </div>
          <el-button @click="test">Выйти</el-button>
        </div>
      </template>
    </el-page-header>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import axios from "axios"

const test = () => {
  axios.get('http://localhost:8081/api/v1/account')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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