<template>
  <div class="wrapper-wbsjxq">
      <div class="floor firstFloor">
          <h3>外部数据需求</h3>
          <div class="content">
              <div class="chart1s">
                  <p class="part"><span class="num">4</span>类&nbsp;部门</p>
              <p class="data"><span class="num">245</span>项&nbsp;数据需求</p>
                  <div class="chart1 chart1sIn">
                      <div id="myChart1" style="height:100%;width:100%;"></div>
                  </div>
                  <div class="chart2 chart1sIn">
                      <div id="myChart2" style="height:100%;width:100%;"></div>
                  </div>
                  <div class="chart3 chart1sIn">
                      <div id="myChart3" style="height:100%;width:100%;"></div>
                  </div>
                  <div class="chart4 chart1sIn">
                      <div id="myChart4" style="height:100%;width:100%;"></div>
                  </div>
              </div>
              <div class="chart5">
                    <div id="myChart5" style="height:100%;width:99%;"></div>
              </div>
          </div>
      </div>
      <div class="floor secFloor">
          <div class="ckeckBox">
            <template>
                <span class="ckeckTitle">数源部门：</span>
               <el-radio-group v-model="radio">
						<el-radio v-for="(item,index) in dataOrign" :label="index">{{item}}</el-radio>
					</el-radio-group>
            </template>

          </div>
          <div class="ckeckBox">
            <template>
                <span class="ckeckTitle">需求部门：</span>
                <el-radio-group v-model="radio1">
						<el-radio v-for="(item,index) in need" :label="index">{{item}}</el-radio>
					</el-radio-group>
            </template>
          </div>
      </div>
      <div class="floor thirdFloor">
          <template>
            <el-table
                :data="tableData"
                border
                :header-cell-style="{background:'#DFEFFC'}"
                style="width: 100%;">
                <el-table-column
                type="index"
                label="序号"
                width="75"
                align="center"
                :index="indexMethod">
                </el-table-column>
                <el-table-column
                prop="orignName"
                label="数源部门"
                align="center">
                </el-table-column>
                <el-table-column
                prop="dateName"
                align="center"
                label="数据名称">
                </el-table-column>
                <el-table-column
                prop="paperOrEle"
                align="center"
                label="纸质/电子版">
                </el-table-column>
                <el-table-column
                prop="document"
                align="center"
                label="数据类型">
                </el-table-column>
                <el-table-column
                prop="address"
                align="center"
                label="需求部门">
                </el-table-column>
                <el-table-column
                prop="sharedDemand"
                align="center"
                label="共享需求">
                </el-table-column>
                <el-table-column
                prop="look"
                align="center"
                label="查看">
                <template slot-scope="scope">
                	<router-link to="/index2/six" target="_blank">
                    <el-button
                    type="text"
                    style="color:#52ABFD;">
                    详情
                    </el-button>
                    </router-link>
                </template>
                </el-table-column>
            </el-table>
            </template>
      </div>
      <div class="pages">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="4000">
        </el-pagination>
        <el-button type="primary">咨询建议</el-button>
      </div>
      
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
export default {

  components:{},

  props:{},

  data(){
    return {
        myChart1:null,
        myChart2:null,
        myChart3:null,
        myChart4:null,
        checkList:[],
        checkList2:[],
        need:['鼓楼区','马尾区','马尾区','马尾区','马尾区','马尾区','马尾区','马尾区'],
        dataOrign:['其他区域检察院','公安机关/检察委 ','人民法院','其他机构'],
        tableData: [
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
        ],
        currentPage4: 4,
        radio:0,
        radio1:0

    }
  },

  watch:{},

  computed:{},

  methods:{
      makeChart1(){
        var myChart = echarts.init(document.getElementById("myChart1"));
        myChart.setOption({
            title: [{
                    text: '其他区域检察院',
                    left: 'center',
                    textStyle:{
                        fontWeight:500,
                        fontSize:16
                    }
                },{
                    text: '105项',
                    left:'center',
                    bottom: '0',
                    textStyle:{
                        fontWeight:500,
                        fontSize:16
                    }
                }
            ],
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            
            series : [
                {
                    type: 'pie',
                    radius : '65%',
                    center: ['50%', '50%'],
                    color:['#F9A51A','#EDEDED'],

                    selectedMode: 'single',
                    label:{
                        normal:{
                            show:true,
                            position:'inner',
                            formatter:"{d}%",
                            color:'#fff'
                        }
                    },
                    data:[
                        {
                            value:1548,
                            name: '幽州',
                        },
                        {
                            value:535, 
                            name: '荆州',
                            label: {
                                show: false
                            },
                        },
                    ],
                    itemStyle: {
                        emphasis: {
                            label: {
                                show: false
                            },
                            labelLine:{
                                show:false
                            }
                        }
                    }
                }
            ]
        });
        this.myChart1=myChart;
      },
      makeChart2(){
        var myChart = echarts.init(document.getElementById("myChart2"));
        myChart.setOption({
             title: [{
                    text: '公安机关/检察委',
                    left: 'center',
                    textStyle:{
                        fontWeight:500,
                        fontSize:16
                    }
                },{
                    text: '105项',
                    left:'center',
                    bottom: '0',
                    textStyle:{
                        fontWeight:500,
                        fontSize:16
                    }
                }
            ],
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            
            series : [
                {
                    type: 'pie',
                    radius : '65%',
                    center: ['50%', '50%'],
                    color:['#F9A51A','#EDEDED'],

                    selectedMode: 'single',
                    label:{
                        normal:{
                            show:true,
                            position:'inner',
                            formatter:"{d}%",
                            color:'#fff'
                        }
                    },
                    data:[
                        {
                            value:1548,
                            name: '幽州',
                        },
                        {
                            value:535, 
                            name: '荆州',
                            label: {
                                show: false
                            },
                        },
                    ],
                    itemStyle: {
                        emphasis: {
                            label: {
                                show: false
                            },
                            labelLine:{
                                show:false
                            }
                        }
                    }
                }
            ]
        });
        this.myChart2=myChart;
      },
      makeChart3(){
        var myChart = echarts.init(document.getElementById("myChart3"));
        myChart.setOption({
            title: [{
                    text: '人民法院',
                    left: 'center',
                    textStyle:{
                        fontWeight:500,
                        fontSize:16
                    }
                },{
                    text: '105项',
                    left:'center',
                    bottom: '0',
                    textStyle:{
                        fontWeight:500,
                        fontSize:16
                    }
                }
            ],
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            
            series : [
                {
                    type: 'pie',
                    radius : '65%',
                    center: ['50%', '50%'],
                    color:['#F9A51A','#EDEDED'],

                    selectedMode: 'single',
                    label:{
                        normal:{
                            show:true,
                            position:'inner',
                            formatter:"{d}%",
                            color:'#fff'
                        }
                    },
                    data:[
                        {
                            value:1548,
                            name: '幽州',
                        },
                        {
                            value:535, 
                            name: '荆州',
                            label: {
                                show: false
                            },
                        },
                    ],
                    itemStyle: {
                        emphasis: {
                            label: {
                                show: false
                            },
                            labelLine:{
                                show:false
                            }
                        }
                    }
                }
            ]
        });
        this.myChart3=myChart;
      },
      makeChart4(){
        var myChart = echarts.init(document.getElementById("myChart4"));
        myChart.setOption({
            title: [{
                    text: '其他部门',
                    left: 'center',
                    textStyle:{
                        fontWeight:500,
                        fontSize:16
                    }
                },{
                    text: '105项',
                    left:'center',
                    bottom: '0',
                    textStyle:{
                        fontWeight:500,
                        fontSize:16
                    }
                }
            ],
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            
            series : [
                {
                    type: 'pie',
                    radius : '65%',
                    center: ['50%', '50%'],
                    color:['#F9A51A','#EDEDED'],

                    selectedMode: 'single',
                    label:{
                        normal:{
                            show:true,
                            position:'inner',
                            formatter:"{d}%",
                            color:'#fff'
                        }
                    },
                    data:[
                        {
                            value:1548,
                            name: '幽州',
                        },
                        {
                            value:535, 
                            name: '荆州',
                            label: {
                                show: false
                            },
                        },
                    ],
                    itemStyle: {
                        emphasis: {
                            label: {
                                show: false
                            },
                            labelLine:{
                                show:false
                            }
                        }
                    }
                }
            ]
        });
        this.myChart4=myChart;
      },
      makeChart5(){
        var myChart = echarts.init(document.getElementById("myChart5"));
        myChart.setOption({
            color: ["#B8DDFF"],
            title:{
                text: '数据类别需求',
                left: 'center',
                textStyle:{
                            fontWeight:500,
                            fontSize:22
                        }
            },
            xAxis: {
            type: "category",
            data: [
           			 {value:"表格",
			            textStyle:{
				          	fontSize:16
				          },
			          },
			           {value:"证照",
			            textStyle:{
				          	fontSize:16
				          },
			          },
			           {value:"证明",
			            textStyle:{
				          	fontSize:16
				          },
			          },
			           {value:"文书",
			            textStyle:{
				          	fontSize:16
				          },
			          },
			           {value:"其他",
			            textStyle:{
				          	fontSize:16
				          },
			         },
            ],
            axisLabel :{
                interval:0,
                },
            axisTick: {
                show: false
            }
            },
            yAxis: {
            type: "value",
            data: ["100", "200", "300", "400", "500"],
            axisTick: {
                show: false
            },
            axisLine:{
                show: false
            }
            },
            series: [
            {
                data: [80, 430, 170, 500, 90,],
                type: "bar",
                barWidth: "90%",
                name:"信息资源",
                itemStyle:{
                normal:{
                    color:"#14BFF2"
                }
                }
            },
            ],
            
            grid: {
            top: "18%", //距上边距
            left: "18%", //距离左边距
            right: "18%", //距离右边距
            bottom: "60" //距离下边距
            },
            tooltip: {
            trigger: 'item',
            formatter: "{b}{a}数量 : {c}"
            }
        });
        this.myChart5=myChart;
      },
      indexMethod(index) {
          return index+1
      },
      detail(a, b){
          console.log(a, b)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
      
  },

  created(){},

  mounted(){
      this.makeChart1();
      this.makeChart2();
      this.makeChart3();
      this.makeChart4();
      this.makeChart5();
      var that=this;
        window.onresize=function(){
            that.myChart1.resize();
            that.myChart2.resize();
            that.myChart3.resize();
            that.myChart4.resize();
            that.myChart5.resize();


        }
  }

}
</script>

<style>
.el-pagination.is-background .el-pager li:not(.disabled).active{
    background: #409FFF !important;
}
</style>

<style scoped>
.wrapper-wbsjxq{
    padding:  24px 30px 50px 30px;
    flex: 1 1 auto;
  background: #dee9ee;
}
.floor{
    padding: 30px;
    background: #fff;
    margin-bottom: 10px;
}
.firstFloor h3{
    color:#50A9FD;
    font-size:18px;
    line-height: 18px;
}
.firstFloor .content{
    display: flex;
    position: relative;
}
.chart1s{
    flex: 2;
    height: 440px;
    background: url(../assets/images/wbsjbg_03.png) no-repeat center center;
    background-size: 100% 100%;
}
.chart1s>p{
    position: relative;
    display: inline-block;
    font-size:16px;
}
.chart1s .num{
    color: #4AA7FD;
    font-size: 45px;
}
.part{
    left:20%;
    top:28%;
}
.data{
    left:60%;
    top:28%;
}
.chart5{
    flex: 1;
    position: relative;
}
.chart5::before{
    position: absolute;
    left: 0;
    content:'';
    width: 0;
    border-left:1px solid #DDDDDD;
    height: 80%;
    margin-top: 10%;
}
.chart1sIn{
    position: absolute;
    width: 10%;
    height: 40%;
}
.chart1{
    top: 53%;
    left: 3%;
}
.chart2{
    top: 53%;
    left: 20%;
}
.chart3{
    top: 53%;
    left: 36%;
}
.chart4{
    top: 53%;
    left: 53%;
}
@media screen and (max-width: 1560px) {
    .chart1s .num{
        color: #4AA7FD;
        font-size: 38px;
    }
    .part{
        left:20%;
        top:30%;
    }
    .data{
        left:56%;
        top:30%;
    }
}
@media screen and (max-width: 1400px) {
    .chart1s .num{
        color: #4AA7FD;
        font-size: 28px;
    }
    .part{
        left:20%;
        top:32%;
    }
    .data{
        left:52%;
        top:32%;
    }
}
.checkListBtn{
    margin: 1% 0 0 5%;
    color:#4AA7FD;
}
.ckeckTitle{
    /* display: inline-block; */
    float: left;
    font-size: 16px;
    margin-right: 10px;
}
.el-checkbox{
    margin-left: 5%;
}
.el-checkbox + .el-checkbox{
    margin-left: 5%;
}
.el-checkbox:first-child{
    margin-left: 0%;
}

.el-checkbox-group{
    margin-left: 5%;
}
.ckeckBox:nth-child(1){
    margin-bottom: 1%;
}
.thirdFloor{
    padding: 0;
    border-radius: 0;
}
.pages{
    background: #fff;

}
.el-button{
	width:120px;height:46px;background:#4aa7fd;border-radius:10px;

}
</style>