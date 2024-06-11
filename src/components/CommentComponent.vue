<template>
  <div>
    <div class="border border-solid border-slate-600 flex gap-4">
      <div class="w-14 h-14">
        <img class="object-cover" :src="'http://localhost:8081/image/'+ props.comment.user.imageUrl" alt="">
      </div>
      <div class="p-2">
        <div class="flex gap-1">
          <div class="h-1/3">
            <p class="text-sm">{{ props.comment.user.username }}</p>
          </div>
          <div class="h-2/3 flex gap-2">
            <p class="text-base">{{ props.comment.text }}</p>
            <div class="w-16">
              <el-button
                  type="primary"
                  link
                  @click="answ(props.comment.id)">
                Ответить
              </el-button>
            </div>
          </div>
        </div>
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

const props = defineProps({
  comment: {
    type: Object,
    default: () => {
    }
  }
})

const emits = defineEmits(['change'])

const eventChild = (event) => {
  emits('change', event)
}

const answ = (id) => {
  emits('change', {id:id, action:"ans"})
}
</script>

<style scoped>

</style>