<template>
    <div>
        <div class="wrapper">
            <div class="box">
                <h4>检务信息系统清单</h4>
                <el-row class="header_top">
                    <el-col :span="8">
                        <el-col :span="4"><span>排列方式</span></el-col>
                        <el-col :span="6"><p :class="{on:array==1?true:false}" @click="tab(1)">全部</p></el-col>
                        <el-col :span="7"><p :class="{on:array==2?true:false}" @click="tab(2)">系统所属部门</p></el-col>
                        <el-col class="last" :span="7"><p :class="{on:array==3?true:false}" @click="tab(3)">系统开始使用日期</p>
                        </el-col>
                    </el-col>
                    <el-col :span="8">
                        <el-col :span="4" :offset="1">
                            <span>使用状态</span>
                        </el-col>
                        <el-col :span="6">
                            <p :class="{on:use==1?true:false}" @click="useTab(1)">全部</p>
                        </el-col>
                        <el-col :span="6">
                            <p :class="{on:use==2?true:false}" @click="useTab(2)">运行中</p>
                        </el-col>
                        <el-col class="last" :span="6">
                            <p :class="{on:use==3?true:false}" @click="useTab(3)">停用</p>
                        </el-col>
                    </el-col>

                    <el-col :span="6">

                        <el-col :span="3">
                            <span>搜索</span>
                        </el-col>
                        <el-col :span="20">
                            <el-input v-model="input" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
                        </el-col>
                    </el-col>
                </el-row>

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
    import paging from './systemList/components/paging'
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
                // flag:[0,0,0,0]
            };
        }
    }
</script>
<style lang="scss" scoped>
    /*@import '../../resource/css/reset.min.css';*/

    .wrapper {
        width: 100%;
        padding: 22px;
        box-sizing: border-box;
        background: #dee9ee;
        float: right;
    }

    .box {
        background: #ffffff;
        padding: 30px;
        overflow: hidden;
        .header_top {
            p {
                cursor: pointer;
            }
        }
        .el-col {
            padding-right: 0 !important;
            padding-left: 0 !important;
        }
        .el-row {
            margin: 0 !important;
        }
        h4 {
            color: #333;
            font-size: 16px;
            margin-bottom: 18px;
        }

        div {
            span {
                font-size: 14px;
                color: #333;
                height: 40px;
                line-height: 40px;
            }
            p {
                height: 40px;
                line-height: 40px;
                background: #fff;
                border: 1px solid #d7d7d7;
                text-align: center;
                border-right: 0;
            }
            .last {
                border-right: 1px solid #d7d7d7;
            }

            p.on {
                border: 1px solid #4aa7fd;
                background: #4aa7fd;
                color: #fff;
            }
        }
        .right {
            margin-left: 30px;
        }
        .el-input__prefix {
            right: 5px;
            left: auto;
            font-size: 22px;
            color: #969696;
        }

    }

    .paging {
        background: #fff;
        padding: 0 30px 0px 30px;
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
    @media only screen and (max-width: 1700px) {
        .header_top {
            p {
                cursor: pointer;
                font-size: 12px;
            }
        }
    }



</style>
