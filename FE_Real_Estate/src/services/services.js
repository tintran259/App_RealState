import axios from 'axios'

const BASE_URL = 'http://10.60.59.155:4000';

const api = {
   call() {
      return axios.create({
         baseURL: BASE_URL,
         headers: {
            'Content-Type': 'application/json'
         }
      })
   },
}
export default api

