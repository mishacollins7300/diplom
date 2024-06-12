<template>
  <div>
    <div class="flex gap-4">
      <div class="flex gap-4" style="width: 500px">
        <div class="w-14 h-14">
          <img class="object-cover w-full h-full" :src="'http://localhost:8081/image/'+ props.comment.user.imageUrl" alt="">
        </div>
        <div class="p-2" style="width: 330px">
          <div class="gap-1">
            <div class="h-1/4">
              <p class="text-sm">{{ props.comment.user.username }}</p>
            </div>
            <div class="h-3/4 flex gap-2">
              <p class="text-base">{{ props.comment.text }}</p>
            </div>
          </div>
        </div>
        <div class="w-14">
          <el-button
              class="my-5"
              type="primary"
              link
              @click="answ(props.comment.id)">
            Ответить
          </el-button>
        </div>
      </div>
      <div class="flex gap-1 mt-2" v-if="props.comment.user.id === user.id">
        <el-button type="primary" @click="editComment(props.comment.id, props.comment.text)" :icon="Edit" circle/>
        <el-button type="danger" @click="deleteComment(props.comment.id)" :icon="Delete" circle/>
      </div>
    </div>

    <div
        class="ml-4 mt-2"
        v-if="props.comment?.comments">
      <CommentComponent
          v-for="(child, index) in props.comment?.comments"
          :comment="child"
          :key="index"
          @change="eventChild"
      >
      </CommentComponent>
    </div>
  </div>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'
import CommentComponent from '@/components/CommentComponent'
import {useStore} from "vuex";
import {Delete, Edit} from "@element-plus/icons-vue";

const props = defineProps({
  comment: {
    type: Object,
    default: () => {
    }
  }
})

const store = useStore()
const user = store.getters.getUser
const emits = defineEmits(['change'])

const eventChild = (event) => {
  emits('change', event)
}

const answ = (id) => {
  emits('change', {id: id, action: "ans"})
}

const editComment = (id, text) => {
  emits('change', {id: id, action: "upd", text:text})
}

const deleteComment = (id) => {
  emits('change', {id: id, action: "del"})
}
</script>

<style scoped>

</style>