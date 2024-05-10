<template>
  <div class="fixed shadow-md w-full bg-white z-10">
    <el-page-header>
      <template #content>
        <div class="flex items-center">

          <el-button text>
            <router-link to="/recomended-curce">Главная</router-link>
          </el-button>
          <el-button text>
            <router-link to="/recomended-curce">Группы пользователей</router-link>
          </el-button>
          <el-button text>
            <router-link to="/recomended-curce">Плейлисты</router-link>
          </el-button>
          <el-button text>
            <router-link to="/recomended-curce">Статистика</router-link>
          </el-button>
          <el-button text>
            <router-link to="/recomended-curce">Доступы</router-link>
          </el-button>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center gap-4">
          <div>
            creator1
          </div>
          <div>
            Колин В. В.
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