<template>
  <div class="wrapper-theme">
  	<div class="box_top_01">   
  			<h4>主题数据目录</h4>
        <div id="myChart" style="height:500px;"></div>
		</div>
    <div class="box_top">
     	  <ul>
     	  	<li><span class="classify">区域选择：</span>
     	  		<el-radio-group v-model="radio1">
                    <el-radio v-for="(item,index) in data2" :label="index"  :key="index">{{item}}</el-radio>
            </el-radio-group>
     	  	</li>
     	  	<li style="margin-top: 10px;"><span class="classify">主题选择：</span>
     	  		<el-radio-group v-model="radio2">
                    <el-radio v-for="(item,index) in data3" :label="index"  :key="index">{{item}}</el-radio>
            </el-radio-group>
     	  	</li>
     	  </ul>
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
				  	<li><img src="../assets/chakan.png"><router-link to="/index2/details" target="_blank">查看详情</router-link></li>
				  		<li><img src="../assets/shenqing.png"><router-link to="/index2/details" target="_blank">数据清洗</router-link></li>
				  		<li><img src="../assets/kubiao.png"><router-link to="/index2/details" target="_blank">接口服务</router-link></li>
				  		<li><img src="../assets/guanlian.png"><router-link to="/index2/xiangqing" target="_blank">库表结构</router-link></li>
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
       data1:[{"title":"[鼓楼区]案件分流-待分配案件-个案流程-节点执行信息","num":"60","storage":"8","joggle":2,"share":"123","open":"123","department":"234","theme":"234","publish":"123","update":"123","describe":"121111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111113"},{"title":"111","num":"222","storage":"aaa","joggle":12,"share":"123","open":"123","department":"234","theme":"234","publish":"123","update":"123","describe":"123"}],
       data2:['全部','1','2','3','4','5','6','7','8'],
       data3:['全部','11','22','33','44','55','66','77','88'],
       radio1:0,
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
  	var myChart = echarts.init(document.getElementById("myChart"));
		var xData = function() {
	    var data = [];
	    for (var i =1; i < 15; i++) {
	        data.push(i + "");
	    }
	    return data;
	}();
myChart.setOption(
	{
    backgroundColor: "#fff",
//  "title": {
//      "text": "主题数据目录",
//      x: "1%",
//
//      textStyle: {
//          color: '#5badfd',
//          fontSize: '20'
//      },
//      subtextStyle: {
//          color: '#90979c',
//          fontSize: '16',
//
//      },
//  },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff",
                fontSize:16
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '4%',
        top: '7%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['信息项', '信息资源', '总']
    },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#fff"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    "series": [{
            "name": "信息项",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(20,193,243,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                198.66,
                330.81,
                151.95,
                160.12,
                222.56,
                229.05,
                128.53,
                250.91,
                224.47,
                473.99,
                126.85,
                260.50
            ],
       },
        {
            "name": "信息资源",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(253,167,15,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                82.89,
                67.54,
                62.07,
                59.43,
                67.02,
                67.09,
                35.66,
                71.78,
                81.61,
                78.85,
                79.12,
                72.30
            ]
        }, 
        {
            "name": "总计",
            "type": "line",
            "stack": "总量",
            symbolSize:20,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(247,137,138,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                281.55,
                398.35,
                214.02,
                219.55,
                289.57,
                296.14,
                164.18,
                322.69,
                306.08,
                552.84,
                205.97,
                332.79
            ]
        },
    ]
})
    
  }
};
</script>


<style scoped="scoped">
.wrapper-theme{flex: 1 1 auto;background: #dee9ee!important;padding: 24px 30px 50px 30px;}
.box_top{background: #fff;position: relative;padding: 20px;}
.box_bot{width: 100%;margin-top: 30px;}
.font{font-family: "微软雅黑";font-size: 16px;font-weight: bold;color: #333333;}
.prompt{margin: 10px;}
.classify{margin-right: 10px;font-size: 16px;}
.btn_yes{display: block;width: 60px;height: 30px;position: absolute;bottom: 10px;left: 10px;border: 1px solid #cdcdcd;text-align: center;line-height: 30px;color: #4AA7FD;}
.el-main ul{line-height: 30px;}
.el-aside ul{width: 180px;height: 300px;border-left: 1px solid #cdcdcd;text-align: center;}
.el-aside ul a{display:block;margin-top: 9px;color: #333333;}
.el-pagination.is-background .el-pager li:not(.disabled).active {background-color: #4AA7FD!important;color: #fff;}
.el-aside img{position: relative;top: 50px;left: -50px;}
.box_top_01{background: #fff;}	
.box_top_01 p{display: inline-block;margin: 10px;}
.box_top{margin-top: 20px;}
.el-aside img{position: relative;top: 31px;left: -50px;}
.el-col{margin-top: 10px;}
.el-checkbox-group{line-height: 22px;}
.block{background: #fff;margin-top: 10px;}
.bot_right li{line-height: 20px;}
.bot_right{padding-top: 20px;margin-top: 5px; margin-bottom: 5px;}
.ycyc{overflow: hidden;text-overflow:ellipsis;white-space: nowrap;width: 800px;display: block;float: right; }
.box_top_01{padding: 20px;}
.box_top_01 h4{
	font-size: 18px;
	color: #4aa7fd;
	margin-top: 10px;
}
</style>