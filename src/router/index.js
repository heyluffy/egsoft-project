import Vue from 'vue'
import Router from 'vue-router'
import radioManage from '@/components/manage/radioManage'
import inputManage from '@/components/manage/inputManage'
import buttonManage from '@/components/manage/buttonManage'
import checkboxManage from '@/components/manage/checkboxManage'
import dialogManage from '@/components/manage/dialogManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/radio',
      name: 'radioManage',
      component: radioManage
    },
    {
      path: '/button',
      name: 'buttonManage',
      component: buttonManage
    },
    {
      path: '/input',
      name: 'inputManage',
      component: inputManage
    },
    {
      path: '/checkbox',
      name: 'checkboxManage',
      component: checkboxManage
    },
    {
      path: '/dialog',
      name: 'dialogManage',
      component: dialogManage
    },
    {
      path: '/',
      redirect: '/radio'
    }
  ]
})
