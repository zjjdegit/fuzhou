<template>
  <div class="wrapper-area">
  	<div class="box_top_01">
			<el-row>
			    <div class="fourFloor floor">
          <h3>区域数据目录</h3>
          <div class="content">
              <div class="item">
                  <div id="myChart5" style="height:100%;width:100%;"></div>
              </div>
              <div class="item">
                  <div id="myChart6" style="height:100%;width:100%;"></div>
              </div>
              <div class="item">
                  <div id="myChart7" style="height:100%;width:100%;"></div>
              </div>
          </div>
      </div>
			</el-row>
  	</div>
    <div class="box_top">
				  <span class="classify">区域分类：</span>
				   	<el-radio-group v-model="radio2">
                    <el-radio v-for="(item,index) in data2" :label="index"  :key="index">{{item}}</el-radio>
                  </el-radio-group>
     </div>
     <div class="box_bot">
     		<el-container v-for="item in data1" style="margin-top: 30px;background: #fff;">
     			<el-main>
     				<ul>
     					<li class="font">{{item.title}}</li>
     					<li>数据量：<span>{{item.num}}</span> 库表数：<span>{{item.storage}}</span> 接口数：<span>{{item.joggle}}</span></li>
     					<li>共享状态:<span>{{item.share}}</span></li>
     					<li>开放状态：<span>{{item.open}}</span></li>
     					<li>来源部门：<span>{{item.department}}</span></li>
     					<li>所属主题：<span>{{item.theme}}</span></li>
     					<li>发布时间：<span>{{item.publish}}</span></li>
     					<li>更新时间：<span>{{item.update}}</span></li>
     					<li style="float: left;">描述：<span class="ycyc">{{item.describe}}</span></li>
     				</ul>
     			</el-main>
				  <el-aside width="200px">
				  	<ul class="bot_right">
				  		<li><img src="../assets/chakan.png"><a href="javascript:;">查看详情</a></li>
				  		<li><img src="../assets/shenqing.png"><a href="javascript:;">申请接口</a></li>
				  		<li><img src="../assets/kubiao.png"><a href="javascript:;">库表结构</a></li>
				  		<li><img src="../assets/guanlian.png"><a href="javascript:;">关联服务</a></li>
				  	</ul>
				  </el-aside>
				</el-container>
				 <div class="block">
			    <el-pagination
			    	background
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage4"
			      :page-sizes="[100, 200, 300, 400]"
			      :page-size="100"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="400">
			    </el-pagination>
        </div>
     </div>
  </div>
  
</template>

