const state = {
  userName: 'lison'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  //
}
const actions = {
  //
}

export default {
  /* // 使用命名空间, 空间更为密闭
  namespaced: true, */
  state,
  getters,
  mutations,
  actions
}