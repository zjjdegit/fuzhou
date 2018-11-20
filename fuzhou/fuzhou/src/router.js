import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import index from './components/index.vue'
import sjmlIndex from'./components/sjmlIndex.vue'
import ywzymlIndex from './components/ywzymlIndex.vue'

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
          component:ywzymlIndex
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
