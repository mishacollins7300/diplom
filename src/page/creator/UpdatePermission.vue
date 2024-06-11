<template>
  <div class="m-10">
    <p class="text-3xl">Редактирование доступа</p>

    <el-form class="mt-4" label-width="auto" style="max-width: 600px" label-position="top">
      <el-form-item>
        <el-checkbox label="Временный" v-model="checkBox" size="large"/>
      </el-form-item>
      <el-form-item label="Дата">
        <el-date-picker
            v-model="date"
            type="date"
            placeholder="День истечения"
        />
      </el-form-item>
      <el-form-item label="Описание">
        <el-input v-model="description" type="textarea" :rows="6"/>
      </el-form-item>
    </el-form>

    <div>
      <p class="text-2xl">Плейлист, к которому создаётся доступ</p>

      <div class="mt-4">
        {{ playlistMessage.name }}
      </div>
    </div>

    <div>
      <p class="text-2xl mt-4">Объект доступа</p>

      <div class="mt-4">
        {{ permissionObjectMessage.name }}
      </div>
    </div>

    <el-button class="mt-4" @click="savePermission" type="primary" style="width: 150px">Сохранить</el-button>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const permission = ref({})
const checkBox = ref(false)
const description = ref('')
const permissionObjectMessage = ref({
  name: "Выберите объект доступа"
})
const playlistMessage = ref({
  name: "Выберите плейлист"
})
const date = ref('')

const savePermission = () => {
  axios.put("http://localhost:8081/app/creator/permissions", {
    id: route.query.id,
    description: description.value,
    inspiration_date: date.value,
    isTemporary: checkBox.value
  }, {headers: authHeader()})
      .then(() => {
        router.push({path: '/creator/permission-list'});
      })
}

onMounted(() => {
  const id = route.query.id
  axios.get("http://localhost:8081/app/creator/permissions/" + id, {headers: authHeader()})
      .then((response) => {
        permission.value = response.data
        if (permission.value.user_group === undefined || permission.value.user_group == null) {
          permissionObjectMessage.value.name = "Пользователь: " + permission.value.username
        } else {
          permissionObjectMessage.value.name = "Группа пользователей: " + permission.value.user_group
        }
        playlistMessage.value.name = "ДОступ осуществляется для плейлиста с названием: " + permission.value.playlist_name
        checkBox.value = permission.value.isTemporary
        description.value = permission.value.description
        date.value = permission.value.inspire_date
      })
})

</script>

<style scoped>

</style>