import Vue from 'vue'

import App from './App.vue'
import router from './router'
import './plugins/element.js'
import echarts from 'echarts' 
import store from './plugins/store'


// import { HappyScroll } from 'vue-happy-scroll'
// //自定义组件名
// Vue.component('happy-scroll', HappyScroll)
// // 引入css
// import 'vue-happy-scroll/docs/happy-scroll.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,//注册store(这可以把 store 的实例注入所有的子组件)
  render: h => h(App)
}).$mount('#app')
