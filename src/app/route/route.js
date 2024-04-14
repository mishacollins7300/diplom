import MainPage from '@/page/MainPage'
import LoginPage from '@/page/LoginPage'
import CurseSearchPage from '@/page/CurseSearchPage'
import ProfilePage from '@/page/ProfilePage'

const routes = [
    {
        path: '/',
        name: 'mainPage',
        component: MainPage,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
        meta: {
            layout: 'EmptyLayout'
        }
    },
    {
        path: '/recomended-curce',
        name: 'recomended-curce',
        component: CurseSearchPage,
        meta: {
            layout: 'EmptyLayout'
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfilePage,
        meta: {
            layout: 'EmptyLayout'
        }
    },
]

export default routes