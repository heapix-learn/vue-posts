import http from './index'
import store from '@/store'

export default {

  fetchPosts () {
    return http().get('posts')
    .then(response => {
      store.dispatch('setPosts', response.data)
    })
    .catch(reject => {
      console.log(reject)
    })
  },

  postNewPost(new_post) {
    return http().post('posts', new_post)
  },

  deletePost(id) {
    return http().delete(`posts/${id}`)
  }
}