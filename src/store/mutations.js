import vue from 'vue'

const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params
    
    // params 可以是对象
    // state.appName = params.appName // store.vue 中也要对应修改为对象
  },
  SET_APP_VERSION (state) {
    // 引入vue, 使用 vue 的 set 方法, 会自动添加 getter ,setter
    vue.set(state, 'appVersion', 'v2.0')

    // 直接使用: state.appVersion = 'v2.0', 不会更新视图
  },
  SET_STATE_VALUE (state, value) {
    state.stateValue = value
  }
}

export default mutations