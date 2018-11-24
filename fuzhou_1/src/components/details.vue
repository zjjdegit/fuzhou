<template>
	<div class="wrapper-details">
		<div class="top">
			<div class="first">
				<el-row type="flex" >
				  	<el-col :span="18"><h3>案件分流-并案处理</h3></el-col>
				  	<el-col :span="6">
					  		<ul class="lianjie">
					  			<li><a><img src="../assets/renwu.png" alt="" />申请数据</a></li>
					  			<li><a><img src="../assets/xiugai.png" alt="" />修改</a></li>
					  			<li><a><img src="../assets/shoucang.png" alt="" />收藏</a></li>
					  		</ul>
				  	</el-col>
				</el-row>
					<ul>
						<li>信息资源提供方：</li>
						<li>信息资源分类：</li>
						<li>更新：2018-11-15 09:07:28</li>
					</ul>
			</div>	
			
		</div>
		<div class="bottom">		
	      	<el-tabs type="border-card" > 
			  	<el-tab-pane style="font-size: 14px;">
			  	<span slot='label'><i class="el-icon-warning"></i>基本信息</span>
			  	<h4>基本信息</h4>
				<el-row  class="tab">
				  <el-col :span="4">信息资源名称</el-col>
				  <el-col :span="8">案件分流-并案处理</el-col>
				  <el-col :span="4">信息资源代码（系统按规则自动生成）</el-col>
				  <el-col :span="8">306007A06132/000022</el-col>
				</el-row>
				<el-row  class="tab">
				  <el-col :span="4">资源提供方</el-col>
				  <el-col :span="8">最高人民检察院</el-col>
				  <el-col :span="4">资源提供方代码</el-col>
				  <el-col :span="8">11100000000115</el-col>
				</el-row>				
				<el-row  class="tab">
				  <el-col :span="4">信息资源摘要</el-col>
				  <el-col :span="8">并案处理的业务情况</el-col>
				  <el-col :span="4">所属系统名称（根据信息系统填报）</el-col>
				  <el-col :span="8">全国检察机关统一业务应用系统</el-col>
				</el-row>				
				<el-row  class="tab tab_04">
				  <el-col :span="4">信息资源格式</el-col>
				  <el-col :span="4">数据库</el-col>
				  <el-col :span="4" class="td_03">oracle</el-col>
				  <el-col :span="4" class="td_04">信息资源分类</el-col>
				  <el-col :span="4" class="td_05">检察业务案件管理</el-col>
				  <el-col :span="4">高检本级</el-col>
				</el-row>				
				<el-row  class="tab">
				  <el-col :span="4">共享类型</el-col>
				  <el-col :span="8">有条件共享</el-col>
				  <el-col :span="4">共享条件</el-col>
				  <el-col :span="8">用于业务协同</el-col>
				</el-row>				
				<el-row  class="tab tab_06">
				  <el-col :span="4">共享方式</el-col>
				  <el-col :span="4">共享平台</el-col>
				  <el-col :span="4" class="td_03">接口</el-col>
				  <el-col :span="4" class="td_04">是否向全社会开放</el-col>
				  <el-col :span="2" class="td_05">否</el-col>				  
				  <el-col :span="4" class="td_06">开放条件</el-col>
				  <el-col :span="2" class="td_07"></el-col>
				</el-row>				
				<el-row  class="tab">
				  <el-col :span="4">更新周期</el-col>
				  <el-col :span="8">每日</el-col>
				  <el-col :span="4">关联资源代码</el-col>
				  <el-col :span="8">无</el-col>
				</el-row>
			  	<h4>内容描述</h4>
			  		<el-row class="content_biaoqian">
		                <el-col :span="4"  class="content_biaoqian1">
		                    标签
		                </el-col>
		                <el-col :span="20" class="content_biaoqian2">
		                    {{biaoqian}}
		                </el-col>
		           </el-row>
			  		 
			  	<h4>使用情况</h4>
			  	<el-row class="content_biaoqian">
		                <el-col :span="4"  class="content_biaoqian1">
		                    访问量
		                </el-col>
		                <el-col :span="8" class="content_biaoqian2">
		                    
		                </el-col>
		                <el-col :span="4" class="content_biaoqian3">
		                    申请量                  
		                </el-col>
		                <el-col :span="8" class="content_biaoqian4">
		                    
		                </el-col>
		           </el-row>
			  		
			    </el-tab-pane>
			  	<!--基本信息-->
			  	<el-tab-pane >
			  	<span slot='label'><i class="el-icon-message"></i>信息项</span>
					<div style="background: #fff">
		            <el-row class="tab_title">
		                <el-col :span="1">
		                    序号
		                </el-col>
		                <el-col :span="2">
		                   	检查资源名称
		                </el-col>
		                <el-col :span="1">
		                    中文名称
		                </el-col>
		                <el-col :span="1">
		                    英文名称
		                </el-col>
		                <el-col :span="1">
		                    字段描述
		                </el-col>
		                <el-col :span="2">
		                    数据类型（大类）
		                </el-col>
		                <el-col :span="2">
		                    数据类型（细项）
		                </el-col>
		                <el-col :span="1">
		                    数据长度
		                </el-col>
		                <el-col :span="1">
		                    对象类型
		                </el-col>
		                <el-col :span="1">
		                    是否字典项
		                </el-col>
		                <el-col :span="1">
		                    共享类型
		                </el-col>
		                <el-col :span="1">
		                    共享条件
		                </el-col>
		                <el-col :span="2">
		                    共享方式（大类）
		                </el-col>
		                <el-col :span="2">
		                    共享方式（细项）
		                </el-col>
		                <el-col :span="2">
		                    是否向社会开放
		                </el-col>
		                <el-col :span="1">
		                    是否是主键
		                </el-col>
		                <el-col :span="1">
		                    是否向为空
		                </el-col>
		                <el-col :span="1">
		                    是否归集
		                </el-col>
		            </el-row>
		            <el-row class='tab_td' v-for="(item,index) in tableData" :key="index">
		                <section>
		                    <el-col :span="1">
		                        {{item.id}}
		                    </el-col>
		                    <el-col :span="2">
		                        <!--<span :class="off==1?'el-icon-plus':'el-icon-minus'" @click="tab(index)"
		                              v-show="item.str?true:false"></span>-->
		                        {{item.mingcheng}}
		                    </el-col>
		                    <el-col :span="1">
		                        {{item.zhognwen}}
		                    </el-col>
		                    <el-col :span="1">
		                        {{item.yingwen}}
		                    </el-col>
		                    <el-col :span="1">
		                        <!--<span :class="off==1?'el-icon-plus':'el-icon-minus'" @click="tab(index)"
		                              v-show="item.str?true:false"></span>-->
		                        {{item.ziduan}}
		                    </el-col>
		                    <el-col :span="2">
		                        {{item.dalei}}
		                    </el-col>
		                    <el-col :span="2">
		                        {{item.xixiang}}
		                    </el-col>
		                    <el-col :span="1">
		                        {{item.changdu}}
		                    </el-col>
		                    <el-col :span="1">
		                        {{item.leixing}}
		                    </el-col>
		                    <el-col :span="1">
		                        {{item.zidian}}
		                    </el-col>
		                    <el-col :span="1">
		                        {{item.gxlx}}
		                    </el-col>
		                    <el-col :span="1">
		                        {{item.gxtj}}
		                    </el-col>
		                    <el-col :span="2">
		                        {{item.gxfs_dl}}
		                    </el-col>
		                    <el-col :span="2">
		                        {{item.gxfs_xx}}
		                    </el-col>
		                    <el-col :span="2">
		                        {{item.shkf}}
		                    </el-col>
		                    <el-col :span="1">
		                        {{item.zj}}
		                    </el-col>
		                    <el-col :span="1">
		                        {{item.kong}}
		                    </el-col>
		                	<el-col :span="1">
		                        {{item.guiji}}
		                   	</el-col>
		                  	</section>
		            </el-row>
		        </div>
				</el-tab-pane>
				<!--信息项-->
				<el-tab-pane >
			  	<span slot='label'><i class="el-icon-refresh"></i>数据清洗</span>				
					<!--<div class="sjqx">
						<div class="sjqx_left">
				          <div id="myChart10" style="width: 800px; height:450px;"></div>
				        </div>
						<div class="sjqx_right clearfix" >
						  		<h4>信息项重复率</h4>
						  		<div style="float: left;">
						  			<p>信息项目名称</p>
						  			<ul  v-for="(item,index) in liData1">
							  			<li>{{item.title}}</li>
							  		</ul>  
						  		</div>
						  		<div style="float: right;" class="clearfix">
						  			<div style="float: right;">
						  				<p>所在系统</p>
							  			<ul  class="xitong" v-for="(item,index) in liData1">
							  				<li>{{item.xitong}}</li>
							  			</ul>
						  			</div>
						  			<div style="float: left;">
						  				<p>重复次数</p>
							  			<ul  class="xitong" v-for="(item,index) in liData1">
							  				<li>{{item.num}}</li>
							  			</ul>
						  			</div>
						  		
						  		</div>
						 </div>
				 	</div>-->
				 <div class="rateWrap clearfix">
			        <div class="dataRate">
			          <div id="myChart10" style="width:600px;height:450px;"></div>
			        </div>
			        <div class="infoRate">
			          <h4>信息项重复率</h4>
			          <ul class="list">
			            <li v-for='(item,index) in infoList' :key="index">
			              {{item.name}} <span>{{item.belong}}</span><span>{{item.repeatTime}}</span>
			            </li>
			          </ul>
			        </div>
			      </div>
				</el-tab-pane>
				<!--数据清洗-->
			    <el-tab-pane >
			  	<span slot='label'><i class="el-icon-printer"></i>接口服务</span>			    	 
			    	<div class="jiekou">
			    		<ul>
					  		<li><img src="../assets/gongenng.png" alt="" />功能说明</li>
					  		<li>哈尔滨市公积金签约项目信息数据量查询服务</li>
					  	</ul>
					  	<ul>
					  		<li><img src="../assets/erji.png" alt="" />服务调用</li>
					  		<li>上下文地址：</li>
					  		<li>接口版本：1.0</li>
					  	</ul>
					  	<ul>
					  		<li><img src="../assets/canshu.png" alt="" />请求参数</li>
					  		<li>所有参数都需要进行URL编码</li>
					  		<li>通用参数</li>
					  		<li>
					  			<el-table :data="tableData1" border style="width: 100%">
						  			<el-table-column prop="canshu" label="参数名称" ></el-table-column>
									<el-table-column prop="bixu" label="是否必须"></el-table-column>
								    <el-table-column prop="lx" label="类型"></el-table-column>
								    <el-table-column prop="miaoshu" label="描述" style="border-right: 0;"></el-table-column>									    
								</el-table>
					  		</li>
					  		<li>稀有参数</li>
					  		<li>
					  			<el-table :data="tableData2" border style="width: 100%">
						  			<el-table-column prop="canshu" label="参数名称" ></el-table-column>
									<el-table-column prop="bixu" label="是否必须"></el-table-column>
								    <el-table-column prop="lx" label="类型"></el-table-column>
								    <el-table-column prop="miaoshu" label="描述"></el-table-column>	
								</el-table>
					  		</li>
					  	</ul>
					  	<ul>
					  		<li><img src="../assets/fanhui.png" alt="" />返回参数</li>
					  		<li>
					  			<el-table :data="tableData3" border style="width: 100%">
						  			<el-table-column prop="fanhui" label="返回属性名称" ></el-table-column>
								    <el-table-column prop="miaoshu" label="描述"></el-table-column>	
								</el-table>
					  		</li>
					  	</ul>
			    	</div>
			    </el-tab-pane>
			    <!--接口服务-->
			</el-tabs>
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
 		  tableData: [
            {id: 1,mingcheng:'案件分流-并案处理',zhognwen:'部门受案号',yingwen:'BMSAH',ziduan:'序号',dalei:'VARCHAR',xixiang:'字符串',changdu:'100',leixing:'其他类',zidian:'否',gxlx:'有条件',gxtj:'业务协同',gxfs_dl:'共享平台',gxfs_xx:'数据库',shkf:'否',zj:'否',kong:'否',guiji:'否',moren:''},
            {id: 2,mingcheng:'案件分流-并案处理',zhognwen:'部门受案号',yingwen:'BMSAH',ziduan:'序号',dalei:'VARCHAR',xixiang:'字符串',changdu:'100',leixing:'其他类',zidian:'否',gxlx:'有条件',gxtj:'业务协同',gxfs_dl:'共享平台',gxfs_xx:'数据库',shkf:'否',zj:'否',kong:'否',guiji:'否',moren:''},
            {id: 3,mingcheng:'案件分流-并案处理',zhognwen:'部门受案号',yingwen:'BMSAH',ziduan:'序号',dalei:'VARCHAR',xixiang:'字符串',changdu:'100',leixing:'其他类',zidian:'否',gxlx:'有条件',gxtj:'业务协同',gxfs_dl:'共享平台',gxfs_xx:'数据库',shkf:'否',zj:'否',kong:'否',guiji:'否',moren:''},
            {id: 4,mingcheng:'案件分流-并案处理',zhognwen:'部门受案号',yingwen:'BMSAH',ziduan:'序号',dalei:'VARCHAR',xixiang:'字符串',changdu:'100',leixing:'其他类',zidian:'否',gxlx:'有条件',gxtj:'业务协同',gxfs_dl:'共享平台',gxfs_xx:'数据库',shkf:'否',zj:'否',kong:'否',guiji:'否',moren:''},
            {id: 5,mingcheng:'案件分流-并案处理',zhognwen:'部门受案号',yingwen:'BMSAH',ziduan:'序号',dalei:'VARCHAR',xixiang:'字符串',changdu:'100',leixing:'其他类',zidian:'否',gxlx:'有条件',gxtj:'业务协同',gxfs_dl:'共享平台',gxfs_xx:'数据库',shkf:'否',zj:'否',kong:'否',guiji:'否',moren:''},
            {id: 6,mingcheng:'案件分流-并案处理',zhognwen:'部门受案号',yingwen:'BMSAH',ziduan:'序号',dalei:'VARCHAR',xixiang:'字符串',changdu:'100',leixing:'其他类',zidian:'否',gxlx:'有条件',gxtj:'业务协同',gxfs_dl:'共享平台',gxfs_xx:'数据库',shkf:'否',zj:'否',kong:'否',guiji:'否',moren:''},
            {id: 7,mingcheng:'案件分流-并案处理',zhognwen:'部门受案号',yingwen:'BMSAH',ziduan:'序号',dalei:'VARCHAR',xixiang:'字符串',changdu:'100',leixing:'其他类',zidian:'否',gxlx:'有条件',gxtj:'业务协同',gxfs_dl:'共享平台',gxfs_xx:'数据库',shkf:'否',zj:'否',kong:'否',guiji:'否',moren:''},
            {id: 8,mingcheng:'案件分流-并案处理',zhognwen:'部门受案号',yingwen:'BMSAH',ziduan:'序号',dalei:'VARCHAR',xixiang:'字符串',changdu:'100',leixing:'其他类',zidian:'否',gxlx:'有条件',gxtj:'业务协同',gxfs_dl:'共享平台',gxfs_xx:'数据库',shkf:'否',zj:'否',kong:'否',guiji:'否',moren:''},
            {id: 9,mingcheng:'案件分流-并案处理',zhognwen:'部门受案号',yingwen:'BMSAH',ziduan:'序号',dalei:'VARCHAR',xixiang:'字符串',changdu:'100',leixing:'其他类',zidian:'否',gxlx:'有条件',gxtj:'业务协同',gxfs_dl:'共享平台',gxfs_xx:'数据库',shkf:'否',zj:'否',kong:'否',guiji:'否',moren:''},
            {id: 10,mingcheng:'案件分流-并案处理',zhognwen:'部门受案号',yingwen:'BMSAH',ziduan:'序号',dalei:'VARCHAR',xixiang:'字符串',changdu:'100',leixing:'其他类',zidian:'否',gxlx:'有条件',gxtj:'业务协同',gxfs_dl:'共享平台',gxfs_xx:'数据库',shkf:'否',zj:'否',kong:'否',guiji:'否',moren:''},
				
            ],
          tableData1: [{
          	canshu: 'access_token',
           	bixu: '必填 ',
            lx:'字符',
            miaoshu: ' '
          }],
          tableData2: [{
          	canshu: 'access_token',
           	bixu: '必填 ',
            lx:'字符',
            miaoshu: ' '
          }],
           tableData3: [{
          	fanhui: 'COUNT',
            miaoshu: '数据量'
          }],
    	currentRow: null,
    	 infoList:[
        {
          name:'信息项名称',
          repeatTime:'重复次数',
          belong:'所在系统'
        },
        {        
          name:'部门受案号',
          repeatTime:'50',
          belong:'50'
        },
        {
          name:'统一受案号',
          repeatTime:'34',
          belong:'34'
        },
        {
          name:'案件名称',
          repeatTime:'38',
          belong:'38'
        },
        {
          name:'受理日期',
          repeatTime:'46',
          belong:'46'
        },
        {
          name:'移送单位',
          repeatTime:'23',
          belong:'23'
        },
        {
          name:'移送案由',
          repeatTime:'34',
          belong:'34'
        },
        {
          name:'拟分流给部门',
          repeatTime:'67',
          belong:'67'
        },
        {
          name:'手动分流原因',
          repeatTime:'80',
          belong:'80'
        }
      ],
    	biaoqian:'基本信息，电话，机构名称，地址，团体',
	}
  },


  watch:{},

  computed:{},

  methods:{
  	makeChart10(){
      var myChart = echarts.init(document.getElementById("myChart10"));
            
      var myData = ['中文名称', '数据类型', '数据格式', '数据长度', '内部标识符', '值域'];
      var databeast = {
          1: [389, 259, 262, 324, 232, 176],
          2: [111, 315, 139, 375, 204, 352],
          3: [227, 210, 328, 292, 241, 110],
      };
      var databeauty = {
          1: [121, 388, 233, 309, 133, 308],
          2: [200, 350, 300, 250, 200, 150],
          3: [380, 129, 173, 101, 310, 393],
      };
      var timeLineDataName = ['检察机关电子\n卷宗管理系统', '检务公开与服务平台', '互联网门户网站'];
      var timeLineData = [1, 2, 3];
      var option = {
          baseOption: {
              backgroundColor: '#fff',
              timeline: {
                  show: true,
                  axisType: 'category',
                  bottom:20,
                  left:10,
                  right:40,
                  x:'center',
                  symbolSize:20,
                  backgroundColor:'#000',
                  height:60,
                  tooltip: {
                      show: true,
                      formatter: function(params) {
                          return params.name;
                      }
                  },
                  lineStyle:{
                    color:'#f2f2f2'
                  },
                  autoPlay: true,
                  currentIndex: 0,
                  playInterval: 1000,
                  label: {
                      normal: {
                          show: true,
                          color:'#000',
                          interval: 'auto',
                          formatter: '{value}',
                      },
                  },
                  itemStyle:{
                    normal:{
                      color:'#4AA7FD',
                      borderWidth:0,
                    },
                    emphasis:{
                        color:'#4AA7FD'
                    },
                    checkpointStyle:{
                      color:'#4AA7FD',
                      borderColor:'#4AA7FD'
                    },
                  },
                  checkpointStyle:{
                    color:'#4AA7FD',
                    borderColor:'#4AA7FD'
                  },
                  
                  
                  data: [],
              },
              title: {
                      top:14,
                      left:10,
                  textStyle: {
                      color: '#58ADFD',
                      fontSize: 16,
                  },
              },
              legend: {
                  data: ['标准', '不标准'],
                  top: 14,
                  right: '20%',
                  textStyle: {
                      color: '#000',
                  },
              },
              tooltip: {
                  show: true,
                  trigger: 'axis',
                  formatter: '{b}<br/>{a}: {c}',
                  axisPointer: {
                      type: 'shadow',
                  }
              },
              grid: [
                      {
                      show: false,
                      left: '4%',
                      top: 60,
                      bottom: 80,
                      containLabel: true,
                      width: '40%',
                  }, {
                      show: false,
                      left: '50.5%',
                      top: 80,
                      bottom: 80,
                      width: '0%',
                  }, {
                      show: false,
                      right: '4%',
                      top: 60,
                      bottom: 80,
                      containLabel: true,
                      width: '40%',
                  }, 
              ],

              xAxis: [
                  {
                  type: 'value',
                  inverse: true,
                  axisLine: {
                      show: false,
                  },
                  axisTick: {
                      show: false,
                  },
                  position: 'top',
                  axisLabel: {
                      show: true,
                      textStyle: {
                          color: '#B2B2B2',
                          fontSize: 12,
                      },
                  },
                  splitLine: {
                      show: false,
                  },
              }, {
                  gridIndex: 1,
                  show: false,
              }, {
                  gridIndex: 2,
                  type: 'value',
                  axisLine: {
                      show: false,
                  },
                  axisTick: {
                      show: false,
                  },
                  position: 'top',
                  axisLabel: {
                      show: true,
                      textStyle: {
                          color: '#B2B2B2',
                          fontSize: 12,
                      },
                  },
                  splitLine: {
                      show: false,
                  },
              }, ],
              yAxis: [{
                  type: 'category',
                  inverse: true,
                  position: 'right',
                  axisLine: {
                      show: false
                  },
                  axisTick: {
                      show: false
                  },
                  axisLabel: {
                      show: false,
                      margin: 8,
                      textStyle: {
                          color: '#9D9EA0',
                          fontSize: 12,
                      },

                  },
                  data: myData,
              }, {
                  gridIndex: 1,
                  type: 'category',
                  inverse: true,
                  position: 'left',
                  axisLine: {
                      show: false
                  },
                  axisTick: {
                      show: false
                  },
                  axisLabel: {
                      show: true,
                      textStyle: {
                          color: '#9D9EA0',
                          fontSize: 12,
                      },

                  },
                  data: myData.map(function(value) {
                      return {
                          value: value,
                          textStyle: {
                              align: 'center',
                          }
                      }
                  }),
              }, {
                  gridIndex: 2,
                  type: 'category',
                  inverse: true,
                  position: 'left',
                  axisLine: {
                      show: false
                  },
                  axisTick: {
                      show: false
                  },
                  axisLabel: {
                      show: false,
                      textStyle: {
                          color: '#9D9EA0',
                          fontSize: 12,
                      },

                  },
                  data: myData,
              }, ],
              series: [],

          },

          options: [],


      };
      for (var i = 0; i < timeLineData.length; i++) {
          option.baseOption.timeline.data.push(timeLineDataName[i]);
          option.options.push({
              title: {
                  text: '数据元标准率',
              },
              series: [{
                      name: '标准',
                      type: 'bar',
                      barGap: 20,
                      barWidth: 20,
                      label: {
                          normal: {
                              show: false,
                          },
                          emphasis: {
                              show: true,
                              position: 'left',
                              offset: [-20, 0],
                              textStyle: {
                                  color: '#50A9FD',
                                  fontSize: 14,
                              },
                          },
                      },
                      itemStyle: {
                          normal: {
                              color: '#B8DDFF',
                          },
                          emphasis: {
                              color: '#08C7AE',
                          },
                      },
                      data: databeast[timeLineData[i]],
                  },


                  {
                      name: '不标准',
                      type: 'bar',
                      barGap: 20,
                      barWidth: 20,
                      xAxisIndex: 2,
                      yAxisIndex: 2,
                      label: {
                          normal: {
                              show: false,
                          },
                          emphasis: {
                              show: true,
                              position: 'right',
                              offset: [0, 0],
                              textStyle: {
                                  color: '#fff',
                                  fontSize: 14,
                              },
                          },
                      },
                      itemStyle: {
                          normal: {
                              color: '#F78989',
                          },
                          emphasis: {
                              color: '#F94646',
                          },
                      },
                      data: databeauty[timeLineData[i]],
                  }
              ]
          });
          myChart.setOption(option);
         
      };
      this.myChart10=myChart;
    },
  },

  created(){
    },

  mounted(){
	 this.makeChart10();

	}
}
</script>
<style>
.bottom .el-tabs--border-card > .el-tabs__content{
	padding-left: 45px;
}
.el-tabs--border-card{
	background: #3499db;
}
.bottom .el-table th{

}
.bottom .el-table th.is-leaf{
	background: #dfeffc;
	text-align: center;
	border-right:1px solid #aecee4 ;
}
.bottom .el-table td{
	text-align: center;
	border-right:1px solid #aecee4 ;
}
.bottom .el-tabs--border-card > .el-tabs__header{
	background: #3499db !important;
}
.bottom .el-tabs__nav{
	margin-left: 10px;
}
.bottom .el-tabs__nav .is-top{
	height: 60px;
	line-height: 60px;
}
.bottom .el-tabs--border-card > .el-tabs__header .el-tabs__item{
	color: white !important;
}
.bottom.el-tabs--border-card > .el-tabs__header .el-tabs__item:not(.is-disabled):hover{
	color: #7a7a7a !important;
}
.bottom .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active{
	color: #7a7a7a !important;
}
.bottom .el-tabs__nav .is-top span{
	font-size: 18px;
}
.bottom .el-tabs__nav .is-top i{
	margin-right:3px ;
}
/*element ui 标签页修改*/
</style>
<style scoped>
.wrapper-details
{
	flex: 1 1 auto;
	background: #dee9ee;
	padding: 24px 30px 50px 30px;
	}
