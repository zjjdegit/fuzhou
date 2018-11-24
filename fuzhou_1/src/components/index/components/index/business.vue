<template>
    <div class=" business_box">
        <div class="wrapper">
            <h1>全业务智慧办案 全要素智慧管理 全方位智慧服务 全领域智慧支撑</h1>
            <ul class="business">
                <li @mouseover="dataDetails(0)" @mouseout="hiddenDetail" :class="itemHoverIndex==0?'on':''">
                    <div class="top">
                        <img v-show="itemHoverIndex==0?false:true" src="../../images/01.png">
                        <img v-show="itemHoverIndex==0?true:false"src="../../images/01-1.png">
                        <p>部门目录</p>
                    </div>
                    <div class="bot">
                        <p>腾讯移动分析（MTA） <a href="">详情</a>
                            <br>
                            APP核心指标多维度分析、自定义事件统计</p>

                        <p>HTML5数据分析 <a href="">详情</a>
                            <br>
                            支持微信内H5页面流向分析、用户行为分析义事件分析</p>
                        <p>微信小程序分析 <a href="">详情</a>
                            <br>
                            微信小程序应用和客户分析、自定义事件分析</p>
                    </div>
                </li>
                <li @mouseover="dataDetails(1)" @mouseout="hiddenDetail" :class="itemHoverIndex==1?'on':''">
                    <div class="top">
                        <img v-show="itemHoverIndex==1?false:true" src="../../images/02.png">
                        <img v-show="itemHoverIndex==1?true:false" src="../../images/02-1.png">
                        <p>部门目录</p>
                    </div>
                    <div class="bot">
                        <img class="yuan1" v-show="itemHoverIndex==1?false:true" src="../../images/business_yuan.png">
                        <p>侦察监督 <a href="">详情</a>
                            <br>
                            APP核心指标多维度分析、自定义事件统计
                        </p>
                        <p>公诉 <a href="">详情</a>
                            <br>
                            支持微信内H5页面流向分析、用户行为分析
                        </p>
                        <p>反贪污贿赂 <a href="">详情</a>
                            <br>
                            微信小程序应用和客户分析、自定义事件分析</p>
                        <img class="yuan2" v-show="itemHoverIndex==1?false:true" src="../../images/business_yuan.png">

                    </div>
                </li>
                <li @mouseover="dataDetails(2)" @mouseout="hiddenDetail" :class="itemHoverIndex==2?'on':''">
                    <div class="top">
                        <img v-show="itemHoverIndex==2?false:true" src="../../images/03.png">
                        <img v-show="itemHoverIndex==2?true:false" src="../../images/03-1.png">
                        <p>部门目录</p>
                    </div>
                    <div class="bot">
                        <p>腾讯移动分析（MTA） <a href="">详情</a>
                            <br>
                              APP核心指标多维度分析、自定义事件统计</p>

                        <p>HTML5数据分析 <a href="">详情</a>
                            支持微信内H5页面流向分析、用户行为分析义事件分析</p>
                        <p>微信小程序分析 <a href="">详情</a>
                            微信小程序应用和客户分析、自定义事件分析</p>
                    </div>
                </li>
            </ul>

        </div>

    </div>
</template>

<script>
    export default {
        name: "business",
        data() {
            return {
                itemHoverIndex: 0
            }
        },
        mounted: function () {

        },
        created: function () {

        },
        methods: {
            dataDetails(i) {
                this.itemHoverIndex = i
            },
            hiddenDetail() {

            }

        }
    }
</script>

<style scoped lang="scss">
    .wrapper {
        width: 1170px;
        margin: 0 auto;
    }

    .business_box {
        overflow: hidden;
        background: #e0e8f0;
        /*padding-bottom: 70px;*/
        height: 720px;
        h1 {
            font-size: 26px;
            color: #333333;
            padding: 65px 0;
            text-align: center;
        }
        ul {
            li {
                float: left;
                width: 390px;
                text-align: center;
                transition: .5s;
                -moz-transition: .5s; /* Firefox 4 */
                -webkit-transition: .5s; /* Safari 和 Chrome */
                -o-transition: .5s; /* Opera */

                .top {
                    padding: 50px 0;
                    background: #f0f4f8;
                    height: 140px;
                    overflow: hidden;
                    transition: .5s;
                    -moz-transition: .5s; /* Firefox 4 */
                    -webkit-transition: .5s; /* Safari 和 Chrome */
                    -o-transition: .5s; /* Opera */
                    p {
                        margin-top: 35px;
                        font-size: 18px;
                        color: #222;
                    }
                }
                .bot {
                    color: #333;
                    text-align: left;
                    padding: 30px 25px 30px 40px;
                    background: #fff;
                    height: 180px;
                    position: relative;
                    .yuan1 {
                        position: absolute;
                        left: 0;
                        top: 30px;
                    }
                    .yuan2 {
                        position: absolute;
                        right: 0;
                        top: 30px;
                    }
                    p {
                        font-size: 14px;
                        margin-bottom: 22px;
                    }
                    a {
                        display: inline-block;
                        opacity: 0;
                        width: 48px;
                        height: 22px;
                        line-height: 22px;
                        color: #2ea8e5;
                        border: 1px solid #2ea8e5;
                        border-radius: 5px;
                        text-align: center;

                    }
                }

            }
            li.on {
                position: relative;
                width: 384px;
                font-size: 18px;
                color: #fff;
                border: 1px solid #2ea8e5;
                transform: scale(1.05);
                -ms-transform: scale(1.05); /* IE 9 */
                -moz-transform: scale(1.05); /* Firefox */
                -webkit-transform: scale(1.05); /* Safari 和 Chrome */
                -o-transform: scale(1.05);
                box-shadow: 0 0 20px rgba(0, 0, 0, .25);
                z-index: 9;
                .top {
                    background: #2ea8e5;
                    color: #fff;
                    p{
                        color: #fff;
                    }
                }
                .bot {
                    color: #333;
                    a {
                        opacity: 1;

                    }
                }

            }
        }
    }
</style>