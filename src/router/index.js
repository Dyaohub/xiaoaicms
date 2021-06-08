import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页-小爱后台管理系统',

    },

  },
  {
    // 父路由结构
    path: '',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
          title: '首页-小爱后台管理系统'
        },
      },
      {
        path: '/Chart',
        name: 'chart',
        component: () => import('../views/chart/Chart.vue'),
        meta: {
          title: '图表-小爱后台管理系统'
        },
      },
      {
        path: '/Chat', name: 'chat',
        component: () => import('../views/chat/Chat.vue'),
        meta: {
          title: '聊天室-小爱后台管理系统'
        },
      }
    ]
  },
  {
    path: '/About',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Signin',
    name: '/signin',
    component: () => import('../views/signin/Signin.vue'),
    meta: {
      title: '登录-小爱后台管理系统'
    },
  },
  {
    path: '/Signup',
    name: '/signup',
    component: () => import('../views/signup/Signup.vue'),
    meta: {
      title: '注册-小爱后台管理系统'
    },
  },
  {
    path: '*',
    component: () => import('../views/404/404.vue'),
    meta: {
      title: '首页-小爱后台管理系统'
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
  // console.log(to)
  // console.log(from)
  let user = localStorage.getItem("username")
  if (to.path === '/Signup' || to.path === '/Signin') next()

  else user ? next() : next('/Signin')
})

export default router
