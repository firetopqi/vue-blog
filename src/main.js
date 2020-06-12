import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './router'
import AtComponents from 'at-ui'
import '@/core/use.js'
import 'at-ui-style'    // 引入组件样式
Vue.use(VueRouter)
Vue.use(AtComponents)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
