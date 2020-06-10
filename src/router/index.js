import Vue from 'vue'
import VueRouter from 'vue-router'
import Log from '@/views/Login/index.vue'
import index from '@/views/page'

Vue.use(VueRouter)
const routes = [
  { path: "/login", name: 'login', component: Log, meta: { requireAuth: false } },
  { path: '/', name: 'index', component: index, meta: { requireAuth: true } }
]

const router = new VueRouter({
  routes,
  mode: "history"   //去掉#
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem('token')) { // 判断本地是否存在access_token
      next('/')
    } else {
      // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
      next('/login')
    }
  } else {
    next()
  }
})
export default router
