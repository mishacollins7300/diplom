<template>
  <component :is="routeListener"></component>
</template>

<script setup>
import { computed, markRaw } from 'vue'
import Layout from '@/layouts/IndexPage.vue'
import LoginLayout from "@/layouts/LoginLayout";
import { useRoute } from 'vue-router'

const route = useRoute()
const routeListener = computed(() => {
  if (!route.meta.layout) {
    return
  }
  switch (route.meta.layout) {
    case 'IndexPage':
      return markRaw(Layout)
    case 'LoginPage':
      return markRaw(LoginLayout)
    default:
      return markRaw(Layout)
  }
})
</script>

<style>
</style>
