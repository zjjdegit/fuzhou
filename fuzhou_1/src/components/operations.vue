<template>
	<div class="wrapper-operations">
		<div class="operations_one">
			<h4>检务系统运营</h4>
			<el-row>
			  <el-col :span="6"><div id="myChart4" style="height:300px;"></div></el-col>
			  <el-col :span="18"><div id="myChart5" style="height:300px;"></div></el-col>
			</el-row>
		</div>
		<div class="operations_two clearfix">
			<form action="">
				<div class="two_fenlei">
					<span class="bmfl">区域选择：</span>
                  	<el-radio-group v-model="radio">
						<el-radio v-for="item,index) in checklists" :label="index">{{item}}</el-radio>
					</el-radio-group>
				</div>
			</form>
		</div>
		<div class="operations_three">
			<div>
				<ul class="content_ul" v-for='(item,index) in ulData'>
					<li>
						<h3 class="h3_first">{{item.h3}}</h3>
					</li>
					<li class="clearfix">
						<div style="float: left;">
							<p>
								<span>{{item.cs}} </span>
								<span>{{item.name}} </span>
								<span>{{item.tel}}</span>
							</p>
							<p>
								<span>{{item.date}} </span> 
								<span>{{item.stop}}</span>
							</p>
						</div>
						<div style="float: right;" class="button_zu">
							<el-button><img src="../assets/chakan.png" alt="" />查看</el-button>
							<el-button><img src="../assets/xinxiziyuan.png" alt="" />信息资源</el-button>
							<el-button><img src="../assets/kubiao.png"/>库表</el-button>
						</div>
					</li>
				</ul>
				<div class="operations_paging">
					<div class="block">
		    			<el-pagination
					      background
					      :current-page="currentPage"
					      :page-sizes="[10, 20, 30, 40]"
					      :page-size="10"
					      layout="total, sizes, prev, pager, next, jumper"
					      :total="500">
					    </el-pagination>
		  			</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import echarts from "echarts";
	export default {
		
		  components:{

		  },
		
		  props:{},
		
		  data(){
		    return {
		    	
		    	currentPage: 5,
		    	checklists: ["鼓楼区", "灯塔区", "丰台区", "怀柔区", "顺义区","海淀区"],
		    	radio: ['鼓楼区'],
//				h3Data:["福建省人民检察院量刑建议系统","福建省人民检察院量刑建议系统","福建省人民检察院量刑建议系统",],
				ulData:[
				{h3:'福建省人民检察院量刑建议系统',cs:"系统开发厂商：法意科技",name:'厂商联系人：丁宇栋 ',tel:'厂商联系方式：13758248654',date:'厂商联系人：丁宇栋 ',stop:'停止使用时间：无'},
				{h3:'福建省人民检察院量刑建议系统',cs:"系统开发厂商：法意科技",name:'厂商联系人：丁宇栋 ',tel:'厂商联系方式：13758248654',date:'厂商联系人：丁宇栋 ',stop:'停止使用时间：无'},
				{h3:'福建省人民检察院量刑建议系统',cs:"系统开发厂商：法意科技",name:'厂商联系人：丁宇栋 ',tel:'厂商联系方式：13758248654',date:'厂商联系人：丁宇栋 ',stop:'停止使用时间：无'},
				{h3:'福建省人民检察院量刑建议系统',cs:"系统开发厂商：法意科技",name:'厂商联系人：丁宇栋 ',tel:'厂商联系方式：13758248654',date:'厂商联系人：丁宇栋 ',stop:'停止使用时间：无'},
				{h3:'福建省人民检察院量刑建议系统',cs:"系统开发厂商：法意科技",name:'厂商联系人：丁宇栋 ',tel:'厂商联系方式：13758248654',date:'厂商联系人：丁宇栋 ',stop:'停止使用时间：无'},
				{h3:'福建省人民检察院量刑建议系统',cs:"系统开发厂商：法意科技",name:'厂商联系人：丁宇栋 ',tel:'厂商联系方式：13758248654',date:'厂商联系人：丁宇栋 ',stop:'停止使用时间：无'},
				{h3:'福建省人民检察院量刑建议系统',cs:"系统开发厂商：法意科技",name:'厂商联系人：丁宇栋 ',tel:'厂商联系方式：13758248654',date:'厂商联系人：丁宇栋 ',stop:'停止使用时间：无'},
				
				],
//		    	pData2:[{date:'厂商联系人：丁宇栋 ',stop:'停止使用时间：无'},]
		    }
		  },
		
		  watch:{},
		
		  computed:{},
		
		  methods:{
		  	 changeSelect(index){
		      this.ckecked.shift()
		    }
		  },
		
		  created(){},
		
		  mounted(){
		  	var myChart4 = echarts.init(document.getElementById("myChart4"));
		  	var myChart5 = echarts.init(document.getElementById("myChart5"));
			var data = {
		          value: 24.2,
		          text: '496354',
		          color: '#5170A2',
		          title: '运营单位比例'
		      };
    		myChart4.setOption({
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
    			color:['#14bff2','#f9a51a','#bfd730'],
			 	tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)",
			   },
			    series: [
			        {
			            name:'运营单位比例',
			            type:'pie',
			            radius: ['50%', '70%'],
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
			                {value:500, name:'其他'},
			                {value:300, name:'内部单位'}

			            ]
			        }
			    ]
    			});
    			myChart5.setOption({
    			  	color: ['#14bff2','#f9a51a','#bfd730'],				
				    calculable: true,
				    xAxis: [
				        {
				            type: 'category',
				            axisTick: {show: false},
				            data: ['鼓楼区', '鼓楼区', '鼓楼区', '鼓楼区', '鼓楼区'],
				        }
				    ],
				    yAxis: [
				        {
				            type: 'value'
				        }
				    ],
				    series: [
				        {
				            name: '技术公司',
				            type: 'bar',
	             			barWidth : 30, 
				            barGap: 0,
				            data: [5, 18, 8, 14, 6]
				        },
				        {
				            name: '其他',
				            type: 'bar',
				            barWidth : 30, 
				            data: [25, 25, 25, 10, 18]
				        },
				        {
				            name: '内部单位',
				            type: 'bar',
				            barWidth : 30, 
				            data: [15, 8, 21, 15, 15]
				        }
				        ]
	    			});
	
	 			},
    		
		  
		}
