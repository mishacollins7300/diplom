<template>
  <div class="m-10">
    <p class="text-3xl">Создание доступа {{ title }}</p>

    <el-form class="mt-4" label-width="auto" style="max-width: 600px" label-position="top">
      <el-form-item>
        <el-checkbox label="Временный" v-model="checkBox" size="large"/>
      </el-form-item>
      <el-form-item label="Дата истечения доступа">
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

      <div>
        {{ playlistMessage.description }}
      </div>

      <p class="text-2xl mt-8">Поиск плейлиста</p>

      <div class="flex gap-4">
        <el-input v-model="searchPlaylist"/>
        <el-button type="primary" @click="searchPlaylists">Поиск</el-button>
      </div>

      <div class="flex flex-col gap-3 mt-3">
        Результаты поиска
        <el-table :data="tableDataPlaylists" style="width: 600px">
          <el-table-column prop="name" label="Название плейлиста" width="400"/>
          <el-table-column label="Действие">
            <template #default="scope">
              <el-button link type="primary" size="small" @click="getPlaylist(scope.row.id)">
                Выбрать
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div>
      <p class="text-2xl mt-4">Объект доступа</p>

      <div class="mt-4">
        {{ permissionObjectMessage.name }}
      </div>

      <div>
        {{ permissionObjectMessage.description }}
      </div>

      <p class="text-2xl mt-8">Поиск объекта доступа</p>

      <div class="flex gap-4">
        <el-input v-model="search"/>
        <el-select v-model="type" placeholder="Select" style="width: 240px">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
        <el-button type="primary" @click="searchPermissionObjects">Поиск</el-button>
      </div>

      <div class="flex flex-col gap-3 mt-3">
        Результаты поиска
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="Имя" width="180"/>
          <el-table-column prop="description" label="Информация" width="180"/>
          <el-table-column label="Действие">
            <template #default="scope">
              <el-button link type="primary" size="small" @click="getPermissionObject(scope.row.id)">
                Выбрать
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <el-button class="mt-4" @click="savePermission" type="primary" style="width: 150px">Сохранить</el-button>
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import authHeader from "@/app/auth-header";
import {useRouter} from "vue-router";

const title = ref('')
const router = useRouter()
const search = ref('')
const checkBox = ref(false)
const description = ref('')
const tableData = ref([]);
const permissionObject = ref({})
const permissionObjectMessage = ref({
  name: "Выберите объект доступа",
  description: ""
})
const playlistMessage = ref({
  name: "Выберите плейлист",
  description: "-"
})
const playlist = ref({})
const searchPlaylist = ref('')
const date = ref('')
const type = ref('')
const options = [
  {
    value: 'user',
    label: 'Пользователь'
  },
  {
    value: 'group',
    label: 'Группа'
  }
];
const tableDataPlaylists = ref([])

const savePermission = () => {
  axios.post("http://localhost:8081/app/creator/permissions", {
    description: description.value,
    inspiration_date: date.value,
    is_temporary: checkBox.value,
    group_id: permissionObject.value.type === 'group' ? permissionObject.value.id : null,
    user_id: permissionObject.value.type === 'group' ? null : permissionObject.value.id,
    playlist_id: playlist.value.id
  }, {headers: authHeader()})
      .then(() => {
        router.push({path: '/creator/permission-list'});
      })
}

const getPlaylist = (id) => {
  const object = tableDataPlaylists.value.filter((object) => object.id === id)[0]
  playlist.value = object
  playlistMessage.value.name = "Название плейлиста: " + object.name
  playlistMessage.value.description = "Описание плейлиста: " + object.description
}

const getPermissionObject = (id) => {
  const object = tableData.value.filter((object) => object.id === id)[0]
  permissionObject.value = object
  if (object.type === 'group') {
    permissionObjectMessage.value.name = "Название группы: " + object.name
    permissionObjectMessage.value.description = "Описание группы: " + object.description
  } else {
    permissionObjectMessage.value.name = "Логин пользователя: " + object.name
    permissionObjectMessage.value.description = "Полное имя пользователя: " + object.description
  }
}

const searchPlaylists = () => {
  axios.get("http://localhost:8081/app/permissions/playlists?search=" + search.value,
      {headers: authHeader()})
      .then((response) => {
        console.log(response.data)
        tableDataPlaylists.value = response.data
      })
}

const searchPermissionObjects = () => {
  axios.get("http://localhost:8081/app/creator/permissions/objects?search=" + search.value + "&type=" + type.value,
      {headers: authHeader()})
      .then((response) => {
        tableData.value = response.data
      })
}

</script>

<style scoped>

</style>