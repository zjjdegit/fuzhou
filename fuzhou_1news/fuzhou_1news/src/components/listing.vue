<template>
	<div class="wrapper-listing">
		<div class="form_top clearfix">
			<form action="">
				<div class="search">
					<ul>
						<li class="span_01">按事项名称：</li>
						<li>
							<el-input placeholder="请输入事项名称"  prefix-icon="el-icon-search" v-model="input1">
 					 		</el-input>
						</li>
					</ul>					
				</div>

				<div class="two_fenlei">
					<span class="bmfl">部门分类：</span>
	        <el-radio-group v-model="radio">
						<el-radio v-for="(item,index) in checklists" :label="index">{{item}}</el-radio>
					</el-radio-group>
					</div>
					<!--<div class="button_02">
						<el-button>确定</el-button>
					</div>-->
			</form>
		</div>		
		<div class="listing_tab">
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column type="index" width="50" label='序号'></el-table-column>
			    <el-table-column prop="bmmc" label="部门名称" width="180"></el-table-column>
			    <el-table-column prop="sxmc" label="事项名称"width="180"></el-table-column>
			    <el-table-column prop="sxbm" label="事项编码"></el-table-column>
			    <el-table-column prop="sxlchj" label="事项流程环节"></el-table-column>
			    <el-table-column prop="ywsjcl" label="业务涉及材料"></el-table-column>
			    <el-table-column prop="njbll" label="年均办理量"></el-table-column>
			    <el-table-column prop="ck" label="查看">
			   		<template scope="scope">
				      <router-link to="/index2/six" target="_blank">  <el-button type="text" >详情</el-button></router-link>
				        <span>|</span>
				        <router-link to="/wbsjxq" ><el-button type="text" >数据需求</el-button></router-link>
				    </template>
			    </el-table-column>
			    
  			</el-table>
		</div>
		<div class="listing_paging">
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
		    	input1: '',
		    	tableData:[
		    	{bmmc:'侦查监督科',sxmc:'审查逮捕案件',sxbm:'公诉-00980-001',sxlchj:'部门受案号',ywsjcl:'提请逮捕批准书、立案决定书',njbll:'800'},
		    	{bmmc:'侦查监督科',sxmc:'审查逮捕案件',sxbm:'公诉-00980-001',sxlchj:'部门受案号',ywsjcl:'提请逮捕批准书、立案决定书',njbll:'800'},
		    	{bmmc:'侦查监督科',sxmc:'审查逮捕案件',sxbm:'公诉-00980-001',sxlchj:'部门受案号',ywsjcl:'提请逮捕批准书、立案决定书',njbll:'800'},
		    	{bmmc:'侦查监督科',sxmc:'审查逮捕案件',sxbm:'公诉-00980-001',sxlchj:'部门受案号',ywsjcl:'提请逮捕批准书、立案决定书',njbll:'800'},
		    	{bmmc:'侦查监督科',sxmc:'审查逮捕案件',sxbm:'公诉-00980-001',sxlchj:'部门受案号',ywsjcl:'提请逮捕批准书、立案决定书',njbll:'800'},
		    	{bmmc:'侦查监督科',sxmc:'审查逮捕案件',sxbm:'公诉-00980-001',sxlchj:'部门受案号',ywsjcl:'提请逮捕批准书、立案决定书',njbll:'800'},
		    	{bmmc:'侦查监督科',sxmc:'审查逮捕案件',sxbm:'公诉-00980-001',sxlchj:'部门受案号',ywsjcl:'提请逮捕批准书、立案决定书',njbll:'800'},
		    	{bmmc:'侦查监督科',sxmc:'审查逮捕案件',sxbm:'公诉-00980-001',sxlchj:'部门受案号',ywsjcl:'提请逮捕批准书、立案决定书',njbll:'800'},
		    	{bmmc:'侦查监督科',sxmc:'审查逮捕案件',sxbm:'公诉-00980-001',sxlchj:'部门受案号',ywsjcl:'提请逮捕批准书、立案决定书',njbll:'800'},
		    	{bmmc:'侦查监督科',sxmc:'审查逮捕案件',sxbm:'公诉-00980-001',sxlchj:'部门受案号',ywsjcl:'提请逮捕批准书、立案决定书',njbll:'800'},
		    	
		    	],
		        currentPage: 4,
		        checklists: ["鼓楼区", "灯塔区", "丰台区", "怀柔区", "顺义区","海淀区"],
//		    	ckecked:["鼓楼区"],
				radio:0,
		    	
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
//		  	 handleSizeChange(val) {
//		        console.log(`每页 ${val} 条`);
//		      },
//		      handleCurrentChange(val) {
//		        console.log(`当前页: ${val}`);
//		      }

////		  点击切换页面
			  }
		}
</script>
<style>
.listing_tab .el-table--border{
 	border: #aecee4;
 }
.listing_tab .el-table thead{
	color: #333 !important;
	background: #dfeffc !important;
}

.listing_tab .el-table  th{
	background: #dfeffc !important;
}
.listing_tab .el-table .cell{
	text-align: center;
} 
.listing_tab .el-table_1_column_8 .cell  {
	color: #4aa7fd ;
}
.listing_tab .el-table th > .cell{
	color: #333;
}
.listing_tab .el-button span{
	color: #4aa7fd;
}
</style>
<style scoped>
.wrapper-listing
{
	flex: 1 1 auto;
	background: #dee9ee;
	padding: 24px 30px 50px 30px;
	font-size: 14px;
	}
.form_top{
	background: #fff;
	padding: 30px 20px;
	margin-bottom: 12px;
}

.search {
	height: 60px;
}
.search ul li{
	float: left;
}
.search ul .span_01{
	line-height: 40px;
	font-size: 16px;
}
.search .el-input__inner{
	width: 40%;
	height: 40px;
}
.search ul .el-button .el-button--default{
	height:27px;

}
.search ul .el-icon-download{
	margin-left: 3px;
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
.department ul li{
	float: left;
	margin-right: 80px;
	line-height: 30px;
}
.department ul .el-radio_label{
	padding-left: 10px;
}
.department ul  .span_02{
	margin-right: 10px;
}
.el-radio__input.is-checked + .el-radio__label{
	color: #333 !important;
}
.el-radio__input.is-checked .el-radio__inner{
	background: #42a5ff !important;
	border-color: #42a5ff !important;
}
.two_fenlei .bmfl{
	float: left;
	margin-right: 10px;
	font-size: 16px;

}
.two_fenlei div{
	float: left;
	line-height: 33px;
}
.button_02{
	margin-top: 60px;
	margin-left: 80px;
}
.button_02 span{
	color: #b4d6fe !important;
}
.listing_tab{
	margin-bottom: 12px;
}


.listing_paging{
	background: #fff;
}
.listing_paging .el-pagination{
	font-size: 16px;	
}
.listing_paging .el-select-dropdown__list{
	margin-bottom:15px ;
}
</style>
