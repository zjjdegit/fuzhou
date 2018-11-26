<template>
    <div class="data_box">
        <div class="wrapper">
            <div>
                <h1>数据驱动业务</h1>
                <div class="scroll">
                    <swiper :options="swiperOption" ref="mySwiper">
                        <!-- slides -->
                        <swiper-slide>
                            <ul>
                                <li>
                                    <img src="../../images/data1.png">
                                    <h2>检务事项</h2>
                                    <p>超50类常见业务指标多维筛选</p>
                                    <p>自定义事件高度灵活配置</p>
                                    <p>快速定位运营状况，提升效率</p>
                                </li>
                                <li>
                                    <img src="../../images/data1.png">
                                    <h2>检务事项</h2>
                                    <p>超50类常见业务指标多维筛选</p>
                                    <p>自定义事件高度灵活配置</p>
                                    <p>快速定位运营状况，提升效率</p>
                                </li>
                                <li>
                                    <img src="../../images/data1.png">
                                    <h2>检务事项</h2>
                                    <p>超50类常见业务指标多维筛选</p>
                                    <p>自定义事件高度灵活配置</p>
                                    <p>快速定位运营状况，提升效率</p>
                                </li>
                                <li>
                                    <img src="../../images/data1.png">
                                    <h2>检务事项</h2>
                                    <p>超50类常见业务指标多维筛选</p>
                                    <p>自定义事件高度灵活配置</p>
                                    <p>快速定位运营状况，提升效率</p>
                                </li>

                            </ul>
                        </swiper-slide>
                        <swiper-slide>
                            <img class="tab_2" src="../../images/tab_2.png">
                        </swiper-slide>

                    </swiper>

                    <div v-show="flag==1?true:false" @click="off(2)" class="swiper-button-prev swiper-button-black"
                         slot="button-prev"></div>
                    <div v-show="flag==2?true:false" @click="off(1)"  class="swiper-button-next swiper-button-black"
                         slot="button-next"></div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    // 轮播图的使用
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: 'HelloWorld',
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                flag: 2,
                swiperOption: {
                    notNextTick: true,
                    //循环
                    loop: true,
                    //设定初始化时slide的索引
                    initialSlide: 0,
                    //自动播放
                    autoplay: false,
                    // autoplay: {
                    //     delay: 3000,
                    //     stopOnLastSlide: false,
                    //     disableOnInteraction: true,
                    // },
                    // 设置轮播
                    // effect: 'flip',
                    //滑动速度
                    speed: 800,
                    //滑动方向
                    // direction: 'vertical',
                    //小手掌抓取滑动
                    grabCursor : false,
                    noSwiping: true,
                    noSwipingClass:'swiper-container',
                    //滑动之后回调函数
                    on: {
                        slideChangeTransitionEnd: function () {
                            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                        },
                    },
                    //左右点击
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                // swiperSlides: [1, 2]
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        mounted() {

        },
        methods: {
            off(n){
                this.flag=n;
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper {
        width: 1170px;
        margin: 0 auto;
    }

    .scroll {
        position: relative;
    }

    .swiper-button-next {
        background: url("../../images/tab_right.png") no-repeat;
        background-size: 100%;
        width: 41px;
        right: -50px;
        outline: none !important;
    }

    .swiper-button-prev {
        background: url("../../images/tab_left.png") no-repeat;
        background-size: 100%;
        width: 41px;
        left: -58px;
        outline: none !important;
    }

    .data_box {
        width: 100%;
        height: 480px;
        background: url("../../images/data.jpg") no-repeat;
        background-size: 100% 100%;
        padding-bottom: 30px;
        h1 {
            text-align: center;
            font-size: 26px;
            color: #fff;
            padding: 50px 0;
        }
        ul {
            overflow: hidden;
            margin-left: -5px;
            li {
                float: left;
                width: 285px;
                height: 257px;
                text-align: center;
                color: #fff;
                border: 1px solid #fff;
                padding: 25px 0;
                border-radius: 5px;
                margin-left: 5px;
                img {
                    width: 95px;
                    height: auto;
                }
                h2 {
                    font-size: 18px;
                }
                p {
                    font-size: 14px;
                    margin-top: 12px;
                }
            }
        }
        .tab_2 {
            width: 892px;
            display: block;
            margin: 0 auto;
        }
    }
</style>