<template>
  <div class="wrapper">
      <div class="container">  
      	<img src="../../assets/banner.png">
          	 <el-collapse v-model="activeNames" @change="handleChange" v-for="(item,index) in arr">
			  <el-collapse-item :title="item.question" :name="item.index">
			    <div class="prompt"><span>答：</span>{{item.answer}}</div>
			  </el-collapse-item>
			</el-collapse>
			<div class="block clearfix">
				<div class="word">咨询更多信息，敬请联系目录编制工作组，邮箱：xulan@ spp.gov.cn</div>
			    <el-pagination
			    	background
			      :current-page="currentPage4"
			      :page-sizes="[100, 200, 300, 400]"
			      :page-size="100"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="400"
			      style="float: left;">
			    </el-pagination>
			    <!--<el-button type="primary">咨询建议</el-button>-->
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
    	currentPage1: 5,
	    currentPage2: 5,
	    currentPage3: 5,
	    currentPage4: 4,
    	activeNames: ['1'],
    	arr:[{"question":"问：如何编制数据目录","answer":"不知道"},{"question":"问：如何编制数据目录","answer":"不知道"},{"question":"问：如何编制数据目录","answer":"不知道"},{"question":"问：如何编制数据目录","answer":"不知道"},{"question":"问：如何编制数据目录","answer":"不知道"},{"question":"问：如何编制数据目录","answer":"不知道"},{"question":"问：如何编制数据目录","answer":"不知道"}]
    }
  },

  watch:{},

  computed:{
  },

  methods:{
  	 handleChange(val) {
        console.log(val);
      }
  	 
  },

  created(){},

  mounted(){}

}
</script>
<style>	
.el-collapse-item__header{
	padding-left: 30px;
	font-weight: 700!important;
}
</style>
<style scoped>
img{width: 100%;}
.wrapper{flex: 1 1 auto;background: #dee9ee!important;}
.container{padding: 24px 30px 50px 30px;}
.el-collapse{margin-top: 10px;}
.block{background: #fff;margin-top: 10px;}
.word{font-size: 14px;font-family: "微软雅黑";margin-left: 20px;padding-top: 20px;}
.word span{font-size: 18px;}
.prompt{font-size: 14px;font-family: "微软雅黑";padding:0 0 10px 4px;margin-left: 20px;height:18px;line-height: 48px;}
.title{font-weight: bold;font-family: "微软雅黑";font-size: 18px;color: #333333;}
.el-pager li:not(.disabled).active {
  background-color: #4AA7FD!important;
  color: #fff;
}
.el-button{
	width:120px;height:46px;background:#4aa7fd;border: none;float: right;margin-right: 20px;
}
</style>