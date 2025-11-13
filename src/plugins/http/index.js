import ky from 'ky'

const DEFAULT_TIMEOUT = 10000

const requestInterceptor = request => {
  console.log('Request Interceptor:', request)
  // TODO: Add logic for attaching authentication tokens to the request headers here.
  // Example: request.headers.set('Authorization', `Bearer ${yourAuthToken}`);
}

const responseInterceptor = (request, options, response) => {
  console.log('Response Interceptor:', response)
  // TODO: Add logic for handling authentication tokens or error responses here.
  // Example: if (response.status === 401) { /* handle unauthorized */ }
  // Example: const newToken = response.headers.get('X-New-Auth-Token'); if (newToken) { /* update token */ }
}

const errorHandler = error => {
  console.error('HTTP Error:', error)
  // Adicione lógica customizada de tratamento de erro aqui
  throw error
}

const http = ky.create({
  prefixUrl: import.meta.env.VITE_API_BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  headers: {
    'Content-Type': 'application/json'
  },
  hooks: {
    beforeRequest: [requestInterceptor],
    afterResponse: [responseInterceptor],
    beforeError: [errorHandler]
  }
})

export default http
