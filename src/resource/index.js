import Vue from 'vue'
// import Cain from '@/components/cain/'
import axios from 'axios'
import qs from 'qs'
import { Toast } from 'mint-ui'

let normalHttp = axios.create({})

// let exclude = ['interface/getSysUser', 'interface/getResourceFile']

normalHttp.defaults.baseURL = process.env.rheaServicePath
normalHttp.defaults.headers.post['Content-Type'] = 'application/json'
normalHttp.defaults.timeout = 10000

normalHttp.interceptors.request.use((config) => {
  requestAspect(config)
  return config
})

normalHttp.interceptors.response.use((response) => {
  responseAspect(response)
  if (response.data.errorCode === '0' || response.data.errorCode === '200001') {
    return response.data
  } else {
    Toast({
      message: `出错啦，请重试！(code:${response.data.errorCode}   desc:${response.data.errorMsg} )`,
      iconClass: 'fa fa-times'
    })
    return Promise.reject(response.data)
  }
}, (err) => { // 这里是返回状态码不为200时候的错误处理
  errorHandle(err)
  return Promise.reject(err)
})

// 文件服务
let fileHttp = axios.create({})

fileHttp.defaults.baseURL = process.env.fileSysPath
fileHttp.defaults.headers.post['Content-Type'] = 'multipart/form-data'
fileHttp.defaults.timeout = 50000

fileHttp.interceptors.request.use((config) => {
  requestAspect(config)
  return config
})

fileHttp.interceptors.response.use((response) => {
  responseAspect(response)
  return response
}, (err) => { // 这里是返回状态码不为200时候的错误处理
  errorHandle(err)
  return Promise.reject(err)
})

// 表单请求
let http = axios.create({})
http.defaults.baseURL = process.env.wxServicePath
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
http.defaults.timeout = 10000

http.interceptors.request.use((config) => {
  requestAspect(config)
  config.data = qs.stringify(config.data, { arrayFormat: 'repeat' })
  return config
})

http.interceptors.response.use((response) => {
  responseAspect(response)
  return response
})

function requestAspect (config) {
  if (process.env.NODE_ENV === 'development') {
    console.log('rquest url =' + config.url, 'rquest body =', config.data)
  }
}

function responseAspect (response) {
  if (process.env.NODE_ENV === 'development') {
    console.log('response url =' + response.config.url, 'response stateCoed =' + response.status, 'response body =', response.data)
  }
}

function errorHandle (err) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break

      case 401:
        err.message = '未授权，请登录'
        break

      case 403:
        err.message = '拒绝访问'
        break

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        break

      case 408:
        err.message = '请求超时'
        break

      case 500:
        err.message = '服务器内部错误'
        break

      case 501:
        err.message = '服务未实现'
        break

      case 502:
        err.message = '网关错误'
        break

      case 503:
        err.message = '服务不可用'
        break

      case 504:
        err.message = '网关超时'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break

      default:
    }
  }
  if (process.env.NODE_ENV === 'development') {
    Toast({
      message: `出错啦，请重试！(code:${err.response.status}   desc:${err.message} )`,
      iconClass: 'fa fa-times'
    })
  } else {
    Toast({
      message: '出错啦，请重试！',
      iconClass: 'fa fa-times'
    })
  }
}

Vue.prototype.$http = normalHttp
Vue.prototype.$httpFile = fileHttp
Vue.prototype.$httpWx = http

export default {
  init () { }
}
