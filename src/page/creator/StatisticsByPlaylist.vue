<template>
  <div class="py-5">
    <div class="flex text-2xl mb-10">Статистика по плейлисту "Плейлист1"</div>


    <p class="text-1xl mt-3">Первый плейлист</p>
    <p class="text-base mt-4">Всего видеозаписей - {{videos.length}}</p>
    <p class="text-base mt-4">Видеоматериалы:</p>

    <el-table :data="videos" style="width: 100%">
      <el-table-column prop="name" label="Название видеозаписи" width="180" />
      <el-table-column prop="watches" label="Кол-во просмотров" width="180" />
      <el-table-column prop="comments" label="Кол-во комментариев" width="180">
      </el-table-column>
    </el-table>

    <p class="text-base mt-4">Статистика просмотров:</p>

    <el-table :data="watches" style="width: 100%">
      <el-table-column prop="username" label="Пользователь" width="180" />
      <el-table-column prop="user_group" label="Группа пользователей" width="180" />
      <el-table-column prop="video_name" label="Видеозапись" width="180">
        <template #default="scope">
          <el-button link size="small" :type="scope.row.watched ? 'success' : 'danger'">{{
              scope.row.video_name
            }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const videos = [
  {
    name: 'Видеозапись1',
    watches: '2',
    comments: '2'
  },
  {
    name: 'Видеозапись2',
    watches: '0',
    comments: '0'
  },
  {
    name: 'Видеозапись3',
    watches: '0',
    comments: '0'
  }
];

const watches = [
  {
    username:"user1111",
    user_group:"Группа1",
    video_name:"Видеозапись1",
    watched:true
  },
  {
    username:"user1111",
    user_group:"Группа1",
    video_name:"Видеозапись2",
    watched:false
  },
  {
    username:"user1111",
    user_group:"Группа1",
    video_name:"Видеозапись3",
    watched:false
  },
  {
    username:"user2222",
    user_group:"Группа1",
    video_name:"Видеозапись1",
    watched:true
  },
  {
    username:"user2222",
    user_group:"Группа1",
    video_name:"Видеозапись2",
    watched:false
  },
  {
    username:"user2222",
    user_group:"Группа1",
    video_name:"Видеозапись3",
    watched:false
  },
  {
    username:"user3333",
    user_group:"Группа1",
    video_name:"Видеозапись1",
    watched:false
  },
  {
    username:"user3333",
    user_group:"Группа1",
    video_name:"Видеозапись2",
    watched:false
  },
  {
    username:"user3333",
    user_group:"Группа1",
    video_name:"Видеозапись3",
    watched:false
  }
]
</script>

<style scoped>

</style>