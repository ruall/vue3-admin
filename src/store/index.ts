/* import { createStore } from 'vuex'

export interface State {
  count: number
}

const store = createStore<State>({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    INCREMENT: (state) => {
      state.count++
    }
  },
  actions: {
    increment: ({ commit }) => {
      commit('INCREMENT')
    }
  }
})

export default store
 */

import { createPinia } from 'pinia'

const store = createPinia()

export default store
