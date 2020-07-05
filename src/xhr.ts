import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  // 对config 进行解构赋值，且添加默认的属性
  const { data = null, url, method = 'get' } = config
  // 实例化 XMLhttpRequest
  const request = new XMLHttpRequest()
  // XMLHttpRequest.open() 方法初始化一个请求。
  request.open(method.toUpperCase(), url, true)
  // 发送数据
  request.send(data)
}
