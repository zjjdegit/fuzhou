import axios from 'axios'//es6语法引入axios
import qs from 'qs'
import router from '../router'
import {Message} from 'element-ui'
import {Loading} from 'element-ui'

//服务器
axios.defaults.baseURL = '/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.baseURL = '/weihaiServer/';


// axios.defaults.timeout = 10000;
// axios.defaults.withCredentials=true; // 让ajax携带cookie

// var loadingInstance
// var count=0 //请求计数
//  http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     let str=config.url;
//     str=str.substring(0,11);
//     if(count==0&&str!='/IMsession/'){
//       loadingInstance = Loading.service({ fullscreen: true })
//     }
//     count++
//     if(config.method  === 'post'){
//       // config.data = 'token='+store.state.token+'&'+qs.stringify(config.data);
//       // config.data = 'token='+store.state.token+'&'+config.data;
//       if(!config.data){
//         config.data={};
//       }
//       config.data.token=sessionStorage.getItem('token');
//     }

//     return config;
//   },
//   err => {
//     console.log('拦截到的请求错误 ：'+err);
//   })
// 添加响应拦截器

// axios.interceptors.response.use(
//   function (res) {
//     count--;
//     // console.log(res.data.message);
//     // console.log(res.data.status);
//     if (count === 0) {
//       loadingInstance.close();
//     }
//     switch (res.data.code) {
//       case 200:
//         return res;
//       break
//       case -10:// token失效
//         Message.error(res.data.message);
//         router.push({
//           name: 'login',
//         });
//         break;
//       default:
//         return res;
//     }

//     // return res;
//   }, function (err) {
//     Message.error('请求失败，请联系技术人员');
//     count--;
//     if (count === 0) {
//       loadingInstance.close();
//     }
//   });




export default axios



