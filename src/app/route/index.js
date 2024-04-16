import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/app/route/route.js'

const router = createRouter({
    history: createWebHistory(),
    routes
})
// router.beforeEach((to, from, next) => {
//     checkUserAuthorization(to, next)
// })

// const checkUserAuthorization = async (to, next) => {
//     const token = localStorage.getItem('userToken')
//     if (to.path === '/login') {
//         next()
//         return
//     }
//     if (!token) {
//         next({ name: 'login' })
//         return
//     }
//     next()
// }

export default router