import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

// 判断是否为生产环境： 
// if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
// 挂载 Bus
Vue.prototype.$bus = Bus
Vue.use(iview)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
