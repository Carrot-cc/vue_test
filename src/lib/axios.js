import axios from 'axios'
import { baseURL } from '@/config'

// 以类的形式来封装： 
class HttpRequest {
  constructor(baseUrl = baseURL) {
    // es6 写法： 默认值
    this.baseUrl = baseUrl,
    // 队列， 把每个请求压入栈中，队列中有 || 没有请求时， 操作loading
    this.queue = {}
  }
  getInsideConfig() {
    // 内部配置方法
    const config = {
      // 
      baseURL: this.baseUrl,
      headers: {

      }
    }
    return config
  }

  // 添加拦截器： 
  interceptors (instance, url) { // 此处的 url 判断 this.queue 
    // 请求拦截器： 
    instance.interceptors.request.use(config => {
      // 添加全局的loading... 要安装 iview的 Spin.show()
      if (!Object.keys(this.queue).length) {
        // 没有请求就添加loading
        // Spin.show()
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截器： 
    instance.interceptors.response.use(res => {
      console.log(res)
      // 删掉loading
      delete this.queue[url]

      // 对响应的结果进行筛选： 
      // const { data, status } = res
      // return { data, status }

      return res
    }, error => {
      this.queue[url]
      return Promise.reject(error)
    })
  }

  // 创建实例之后， 创建 request请求
  request (options) {
    const instance = axios.create()
    // options 进行配置合并, 有相同的属性名的值， 后者覆盖前者
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    // 返回实例，并传入options
    return instance(options)
  }
}

export default HttpRequest