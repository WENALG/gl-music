import { BASE_URL, TIME_OUT } from './config'
import GLRequest from './request'

const glRequest = new GLRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})
export default glRequest
