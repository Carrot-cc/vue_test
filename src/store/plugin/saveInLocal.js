// 持久化插件: 
// 实例初始化时调用: 刷新浏览器, 数据不改变
export default store => {
  console.log('store初始化了')
  // 本地储存存在, 则替换
  if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => {
    console.log('提交mutation')
    // 本地持久
    localStorage.state = JSON.stringify(state)
    
  })
}