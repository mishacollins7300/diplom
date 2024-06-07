<template>
  <div class="main-container">
    <component :is="routeListener">
      <RouterView />
    </component>
  </div>
</template>

<script setup>
import { computed, markRaw } from 'vue'
import Layout from '@/layouts/IndexPage.vue'
import LoginLayout from "@/layouts/LoginLayout";
import { useRouter } from 'vue-router'

const route = useRouter()
const routeListener = computed(() => {
  console.log(route)
  if (!route.currentRoute.value.meta?.layout) {
    return
  }
  switch (route.currentRoute.value.meta?.layout) {
    case 'LoginPage':
      return markRaw(LoginLayout)
    default:
      return markRaw(Layout)
  }
})
</script>

<style>
.main-container {
  height: 100vh;
}
</style>