.top{
	background: white;
	width: 100%;
}

.first{
	padding: 30px 30px;
}
.first a{
	color:  #3499db;
	cursor: pointer;
}
.first a img{
	margin: 0px 8px -5px 0px;
}
.first h3{
	font-weight: bold;
}
.first ul li{
	margin-top: 20px;
}
.first .lianjie {
	float: right;
}
.first .lianjie li{
	float: left;
	margin-left: 20px;
}
.bottom{
	background: white;
	width: 100%;
	margin: 30px auto;
}
.bottom h4{
	margin: 20px 0px;
	color: #3499db;
	font-size:16px ;
}
.tab div{
	height: 60px;
	line-height: 60px;
	text-align: center;
	font-size: 14px;
	background: #f3f3f3;
	border-top: 1px solid #fff;
	border-right: 1px solid #fff;
}
.tab div:nth-child(2n){
	background: #fbfbfb;
	text-align: left;
	padding-left: 110px;
}
.tab .td_03,.tab .td_05,.tab .td_07{
	background: #fbfbfb;
	
}
.tab .td_04 ,.tab .td_06{
	background: #F3F3F3 !important;
	text-align: center !important;
	padding:0px!important;
}

.content_biaoqian .content_biaoqian1{
	height: 60px;
	line-height: 60px;
	text-align: center;
	font-size: 14px;
	border: 1px solid white;
	color: #3499db;
	background: #f3f3f3;

}

