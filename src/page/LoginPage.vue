<template>
  <div class="bg-white w-96 min-h-52 h-fit p-4 rounded-md">
    <el-form
        label-position="top"
        label-width="auto"
        :model="form"
    >
      <el-form-item label="Логин">
        <el-input v-model="form.login" />
      </el-form-item>
      <el-form-item label="Пароль">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="auth">
          Войти
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const form = reactive({
  login: '',
  password: ''
})

const auth = () => {
  store.commit('setAuth', true)
}
</script>

<style scoped>

</style>