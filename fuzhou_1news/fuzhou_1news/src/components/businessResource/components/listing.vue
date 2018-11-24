<template>
    <div class="wrapper-listing">
        <div class="form_top clearfix">
            <form action="">
                <div class="search">
                    <ul>
                        <li class="span_01">按事项名称：</li>
                        <li>
                            <el-input placeholder="请输入事项名称" prefix-icon="el-icon-search" v-model="input1">
                            </el-input>
                        </li>
                        <li style="float: right;">
                            <el-button>批量导出<i class="el-icon-download"></i></el-button>
                        </li>
                    </ul>
                </div>
                <div class="button_01">
                    <span>提示：可同时选择多项</span>
                    <el-button type="primary">系统默认指标</el-button>
                </div>
                <div class="department">
                    <ul>
                        <li class="span_02">部门分类：</li>
                        <li>
                            <el-radio v-model="radio" label="1">鼓楼区</el-radio>
                        </li>
                        <li>
                            <el-radio v-model="radio" label="2">鼓楼区</el-radio>
                        </li>
                        <li>
                            <el-radio v-model="radio" label="3">鼓楼区</el-radio>
                        </li>
                        <li>
                            <el-radio v-model="radio" label="4">鼓楼区</el-radio>
                        </li>
                        <li>
                            <el-radio v-model="radio" label="5">鼓楼区</el-radio>
                        </li>
                        <li>
                            <el-radio v-model="radio" label="6">鼓楼区</el-radio>
                        </li>
                        <li>
                            <el-radio v-model="radio" label="7">鼓楼区</el-radio>
                        </li>
                        <li>
                            <el-radio v-model="radio" label="8">鼓楼区</el-radio>
                        </li>
                    </ul>
                </div>
                <div class="button_02">
                    <el-button>确定</el-button>
                </div>
            </form>
        </div>
        <div style="background: #fff">
            <el-row class="title">
                <el-col :span="1">
                    序号
                </el-col>
                <el-col :span="3">
                    部门名称
                </el-col>
                <el-col :span="3">
                    事项名称
                </el-col>
                <el-col :span="3">
                    事项编码
                </el-col>
                <el-col :span="6">
                    事项流程环节
                </el-col>
                <el-col :span="3">
                    业务涉及材料
                </el-col>
                <el-col :span="2">
                    年均办理量
                </el-col>
                <el-col :span="3">
                    查看
                </el-col>
            </el-row>
            <el-row class='td' v-for="(item,index) in tableData" :key="index">
                <section>
                    <el-col :span="1">
                        {{item.id}}
                    </el-col>
                    <el-col :span="3">
                        <span class="el-icon-plus" @click="tab(index)"
                              v-show="item.str?true:false" :dataindex='index'></span>
                        {{item.bmmc}}
                    </el-col>
                    <el-col :span="3">
                        {{item.sxmc}}
                    </el-col>
                    <el-col :span="3">
                        {{item.sxbm}}
                    </el-col>
                    <el-col :span="6">
                  <span class="el-icon-plus" @click="tab(index)"
                        v-show="item.str?true:false" ref></span>
                        {{item.ywsjcl}}
                    </el-col>
                    <el-col :span="3">
                        {{item.sxlchj}}
                    </el-col>
                    <el-col :span="2">
                        {{item.njbll}}
                    </el-col>
                    <el-col :span="3">
                        {{item.ck}}
                    </el-col>
                </section>
                <section class="inside" v-show="i1==index?true:false">
                    <section v-for="cur in item.str" :class="item.str.length<=0?'clerbor':''">
                        <el-col :span="1" class="bor0">

                        </el-col>
                        <el-col :span="3">
                            {{cur.bmmc}}
                        </el-col>
                        <el-col :span="3">
                            {{cur.sxmc}}
                        </el-col>
                        <el-col :span="3">
                            {{cur.ywsjcl}}
                        </el-col>
                        <el-col :span="6">
                            {{cur.sxlchj}}
                        </el-col>
                        <el-col :span="3">
                            {{cur.njbll}}
                        </el-col>
                        <el-col :span="2" class="bor0">
                        </el-col>
                        <el-col :span="3" class="bor0">

                        </el-col>
                    </section>

                </section>
            </el-row>
        </div>
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

</template>

