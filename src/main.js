import { createApp } from 'vue'
import App from './App.vue'
import '@/app/styles/main.css'
import store from '@/app/store/index'
import router from '@/app/route/route'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
