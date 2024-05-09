<template>
  <div>
    <div class="border border-solid border-slate-600">
      <div class="p-2">
        <div>
          <p>{{props.comment.user}}</p>
        </div>
        {{props.comment?.text}}
        <el-button
            type="primary"
            link
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
      >
      </CommentComponent>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import CommentComponent from '@/components/CommentComponent'

const props = defineProps({
  comment: {
    type: Object,
    default: () => {}
  }
})
</script>

<style scoped>

</style>