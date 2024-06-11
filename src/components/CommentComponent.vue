<template>
  <div>
    <div class="border border-solid border-slate-600 flex gap-4">
      <div class="w-10 h-10">
        <img class="object-cover" :src="'http://localhost:8081/image/'+ props.comment.user.imageUrl" alt="">
      </div>
      <div class="p-2">
        <div>
          <p>{{ props.comment.user.name }}</p>
        </div>
        {{ props.comment.text }}
        <el-button
            type="primary"
            link
            @click="otvetit(props.comment.id)"
        >
          Ответить
        </el-button>
      </div>
    </div>
    <div
        class="ml-4 mt-2"
        v-if="props.comment?.comments">
      <CommentComponent
          v-for="(child, index) in props.comment?.comments"
          :comment="child"
          :key="index"
          @otvet="otvetit(child.comment.id)"
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

const emits = defineEmits(['otvet'])

const otvetit = (id) => {
  emits('otvet', id)
}
</script>

<style scoped>

</style>