import Vue from 'vue'
import Vuex from 'vuex'
import { fetchIssuesData } from '@/api/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    issues: {}
  },
  getters: {
    getIssuesTotalCount: (store) => store.issues.totalCount,
    getIssuesNodes: (store) => store.issues.nodes
  },
  mutations: {
    setIssues (store, payload) {
      store.issues = payload
    }
  },
  actions: {
    fetchIssues ({ commit }, payload) {
      fetchIssuesData(payload)
        .then((res) => {
          commit('setIssues', res.data.repository.openIssues)
        })
    }
  },
  modules: {
  }
})
