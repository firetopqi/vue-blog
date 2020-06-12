import Vue from 'vue'
import VueRouter from 'vue-router'
import Log from '@/views/Login/index.vue'
import index from '@/views/page'
let flag = true

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
  // 模拟登陆状态
  const isAuth = localStorage.getItem('token') ? true : false
  if (isAuth && to.meta.requireAuth) {
    if (flag) {
      flag = false
      next({ path: '/' });
    } else {
      next()
    }
  } else {
    if (flag) {
      flag = false
      next({ path: '/login' });
    } else {
      next()
    }
  }


})
export default router