<script>
import $ from "jquery";
import echarts from "echarts";

  export default {

  components:{
   
  },

  props:{},

  data(){
    return {
       currentPage1: 5,
       currentPage2: 5,
       currentPage3: 5,
       currentPage4: 4,
       data1:[{"title":"111","num":"222","storage":"aaa","joggle":12,"share":"123","open":"123","department":"234","theme":"234","publish":"123","update":"123","describe":"2222222222222222222222233111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111133333333333333333333333333332222222"},{"title":"111","num":"222","storage":"aaa","joggle":12,"share":"123","open":"123","department":"234","theme":"234","publish":"123","update":"123","describe":"123"}],
       data2:['全部','第二','第三','第四','第五','第六','第七','第八','第九'],
//     ckecked:['全部'],
			 radio2:0
    }
  },

  watch:{},

  computed:{},

  methods:{
  	 handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
       makeChart5(){
        var myChart = echarts.init(document.getElementById("myChart5"));
        myChart.setOption({
            color: ["#9DDDF9",'#F7898A','#14C1F3'],
            xAxis: {
                type: "category",
                data: [
		          	{
			            value:"信息资源",
			            textStyle:{
				          	fontSize:16
				          },
			          },
			          {
			            value:"信息项",
			            textStyle:{
				          	fontSize:16
				          },
			          },
			          {
			            value:"总数",
			            textStyle:{
				          	fontSize:16
				          },
			          }
		          ],
                axisTick: {
                    show: false
                }
            },
            yAxis: [
                {
                    type: "value",
                    gridIndex: 0,
                    min:0,
                    max:5000,
                    splitNumber:10,
                    data: ["100", "500", "1000", "1500", "2000",'2500','3000','3500','4000','4500','5000'],
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        show: false
                    },
                    axisLabel:{
                        interval:500
                    }
                },
                {
                    type: "value",
                    show:false,
                    name: '材料数量',
                    gridIndex: 0,
                    data: ["100", "500", "1000", "1500", "2000",'2500','3000','3500','4000','4500','5000'],
                    min: 0,
                     max: 100,
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    
                }
            ],
            series: [
                {
                    data: [
                        {
                            value:993,
                            itemStyle:{
                                color:'#B8DDFF'
                            },   
                        },
                        {
                            value:635,
                            itemStyle:{
                                color:'#F7898A'
                            },        
                        },
                        {
                            value:3424,
                            itemStyle:{
                                color:'#85BFFE'
                            },         
                        }
                        ],
                    type: "bar",
                    barWidth: "70%",
                    zlevel: 11,
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    label:{
                        show:true,
                        color:'#000',
                        position:'top'
                    },
                },
                {
                    type: 'bar',
                    barWidth: '70%',
                    xAxisIndex: 0,
                    yAxisIndex: 1,
                    barGap: '-100%',
                    data: [100, 0, 100, ],
                    itemStyle: {
                        normal: {
                            color: 'rgba(238,242,246,0.6)'
                        },
                        emphasis:{

                            color:"rgba(238,242,246,0.6)"
                        }
                    },
                    zlevel: 9
                }
            ],
            title:{
                x:'center',
                y:'0%',
                text:'资源总量',
                textStyle:{
                    fontWeight:200
                }
            },
            legend: {},
            grid: {
                top: "18%", //距上边距
                left: "15%", //距离左边距
                right: "18%", //距离右边距
                bottom: "13%" //距离下边距
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        opacity: 0
                    }
                },
                formatter: "数量 : {c}"
            }
        });
        this.myChart5=myChart;
      },
       makeChart6(){
            var myChart = echarts.init(document.getElementById("myChart6"));
             myChart.setOption({
            color: ["#14C1F3"],
            xAxis: {
                type: "category",
                data: [
		          	{
			            value:"电子文件",
			            textStyle:{
				          	fontSize:16
				          },
			          },
			          {
			            value:"电子表格",
			            textStyle:{
				          	fontSize:16
				          },
			          },
			          {
			            value:"数据库",
			            textStyle:{
				          	fontSize:16
				          },
			          },
			          {
			            value:"图形图像",
			            textStyle:{
				          	fontSize:16
				          },
			          },
			          {
			            value:"自描述格式",
			            textStyle:{
				          	fontSize:16
				          },
			          }
		          ],
                axisTick: {
                    show: false
                }
            },
            label:{
                show:true,
                color:'#000',
                position:'top'
            },
            yAxis: [
                {
                    type: "value",
                    min:0,
                    max:100,
                    splitNumber:10,
                    data: ['0','10','20','30','40','50','60','70','80','90','100'],
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        show: false
                    },
                    axisLabel:{
                        interval:10
                    },
                },
                {
                    type: "value",
                    show:false,
                    gridIndex: 0,
                    data: ['0','10','20','30','40','50','60','70','80','90','100'],
                    min: 0,
                    max: 100,
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                }
            ],
            series: [
                {
                    data: [15,25,35,10,45],
                    type: "bar",
                    barWidth: "90%",
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    zlevel:1
                },
                {
                    data: [100,0,100,0,100],
                    type: "bar",
                    barWidth: "90%",
                    xAxisIndex: 0,
                    yAxisIndex: 1,
                    barGap: '-100%',
                    itemStyle: {
                        normal: {
                            color: 'rgba(238,242,246,0.6)'
                        },
                        emphasis:{

                            color:"rgba(238,242,246,0.6)"
                        }
                    },
                    label:{
											show:false
										},
                }
            ],
            title:{
                x:'center',
                y:'0%',
                text:'资源格式',
                textStyle:{
                    fontWeight:200
                }
            },
            legend: {},
            grid: {
            top: "18%", //距上边距
            left: "15%", //距离左边距
            right: "15%", //距离右边距
            bottom: "13%" //距离下边距
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        opacity: 0
                    }
                },
                formatter: "数量 : {c}"
            }
        });
            this.myChart6=myChart;
      },
       makeChart7(){
            var myChart = echarts.init(document.getElementById("myChart7"));
            myChart.setOption({
            color: ["#F7898A"],
                xAxis: {
                type: "category",
                data: [
		          	{
			            value:"实时",
			            textStyle:{
				          	fontSize:16
				          },
			          },
			          {
			            value:"每日",
			            textStyle:{
				          	fontSize:16
				          },
			          },
			          {
			            value:"每周",
			            textStyle:{
				          	fontSize:16
				          },
			          },
			          {
			            value:"每月",
			            textStyle:{
				          	fontSize:16
				          },
			          },
			          {
			            value:"每年",
			            textStyle:{
				          	fontSize:16
				          },
			          }
		          ],
                axisTick: {
                    show: false
                }
            },
            label:{
                show:true,
                color:'#000',
                position:'top'
            },
            yAxis: [
                {
                    type: "value",
                    min:0,
                    max:100,
                    splitNumber:10,
                    data: ['0','10','20','30','40','50','60','70','80','90','100'],
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        show: false
                    }
                },
                {
                    type: "value",
                    show:false,
                    gridIndex: 0,
                    data: ['0','10','20','30','40','50','60','70','80','90','100'],
                    min: 0,
                    max: 100,
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                }
            ],
            series: [
                {
                    data: [15,25,35,10,45],
                    type: "bar",
                    barWidth: "90%",
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    zlevel:1
                },
                {
                    data: [100,0,100,0,100],
                    type: "bar",
                    barWidth: "90%",
                    xAxisIndex: 0,
                    yAxisIndex: 1,
                    barGap: '-100%',
                    itemStyle: {
                        normal: {
                            color: 'rgba(238,242,246,0.6)'
                        },
                        emphasis:{

                            color:"rgba(238,242,246,0.6)"
                        }
                    },
                    label:{
											show:false
										},
                }
            ],
            title:{
                x:'center',
                y:'0%',
                text:'更新周期',
                textStyle:{
                    fontWeight:200
                }
            },
            legend: {},
            grid: {
            top: "18%", //距上边距
            left: "15%", //距离左边距
            right: "15%", //距离右边距
            bottom: "13%" //距离下边距
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        opacity: 0
                    }
                },
                formatter: "数量 : {c}"
            }
        });
            this.myChart7=myChart;
      },

  },

  created(){},

  mounted(){
  	this.makeChart5();
 		this.makeChart6();
 		this.makeChart7();
  	 var myChart = echarts.init(document.getElementById("myChart1"));
  	 var myChart2 = echarts.init(document.getElementById("myChart2"));
  	 myChart.setOption({
     	
     })
  	
     myChart2.setOption({
     	  color:['#14c1f3'],
        xAxis: {
            type: "category",
            data: [
          	{
	            value:"检察机关电子",
	            textStyle:{
		          	fontSize:16
		          },
	          },
	          {
	            value:"互联网门户网站",
	            textStyle:{
		          	fontSize:16
		          },
	          },
	          {
	            value:"电子印章系统",
	            textStyle:{
		          	fontSize:16
		          },
	          },
	          {
	            value:"远程接访",
	            textStyle:{
		          	fontSize:16
		          },
	          },
	          {
	            value:"电子印章系统",
	            textStyle:{
		          	fontSize:16
		          },
	          },
	          {
	            value:"视频会议",
	            textStyle:{
		          	fontSize:16
		          },
	          },
	          
	          {
	            value:"远程接访",
	            textStyle:{
		          	fontSize:16
		          },
	          },
          ],
            axisTick: {
                "show": false
            }

        },


        yAxis: {
            type: "value",
            data: ["100", "200", "300", "400",'500'],
            axisTick: {
                "show": false
            },
            axisLine:{
              show: false
          }
        },
        series: [
            {
            data: [80, 430, 170, 500, 90, 320, 180],
            type: "bar",
            barWidth: "38"
            }
        ],
        legend:{}
     })
 		
  }

};
</script>

