import axios from 'axios'

const DEFAULT_TIMEOUT = 10000

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: DEFAULT_TIMEOUT
})

const successResponseInterceptor = res => res

/**
 * Interceptador de resposta
 * @param {Object} res Resposta da requisição
 *
 * @example Exemplo de interceptador de resposta
 *
 * if (res.response.status === 401) {
 *   logout()
 * }
 *
 */
const errorResponseInterceptor = res => {
  return res
}

/**
 * Interceptador de request
 * @param {Object} req Requisição
 *
 * @example Exemplo de interceptador de request
 *
 * req.headers = {
 *   ...req.headers,
 *   Authorization: `Bearer ${1}`
 * }
 *
 */
const successRequestInterceptor = req => {
  return req
}

const errorRequestInterceptor = req => req

http.interceptors.request.use(successRequestInterceptor, errorRequestInterceptor)
http.interceptors.response.use(successResponseInterceptor, errorResponseInterceptor)

export default http
