import MainPage from '@/page/MainPage'
import LoginPage from '@/page/LoginPage'
import CurseSearchPage from '@/page/CurseSearchPage'
import ProfilePage from '@/page/ProfilePage'
import RegistrationPage from '@/page/RegistrationPage'
import MySubscribesPage from '@/page/MySubscribesPage'
import CursePage from "@/page/CursePage";
import CreateGroup from "@/page/creator/CreateGroup";

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
        path: '/creator',
        name: 'creator',
        component: CurseSearchPage,
        meta: {
            layout: 'CreatorLayout'
        }
    },
    {
        path: '/creator/create-group',
        name: 'create-groupe',
        component: CreateGroup,
        meta: {
            layout: 'CreatorLayout'
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