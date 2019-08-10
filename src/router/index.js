import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/utils'

Vue.use(Router)

/* export default new Router({
  // 默认值, hash模式, # 后路由变化, 
  // 正式环境, 线上环境时, history模式, 匹配静态资源
  mode: 'history',
  routes
}) */

// 导航守卫
const router = new Router({
  routes
})

const HAS_LOGINED = true

// 全局前置守卫, 在跳转之前处理
router.beforeEach((to, from, next) => {
  to.meta && to.meta.title && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({name: 'login'})
  } else {
    if (HAS_LOGINED) next({ name: 'home'})
    else next()
  }
})

// 导航被确认之前
// router.beforeResolve

// 全局后置钩子, 在跳转之后处理
router.afterEach((to, from) => {
  // 一般我们会在加载时, 会在全局前置守卫中, 设置等待加载样式
  // logining = false 成功跳转后, 等待加载样式取消
})

/**
 * 完整的导航解析流程: 
 * 1. 导航被触发: url修改地址 | this.router.push(path)
 * 2. 在失活的组件(即将离开的页面组件) 里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件中调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeRouteEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件(即将进入的页面组件) 里调用 beforeRouterEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置钩子 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用 beforeRouterEnter守卫里传给 next 的回调函数
 */

export default router