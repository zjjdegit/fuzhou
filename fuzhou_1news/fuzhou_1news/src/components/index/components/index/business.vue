<template>
    <div class=" business_box">
        <div class="wrapper">
            <h1>全业务智慧办案 全要素智慧管理 全方位智慧服务 全领域智慧支撑</h1>
            <ul class="business" id="business">
                <li @mouseover="dataDetails(0)" @mouseout="hiddenDetail" :class="itemHoverIndex==0?'on':''">
                    <div class="top">
                        <img v-show="itemHoverIndex==0?false:true" src="../../images/01.png">
                        <img v-show="itemHoverIndex==0?true:false" src="../../images/01-1.png">
                        <p>区域目录</p>
                    </div>
                    <div class="bot_box">
                        <div class="bot " :class="{scroll:item.text.length>3?true:false}">
                            <h5>腾讯移动分析（MTA） <a href="">详情</a></h5>
                            <p>APP核心指标多维度分析、自定义事件统计</p>
                            <h5>HTML5数据分析 <a href="">详情</a></h5>
                            <p>支持微信内H5页面流向分析、用户行为分析义事件分析</p>
                            <h5>微信小程序分析 <a href="">详情</a></h5>
                            <p>微信小程序应用和客户分析、自定义事件分析</p>
                        </div>
                    </div>
                </li>
                <li @mouseover="dataDetails(1)" @mouseout="hiddenDetail" :class="itemHoverIndex==1?'on':''">
                    <div class="top">
                        <img v-show="itemHoverIndex==1?false:true" src="../../images/02.png">
                        <img v-show="itemHoverIndex==1?true:false" src="../../images/02-1.png">
                        <p>部门目录</p>
                    </div>
                    <div class="bot_box">
                        <div class="bot" ref="bot" :class="{scroll:item.text.length>3?true:false}">
                            <!--<img class="yuan1" v-show="itemHoverIndex==1?false:true" src="../../images/business_yuan.png">-->
                            <p>侦察监督 
                                <br>
                                APP核心指标多维度分析、自定义事件统计
                            </p>
                            <p>公诉 
                                <br>
                                支持微信内H5页面流向分析、用户行为分析
                            </p>
                            <p>反贪污贿赂 
                                <br>
                                微信小程序应用和客户分析、自定义事件分析</p>
                                <p>微信小程序分析 
                                <br>
                                微信小程序应用和客户分析、自定义事件分析</p>
                            <p>微信小程序分析 
                                <br>
                                微信小程序应用和客户分析、自定义事件分析</p>
                            <p>微信小程序分析 
                                <br>
                                微信小程序应用和客户分析、自定义事件分析</p>
                            <!--<img class="yuan2" v-show="itemHoverIndex==1?false:true" src="../../images/business_yuan.png">-->

                        </div>
                    </div>
                </li>
                <li @mouseover="dataDetails(2)" @mouseout="hiddenDetail" :class="itemHoverIndex==2?'on':''">
                    <div class="top">
                        <img v-show="itemHoverIndex==2?false:true" src="../../images/03.png">
                        <img v-show="itemHoverIndex==2?true:false" src="../../images/03-1.png">
                        <p>共享开放目录</p>
                    </div>
                    <div class="bot_box">
                        <div class="bot" :class="{scroll:item.text.length>3?true:false}">
                            <h5>共享目录</h5>
                            <p>总数&nbsp;578个&nbsp;&nbsp;&nbsp;占比&nbsp;87%</p>
                            <h5>共享目录</h5>
                            <p>总数&nbsp;578个&nbsp;&nbsp;&nbsp;占比&nbsp;87%</p>
                        </div>
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
                itemHoverIndex: 0,
                item:{
                    text:[11,22,33,33],
                    listByArea:{
                        name:"",
                        profile:'',
                        createDate:''
                    }
                }
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

            }, getClass(oParent, aClass) {

                var aEle = document.getElementsByTagName('*');

                var result = [];

                for (var i = 0; i < aEle.length; i++) {

                    if (aEle[i].className == aClass) {

                        result.push(aEle[i])

                    }

                }

                return result;

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
                    padding: 0 25px 0 40px;

                    height:180px;
                    position: relative;
                    overflow: scroll;
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
                    h5{
                        font-size: 14px;
                        
                    }
                    p {
                        font-size: 14px;
                        margin-bottom: 22px;
                        color: #666666;
                    }
                    p:last-child{
                        margin-bottom: 0;
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
                .bot_box {
                    height: 180px;
                    overflow: hidden;
                    padding: 30px 0 30px;
                    background: #fff;
                }
                /*滚动条样式*/
                .scroll::-webkit-scrollbar { /*滚动条整体样式*/
                    width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
                    height: 4px;
                }
                .scroll::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
                    border-radius: 5px;
                    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                    background: #2ea8e5;
                }
                .scroll::-webkit-scrollbar-track { /*滚动条里面轨道*/
                    /*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*/
                    border-radius: 0;
                    /*background: rgba(0,0,0,0.1);*/
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
                    p {
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