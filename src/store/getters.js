const getters = {
  // 带版本号的app名称
  appNameWithVersion: (state) => {
    // es6 模板字符串
    return `${state.appName}v2.0`
  }
}

export default getters