<script>
    export default {

        components: {},

        props: {},

        data() {
            return {
                input1: '',
                radio: '1',
                currentPage: 4,
                i1: null,
                off: 1,
                currentPage1: 5,
                input: '',
                inde: '',
                tableData: [
                    {
                        id: 1,
                        bmmc: '侦查监督科',
                        sxmc: '审查逮捕案件',
                        sxbm: '公诉-00980-001',
                        sxlchj: '10',
                        ywsjcl: '提请逮捕批准书、立案决定书',
                        njbll: '800',

                        ck: '详情 | 数据需求',
                        str: [{
                            bmmc: '侦查监督科',
                            sxmc: '审查逮捕案件',
                            sxbm: '公诉-00980-001',
                            sxlchj: '部门受案号',
                            ywsjcl: '10',
                            njbll: '800',
                        }, {
                            bmmc: '侦查监督科',
                            sxmc: '审查逮捕案件',
                            sxbm: '公诉-00980-001',
                            sxlchj: '部门受案号',
                            ywsjcl: '10',
                            njbll: '800',
                        }, {
                            bmmc: '侦查监督科',
                            sxmc: '审查逮捕案件',
                            sxbm: '公诉-00980-001',
                            sxlchj: '部门受案号',
                            ywsjcl: '10',
                            njbll: '800',
                        }]
                    },
                    {
                        id: 2,
                        bmmc: '侦查监督科',
                        sxmc: '审查逮捕案件',
                        sxbm: '公诉-00980-001',
                        sxlchj: '10',
                        ywsjcl: '提请逮捕批准书、立案决定书',
                        njbll: '800',
                        ck: '详情 | 数据需求',
                        str: [{
                            bmmc: '侦查监督科',
                            sxmc: '审查逮捕案件',
                            sxbm: '公诉-00980-001',
                            sxlchj: '部门受案号',
                            ywsjcl: '10',
                            njbll: '800',
                        }]
                    },
                    {
                        id: 3,
                        bmmc: '侦查监督科',
                        sxmc: '审查逮捕案件',
                        sxbm: '公诉-00980-001',
                        sxlchj: '10',
                        ywsjcl: '提请逮捕批准书、立案决定书',
                        njbll: '800',
                        ck: '详情 | 数据需求'
                    },
                    {
                        id: 4,
                        bmmc: '侦查监督科',
                        sxmc: '审查逮捕案件',
                        sxbm: '公诉-00980-001',
                        sxlchj: '10',
                        ywsjcl: '提请逮捕批准书、立案决定书',
                        njbll: '800',
                        ck: '详情 | 数据需求'
                    },
                    {
                        id: 5,
                        bmmc: '侦查监督科',
                        sxmc: '审查逮捕案件',
                        sxbm: '公诉-00980-001',
                        sxlchj: '10',
                        ywsjcl: '提请逮捕批准书、立案决定书',
                        njbll: '800',
                        ck: '详情 | 数据需求'
                    },
                    {
                        id: 6,
                        bmmc: '侦查监督科',
                        sxmc: '审查逮捕案件',
                        sxbm: '公诉-00980-001',
                        sxlchj: '10',
                        ywsjcl: '提请逮捕批准书、立案决定书',
                        njbll: '800',
                        ck: '详情 | 数据需求',
                        str: [{
                            bmmc: '侦查监督科',
                            sxmc: '审查逮捕案件',
                            sxbm: '公诉-00980-001',
                            sxlchj: '部门受案号',
                            ywsjcl: '10',
                            njbll: '800',
                        }]
                    },
                ]
            }
        },


        created: function () {

        }
        ,
        methods: {
            tab(index, ev) {
                if (event.currentTarget.className == "el-icon-plus") {
                    event.currentTarget.className = "el-icon-minus"
                } else {
                    event.currentTarget.className = "el-icon-plus"

                }
                this.inde = index;
                if (this.off == 2) {
                    this.i1 = null;
                    this.off = "1";
                    return
                }
                this.i1 = index;
                this.off = "2";
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
        },

        computed: {},

    }
</script>

<style lang="scss">
    .wrapper-listing {
        flex: 1 1 auto;
        background: #e7ecee;
        padding: 10px 30px 10px 30px;
        font-size: 14px;
    }

    .page {
        background: #fff;
        padding: 15px;
        margin: 10px auto 30px;
    }

    .form_top {
        background: #fff;
        padding: 30px 20px;
        margin-bottom: 12px;
    }


    .search ul li {
        float: left;
    }

    .search ul .span_01 {
        line-height: 40px;
    }

    .search .el-input__inner {
        width: 270px;
        height: 40px;
    }

    .search ul .el-button .el-button--default {
        height: 27px;

    }

    .search ul .el-icon-download {
        margin-left: 3px;
    }

    .button_01 {
        height: 60px;
    }

    .button_01 > span {
        float: left;
        margin-right: 10px;
        line-height: 28px;
    }

    .button_01 .el-button--primary {
        height: 28px;
        background: #4aa7fd;
        line-height: 7px;
        border: none;
    }

    .department ul li {
        float: left;
        margin-right: 80px;
        line-height: 30px;
    }

    .department ul .el-radio_label {
        padding-left: 10px;
    }

    .department ul .span_02 {
        margin-right: 10px;
    }

    .el-radio__input.is-checked + .el-radio__label {
        color: #333 !important;
    }

    .el-radio__input.is-checked .el-radio__inner {
        background: #42a5ff !important;
        border-color: #42a5ff !important;
    }

    .button_02 {
        margin-top: 60px;
        margin-left: 80px;
    }

    .button_02 span {
        color: #b4d6fe !important;
    }

    .title {
        text-align: center;
        div {
            height: 60px;
            line-height: 60px;
            background: #dfeffc;
            color: #333333;
            font-size: 12px;
            border: 1px solid #b7d2e5;
            border-right: 0;
        }
        div:last-child {
            border-right: 1px solid #b7d2e5;
        }
    }

    .td {
        text-align: center;

        div {
            height: 60px;
            line-height: 60px;
            color: #333333;
            font-size: 12px;
            border: 1px solid #b7d2e5;
            border-right: 0;
            /*border-top: 0;*/
            margin-top: -1px;
        }
        span {
            color: #4aa7fd;
            display: inline-block;
            margin-right: 5px;
            font-weight: 600;
            cursor: pointer;
        }
        div:last-child {
            border-right: 1px solid #b7d2e5;
        }
        .inside {

            div {
                border: 0;
                border-bottom: 1px dashed #ccc;
                /*dotted dashed double*/
            }
            .bor0 {
                border: 0;
            }

        }
        .clerbor {
            div {
                border: 0;
            }
        }
    }
</style>
