import Vue from 'vue'
import Vuex from 'vuex'
import { fetchIssues } from '@/api/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    issues: {}
  },
  getters: {
    issuesTotalCount: (store) => store.issues.totalCount,
    issuesNodes: (store) => store.issues.nodes
  },
  mutations: {
    setIssues (store, payload) {
      store.issues = payload
    }
  },
  actions: {
    getIssues ({ commit }, payload) {
      fetchIssues(payload)
        .then((res) => {
          commit('setIssues', res.data.repository.openIssues)
        })
    }
  },
  modules: {
  }
})
