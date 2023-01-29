import Vue from 'vue'
import Vuex from 'vuex'
import { fetchIssues } from '@/api/issues'
import { fetchIssue } from '@/api/issue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    issues: {},
    issue: null
  },

  getters: {
    issuesTotalCount: (store) => store.issues.totalCount,
    issuesNodes: (store) => store.issues.nodes,
    issueData: (store) => store.issue,
    issueBodyHTML: (store) => store.issue ? store.issue.bodyHTML : ''
  },

  mutations: {
    setIssues (store, payload) {
      store.issues = payload
    },
    setIssue (store, payload) {
      store.issue = payload
    }
  },

  actions: {
    getIssues ({ commit }, payload) {
      fetchIssues(payload)
        .then((res) => {
          commit('setIssues', res.data.repository.openIssues)
        })
    },
    getIssue ({ commit }, payload) {
      fetchIssue(payload)
        .then((res) => {
          commit('setIssue', res.data.repository.issue)
        })
    }
  },

  modules: {}
})
