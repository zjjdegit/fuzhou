<template>
    <div class="news_box">
        <div class="wrapper">
            <div class="left_box">
                <div class="tab">
                    <h3>最新动态</h3>
                    <p :class="{on:flag==1?true:false}" @click="tab(1)">数据目录</p>
                    <p :class="{on:flag==2?true:false}" @click="tab(2)">系统目录</p>
                    <p :class="{on:flag==3?true:false}" @click="tab(3)">业务资源目录</p>
                </div>
                <ul v-show="flag==1?true:false">
                    <li>
                        <p>1案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>1案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>1案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                </ul>
                <ul v-show="flag==2?true:false">
                    <li>
                        <p>222案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                </ul>
                <ul v-show="flag==3?true:false">
                    <li>
                        <p>333案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                </ul>

            </div>
            <div class="right_box">
                <div class="tab">
                    <h3>最新接口</h3>
                    <p></p>
                </div>
                <ul>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                    <li>
                        <p>案件分流-待分配案件-个案流程-流程实例信息</p>
                        <span>来源：鼓楼区检察院<em>2018-12-15</em></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "news",
        data() {
            return {
                flag:1,
                close:false
            }
        },
        mounted() {

            // this.$refs.videoPlayer.player.pause()
        },
        methods: {
            tab(index){
                this.flag=index;
            }
        },
    }
</script>

<style scoped lang="scss">
    .wrapper {
        width: 1170px;
        margin: 0 auto;
    }

    .news_box {
        background: #e7f2fb;
        padding: 25px 0;
        overflow: hidden;
        .left_box {
            width: 575px;
            float: left;
            .tab {
                font-size: 18px;
                color: #333;
                padding-bottom: 20px;
                h3 {
                    font-size: 18px;
                    margin-right: 40px;
                    display: inline-block;
                    padding-bottom: 10px;
                    font-weight: 600;
                }
                p {
                    font-size: 16px;
                    padding-bottom: 10px;
                    display: inline-block;
                    margin-right: 30px;
                    cursor: pointer;
                }
                p.on {
                    color: #2ea9e8;
                    border-bottom: 2px solid #2ea9e8;
                }
            }
            ul {
                border-right: 1px solid #bdd1e2;
                padding-right: 40px;
                li {
                    border-bottom: 1px dotted #a8a8a8;
                    text-align: left;
                    font-size: 16px;
                    color: #222;
                    margin-bottom: 20px;
                    span {
                        display: block;
                        font-size: 14px;
                        color: #a8a8a8;
                        overflow: hidden;
                        margin: 10px 0;
                        em {
                            float: right;

                        }
                    }
                }
            }
        }
        .right_box {
            width: 575px;
            float: left;
            .tab {
                font-size: 18px;
                color: #333;
                padding-bottom: 20px;
                h3 {
                    font-weight: 600;
                    padding-bottom: 10px;
                    font-size: 18px;
                    display: inline-block;
                    padding-left: 40px;
                }
            }
            ul {
                padding-left: 40px;
                li {
                    border-bottom: 1px dotted #a8a8a8;
                    text-align: left;
                    font-size: 16px;
                    color: #222;
                    margin-bottom: 20px;
                    span {
                        display: block;
                        font-size: 14px;
                        color: #a8a8a8;
                        overflow: hidden;
                        margin: 10px 0;
                        em {
                            float: right;

                        }
                    }
                }
            }
        }
    }
</style>