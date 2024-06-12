<template>
  <div class="fixed shadow-md w-full bg-white z-10">
    <el-page-header>
      <template #content>
        <div class="flex items-center">

          <div v-if="role==='CREATOR'">
            <el-button text>
              <router-link to="/creator/user-group">Группы пользователей</router-link>
            </el-button>
            <el-button text>
              <router-link to="/creator/playlist-list">Плейлисты</router-link>
            </el-button>
            <el-button text>
              <router-link to="/recomended-curce">Статистика</router-link>
            </el-button>
            <el-button text>
              <router-link to="/creator/permission-list">Доступы</router-link>
            </el-button>
          </div>

          <div v-if="role==='USER'">
            <el-button text>
              <router-link to="/employee/recomendations">Рекомендации</router-link>
            </el-button>
            <el-button text>
              <router-link to="/employee/playlists">Плейлисты</router-link>
            </el-button>
            <el-button text>
              <router-link to="/employee/groups">Группы</router-link>
            </el-button>
            <el-button text>
              <router-link to="/employee/history">История просмотра</router-link>
            </el-button>
            <el-button text>
              <router-link to="/employee/personal">Персональные доступы</router-link>
            </el-button>
          </div>

          <div v-if="role==='ADMIN'">
            <el-button text>
              <router-link to="/admin">Главная</router-link>
            </el-button>
          </div>

        </div>
      </template>

      <template #extra>
        <div class="flex items-center gap-4">
          <el-button text>
            <router-link :to="'/profile/update?id=' + user.id">{{ user.username }}</router-link>
          </el-button>
          <div class="w-10 h-10">
            <img class="object-cover w-full h-full" :src="'http://localhost:8081/image/'+ user.imageUrl" alt="">
          </div>
          <el-button @click="test">Выйти</el-button>
        </div>
      </template>
    </el-page-header>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import axios from "axios";
import authHeader from "@/app/auth-header";

const router = useRouter()
const store = useStore()
const user = ref({})
const role = ref('USER')

const test = () => {
  router.push("/login")
}
onMounted(() => {
  document.getElementsByClassName('el-page-header__back')[0].style.display = 'none'
  document.getElementsByClassName('el-divider el-divider--vertical')[0].style.display = 'none'
  axios.get('http://localhost:8081/app/user', {headers: authHeader()})
      .then((response) => {
        store.commit("setUser", response.data)
        role.value = response.data.role
        user.value = response.data
      }).catch(() => {
  })
})
</script>

<style>
.el-page-header > .el-page-header__header {
  height: 50px;
  padding: 5px;
}
</style>