</script>
<style scoped>
.wrapper-operations
{
	flex: 1 1 auto;
	background: #dee9ee;
	padding: 24px 30px 50px 30px;
	}
.operations_one	{
	background: #fff;
	padding: 30px;	
}
.operations_one h4{
	font-size: 18px;
	color: #4aa7fd;
}
.operations_two,.operations_three{
	background: #fff;
	padding: 30px;	
	margin-top: 10px;
}
.operations_three h3{
	font-weight: bold;
	font-size: 16px;
	margin: 20px 0px;
}
.operations_three .content_ul li:nth-of-type(n){
	border-bottom: 1px dashed #e0e0e0;
}
.operations_three .content_ul li:nth-of-type(2n){
	padding: 20px 0px;
	border-bottom: 1px solid #e0e0e0;
}
.operations_three span{
	margin-right: 20px;
}
.operations_three .button_zu{
	line-height: 70px;
}

.operations_three p:nth-of-type(1){
	margin-bottom: 20px;
}
.operations_three  .el-button {
	border: 1px solid #4aa7fd;
}
.operations_three  .el-button img{
	margin: 0px 5px -3px 0px;
}
.operations_paging{
	padding: 40px 0px 10px;
	background: #fff;
}
.two_fenlei .bmfl{
	float: left;
	margin-right: 10px;

}
.two_fenlei div{
	float: left;
	line-height: 25px;
}
.button_01{
	height: 60px;
}
.button_01 > span{
	float: left;
	margin-right: 10px;
	line-height: 28px;
}
.button_01  .el-button--primary{
	height: 28px;
	background: #4aa7fd ;
	line-height: 7px;
	border: none;
}
.button_02{
	margin-top: 60px;
	margin-left: 80px;
}
.button_02 span{
	color: #b4d6fe !important;
}
.el-radio-group{
	margin-top: 5px;
}
</style>