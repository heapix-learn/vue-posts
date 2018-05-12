import Vue from 'vue'
import Router from 'vue-router'

import Posts from '@/components/posts/Posts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/posts',
      component: Posts,
      name: 'posts',
    },
    {
      path: '/users/create', component:() => import('../components/users/UserCreator.vue') // ???????????????????????
    },
  ]
})
