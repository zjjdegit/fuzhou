import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import index from './components/index.vue'
import sjmlIndex from'./components/sjmlIndex.vue'
import ywzymlIndex from './components/ywzymlIndex.vue'
import systemList from './components/systemList.vue'
import systemReview from './components/systemReview.vue'
import businessResource from './components/businessResource.vue'
import index1 from './views/index.vue'
import Details from'./components/details.vue'
import Listing from'./components/listing.vue'
import Operations from'./components/operations.vue'
import Area from './components/area.vue'
import theme from './components/theme.vue'
import list from './components/list.vue'
import Xiangqing from './components/xiangqing.vue'
import Search from './components/search.vue'
import Jiliansystem from './components/jiliansystem.vue'
import XtmlIndex from './components/xtmlIndex.vue'
import Wbsjxq from './components/wbsjxq.vue'
import Sxsjc from './components/sxsjc.vue'
import denglu from './components/denglu.vue'
import Five from './components/five.vue'
import Six from './components/six.vue'
import index2 from './components/index2.vue'
import hdjl from './components/hdjl.vue'

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
	          path:'hdjl',
	          name:'hdjl',
	          component:hdjl
	        }, 
      	{
          path:'xtmlIndex',
          name:'XtmlIndex',
          component:XtmlIndex
        },  
      	{
          path:'wbsjxq',
          name:'Wbsjxq',
          component:Wbsjxq
        },  
      	{
          path:'sxsjc',
          name:'Sxsjc',
          component:Sxsjc
        },  
      	{
          path:'jiliansystem',
          name:'Jiliansystem',
          component:Jiliansystem
        },   
        {
          path:'search',
          name:'Search',
          component:Search
        },              	{
          path:'area',
          name:'Area',
          component:Area
        },
        {
          path:'theme',
          name:'theme',
          component:theme
        },
        {
          path:'list',
          name:'list',
          component:list
        },
       	{
					path: 'operations',
          name:'operations',
		      component: Operations,
				},
				{
					path: 'listing',
          name:'listing',
		      component: Listing,
				},

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
      	{
          path:'systemList',
          name:'systemList',
          component:systemList
     		},  {
          path:'systemReview',
          name:'systemReview',
          component:systemReview
      	},{
          path:'businessResource',
          name:'businessResource',
          component:businessResource
      	},{
          path:'index1',
          name:'index1',
          component:index1
      	},
      ]
    },
    {
      path: '/index1',
      name: 'index1',
      component: () => import(/* webpackChunkName: "about" */ './views/index.vue')
    },
    {
    	path: '/index2',
      name: 'index2',
      component:index2,
      children:[

	      	{
	          path:'five',
	          name:'Five',
	          component:Five
	        }, 
	      	{
	          path:'six',
	          name:'Six',
	          component:Six
	        }, 
       		{
					path: 'details',
          name:'Details',
		      component: Details,
				},
					{
          path:'xiangqing',
          name:'Xiangqing',
          component:Xiangqing
        },

       ]
    },
 		{
 			path: '/denglu',
      name: 'denglu',
      component:denglu,
 		}
  ]
})
