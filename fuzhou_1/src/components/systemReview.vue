<template>
    <div>
        <div class="wrapper">
            <div class="box">
                <div class="top">
                    <h4>检务信息系统审查</h4>
                    <button>诊断条件</button>
                </div>
                <el-row :gutter="30">
                    <el-col :span="8" style="padding-left: 0">
                        <div class="list">
                            <div>
                                <img src="./systemReview/images/jiangshi_icon.png">
                                <h5>僵尸系统 </h5>
                            </div>
                            <p>日均访问量少于5 使用频率.日均范围量</p>
                        </div>

                    </el-col>
                    <el-col :span="8">
                        <div class="list">
                            <div>
                                <img src="./systemReview/images/jiangshi_icon.png">
                                <h5>系统未上云 </h5>
                            </div>
                            <p>系统部署情况 自建机房</p>
                        </div>

                    </el-col>

                    <el-col :span="8" style="padding-right: 0">
                        <div class="list">
                            <div>
                                <img src="./systemReview/images/jiangshi_icon.png">
                                <h5>孤岛系统 </h5>
                            </div>
                            <p>网络环境 单机</p>
                        </div>
                    </el-col>
                </el-row>
            </div>


            <div class="choice_box">
                <!--<div class="top">
                   <button>批量导出</button>
                </div>-->
                <div class="choice">
                    <p>部门分类：</p>
                    <el-radio-group v-model="radio">
						<el-radio v-for="item in data2" :label="item">{{item}}</el-radio>
					</el-radio-group>    
                </div>
                <!--<div class="confirm">
                    <el-button type="primary" plain>确定</el-button>

                </div>-->
            </div>

            <div class="paging">

                <paging v-for="n in 5" :key="n" :n1="n"></paging>
                <div class="page">
                    <el-pagination
                            background
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage1"
                            :page-size="1000"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="1000">
                    </el-pagination>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    import paging from './systemReview/components/paging'

    export default {
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            tab(index) {
                this.array = index;
            },
            useTab(index) {
                this.use = index;
            }
        },
        components: {
            paging,
            props: ['n1'],
        },
        data() {
            return {
                currentPage1: 5,
                input: '',
                array: 1,
                use: 1,

//              checkList: ['选中且禁用', '复选框 A'],
                // flag:[0,0,0,0]
                data2:['全部','第二','第三','第四','第五','第六','第七','第八','第九'],
      			    radio:['全部'],
            }
        }
    }
</script>
<style lang="scss" scoped>
    /*@import '../../resource/css/reset.min.css';*/

    .wrapper {
        width: 100%;
        padding: 10px 25px;
        box-sizing: border-box;
        background: #dee9ee;
        float: right;
    }

    .choice_box {
    	padding-left:20px ;
        background: #ffffff;
        border-radius: 15px;
        overflow: hidden;
        margin-bottom: 10px;
        .top {
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            p {
                float: left;
                color: #333;
            }
            span {
                background: #4aa7fd;
                float: left;
                color: #fff;
                margin-left: 10px;
                padding: 0 10px;
            }
            button {
                float: right;
				cursor: pointer;
                border: 1px solid #4aa7fd;
                font-size: 14px;
                width: 110px;
                height: 30px;
                line-height: 30px;
                color: #333;
                background: url("systemReview/images/down_icon.png") no-repeat 90px 10px;
            }
        }
        .choice {
            font-size: 14px;
            color: #333;
            margin-top: 30px;
            p {
                float: left;

            }
            label {
                margin-right: 5px;
                float: left;
                margin-bottom: 20px;
                margin-top: 5px;
            }
        }
        .confirm {
            clear: both;
            .el-button {
                width: 60px;
                height: 30px;
                line-height: 30px;
                clear: both;
                padding: 0;
            }
            margin-left: 70px;
        }
    }

    .box {
        background: #ffffff;
        padding: 0 30px 30px;
        overflow: hidden;
        border-radius: 15px;
        margin-bottom: 10px;
        .top {
            overflow: hidden;
            h4 {
                color: #4aa7fd;
                font-size: 16px;
                margin-bottom: 18px;
                font-weight: 400;
                float: left;
                margin-top: 25px;
            }
            button {
                margin-top: 15px;
                float: right;
                border: 1px solid #4aa7fd;
                font-size: 14px;
                width: 110px;
                height: 30px;
                line-height: 30px;
                background: url("systemReview/images/down_icon.png") no-repeat 90px 10px;
                color: #333;
            }

        }
        .el-row {
            margin: 0 !important;
            .list {
                border: 1px solid #c0c0c0;
                text-align: center;
                height: 260px;
                div {
                    height: 70px;
                    line-height: 70px;
                    padding-top: 60px;
                    img, h5 {
                        display: inline-block;
                    }
                    h5 {
                        font-size: 31px;
                        vertical-align: text-bottom;
                        margin-left: 10px;
                    }
                }
                p {
                    margin-top: 35px;
                    font-size: 16px;
                }
                /*padding: 0 120px;*/
            }
        }

    }

    .paging {
        background: #fff;
        padding: 20px 30px 0px;
        border-radius: 15px;
        overflow: hidden;
        .el-row {
            margin-bottom: 20px;
        }

        text-align: center;
        .l-1 {
            height: 200px;
            background: #d3e3fd;
            padding: 0 50px;
            box-sizing: border-box;
            h5 {
                padding-top: 60px;
                font-size: 16px;
                line-height: 32px;
                color: #333;
                padding-bottom: 10px;
            }
            button {
                span {
                    line-height: 40px;
                }
                display: block;
                height: 40px;
                line-height: 40px;
                padding: 0 20px;
                margin: 0 auto;
                background: none;
                border: 1px solid #a7bcde;
            }
        }
        .l-2 {
            padding: 28px 80px 28px 28px;
            box-sizing: border-box;
            text-align: left;
            h5 {
                font-size: 14px;
                line-height: 32px;
                color: #333;
            }
            p {
                font-size: 14px;
                line-height: 32px;

            }
            span {
                color: #999999;
                font-size: 14px;
            }
        }
        .l-3 {
            padding-top: 10px;
            box-sizing: border-box;
            p {
                font-size: 14px;
                color: #333;
                line-height: 36px;
            }
            border-right: 1px dashed #c2c2c2;
            border-left: 1px dashed #c2c2c2;
            height: 180px;
            margin-top: 10px;
        }

        .l-4 {
            position: relative;
            padding-top: 75px;
            p {
                font-size: 14px;
                color: #333;
                line-height: 36px;

            }
            button {
                border-radius: 10px;
                border-color: #6cb7fc;
                font-size: 14px;

            }
            img {
                position: absolute;
                top: 0;
                right: 0;
                width: 77px;
            }

        }
        .el-col {
            background: #f5f5f9;
        }

        .el-row > div {
            height: 200px;
        }
        .page {
            float: left;
            margin-top: 10px;
            padding: 0px;

        }
        overflow: hidden;
    }


</style>
