<template>
  <div class="py-5">
    <div class="flex text-2xl mb-10">Статистика по группе "Группа1"</div>


    <p class="text-1xl mt-3">Первая группа</p>
    <p class="text-base mt-4">Всего доступов к плейлистам - 1</p>
    <p class="text-base mt-4">Количество пользователей - 3</p>

    <p class="text-2xl mt-4 mb-4">Статистика просмотров:</p>

    <el-table :data="watches" style="width: 100%">
      <el-table-column prop="username" label="Пользователь" width="180" />
      <el-table-column prop="playlist" label="Плейлист" width="180" />
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

const watches = [
  {
    username:"user1111",
    playlist:"Плейлист1",
    video_name:"Видеозапись1",
    watched:true
  },
  {
    username:"user1111",
    playlist:"Плейлист1",
    video_name:"Видеозапись2",
    watched:false
  },
  {
    username:"user1111",
    playlist:"Плейлист1",
    video_name:"Видеозапись3",
    watched:false
  },
  {
    username:"user2222",
    playlist:"Плейлист1",
    video_name:"Видеозапись1",
    watched:true
  },
  {
    username:"user2222",
    playlist:"Плейлист1",
    video_name:"Видеозапись2",
    watched:false
  },
  {
    username:"user2222",
    playlist:"Плейлист1",
    video_name:"Видеозапись3",
    watched:false
  },
  {
    username:"user3333",
    playlist:"Плейлист1",
    video_name:"Видеозапись1",
    watched:false
  },
  {
    username:"user3333",
    playlist:"Плейлист1",
    video_name:"Видеозапись2",
    watched:false
  },
  {
    username:"user3333",
    playlist:"Плейлист1",
    video_name:"Видеозапись3",
    watched:false
  }
]
</script>

<style scoped>

</style>