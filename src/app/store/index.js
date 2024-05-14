import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            curses: [],
            auth: false,
            user: {}
        }
    },
    getters: {
        getCurses (state) {
            return state.curses
        },
        getAuth (state) {
            return state.auth
        },
        getUser(state) {
            return state.user
        }
    },
    mutations: {
        setCurses (state, payload) {
            state.curses = payload
        },
        setAuth(state, payload) {
            state.auth = payload
        },
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {

    }
})

export default store