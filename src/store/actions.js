import { getAppName } from '@/api/app'

const actions = {
  // 返回 Promis 对象的方式: 

  // 修改 接口获取到 AppName
  // { commit } es6 解构赋值
  updateAppName ({ commit }) {
    getAppName().then(res => {
      console.log(res)

      // es6 解构赋值 res
      // const { info: { appName } }
      // commit('SET_APP_NAME', appName)

      commit('SET_APP_NAME', res.info.appName)
      
    }).catch(err => {
      // 错误处理逻辑
      // console.log(err);
      
    })
  }

  // es8 的 async/await 方式: 
  
  /* async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (err) {
      // 错误处理逻辑
      console.log(err)
      
    }
  } */
}

export default actions