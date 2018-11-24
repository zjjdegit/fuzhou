<template>
  <div class="wrapper">
      <Header/>
      <div class="container">
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
			       <table border="1" cellspacing="0" cellpadding="0" style="text-align: center;border-color: #aecee4;">
			       	<tr><th style="width: 40px;">序号</th><th>事项流程环节</th><th style="width: 140px;">办理方式</th><th style="width: 100px;">年均办理量</th><th style="width: 150px;">业务涉及材料</th><th style="width: 100px;">材料类别</th><th style="width: 100px;">纸质/电子版</th><th style="width: 140px;">数源部门</th><th style="width: 220px;">所用系统名称</th></tr>
			       	<tr><td>1</td><td rowspan="6">鼓楼区公安、交警、监察委、5区8县提交卷宗、起诉意见书、换押证</td><td>纸质移交，系统扫描</td><td rowspan="6">1100</td><td>诉讼文书卷-立案决定书</td><td>文书</td><td>电子</td><td>福州市公安局鼓楼分局</td><td>全国检察机关统一业务应用系统</td></tr>
			       	<tr><td>2</td><td>纸质移交，系统扫描</td><td>诉讼文书卷-立案决定书</td><td>文书</td><td>电子</td><td>福州市公安局鼓楼分局</td><td>全国检察机关统一业务应用系统</td></tr>
			       	<tr><td>3</td><td>纸质移交，系统扫描</td><td>诉讼文书卷-立案决定书</td><td>文书</td><td>电子</td><td>福州市公安局鼓楼分局</td><td>全国检察机关统一业务应用系统</td></tr>
			       	<tr><td>4</td><td>纸质移交，系统扫描</td><td>诉讼文书卷-立案决定书</td><td>文书</td><td>电子</td><td>福州市公安局鼓楼分局</td><td>全国检察机关统一业务应用系统</td></tr>
			       	<tr><td>5</td><td>纸质移交，系统扫描</td><td>诉讼文书卷-立案决定书</td><td>文书</td><td>电子</td><td>福州市公安局鼓楼分局</td><td>全国检察机关统一业务应用系统</td></tr>
			       	<tr><td>6</td><td>纸质移交，系统扫描</td><td>诉讼文书卷-立案决定书</td><td>文书</td><td>电子</td><td>福州市公安局鼓楼分局</td><td>全国检察机关统一业务应用系统</td></tr>
			       	<tr><td>7</td><td rowspan="6">鼓楼区公安、交警、监察委、5区8县提交卷宗、起诉意见书、换押证</td><td>纸质移交，系统扫描</td><td rowspan="6">1100</td><td>诉讼文书卷-立案决定书</td><td>文书</td><td>电子</td><td>福州市公安局鼓楼分局</td><td>全国检察机关统一业务应用系统</td></tr>
			       	<tr><td>8</td><td>纸质移交，系统扫描</td><td>诉讼文书卷-立案决定书</td><td>文书</td><td>电子</td><td>福州市公安局鼓楼分局</td><td>全国检察机关统一业务应用系统</td></tr>
			       	<tr><td>9</td><td>纸质移交，系统扫描</td><td>诉讼文书卷-立案决定书</td><td>文书</td><td>电子</td><td>福州市公安局鼓楼分局</td><td>全国检察机关统一业务应用系统</td></tr>
			       	<tr><td>10</td><td>纸质移交，系统扫描</td><td>诉讼文书卷-立案决定书</td><td>文书</td><td>电子</td><td>福州市公安局鼓楼分局</td><td>全国检察机关统一业务应用系统</td></tr>
			       	<tr><td>11</td><td>纸质移交，系统扫描</td><td>诉讼文书卷-立案决定书</td><td>文书</td><td>电子</td><td>福州市公安局鼓楼分局</td><td>全国检察机关统一业务应用系统</td></tr>
			       	<tr><td>12</td><td>纸质移交，系统扫描</td><td>诉讼文书卷-立案决定书</td><td>文书</td><td>电子</td><td>福州市公安局鼓楼分局</td><td>全国检察机关统一业务应用系统</td></tr>
			   </table>
			  </div></el-col>
			</el-row>
      </div>
  </div>
</template>

<script>
import Header from './header'
export default {

  components:{
      Header,
  },

  props:{},

  data(){
    return {
    	name:'1111111',
    	department:'2222222222',
    	introduced:'33333333333'
    }
  },

  watch:{},

  computed:{},

  methods:{},

  created(){},

  mounted(){}

}
</script>

<style scoped>
.wrapper{flex: 1 1 auto;background: #dee9ee!important; margin-top: 140px;}
.container{padding: 24px 30px 50px 30px;}
.white{background: #fff;padding: 30px;margin-top: 10px;position: relative;}
th{background: #dfeffc;font-size: 14px;font-family: "微软雅黑";color: #333333;}
.ul_01 li:nth-child(1){font-family: "微软雅黑";font-size: 20px;font-weight: bold;}
.ul_01 li{line-height: 40px;font-size: 14px;color: #666666;}
.title{font-family: "微软雅黑";font-size: 18px;color: #4aa7fd;float: left;}
.ul_03{position: absolute;right: 30px;top: 30px;}
.ul_03 li a{color: #4AA7FD;position: relative;left: 2px;top: -2px;}
.ul_03 li{display: inline-block;margin-left: 36px;}
.ul_02{width: 250px;height: 30px;float: right;}
.ul_02 li{display: inline-block;}
.ul_02 li a{display: inline-block;width: 112px;height: 28px;border: 1px solid #4AA7FD;margin-left: 9px;text-align: center;line-height: 28px;color: #000000;}
th,td{border: 1px solid #aecee4;vertical-align: middle;}
th{height: 60px;}
td{font-size: 14px;font-family: "微软雅黑";color: #333333;height: 60px;}
</style>