import Vue from 'vue'
import Router from 'vue-router'
// import Cain from '@cain/'
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: resolve => require(['@/components/Index'], resolve),
    name: '主页',
    meta: {
      isShowBar: true,
      keepAlive: true
    }
  },
  {
    path: '/news',
    component: resolve => require(['@/components/news/Index'], resolve),
    name: '患教课堂',
    meta: {
      isShowBar: true,
      keepAlive: true
    }
  },
  {
    path: '/my',
    component: resolve => require(['@/components/my/Index'], resolve),
    name: '我的',
    meta: {
      isShowBar: true,
      keepAlive: true
    }
  },
  {
    path: '/demo/loading',
    component: resolve => require(['@/components/demo/loading'], resolve),
    name: 'Loading',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  },
  {
    path: '/demo/callPhone',
    component: resolve => require(['@/components/demo/callPhone'], resolve),
    name: 'callPhone',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  },
  {
    path: '/demo/message',
    component: resolve => require(['@/components/demo/message'], resolve),
    name: 'message',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  },
  {
    path: '/demo/toast',
    component: resolve => require(['@/components/demo/toast'], resolve),
    name: 'toast',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  },
  {
    path: '/demo/singlePicker',
    component: resolve => require(['@/components/demo/singlePicker'], resolve),
    name: 'singlePicker',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  },
  {
    path: '/demo/datePicker',
    component: resolve => require(['@/components/demo/datePicker'], resolve),
    name: 'datePicker',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  },
  {
    path: '/demo/muiltPicker',
    component: resolve => require(['@/components/demo/muiltPicker'], resolve),
    name: 'muiltPicker',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  }

  // {
  //   path: '/index',
  //   component: resolve => require(['@/components/Index'], resolve),
  //   name: '主页',
  //   meta: {
  //     isShowBar: true,
  //     code: 'index',
  //     keepAlive: true
  //   }
  // },
  // {
  //   path: '/login',
  //   component: resolve => require(['@/components/Login'], resolve),
  //   name: '登录',
  //   meta: {
  //     code: 'login',
  //     isShowBar: false
  //   }
  // },

]
// let loading = ''
const router = new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  linkActiveClass: 'active',
  routes
})
// let menuList = sessionStorage.getItem('menuList')
router.beforeEach(async (to, from, next) => {
  // await this.$role.validateNoAudit('searchItem')

  // if (to.meta.code) {
  //   let pages = Cain.getParam('noRulePages')
  //   if (!Cain.isBlank(pages)) {
  //     pages = pages.split(',')
  //     for (let item of pages) {
  //       if (item === to.meta.code) {
  //         router.push('/login')
  //         return false
  //       }
  //     }
  //   }
  // }
  next()
})
router.afterEach((to, from) => {
  document.title = to.name
})

export default router
