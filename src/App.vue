<template>
  <HeaderComp></HeaderComp>
  <div class="main-container p-14 py-20">
    <RouterView />
  </div>
</template>

<script setup>
import HeaderComp from '@/components/CreatorHeaderComp.vue'
// import { computed, markRaw } from 'vue'
// import Layout from '@/layouts/IndexPage.vue'
// import LoginLayout from "@/layouts/LoginLayout";
// import { useRouter } from 'vue-router'

// const route = useRouter()
// const routeListener = computed(() => {
//   console.log(route)
//   if (!route?.meta?.layout) {
//     return
//   }
//   switch (route.meta.layout) {
//     case 'IndexPage':
//       return markRaw(Layout)
//     case 'LoginPage':
//       return markRaw(LoginLayout)
//     default:
//       return markRaw(Layout)
//   }
// })
</script>

<style>
.main-container {
  height: 100vh;
}
</style>