.content_biaoqian .content_biaoqian2 , .content_biaoqian4{
	height: 60px;
	line-height: 60px;
	font-size: 14px;
	border: 1px solid white;
	background: #fbfbfb;
	text-align: center;

}
.content_biaoqian .content_biaoqian2 {
	text-align: left;
	padding-left: 105px;
}
.content_biaoqian3{
	height: 60px;
	line-height: 60px;
	text-align: center;
	font-size: 14px;
	border: 1px solid white;
	color: #3499db;
	background: #f3f3f3;
}

.jiekou ul li{
	margin-top: 20px;

}
.jiekou ul li:nth-of-type(1){
	color: #3499db;
}
.jiekou ul li img{
	margin: 0px 5px -3px -18px;
}



.tab_title {
    text-align: center;
    }
.tab_title   div {
    height: 60px;
    line-height: 60px;
    background: #dfeffc;
    color: #333333;
    font-size: 12px;
    border: 1px solid #b7d2e5;
    border-right: 0;
}
.tab_title div:last-child {
    border-right: 1px solid #dfeffc;
}
.tab_td {
    text-align: center;
}
.tab_td  div {
    height: 60px;
    line-height: 60px;
    color: #333333;
    font-size: 12px;
    border: 1px solid #b7d2e5;
    border-right: 0;
    /*border-top: 0;*/
    margin-top: -1px;
}
.tab_td span {
    color: #4aa7fd;
    display: inline-block;
    margin-right: 5px;
    font-weight: 600;
    cursor: pointer;
}
.tab_td div:last-child {
    border-right: 1px solid #b7d2e5;
}

/*表格*/
.rateWrap{
  display: flex;
}
.dataRate,.infoRate{
  flex:1;
  height: 450px;
  /* width: 655px; */
  padding: 20px 30px;
  border-radius: 10px;
  background: #FDFDFD;

}
.dataRate{
  margin-right: 10px;
}
.infoRate h4{
  height: 60px;
  line-height: 60px;
  color:#4EA9FD;
  font-weight:bold;
  margin:0px;
}
.infoRate li{
  height: 40px;
  line-height: 40px;
}
.infoRate .list span{
  text-align: center;
  float: right;
  width: 115px;
}

</style>