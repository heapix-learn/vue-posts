import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    todos: []
  },
  getters: {
    posts: state => state.posts,
    todos: state => state.todos
  },
  mutations: {
    setPosts: (state, posts) => state.posts = posts,
    setTodos: (state, items) => state.todos.push(items)
  },
  actions: {
    setPosts: ({commit}, payload) => commit('setPosts', payload),
    setTodos: ({commit}, payload) => commit('setTodos', payload)
  }
})
