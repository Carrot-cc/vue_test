import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './modele/user'
import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex)

// 创建实例
export default new Vuex.Store({
  // 开启严格模式: 用赋值的形式修改state,会报错, 只能用mutations修改
  strict: process.env.NODE_EVN === 'development',
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  plugins: [ saveInLocal ]
})