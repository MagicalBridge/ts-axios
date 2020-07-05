// 约束字符串的取值
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

// 定义config的接口
export interface AxiosRequestConfig {
  url: string // 请求地址 必传属性
  method?: Method // 方法 可选属性
  data?: any // 可选属性
  params?: any // 可选属性
}
