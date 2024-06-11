import MainPage from '@/page/admin/MainPage'
import UserCreationPage from '@/page/admin/UserCreationPage'
import UserUpdatePage from '@/page/admin/UserUpdatePage'
import LoginPage from '@/page/LoginPage'
import CreateGroup from "@/page/creator/CreateGroup";
import UserGroup from "@/page/creator/GroupList.vue";
import VideoView from "@/page/creator/VideoView.vue";
import CreatePlaylist from "@/page/creator/CreatePlaylist";
import UpdateGroupPage from "@/page/creator/UpdateGroup";
import PlaylistList from "@/page/creator/PlaylistList.vue";
import PlaylistPage from "@/page/creator/PlaylistPage.vue";
import UpdatePlaylist from "@/page/creator/UpdatePlaylist.vue";
import CreateVideo from "@/page/creator/CreateVideo.vue";
import UpdateVideo from "@/page/creator/UpdateVideo.vue";
import PermissionList from "@/page/creator/PermissionList.vue";
import CreatePermission from "@/page/creator/CreatePermission.vue";
import UpdatePermission from "@/page/creator/UpdatePermission.vue";
import StatisticsByPlaylist from "@/page/creator/StatisticsByPlaylist.vue";
import StatisticsByGroup from "@/page/creator/StatisticsByGroup.vue";
import UpdateProfile from "@/page/user/UpdateProfile.vue";

import GroupList from "@/page/employee/GroupList.vue";
import History from "@/page/employee/HistoryPage.vue";
import Recomendations from "@/page/employee/RecomendationsPage.vue";
import VideoPage from "@/page/employee/VideoView.vue";
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(""),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: LoginPage,
            meta: {
                layout: 'LoginPage'
            }
        },
        {
            path: '/employee/groups',
            name: 'groups',
            component: GroupList,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/employee/recomendations',
            name: 'recomendations',
            component: Recomendations,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/employee/history',
            name: 'history',
            component: History,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/employee/video-page',
            name: 'video-page',
            component: VideoPage,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/profile/update',
            name: 'update-profile',
            component: UpdateProfile,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/admin',
            name: 'mainPage',
            component: MainPage,
            meta: {
                layout: 'AdminLayout'
            }
        },
        {
            path: '/admin/create',
            name: 'userCreatePage',
            component: UserCreationPage,
            meta: {
                layout: 'AdminLayout'
            }
        },
        {
            path: '/admin/edit',
            name: 'userEditPage',
            component: UserUpdatePage,
            meta: {
                layout: 'AdminLayout'
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
            path: '/creator/create-group',
            name: 'creator',
            component: CreateGroup,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/creator/update-group',
            name: 'updateGroup',
            component: UpdateGroupPage,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/creator/video',
            name: 'video',
            component: VideoView,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/creator/user-group',
            name: 'user-group',
            component: UserGroup,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/creator/create-playlist',
            name: 'create-playlist',
            component: CreatePlaylist,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/creator/update-playlist',
            name: 'update-playlist',
            component: UpdatePlaylist,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/creator/playlist-list',
            name: 'playlist-list',
            component: PlaylistList,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/creator/playlist',
            name: 'playlist',
            component: PlaylistPage,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/creator/create-video',
            name: 'create-video',
            component: CreateVideo,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/creator/update-video',
            name: 'update-video',
            component: UpdateVideo,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/creator/permission-list',
            name: 'permission-list',
            component: PermissionList,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/creator/create-permission',
            name: 'create-permission',
            component: CreatePermission,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/creator/update-permission',
            name: 'update-permission',
            component: UpdatePermission,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/creator/playlist-statistic',
            name: 'playlist-statistic',
            component: StatisticsByPlaylist,
            meta: {
                layout: 'CreatorLayout'
            }
        },
        {
            path: '/creator/group-statistic',
            name: 'group-statistic',
            component: StatisticsByGroup,
            meta: {
                layout: 'CreatorLayout'
            }
        }
    ]
})

export default router