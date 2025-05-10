import { AxiosError } from 'axios'
import api from './axios'

const baseURL = '/UrlEncurtada'

export async function encurtarUrl(urlOriginal: string) {
  const endpoint = `${baseURL}/Encurtar`
  try {
    const response = await api.post(endpoint, urlOriginal)

    return response.data
  }
  catch (error) {
    if (error instanceof AxiosError) {
      if (error.message) {
        console.error('Erro de de configuração', error.message)
      }
      if (error.request) {
        console.error('Erro de requisição', error.request)
      }
    }
  }
}

export async function obterUrl(urlCurta: string) {
  const endpoint = `${baseURL}/${urlCurta}`
  try {
    const response = await api.get(endpoint)

    return response.data
  }
  catch (error) {
    if (error instanceof AxiosError) {
      if (error.message) {
        console.error('Erro de de configuração', error.message)
      }
      if (error.request) {
        console.error('Erro de requisição', error.request)
      }
    }
  }
}