<style>
.el-radio__label{font-size: 16px !important;}
</style>
<style scoped="scoped">
.wrapper-area{flex: 1 1 auto;background: #dee9ee!important;padding: 24px 30px 50px 30px;}
.box_top{width: 100%;background: #fff;position: relative;padding: 20px 0px 20px 20px; }
.box_bot{width: 100%;margin-top: 30px;}
.font{font-family: "微软雅黑";font-size: 16px;font-weight: bold;color: #333333;}
.prompt{margin: 10px;}
.classify{margin-right: 10px; font-size: 16px;}
.btn_yes{display: block;width: 60px;height: 30px;position: absolute;bottom: 10px;left: 10px;border: 1px solid #cdcdcd;text-align: center;line-height: 30px;color: #4AA7FD;}
.el-main ul{line-height: 30px;}
.el-aside ul{width: 180px;height: 300px;border-left: 1px solid #cdcdcd;text-align: center;}
.el-aside ul a{display:block;margin-top: 9px;color: #333333;}
.el-pagination.is-background .el-pager li:not(.disabled).active {background-color: #4AA7FD!important;color: #fff;}
.el-aside img{position: relative;top: 50px;left: -50px;}
.box_top_01{width: 100%;background: #fff;}	
.box_top_01 p{display: inline-block;margin: 10px;}
.box_top{margin-top: 20px;}
.el-aside img{position: relative;top: 31px;left: -50px;}
.el-col{margin-top: 10px;}
.el-checkbox-group{line-height: 22px;}
.block{background: #fff;margin-top: 10px;}
.bot_right li{line-height: 20px;}
.bot_right{padding-top: 20px;margin-top: 5px; margin-bottom: 5px;}
.ycyc{overflow: hidden;text-overflow:ellipsis;white-space: nowrap;width: 800px;display: block;float: right; }
.fourFloor .content{
    display: flex;
}
.fourFloor .item{
    flex:1;
    min-height: 450px;
    position: relative;
}
.fourFloor .item:nth-child(1){
    max-width: 450px;
}
.fourFloor .item:nth-child(1)::before{
    position: absolute;
    right: 0;
    width: 0px;
    content:'';
    border-right:1px solid #DDDDDD;
    height: 60%;
    margin-top:10%;
}
.fourFloor .item:nth-child(2)::before{
    position: absolute;
    right: 0;
    width: 0px;
    content:'';
    border-right:1px solid #DDDDDD;
    height: 60%;
    margin-top:10%;
}
.fourFloor h3{
	font-size: 18px;
	color: #4aa7fd;
	margin-top: 10px;
	margin-left: 20px;
}
</style>