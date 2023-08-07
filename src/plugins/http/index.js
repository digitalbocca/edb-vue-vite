import axios from 'axios'

// import { logout } from '@/utils'
// import router from '@/router'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
})

const successResponseInterceptor = res => res

const errorResponseInterceptor = res => {
  // if (res.response.status === 401) {
  // logout()
  // }

  // if (res.response.status === 404) {
  /**
     * @todo extrair essas condicionais
     */
  // if (res.response.request.responseURL.includes('/users')) {
  /**
       * @todo Criar um util para manipular o router
       */
  // router.push('/cadastro')
  // }
  // console.log(res.response.request.responseURL.includes('/users'))
  // }
}

const successRequestInterceptor = req => {
  // req.headers = {
  // ...req.headers,
  // Authentication: `Bearer ${1}`
  // }

  // console.log('Request Headers', req.headers)

  // return req
}

const errorRequestInterceptor = req => req

http.interceptors.request.use(successRequestInterceptor, errorRequestInterceptor)
http.interceptors.response.use(successResponseInterceptor, errorResponseInterceptor)

export default http
