import MainPage from '@/page/MainPage'
import LoginPage from '@/page/LoginPage'
import CurseSearchPage from '@/page/CurseSearchPage'
import ProfilePage from '@/page/ProfilePage'
import RegistrationPage from '@/page/RegistrationPage'

const routes = [
    {
        path: '/',
        name: 'mainPage',
        component: MainPage,
        meta: {
            layout: 'IndexPage'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
        meta: {
            layout: 'LoginPage'
        }
    },
    {
        path: '/registration',
        name: 'registration',
        component: RegistrationPage,
        meta: {
            layout: 'LoginPage'
        }
    },
    {
        path: '/recomended-curce',
        name: 'recomended-curce',
        component: CurseSearchPage,
        meta: {
            layout: 'IndexPage'
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfilePage,
        meta: {
            layout: 'IndexPage'
        }
    },
]

export default routes