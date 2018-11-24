<template>
    <el-row>
        <el-col :span="4">
            <div class="l-1">
                <h5>福建省人民检察院 量刑建议系统</h5>
                <el-button>鼓楼区检察院</el-button>
            </div>

        </el-col>
        <el-col :span="13">
            <div class="l-2">
                <h5>系统功能、服务简介</h5>
                <p>选案件的相关犯罪构成、情节等，系统将根据案情自动计算出量刑结果，为办案检察官提供量刑建议结论，系统还可依据量刑结论，辅助检察官生成量刑建议书等。</p>
                <p>系统开始使用日期：</p>
                <span>2017-07-30</span>
            </div>
        </el-col>
        <el-col :span="3">
            <div class="l-3">
                <p> 数据规模（G）</p>
                <p> 数据总量（条）</p>
                <p> 数据增长情况（M）</p>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="l-4">
                <el-button round>关联信息资源</el-button>
                <img v-show="n1==1?true:false" src="../images/over.png">
            </div>
        </el-col>
    </el-row>
</template>


<script>
    export default {
        name: "paging",

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
        props: ['n1'],

        data() {
            return {
                currentPage1: 5,
                array: 1,
                use: 1,
                // flag:[0,0,0,0]
            };
        }
    }
</script>

<style scoped lang="scss">
    .paging {
        background: #fff;
        padding: 0 30px 30px;
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

        }
        overflow: hidden;
    }

    @media only screen and (max-width: 1650px) {
        .paging .l-1 {
            padding: 0 20px;
            h5 {
                font-size: 14px;

            }
        }
        .paging .l-2 {
            p {
                font-size: 12px;
            }
            padding-right: 30px;

        }
        .paging .l-3 {
            p {
                font-size: 12px;
            }

        }
    }
</style>