/**
 * @module http
 * @description Configures and exports an HTTP client using Ky, with interceptors for requests, responses, and error handling.
 * @typedef {import("ky").KyInstance} KyInstance
 */
import ky from 'ky'

/**
 * Default timeout for HTTP requests in milliseconds.
 * @constant {number}
 */
const DEFAULT_TIMEOUT = 10000

/**
 * Interceptor for outgoing HTTP requests.
 * Attaches authentication tokens to the request headers.
 * @param {Request} request - The request object.
 * @returns {Request} The modified request object.
 */
const requestInterceptor = request => {
  // TODO: Add logic for attaching authentication tokens to the request headers here.
  // Example: request.headers.set('Authorization', `Bearer ${yourAuthToken}`);
  return request
}

/**
 * Interceptor for incoming HTTP responses.
 * Handles tasks like token refreshing or processing specific error responses.
 * @param {Request} request - The original request object.
 * @param {object} options - The options passed to Ky.
 * @param {Response} response - The response object.
 * @returns {Response} The response object, potentially modified.
 */
const responseInterceptor = (request, options, response) => {
  // TODO: Add logic for handling authentication tokens or error responses here.
  // Example: if (response.status === 401) { /* handle unauthorized */ }
  // Example: const newToken = response.headers.get('X-New-Auth-Token'); if (newToken) { /* update token */ }
  return response
}

/**
 * Handler centralizado de erros HTTP
 * @param {Error} error - Objeto de erro do Ky
 * @returns {never} - Sempre lança o erro após processamento
 * @throws {Error} - Erro processado
 */
const errorHandler = error => {
  // TODO: Integrar com sistema de logging estruturado (ex: Sentry, LogRocket)
  // TODO: Transformar erro para formato consistente da aplicação
  if (import.meta.env.DEV) {
    console.error('HTTP Error:', error)
  }
  throw error
}

/**
 * Configured Ky HTTP client instance for the application.
 * This instance is set up with:
 * - `prefixUrl`: The base URL for all requests, derived from `VITE_API_BASE_URL` environment variable.
 * - `timeout`: A global timeout for requests, set to `DEFAULT_TIMEOUT` (10 seconds).
 * - `headers`: Default headers, including `Content-Type: application/json`.
 * - `hooks`: Lifecycle hooks for intercepting requests, responses, and errors:
 *   - `beforeRequest`: Uses `requestInterceptor` to modify requests before they are sent.
 *   - `afterResponse`: Uses `responseInterceptor` to process responses after they are received.
 *   - `beforeError`: Uses `errorHandler` to centralize error handling.
 * @type {KyInstance}
 */
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
