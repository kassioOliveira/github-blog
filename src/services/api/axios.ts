import axios from 'axios'
import { ResponseInterceptor } from './interceptors/ResponseInterceptor'
import { ErrorInterceptor } from './interceptors/ErrorInterceptor'

const Api = axios.create({
  baseURL: ' https://api.github.com',
})

Api.interceptors.response.use(
  (response) => ResponseInterceptor(response),
  (error) => ErrorInterceptor(error),
)

export { Api }
