<template>
  <HeaderComp></HeaderComp>
  <div class="main-container p-14 py-20">
    <RouterView />
  </div>
</template>

<script setup>
import HeaderComp from '@/components/CreatorHeaderComp.vue'
</script>

<style scoped>
.main-container {
  height: 100vh;
}
</style>