import Vue from 'vue'

import App from './App.vue'
import router from './router'
import './plugins/element.js'
import echarts from 'echarts' 
import store from './plugins/store'
import Axios from './axios/axios.js'
// Vue.prototype.$echarts = echarts
// require('echarts-wordcloud')
Vue.prototype.$http = Axios

// Vue.prototype.$qs=qs

// import { HappyScroll } from 'vue-happy-scroll'
// //自定义组件名
// Vue.component('happy-scroll', HappyScroll)
// // 引入css
// import 'vue-happy-scroll/docs/happy-scroll.css'

Vue.config.productionTip = false

new Vue({
  router,
  Axios,
  store,//注册store(这可以把 store 的实例注入所有的子组件)
  render: h => h(App)
}).$mount('#app')
