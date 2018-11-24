import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import index from './components/index.vue'
import sjmlIndex from'./components/sjmlIndex.vue'
import ywzymlIndex from './components/ywzymlIndex.vue'
import wbsjxq from './components/wbsjxq.vue'
import sxsjc from './components/sxsjc.vue'
import xtmlIndex from './components/xtmlIndex.vue'
// import ciyun from './components/ciyun.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:'/sjmlIndex',
      children:[
        {
          path:'sjmlIndex',
          name:'sjmlIndex',
          component:sjmlIndex
        },
        {
          path:'ywzymlIndex',
          name:'ywzymlIndex',
          component:ywzymlIndex,
        },
        {
          path:'wbsjxq',
          name:'wbsjxq',
          component:wbsjxq
        },
        {
          path:'sxsjc',
          name:'sxsjc',
          component:sxsjc
        },
        {
          path:'xtmlIndex',
          name:'xtmlIndex',
          component:xtmlIndex
        },
        // {
        //   path:'ciyun',
        //   name:'ciyun',
        //   component:ciyun
        // },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
