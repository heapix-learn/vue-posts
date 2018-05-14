import http from './index'
import store from '@/store'

export default {

  getTodos (start, limit) {
          return http().get(`todos?_start=${start}&_limit=${limit}`)
          .then(response => {
            // Dispatch an action from store to set data from response
            store.dispatch('setTodos', response.data)
          })
          .catch(reject => {
            console.log(reject)
          })
  },
}