import Vue from 'vue'
import Router from 'vue-router'
import radioManage from '@/components/manage/radioManage'
import inputManage from '@/components/manage/inputManage'
import buttonManage from '@/components/manage/buttonManage'
import checkboxManage from '@/components/manage/checkboxManage'
import dialogManage from '@/components/manage/dialogManage'
import treeManage from '@/components/manage/treeManage'
import uploadManage from '@/components/manage/uploadManage'
import progressManage from '@/components/manage/progressManage'
import customForm from '@/components/manage/customForm'
import selectManage from '@/components/manage/selectManage'

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
      path: '/tree',
      name: 'treeManage',
      component: treeManage
    },
    {
      path: '/upload',
      name: 'uploadManage',
      component: uploadManage
    },
    {
      path: '/progress',
      name: 'progressManage',
      component: progressManage
    },
    {
      path: '/select',
      name: 'selectManage',
      component: selectManage
    },
    {
      path: '/customform',
      name: 'customform',
      component: customForm
    },
    {
      path: '/',
      redirect: '/radio'
    }
  ]
})
