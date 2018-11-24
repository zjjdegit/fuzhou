<template>
	<div class="wrapper-search">
		<div class="search_01 clearfix">
			<form action="" class="clearfix">
				<div class="sousuo" style="float: left;">
					<el-input
					  placeholder="请输入案件"
					  v-model="input10"
					  clearable >
					</el-input>
				</div>
				<el-button type="primary"  style="float: left;"><img src="../assets/sousuo.png"/></el-button>
			</form>	
			<div class="fenlei">
				<span>类别：</span>
				<ul v-for="(item,index) in liData">
					<li @click="color()">{{item.fenlei}}</li>
				</ul>
				<span class="span_01">共找到{{spanData}}个结果</span>
			</div>
		</div>
		<div class="search_02">
			<div class="content clearfix" v-for="(item,index) in divData">
				<div class="content_left" style="float: left;">
					<h4>{{item.biaoti}}</h4>
					<p>{{item.p}}</p>
				</div>
				<div class="content_right"style="float: right;">
					<img src="../assets/chakan.png" alt="" /><span>查看详情</span>
				</div>
			</div>
		</div>
		<div class="search_paging">
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
	import $ from "jquery";
	export default {
		
		  components:{

		  },
		
		  props:{},
		
		  data(){
		    return {
		     input10: '',
		     liData:[
		     {id:'1',fenlei:'全部'},
		     {id:'2',fenlei:'数据目录'},
		     {id:'3',fenlei:'系统目录'},
		     {id:'4',fenlei:'业务资源目录'},     
		     ],
		     spanData:"500",
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
		     currentPage: 6,
		    }
		  },
		
		  watch:{},
		
		  computed:{},
		
		  methods:{
		  	 color(){
		  		this.style.color="yellow"
		  	}
		  },
		
		  created(){},
		  mounted(){}
		 }
</script>

<style scoped>
.wrapper-search
{
	flex: 1 1 auto;
	background: #f5f5f5;
	padding: 24px 30px 50px 30px;
	font-size: 14px;
	}
.search_01{
	background: #fff;
	padding: 20px;
}
.search_01 .sousuo{
	width: 450px;
}
.search_01 .el-input__inner{
	border: 1px solid #4aa7fd;
	border-radius: 0px;
}
.search_01 .el-button--primary{
	border-radius: 0;
	background:#4aa7fd ;
	border: 0;
	height: 40px;
	width: 80px;	
}
.search_01  img{
	margin-top: -3px;
}
.search_01 .fenlei{
	margin-top:10px ;
}

.search_01 .fenlei span,li{
	float: left;
	line-height: 30px;
	margin-right: 20px;
}
.search_01 .fenlei .span_01{
	float: right;
	width: 110px;
}
.search_02 .content{
	margin-top: 10px;
	background: #fff;
	padding: 10px 20px;
}
.search_02 .content_left h4{
	font-size: 16px;
	font-weight: bold;
	margin: 20px 0px 10px;
}
.search_02 .content_right{
	width: 110px;
	padding: 20px 0px 20px 20px;
	line-height: 60px;
	border-left: 1px solid #d9d9d9;

}
.search_02 .content_right span{
	cursor: pointer
}
.search_02 .content_right img{
	margin: 0px 10px -3px 0px;
	cursor: pointer;

}
.search_paging{
	margin-top: 10px;
	padding: 20px;
	background: #fff;
}
.search_paging .el-pagination{
	font-size: 16px;
}
.search_paging .el-select-dropdown__list{
	margin-bottom:15px ;
}
</style>