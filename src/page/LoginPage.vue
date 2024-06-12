<template>
  <div class="flex place-content-center">
    <div class="bg-white w-96 min-h-52 h-fit p-4 rounded-md">
      <el-form
          label-position="top"
          label-width="auto"
          :model="form"
      >
        <el-form-item label="Логин">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="Пароль">
          <el-input type="password" v-model="form.password" />
        </el-form-item>
        <el-text class="mx-1" type="danger">{{message}}</el-text>
        <el-form-item>
          <el-button class="mt-3" type="primary" @click="auth">
            Войти
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import { useRouter } from "vue-router";

const message = ref('')
const store = useStore()
const router = useRouter()
const form = reactive({
  username: '',
  password: ''
})

const auth = () => {
  store.commit('setAuth', true)
  axios.post('http://localhost:8081/auth/sign-in', form)
  .then(function (response) {
    console.log(response);
    localStorage.setItem("token", JSON.stringify(response.data.token))
    axios.get('http://localhost:8081/app/user', {
      headers:{
        Authorization: "Bearer " + response.data.token
      }
    }).then((response) => {
      if(response.data.role === "ADMIN") {
        router.push("/admin")
      } else if(response.data.role === "CREATOR") {
        router.push("/creator/user-group")
      } else {
        router.push("/employee/recomendations")
      }
    }).catch(() => {
    })

  })
  .catch(function (error) {
    console.log(error);
    message.value = "При входе произошла ошибка, проверьте логин и пароль"
  });
}
</script>

<style scoped>

</style>