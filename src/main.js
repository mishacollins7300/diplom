import { createApp } from 'vue'
import App from './App.vue'
import '@/app/styles/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './app/route/index'

createApp(App).use(ElementPlus).use(router).mount('#app')
