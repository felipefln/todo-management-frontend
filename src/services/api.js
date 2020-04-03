import axios from 'axios'

const api = axios.create({
    baseURL: 'https://todo-management-backend.herokuapp.com'
})

export default api;