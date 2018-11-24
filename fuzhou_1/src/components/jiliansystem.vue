<template>
<div class="wrapper-jilian">
	<div class="jilian_01">
	 	<el-tabs v-model="jilian_01" type="card" @tab-click="handleClickxxzyPage">
        	<el-tab-pane label="上行数据表" name="first">
                <div class="search clearfix">
					<h3 style="float: left;">
					存储鼓楼区检察院上行数据，供使用方使用
					</h3>
					<div style="float: right;">
						<el-button>批量导出<i class="el-icon-download"></i></el-button>
					</div>					
				</div>
				<div class="button_01">
					<span>提示：可同时选择多项</span><el-button type="primary">系统默认指标</el-button>
				</div>
				<div class="two_fenlei">
					<span class="bmfl">部门分类：</span>
						<el-radio-group v-model="radio">
						<el-radio v-for="item,index) in checklists" :label="index">{{item}}</el-radio>
					</el-radio-group>
					</div>
					<div class="button_02">
						<el-button>确定</el-button>
				</div>
        	</el-tab-pane>
        	<el-tab-pane label="下行数据表" name="second">
                <div class="search clearfix">
					<h3 style="float: left;">
					存储福州市检察院下行数据，供本级共享平台使用
					</h3>
					<div style="float: right;">
						<el-button>批量导出<i class="el-icon-download"></i></el-button>
					</div>					
				</div>
				<div class="button_01">
					<span>提示：可同时选择多项</span><el-button type="primary">系统默认指标</el-button>
				</div>
				<div class="two_fenlei">
					<span class="bmfl">部门分类：</span>
						<el-radio-group v-model="radio">
						<el-radio v-for="item,index) in checklists" :label="index">{{item}}</el-radio>
					</el-radio-group>
					</div>
					<div class="button_02">
						<el-button>确定</el-button>
				</div>
        	</el-tab-pane>
        	<el-tab-pane label="文件系统" name="third">
          		<div class="search clearfix">
					<h3 style="float: left;">
					存储上报和下发的资源
					</h3>
					<div style="float: right;">
						<el-button>批量导出<i class="el-icon-download"></i></el-button>
					</div>					
				</div>
				<div class="button_01">
					<span>提示：可同时选择多项</span><el-button type="primary">系统默认指标</el-button>
				</div>
				<div class="two_fenlei">
					<span class="bmfl">部门分类：</span>
						<el-radio-group v-model="radio">
						<el-radio v-for="item,index) in checklists" :label="index">{{item}}</el-radio>
					</el-radio-group>
					</div>
					<div class="button_02">
						<el-button>确定</el-button>
				</div>
        	</el-tab-pane>
      	</el-tabs>

	</div>
	<div class="jilian_02">
		<div class="content clearfix" v-for="(item,index) in divData">
			<div class="content_left" style="float: left;">
				<h4>{{item.biaoti}}</h4>
				<p>{{item.p}}</p>
			</div>
			<div class="content_right"style="float: right;">
				<img src="../assets/xiazai.png" alt="" /><span>文件下载</span>
			</div>
		</div>
	</div>
	<div class="jilian_03">
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
</template>

<script>
	export default {
		
		  components:{

		  },
		
		  props:{},
		
		  data(){
		    return {
		    	jilian_01:'first',
		    	checklists: ["鼓楼区", "灯塔区", "丰台区", "怀柔区", "顺义区","海淀区"],
		    	radio:["鼓楼区"],
		    	divData:[
				     {biaoti:'审判监督程序抗诉',p:'上级院出涵、指导办案件'},
				     {biaoti:'审判监督程序抗诉',p:'上级院出涵、指导办案件'},
				     {biaoti:'审判监督程序抗诉',p:'上级院出涵、指导办案件'},
				     {biaoti:'审判监督程序抗诉',p:'上级院出涵、指导办案件'},
				     {biaoti:'审判监督程序抗诉',p:'上级院出涵、指导办案件'},
				     {biaoti:'审判监督程序抗诉',p:'上级院出涵、指导办案件'},
				     {biaoti:'审判监督程序抗诉',p:'上级院出涵、指导办案件'},
				     {biaoti:'审判监督程序抗诉',p:'上级院出涵、指导办案件'},
				     
				],
		    }
		  },
		
		  watch:{},
		
		  computed:{},
		
		  methods:{

		  },
		
		  created(){},
		  mounted(){}
		 }
</script>
<style>
 .jilian_01 .el-tabs__item.is-top{
   background-color: #F4F4F4 !important;
   border-top:2px solid #F4F4F4;
   border-bottom:1px solid #D7D7D7  !important;
}
.jilian_01 .el-tabs__item.is-active {
   background-color: #fff !important;
  border-top:2px solid #4AA7FD ;
  border-bottom:1px solid transparent  !important;
}
</style>
<style scoped>
.wrapper-jilian
{
	flex: 1 1 auto;
	background: #f5f5f5;
	padding: 24px 30px 50px 30px;
	font-size: 14px;
	}
.jilian_01{
	background: #fff;
	border-radius:10px;
	padding-bottom: 30px;
}
.jilian_01 .search{
	padding: 20px;
}
.jilian_01 h3{
	font-weight: bold;
	font-size: 18px;
	color: #4aa7fd;
}
.button_01{
	padding: 20px;
	padding-top: 0px;
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
.two_fenlei{
	padding: 10px 20px;
}
.two_fenlei .bmfl{
	float: left;
	margin-right: 10px;

}
.two_fenlei div{
	float: left;
	line-height: 33px;
}
.button_02{
	margin-top:30px;
	margin-left: 90px;
}
.button_02 .el-button .el-button--default span{
	color: #85bffe !important;
}

.jilian_02 .content{
	margin-top: 10px;
	background: #fff;
	padding: 10px 20px;
}
.jilian_02 .content_left h4{
	font-size: 16px;
	font-weight: bold;
	margin: 20px 0px 10px;
}
.jilian_02 .content_right{
	width: 110px;
	padding: 20px 0px 20px 20px;
	line-height: 60px;
	border-left: 1px solid #d9d9d9;

}
.jilian_02 .content_right span{
	cursor: pointer
}
.jilian_02 .content_right img{
	margin: 0px 10px -3px 0px;
	cursor: pointer;

}
.jilian_03{
	margin-top: 10px;
	padding: 20px;
	background: #fff;
}
.jilian_03 .el-pagination{
	font-size: 16px;
}
.jilian_03 .el-select-dropdown__list{
	margin-bottom:15px ;
}
</style>