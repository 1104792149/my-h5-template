import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const router = [
  {
    path: '/',
    name: 'tabs',
    component: () => import('@/views/tabs'),
    meta: {
      keepAlive: false
    },
    redirect: '/home/index',//入口页面
    children:[
      {
        path: '/home/index',
        name: 'index',
        component: () => import('@/views/home/index'),
        meta: {
          keepAlive: false
        }
      },
      {
        path: '/my/userInfo',
        name: 'userInfo',
        component: () => import('@/views/my/userInfo'),
        meta: {
          keepAlive: false
        }
      }
    ]
  },
]

const createRouter = () =>
  new Router({
    // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: '/app/',
    scrollBehavior: () => ({y: 0}),
    routes: router
  })

export default createRouter()
