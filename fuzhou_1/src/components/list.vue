<template>
  <div class="wrapper-list">
  	<div class="box_top_01">
			<el-row>
				<h4>共享开放目录</h4>
			  <el-col :span="6"><div class="white"><p>资源总数</p><div id="myChart1" style="height:300px;"></div></div></el-col>
			  <el-col :span="6"><div class="white"><p>主题分类</p><div id="myChart2" style="height:300px;"></div></div></el-col>
			  <el-col :span="6"><div class="white"><p>资源格式</p><div id="myChart3" style="height:300px;"></div></div></el-col>
			  <el-col :span="6"><div class="white"><p>共享方式</p><div id="myChart4" style="height:300px;"></div></div></el-col>
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
     				<ul >
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
       data1:[{"title":"111","num":"222","storage":"aaa","joggle":12,"share":"123","open":"123","department":"234","theme":"234","publish":"123","update":"123","describe":"123"},{"title":"111","num":"222","storage":"aaa","joggle":12,"share":"123","open":"123","department":"234","theme":"234","publish":"123","update":"123","describe":"123"}],
       data2:['全部','第二','第三','第四','第五','第六','第七','第八','第九'],
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
      }
  },

  created(){},

  mounted(){
  	 var myChart = echarts.init(document.getElementById("myChart1"));
  	 var myChart2 = echarts.init(document.getElementById("myChart2"));
  	 var myChart3 = echarts.init(document.getElementById("myChart3"));
  	 var myChart4 = echarts.init(document.getElementById("myChart4"));
     myChart.setOption({
     	  color: ["#eb395a","#8b6ea8","#c1db2b","#f9a51a","#14c1f3"],
        title: {
        sublink: 'http://e.weibo.com/1341556070/AjQH99che'
    },

    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[0];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data : ['不予共享','无条件共享','有条件共享','社会开放','总计']
    },
    yAxis: {
        type : 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack:  '总量',
            itemStyle: {
                normal: {
                    barBorderColor: ['rgba(0,0,0,0)'],
                    color: ['rgba(0,0,0,0)']
                },
                emphasis: {
                    barBorderColor: ['rgba(0,0,0,0)'],
                    color: ['rgba(0,0,0,0)']
                }
            },
            data: [0, 1700, 1400, 1200, 300]
        },
        {
            name: '生活费',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[2900, 1200, 300, 200, 900]
        }
    ]
    });
    myChart2.setOption({
    	legend: {
                  data: ['公共代码', '侦查监督','公诉','反贪污贿赂'],
                  bottom: 14,
                  right: '0',
                  textStyle: {
                      color: '#000',}
                  },
       title: {
                        "text": '',
                        subtext:'',
                        itemGap:3,
                        "x": '49%',
                        "y": '62%',
                        textAlign: "center",
                        "textStyle": {
                            "fontWeight": 'normal',
                            "fontSize": 12,
                            color:'#aaaaaa',

                        },
                        "subtextStyle": {
                            "fontWeight": 'normal',
                            "fontSize": 12,
                            color:'#aaaaaa',
                            lineHeight:14
                        },

                    },

                    tooltip: {
                        trigger: 'item',
                           formatter:function(a){
                            console.log(a)
                            return (
                                    a['data']['name']+":"+a['data']['value']+"("+a['percent']*2+"%)"
                            )
                        },
                        position: ['10%', '20%']
                    },
                  /*  legend: {

                        x: 'left',
                        data:['视频','影院','直播']
                    },*/
                    "color": ["#eb395a","#99c40f","#f56b09","#0799eb","transparent"],
                    "startAngle": 180,
                    series: [
                        {
                            name:'',
                            type:'pie',
                            radius: ['55%', '95%'],
                            avoidLabelOverlap: false,
                            startAngle: 180,
                            center:["50%","70%"],
                            //stillShowZeroSum:0,
                            label: {
						
                                normal: {
                                    position: 'inner',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 12
                                    }
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '12',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[{value:335, name:'公共代码'},{value:310, name:'侦查监督'},{value:234, name:'公诉'},{value:100, name:'反贪污贿赂'},{value:979, name:'',tooltip:{formatter:function(a){return ""}}}]
                        },

                    ]
    });
    myChart3.setOption({
       color:['#14c1f3'],
        xAxis: {
            type: "category",
            data: [
            "电子文件",
            "电子表格",
            "数据库",
            "图形图像"
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
            }
        },
        series: [
            {
            data: [80, 430, 170, 500],
            type: "bar",
            barWidth: "18"
            }
        ],
        legend:{}
    });
    var data = {
          value: 24.2,
          text: '496354',
          color: '#5170A2',
          title: ''
      };
    	myChart4.setOption({
    	legend: {
                  data: ['内部单位', '技术公司',],
                  bottom: 14,
                  right: '20%',
                  textStyle: {
                      color: '#000',}
                  },
    	title: {
            x: 'center',
            y: '45%',
            textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#687284'
            },
            text: data.title || ''
           },
    	color:['#14c1f3','#f78989'],
 	tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
   },
    series: [
        {
            name:'运营单位比例',
            type:'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    rich:{
                    	per:{
                    	color:"yellow"
                    	}
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[	            	            	
                {value:500, name:'技术公司'},
                {value:300, name:'内部单位'}

            ]
        }
    ]
    	});
  }
};
</script>


<style scoped="scoped">
.wrapper-list{flex: 1 1 auto;background: #dee9ee!important;padding: 24px 30px 50px 30px;}
.box_top{width: 100%;background: #fff;position: relative;padding: 20px 0 20px 0;}
.box_bot{width: 100%;margin-top: 30px;}
.font{font-family: "微软雅黑";font-size: 16px;font-weight: bold;color: #333333;}
.prompt{margin: 10px;}
.classify{margin-right: 10px; font-size:16px ;}
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
.el-row{padding-bottom: 10px;}
.el-checkbox-group{line-height: 22px;}
.block{background: #fff;margin-top: 10px;}
.white{width:90%;;background: #fff;border-top: 5px solid 4aa7fd;border-radius: 5px;margin: auto;box-shadow: 0px 0px 10px #888888;border-top: 5px solid #4AA7FD;}
.white p{width: 100%;height: 40px;text-align: center;line-height: 40px;border-bottom: 1px solid #cdcdcd;}
.box_top{
	padding: 20px;
}
.box_top_01 h4{
	font-size: 18px;
	color: #4aa7fd;
	margin-top: 10px;
	margin-left: 20px;
}
.ycyc{overflow: hidden;text-overflow:ellipsis;white-space: nowrap;width: 800px;display: block;float: right; }
.bot_right li{line-height: 20px;}
.bot_right{padding-top: 20px;margin-top: 5px; margin-bottom: 5px;}
</style>