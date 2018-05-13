import Vue from 'vue'
import Router from 'vue-router'
import Posts from '../components/posts/Posts.vue'
import PostCreator from '../components/posts/PostCreator.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/posts',
      component: Posts
    },
    {
      path: '/posts/create',
      component: PostCreator
    }
  ]
})
