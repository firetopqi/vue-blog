import Vue from 'vue'
import VueRouter from 'vue-router'
import Log from '@/views/Login/index.vue'
import index from '@/views/page'
let flag = true

Vue.use(VueRouter)
const routes = [
  {
    path: "/login",
    name: '登录页',
    component: Log,
    meta: { requireAuth: false, index: 0 }
  },
  {
    path: '/',
    name: '主页',
    component: index,
    meta: { requireAuth: true, index: 1 },
    redirect: '/home',
    children: [
      {
        path: 'home',
        meta: { requireAuth: true, index: 1 },
        component: () => import('@/views/page/home.vue')
      },
      {
        path: 'page1',
        name: '主题一',
        icon: 'icon-triangle',
        meta: { requireAuth: true, index: 1 },
        children: [
          {
            path: 'page2',
            name: '主题二er',
            meta: { requireAuth: true, index: 1 },
            component: () => import('@/views/admin/resigor.vue')
          },
          {
            path: 'page3',
            name: '主题三san',
            meta: { requireAuth: true, index: 1 },
            component: () => import('@/views/admin/setting.vue')
          }
        ],
      },
      {
        path: 'page2',
        name: '主题二er',
        meta: { requireAuth: true, index: 1 },
        component: () => import('@/views/admin/resigor.vue')
      },
      {
        path: 'page3',
        name: '主题三san',
        meta: { requireAuth: true, index: 1 },
        component: () => import('@/views/admin/setting.vue')
      }
    ]
  }
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
