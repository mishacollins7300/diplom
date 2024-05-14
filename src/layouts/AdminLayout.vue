<template>
  <AdminHeaderComp></AdminHeaderComp>
  <div class="main-container p-14 py-20">
    <RouterView />
  </div>
</template>

<script setup>
import AdminHeaderComp from '@/components/AdminHeaderComp.vue'
</script>

<style scoped>
.main-container {
  height: 100vh;
}
</style>