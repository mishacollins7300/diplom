import MainPage from '@/page/admin/MainPage'
import UserCreationPage from '@/page/admin/UserCreationPage'
import UserUpdatePage from '@/page/admin/UserUpdatePage'
import LoginPage from '@/page/LoginPage'
import CurseSearchPage from '@/page/CurseSearchPage'
import ProfilePage from '@/page/ProfilePage'
import RegistrationPage from '@/page/RegistrationPage'
import MySubscribesPage from '@/page/MySubscribesPage'
import CursePage from "@/page/CursePage";

const routes = [
    {
        path: '/admin',
        name: 'mainPage',
        component: MainPage,
        meta: {
            layout: 'IndexPage'
        }
    },
    {
        path: '/admin/create',
        name: 'userCreatePage',
        component: UserCreationPage,
        meta: {
            layout: 'IndexPage'
        }
    },
    {
        path: '/admin/edit',
        name: 'userEditPage',
        component: UserUpdatePage,
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
        path: '/my-subscribes',
        name: 'my-subscribes',
        component: MySubscribesPage,
        meta: {
            layout: 'IndexPage'
        }
    },
    {
        path: '/curse/:id',
        name: 'curse',
        component: CursePage,
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