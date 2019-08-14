import Mock from 'mock.js'
import { getUserInfo } from './user'

// 使用mock模拟 ajax 请求： 之前的 /getUserInfo 
// Mock.mock('完整请求 | 正则表达式'，请求类型 )
Mock.mock('http://localhost:3000/getUserInfo', getUserInfo)
// 当拦截到这个请求时，会调用后面的方法, 并且返回这个方法返回的值

export default Mock