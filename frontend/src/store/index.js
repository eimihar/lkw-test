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
    },
    token(state) {
      return state.session.access_token;
    },
    user(state) {
      return state.user;
    }
  },
  mutations: {
    saveSession(state, data) {
      state.session = data.session;
      state.user = data.user;
    }
  },
  actions: {
  },
  modules: {
  }
})
