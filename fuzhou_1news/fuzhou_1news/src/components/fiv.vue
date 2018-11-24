<template>
  <div class="wrapper">
      <el-row>
			  <el-col :span="24"><div class="white">
			  	<ul class="ul_01">
			  		<li>检务保障系统</li>
			      <li>系统所属部门：<span>{{department}}</span></li>
			      <li>单位名称：<span>{{name}}</span></li>
			      <li>系统功能、服务简介：<span>{{introduced}}</span></li>
			  	</ul>
			  	<ul class="ul_03">
			  		<li><img src="../assets/pic3.png"><a href="javascript:;">信息资源</a></li>
			  		<li><img src="../assets/pic1.png"><a href="javascript:;">修改</a></li>
			  		<li><img src="../assets/pic2.png"><a href="javascript:;">收藏</a></li>
			  	</ul>
			  </div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="24"><div class="white">
			  	<p class="title">检务信息系统登记</p>
			  	<ul class="ul_02">
			  		<li><a href="javascript:;" class="el-icon-download">新建</a></li>
			  		<li><a href="javascript:;" class="el-icon-download">填报</a></li>
			  	</ul>
			  	<div class="content">
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">项目立项审批部门</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value1}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">项目立项审批日期</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value2}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">预算项目名称</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value3}}</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">预算涉及的年度起</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value4}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">预算涉及的年度止</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value5}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">是否为僵尸系统</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value6}}</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">系统开始使用日期</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value7}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">系统停止使用日期</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value8}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">系统状态</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value9}}</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">建设资金来源</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value10}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">归口业务处室</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value11}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">处室联系人</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value12}}</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">处室联系方式</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value13}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">系统部署情况</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value14}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">网络环境</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value15}}</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">使用范围-区域</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value16}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">使用范围-用户</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value17}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">系统使用频率（上年度累计访问数）</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value18}}</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">使用频率测算依据</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value19}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">数据产生方式</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value20}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">是否有子系统</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value21}}</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">数据更新频率</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value22}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">数据库格式</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value23}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">对比状态</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value24}}</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">数据规模（G）</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value25}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">数据总量(条)</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value26}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">对比状态</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value27}}</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">数据规模（G）</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value28}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">数据总量(条)</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value29}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">是否目录编制</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value30}}</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">数据增长情况（M）</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value28}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">存量数据年限</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value29}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">状态</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value30}}</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">数据有效期</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value28}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">是否有数据字典</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value29}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">是否上报库表</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value30}}</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">是否在用其他部门数据</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value31}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">系统数据共享范围</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value32}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">系统备注</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value33}}</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">等级保护</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value34}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">系统开发厂商</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value35}}</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">厂商联系方式</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light">{{value36}}</div></el-col>
			</el-row>
			
	</div>
			  </div></el-col>
			</el-row>
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
    	name:'1111111',
    	department:'2222222222',
    	introduced:'33333333333',
    	value1:'',
    	value2:'',
    	value3:'',
    	value4:'',
    	value5:'',
    	value6:'',
    	value7:'',
    	value8:'',
    	value9:'',
    	value10:'',
    	value11:'',
    	value12:'',
    	value13:'',
    	value14:'',
    	value15:'',
    	value16:'',
    	value17:'',
    	value18:'',
    	value19:'',
    	value20:'',
    	value21:'',
    	value22:'',
    	value23:'',
    	value24:'',
    	value25:'',
    	value26:'',
    	value27:'',
    	value28:'',
    	value29:'',
    	value30:'',
    	value31:'',
    	value32:'',
    	value33:'',
    	value34:'',
    	value35:'',
    	value36:'',
    }
  },

  watch:{},

  computed:{},

  methods:{},

  created(){},

  mounted(){}
};
</script>


<style scoped="scoped">
.wrapper{
    height: 100%;
    width: 100%;
    background: lightcyan;
}
.content{margin-top: 60px;padding: 5px;text-align: center;}
.white{background: #fff;padding: 30px;margin-top: 10px;position: relative;}
.ul_01 li:nth-child(1){font-family: "微软雅黑";font-size: 20px;font-weight: bold;}
.ul_01 li{line-height: 40px;font-size: 14px;color: #666666;}
.title{font-family: "微软雅黑";font-size: 18px;color: #4aa7fd;float: left;}
.ul_03{position: absolute;right: 10px;top: 10px;}
.ul_03 li a{color: #4AA7FD;position: relative;left: 2px;top: -2px;}
.ul_03 li{display: inline-block;margin-left: 36px;}
.ul_02{width: 250px;height: 30px;float: right;}
.ul_02 li{display: inline-block;}
.ul_02 li a{display: inline-block;width: 112px;height: 28px;border: 1px solid #4AA7FD;margin-left: 9px;text-align: center;line-height: 28px;color: #000000;}
.el-row {
  margin: 1px;
  }
  .bg-purple-dark {
    background: #f3f3f3;
  }
  .bg-purple {
    background: #d3dce6;
    color: #3499db;
    font-size: 14px;
  }
  .bg-purple-light {
    background: #fbfbfb;
  }
  .grid-content {
    border-radius:0;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>