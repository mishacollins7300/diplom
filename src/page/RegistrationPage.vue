<template>
  <div class="bg-white w-96 min-h-52 h-fit p-4 rounded-md">
    <el-form
        label-position="top"
        label-width="auto"
        :model="form"
    >
      <el-form-item label="Логин">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="ФИО">
        <el-input v-model="form.fullname" />
      </el-form-item>
      <el-form-item label="Роль">
        <el-radio-group v-model="form.role" class="ml-4">
          <el-radio value="teacher" size="large">Преподаватель</el-radio>
          <el-radio value="user" size="large">Ученик</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Статус">
        <el-input v-model="form.status" />
      </el-form-item>
      <el-form-item label="Пароль">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reg">
          Создать аккаунт
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
  username: '',
  fullname: '',
  role: '',
  status: '',
  password: '',
})

const reg = () => {
  store.commit('setAuth', true)
}
</script>

<style scoped>

</style>