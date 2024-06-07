<template>
  <HeaderComp></HeaderComp>
  <div class="pt-11">
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