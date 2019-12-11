import axiosInstance, { updateAxiosInstance, setAxiosHeader } from './AxiosIntance'
import config, { setConfig } from './config'
export const getData = function (url, params) {
  return axiosInstance.get(`${url[0]}/${url[1]}`, { params })
    .then((res) => {
      return { 'status': true, 'res': res }
    })
    .catch((err) => {
      if (err) {
        return { 'status': false, 'response': err }
      }
    })
}
export const getDataParams = function (url, params) {
  return axiosInstance.get(`${url[0]}/${url[1]}/${params}`)
    .then((res) => {
      return { 'status': true, 'res': res }
    })
    .catch((err) => {
      if (err) {
        return { 'status': false, 'response': err }
      }
    })
}
export const postData = function (url, params) {
  return axiosInstance.post(`${url[0]}/${url[1]}`, params)
    .then((res) => {
      return { 'status': true, 'res': res }
    })
    .catch((err) => {
      if (err) {
        return { 'status': false, 'response': err }
      }
    })
}

const services = {
  install (Vue, options = {}) {
    setConfig(Object.assign(config, options))
    updateAxiosInstance(options.baseUrl)
    Vue.prototype.$services = {
      getData,
      postData,
      getDataParams,
      updateAxiosInstance,
      setAxiosHeader,
      config
    }
  }
}

export default services
