import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            curses: [],
            auth: false
        }
    },
    getters: {
        getCurses (state) {
            return state.curses
        },
        getAuth (state) {
            return state.auth
        }
    },
    mutations: {
        setCurses (state, payload) {
            state.curses = payload
        },
        setAuth(state, payload) {
            state.auth = payload
        }
    },
    actions: {
        getCurses ({commit}) {
            const result = fetch('')
            commit('setCurses', result)
        }
    }
})

export default store