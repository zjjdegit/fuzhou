<template>
<div class="wrapper-xiangqing">
	<div class="xiangqing_01">
		<el-row type="flex" justify="space-between">
		  	<el-col :span="6"><h3>数据表详情</h3></el-col>
		  	<el-col :span="6">
		  		<el-row type="flex" justify="end">
			  		<el-col :span="5"><a><img src="../assets/xiugai.png" alt="" />修改</a></el-col>
			  		<el-col :span="5"><a><img src="../assets/shoucang.png" alt="" />收藏</a></el-col>
		  		</el-row>
		  	</el-col>
		</el-row>
		<h4>案件分流-待分配案件-个案流程-节点执行信息</h4>
		<ul v-for="(item,index) in ulData">
			<li><span>{{item.span1}}</span>：<span>{{item.span2}}</span></li>
		</ul>
	</div>
	<div class="xiangqing_02">
		<el-table :data="tableData" border style="width: 100%">
 			<el-table-column prop="zd" label="字段名" ></el-table-column>
 			<el-table-column prop="zdzwm" label="字段中文名" ></el-table-column>
 			<el-table-column prop="lx" label="类型" ></el-table-column>
 			<el-table-column prop="cd" label="长度" ></el-table-column>
 			<el-table-column prop="xsw" label="小数位" ></el-table-column>
 			<el-table-column prop="sfzj" label="是否主键" ></el-table-column>
 			<el-table-column prop="sfwk" label="是否为空" ></el-table-column>
 			<el-table-column prop="zmrz" label="默认值" ></el-table-column>		
  		</el-table>
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
		    	ulData:[
		    	{span1:'所属部门',span2:'省委信息'},
		    	{span1:'数据表英文名称',span2:'省委信息'},
		    	{span1:'数据表中文名称',span2:'省委信息'},
		    	{span1:'所属数据库',span2:'省委信息'},
		    	{span1:'数据库类型',span2:'省委信息'},
		    	{span1:'所属信息系统',span2:'省委信息'}, 	
		    	],
		    	tableData: [
		    	{zd:'STS',zdzwm:'部门受暗号',lx:'123456',cd:'0',xsw:'',sfzj:'否',sfwk:'是'},
		    	{zd:'STS',zdzwm:'部门受暗号',lx:'123456',cd:'0',xsw:'',sfzj:'否',sfwk:'是'},
		    	{zd:'STS',zdzwm:'部门受暗号',lx:'123456',cd:'0',xsw:'',sfzj:'否',sfwk:'是'},
		    	{zd:'STS',zdzwm:'部门受暗号',lx:'123456',cd:'0',xsw:'',sfzj:'否',sfwk:'是'},
		    	
       			]
		    }
		},
		  watch:{},
		
		  computed:{},
		
		  methods:{
		  },
		
		  created(){},
		
		  mounted(){

			  }
		}
</script>
<style>
.xiangqing_02 .el-table .cell{
	text-align: center;
}
.xiangqing_02 .el-table th.is-leaf{
	background: #dfeffc;
}
.xiangqing_02 .el-table td , .xiangqing_02 .el-table th.is-leaf{
	border-right:1px solid #aecee4 ;
}
</style>
<style scoped>
.wrapper-xiangqing
{
	flex: 1 1 auto;
	background: #dee9ee;
	padding: 24px 30px 50px 30px;
	font-size: 14px;
	}
.xiangqing_01{
	padding: 30px;
	background: #fff;
}
.xiangqing_01{
	padding: 30px 30px;
}
.xiangqing_01 a{
	color:  #3499db;
	cursor: pointer;
}
.xiangqing_01 a img{
	margin: 0px 10px -5px 0px;
}
.xiangqing_01 h3{
	font-weight: bold;
	font-size: 18px;
	color: #4aa7fd;
}
.xiangqing_01 h4{
	font-size: 16px;
	font-weight: bold;
	margin: 20px 0px;
}
.xiangqing_01 ul li{
	margin-bottom: 10px;
}
.xiangqing_02 {
	margin-top: 10px;
}

</style>