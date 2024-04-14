import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            curses: [],
        }
    },
    getters: {
        getCurses (state) {
            return state.curses
        }
    },
    mutations: {
        setCurses (state, payload) {
            state.curses = payload
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