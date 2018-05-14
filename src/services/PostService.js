import http from './'
import store from '@/store'

export default {

  // Using axios get request by 'http' from index.js (renamed from Api.js)
  fetchPosts () {
    return http().get('posts')
    .then(response => {
      // Dispatch an action from store to set data from response
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