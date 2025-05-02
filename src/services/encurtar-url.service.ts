import api from "./axios"
import { AxiosError } from "axios"

const baseURL = '/UrlEncurtada'

export const encurtarUrl = async (urlOriginal: string) => {
    const endpoint = `${baseURL}/Encurtar`
    try {
        const response = await api.post(endpoint,  urlOriginal )

        return response.data
    } catch (error) {
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

export const obterUrl = async (urlCurta: string) => {
    const endpoint = `${baseURL}/${urlCurta}`
    try {
        const response = await api.get(endpoint)

        return response.data
    } catch (error) {
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