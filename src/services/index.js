import axios from 'axios'
import store from '@/store'

export default () => {
  return axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
  })
}