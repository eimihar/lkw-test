import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    session: {
      access_token: null
    },
    user: null
  },
  getters: {
    isLoggedIn: (state) => {
      return !! state.session.access_token
    },
    apiHeaders: (state) => {
      return {
        Authorization: 'Bearer ' + state.session.access_token
      }
    }
  },
  mutations: {
    saveSession(state, session) {
      state.session = session;
    }
  },
  actions: {
  },
  modules: {
  }
})
