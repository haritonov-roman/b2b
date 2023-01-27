import Vue from 'vue'
import Vuex from 'vuex'
import { fetchIssuesData } from '@/api/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    issues: {}
  },
  getters: {
    GET_ISSUES: (store) => store.issues
  },
  mutations: {
    SET_ISSUES (store, payload) {
      store.issues = payload
    }
  },
  actions: {
    fetchIssues ({ commit }, payload) {
      fetchIssuesData(payload)
        .then((res) => {
          commit('SET_ISSUES', res.data.repository.openIssues)
        })
    }
  },
  modules: {
  }
})
