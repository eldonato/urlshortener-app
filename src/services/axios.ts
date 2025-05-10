import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.error('Erro de requisiçao com AXIOS:', error.message)
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error('Erro de requisiçao com AXIOS: ', error.message)
    return Promise.reject(error)
  },
)

export default api
