import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users', component:() => import('../components/users/AllUsers.vue')
    },
    {
      path: '/users/create', component:() => import('../components/users/UserCreator.vue')
    },
  ]
})
