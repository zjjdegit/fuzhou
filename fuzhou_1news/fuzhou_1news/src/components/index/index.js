import Vue from 'vue'
import App from '../../views/index.vue'
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    data(){
        return{

        }
    },
    mounted(){
        // var player = new Aliplayer({
        //     id: 'J_prismPlayer',
        //     width: '100%',
        //     height: '100%',
        //     autoplay: false,
        //     //支持播放地址播放,此播放优先级最高
        //     source: 'http://www.cdfg.com.cn/template/1/default/_files/video/zmzeren.mp4',
        //     x5_video_position:'top', //指定视频在上部显示
        //     x5_type:'h5', //声明启用同层H5播放器，支持的值：h5
        //     useH5Prism:true
        // }, function (player) {
        //     console.log('播放器创建好了。')
        // });
    }
})