<template>
  <div v-for="(comm, index) in comments" :key="index">
    <CommentComponent :comment="comm"></CommentComponent>
  </div>
</template>

<script setup>
import CommentComponent from '@/components/CommentComponent'
const comments = [
  {
    "text": "Аыаыаыаыаыаыаыаыа",
    "creation_date": "",
    "user": "user111 Васин В.В.",
    "comments": [
      {
        "text": "sadasda",
        "creation_date": "",
        "user": "",
      }
    ]
  }
]
</script>

<style scoped>

</style>