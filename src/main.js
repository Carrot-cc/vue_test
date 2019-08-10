import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'

Vue.config.productionTip = false
// 挂载 Bus
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
