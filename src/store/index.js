import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  getters: {
    posts: state => state.posts,
  },
  mutations: {
    setPosts: (state, posts) => state.posts = posts
  },
  actions: {
    setPosts: ({commit}, payload) => commit('setPosts', payload)
  }
})
