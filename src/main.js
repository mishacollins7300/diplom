import { createApp } from 'vue'
import App from './App.vue'
import '@/app/styles/main.css'
import store from '@/app/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './app/route/index'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
