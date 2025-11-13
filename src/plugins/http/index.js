import ky from 'ky'

const DEFAULT_TIMEOUT = 10000

const requestInterceptor = request => {
  console.log('Request Interceptor:', request)
}

const responseInterceptor = response => {
  console.log('Response Interceptor:', response)
}

const http = ky.create({
  prefixUrl: import.meta.env.VITE_API_BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  headers: {
    'Content-Type': 'application/json'
  },
  hooks: {
    beforeRequest: [requestInterceptor],
    afterResponse: [responseInterceptor]
  }
})

export default http
