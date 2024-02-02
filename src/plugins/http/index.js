import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
})

const successResponseInterceptor = res => res

const errorResponseInterceptor = res => {
  /**
   * Exemplo de interceptador de resposta
   *
   * if (res.response.status === 401) {
   *   logout()
   * }
   *
   */

  return res
}

const successRequestInterceptor = req => {
  /**
   * Exemplo de interceptador de request
   *
   * req.headers = {
   *   ...req.headers,
   *   Authorization: `Bearer ${1}`
   * }
   *
   */

  return req
}

const errorRequestInterceptor = req => req

http.interceptors.request.use(successRequestInterceptor, errorRequestInterceptor)
http.interceptors.response.use(successResponseInterceptor, errorResponseInterceptor)

export default http
