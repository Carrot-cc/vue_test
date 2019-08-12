import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'post',
    data: {
      // post请求参数，es6 写法，写在data中
      userId
    }
  })
}