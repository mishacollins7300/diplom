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
          <el-button text><router-link to="/recomended-curce">Рекомендованые курсы</router-link></el-button>
          <el-button text><router-link to="/my-subscribes">Мои подписки</router-link></el-button>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <el-button><router-link to="/profile">Профиль</router-link></el-button>
          <el-button>Выйти</el-button>
          <el-button>Войти</el-button>
        </div>
      </template>
    </el-page-header>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

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