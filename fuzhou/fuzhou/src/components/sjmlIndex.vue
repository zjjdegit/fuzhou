<template>
  <div class="wrapper-index">
        <div class="marqueeWrap">
          <div class="marqurrBox">
            <ul class="marquee">
                <li><a href="#">福州市鼓楼区检察院发布2018年12月15日9时08分导入一条目录1                          <span>        2018-12-15</span></a></li>
                <li><a href="#">福州市鼓楼区检察院发布2018年12月15日9时08分导入一条目录2                         <span>        2018-12-15</span></a></li>
                <li><a href="#">福州市鼓楼区检察院发布2018年12月15日9时08分导入一条目录3                         <span>        2018-12-15</span></a></li>
                <li><a href="#">福州市鼓楼区检察院发布2018年12月15日9时08分导入一条目录4                          <span>        2018-12-15</span></a></li>
                <li><a href="#">福州市鼓楼区检察院发布2018年12月15日9时08分导入一条目录5                          <span>        2018-12-15</span></a></li>
            </ul>
          </div>
            <div class="marqueeBtn">
                <i class="marqueeBtnLeft"><img class="marqueeBtnLeftI" src="../assets/pmdl.png" alt="上一条"></i>
                <i class="marqueeBtnRight"><img class="marqueeBtnRightI" src="../assets/pmdr.png" alt="下一条"></i>
            </div>
      </div>
      <ul class="titleList">
        <li v-for="(item,index) in titleList" :key="index">
          <p class="name">{{item.name}}</p>
          <span class="num">{{item.num}}</span>
        </li>
      </ul>
      <div class="xxzyPage">
        <template>
          <el-tabs v-model="xxzyPage" type="card" @tab-click="handleClickxxzyPage">
            <el-tab-pane label="用户管理" name="first">
              <div class="content">
              <div id="myChart1">
                <img src="../assets/images/ditu_03.png" width="100%" alt="">
              </div>
              <div class="chart234Wrap">
                <div class="clearfix" style="height:50%;">
                <div id="myChart2" style="height:100%;width:50%;"></div>
                <div id="myChart3" style="height:100%;width:49%;"></div>
                </div>
                <div id="myChart4" style="height:50%;"></div>
              </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
              <div class="content">
              <div class="map"><img src="../assets/images/ditu_03.png" width="100%" alt=""></div>
              <div class="balloons">
                <div class="ball" v-for="(item,index) in balloons" :key='index'>
                  <p class="name">{{item.name}}</p>
                  <p class="num">{{item.num}}</p>
                </div>
              </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </template>
      </div>
      <div class="systemList">

        <template>
          <el-tabs v-model="chartsFloor2" type="card" @tab-click="secFloorHandleClick">
            <el-tab-pane label="主题数据目录" name="first">
              <div class="clearfix">
              <button class="moreSelectBtn" @click="showMoreSelect">更多选择</button>
              </div>
                    
              <div class="btnList" v-show="moreSelect">
                <span class="kind">指标类型</span>
                <span class="closeMore"><img @click="closeMore" src="../assets/closeMore.png" alt=""></span>
                
              <!-- <template>
                <el-checkbox-group 
                  v-model="ckecked"
                  @change='changeSelect' 
                >
                <el-checkbox v-for="(item,index) in checklists" :label="item" :key="index">{{item}}</el-checkbox>
                </el-checkbox-group>
              </template> -->
              <template>
                  <el-radio-group v-model="radio2">
                    <el-radio v-for="(item,index) in checklists" :label="index"  :key="index">{{item}}</el-radio>
                  </el-radio-group>
                </template>
              </div>
              <div id="myChart7" style="height:300px;"></div>
            </el-tab-pane>
            <el-tab-pane label="共享开放目录" name="second">
              <div id="myChart8" style="height:300px;width:50%;"></div>
              <div id="myChart9" style="height:300px;width:50%;"></div>
            </el-tab-pane>
          </el-tabs>
        </template>

        
          
      </div>
      <div class="rateWrap clearfix">
        <div class="dataRate">
          <div id="myChart10" style="height:450px;"></div>
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
      <div class="loadServe clearfix">
        <div class="lode">
          <h3>最新目录<span><a href="" style="color:#fff;">···</a></span></h3>
          <div class="content">
            <img src="../assets/images/load_03.jpg" width="100%" alt="">
            <ul>
              <li v-for="(item,index) in loadlist" :key="index">
                <a href="">
                <p>{{item.title}}<span>{{item.time}}</span></p>
                <p class="from">{{item.from}}</p>
                </a>
              </li>
            </ul>
          </div>
          </div>
        <div class="serve">
          <h3>服务接口<span><a href="" style="color:#fff;">···</a></span></h3>
          <div class="content">
            <img src="../assets/images/load_05.png" width="100%" alt="">
            <ul>
              <li v-for="(item,index) in servelist" :key="index">
                <a href="">
                <p>{{item.title}}<span>{{item.time}}</span></p>
                <p class="from">{{item.from}}</p>
                </a>
              </li>
            </ul>
          </div>
          </div>
      </div>
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
import 'echarts/map/js/china.js' // 引入中国地图数据
import {mapMutations,mapGetters} from 'vuex'
export default {
  components: {},

  props: {},

  data() {
    return {
      timer: null,
      activeBtn: "",
      titleList: [
        { name: "检务系统", num: "5", id: 0 },
        { name: "数据目录", num: "450", id: 1 },
        { name: "数据元", num: "13890", id: 2 },
        { name: "共享目录", num: "350", id: 3 },
        { name: "共享库表", num: "4500", id: 4 },
        { name: "共享文件", num: "210", id: 5 }
      ],
      checklists: ["信息项数量", "更新周期", "信息项数量2", "更新周期2", "信息项数量3","更新周期3"],
      ckecked:["信息项数量"],
      myChart2:null,
      myChart3:null,
      myChart4:null,
      myChart7:null,
      myChart8:null,
      myChart9:null,
      myChart10:null,
      xxzyPage:'first',
      chartsFloor2: 'first',
      moreSelect:false,
      balloons:[
        {
          num:'NO.1',
          name:'部门受案号',
        },
        {
          num:'NO.1',
          name:'部门受案号'
        },
        {
          num:'NO.2',
          name:'部门受案号'
        },
        {
          num:'NO.3',
          name:'部门受案号'
        },
        {
          num:'NO.4',
          name:'部门受案号'
        },
        {
          num:'NO.5',
          name:'部门受案号'
        },
        {
          num:'NO.6',
          name:'部门受案号'
        },
        {
          num:'NO.7',
          name:'部门受案号'
        },
        {
          num:'NO.8',
          name:'部门受案号'
        },
         {
          num:'NO.9',
          name:'部门受案号'
        },
      ],
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
      loadlist:[
        {title:'案件分流-待分配案件-个案流程-流程实例信息',
        time:'2018-12-15',
        from:' 来源：鼓楼区检察院 '
        },  
        {title:'案卡信息-案管流程监控-流程监控基本信息',
        time:'2018-12-15',
        from:' 来源：鼓楼区检察院 '
        },
        {title:'受理信息-受理数据 ',
        time:'2018-12-15',
        from:' 来源：鼓楼区检察院 '
        },
        {title:'案件分流-领卷处理',
        time:'2018-12-15',
        from:' 来源：鼓楼区检察院 '
        },
        {title:'案件分流-未成年案件处理',
        time:'2018-12-15',
        from:' 来源：鼓楼区检察院 '
        },
      ],
      servelist:[
        {title:'审查逮捕案件数据查询服务',
        time:'2018-12-15',
        from:' 来源：鼓楼区检察院 '
        },
        {title:'不批准逮捕复议案件数据查询服务',
        time:'2018-12-15',
        from:' 来源：鼓楼区检察院 '
        },
        {title:'不批准逮捕复核案件数据查询服务',
        time:'2018-12-15',
        from:' 来源：鼓楼区检察院 '
        },
        {title:'不批准逮捕申诉审查案件数据查询服务',
        time:'2018-12-15',
        from:' 来源：鼓楼区检察院 '
        },
        {title:'强制医疗申请案件数据查询服务',
        time:'2018-12-15',
        from:' 来源：鼓楼区检察院 '
        },
      ],
      radio2:0
    };
  },

  watch: {
    changeChartWidth:function(){
    var _that=this;
     setTimeout(function(){
      _that.myChart7.resize();
     },300)
    }
  },

  computed: {
    ...mapGetters([
        'changeChartWidth'
      ])
  },

  methods: {
    makeChart1(){
      // var myChart = echarts.init(document.getElementById("myChart1"));
      // myChart.setOption({ // 进行相关配置
        //   backgroundColor: "#02AFDB",
        //   tooltip: {}, // 鼠标移到图里面的浮动提示框
        //   dataRange: {
        //     show: false,
        //     min: 0,
        //     max: 1000,
        //     text: ['High', 'Low'],
        //     realtime: true,
        //     calculable: true,
        //     color: ['orangered', 'yellow', 'lightskyblue']
        //   },
        //   geo: { // 这个是重点配置区
        //     map: 'china', // 表示中国地图
        //     roam: true,
        //     label: {
        //       normal: {
        //         show: true, // 是否显示对应地名
        //         textStyle: {
        //           color: 'rgba(0,0,0,0.4)'
        //         }
        //       }
        //     },
        //     itemStyle: {
        //       normal: {
        //         borderColor: 'rgba(0, 0, 0, 0.2)'
        //       },
        //       emphasis: {
        //         areaColor: null,
        //         shadowOffsetX: 0,
        //         shadowOffsetY: 0,
        //         shadowBlur: 20,
        //         borderWidth: 0,
        //         shadowColor: 'rgba(0, 0, 0, 0.5)'
        //       }
        //     }
        //   },
        //   series: [{
        //       type: 'scatter',
        //       coordinateSystem: 'geo' // 对应上方配置
        //     },
        //     {
        //       name: '启动次数', // 浮动框的标题
        //       type: 'map',
        //       geoIndex: 0,
        //       data: [{
        //         "name": "北京",
        //         "value": 599
        //       }, {
        //         "name": "上海",
        //         "value": 142
        //       }, {
        //         "name": "黑龙江",
        //         "value": 44
        //       }, {
        //         "name": "深圳",
        //         "value": 92
        //       }, {
        //         "name": "湖北",
        //         "value": 810
        //       }, {
        //         "name": "四川",
        //         "value": 453
        //       }]
        //     }
        //   ]
        // })
    },
    makeChart2(){
      var myChart = echarts.init(document.getElementById("myChart2"));
      var data = {
          value: 24.2,
          text: '496354',
          color: '#5170A2',
          title: '共享目录总数-占比'
      };
      let value = data.value || 0;
      myChart.setOption({
        title: {
            x: 'center',
            y: '90%',
            textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#687284'
            },
            text: data.title || ''
        },
        series: [{
            type: 'pie',
            radius: ['75', '85'],
            hoverAnimation: false,
            label: {
                normal: {
                    position: 'center'
                }
            },
            startAngle:200,
            data: [{
                    value: value,
                    name: data.text,
                    itemStyle: {
                        normal: {
                            color: '#E3E4E4',
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{b}\n_______',
                            textStyle: {
                                fontSize: 18,
                                fontWeight: 600,
                                lineHeight:12,
                                color: '#000',
                            }
                        }
                    }
                },
                {
                    value: 100 - value,
                    name: '占位',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#14C1F3',
                        }
                    },
                    label: {
                        normal: {
                            formatter: value + '%',
                            textStyle: {
                                fontSize: 30,
                                color: '#64B1FD'
                            }
                        },

                    }
                }
            ]
        }]
      });
      this.myChart2=myChart;
    },
    makeChart3(){
       var myChart = echarts.init(document.getElementById("myChart3"));
      var data = {
          value: 24.2,
          text: '496354',
          color: '#5170A2',
          title: '开放目录总数-占比'
      };
      let value = data.value || 0;
      myChart.setOption({
        backgroundColor: '#fff',
        title: {
            x: 'center',
            y: '90%',
            textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#687284'
            },
            text: data.title || ''
        },
        series: [{
            type: 'pie',
            radius: ['75', '85'],
            hoverAnimation: false,
            label: {
                normal: {
                    position: 'center'
                }
            },
            startAngle:200,
            data: [{
                    value: value,
                    name: data.text,
                    itemStyle: {
                        normal: {
                            color: '#14C1F3',
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{b}\n_______',
                            textStyle: {
                                fontSize: 18,
                                fontWeight: 600,
                                lineHeight:12,
                                color: '#000',
                            }
                        }
                    }
                },
                {
                    value: 100 - value,
                    name: '占位',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#E3E4E4',
                        }
                    },
                    label: {
                        normal: {
                            formatter: value + '%',
                            textStyle: {
                                fontSize: 30,
                                color: '#64B1FD'
                            }
                        },

                    }
                }
            ]
        }]
      });
      this.myChart3=myChart;
    },
    makeChart4(){
      var myChart = echarts.init(document.getElementById("myChart4"));
      myChart.setOption({
        color: ["#14C1F3"],
        xAxis: {
          type: "category",
          data: [
            "实时",
            "每日",
            "每周",
            "每月",
            "每周",
            "每周",
            "每周",
            "每周"
          ],
          axisTick: {
            show: false
          }
        },
        title:{
          x: 'center',
          y: '12%',
          text:'信息资源更新周期情况',
          textStyle:{
            color:'#000',
            fontSize:'18',
            fontWeight:'normal',
            align:'center'
          }
        },
        yAxis: {
          type: "value",
          data: ["100", "200", "300", "400", "500"],
          axisTick: {
            show: false
          }
        },
        series: [
          {
            data: [80, 430, 170, 500, 90, 320, 180,180],
            type: "bar",
            barWidth: "18"
          }
        ],
        legend: {
          color:['#14C1F3','#F9A61A'],

        },
        grid: {
          top: "80", //距上边距
          left: "150", //距离左边距
          right: "100", //距离右边距
          bottom: "30" //距离下边距
        },
        tooltip: {
          trigger: 'item',
          formatter: "数量 : {c}"
        }
      });
      this.myChart4=myChart;
    },
    makeChart5(){

    },
    makeChart6(){

    },
    makeChart7(){
      var myChart = echarts.init(document.getElementById("myChart7"));
      myChart.setOption({
        color: ["#B8DDFF"],
        xAxis: {
          type: "category",
          data: [
            "检察机关\n电子卷宗管理系统",
            "检务公开与服务平台",
            "互联网门户网站",
            "互联网门户网站",
            "电子印章系统",
            "视频会议",
            "远程接访"
          ],
          axisLabel :{
              interval:0,
              },
          axisTick: {
            show: false
          }
        },
        legend: {
            data: ['信息资源','信息项'],
            right:"20%",
            top:'0',
            itemWidth: 36,
            itemHeight: 20,
            itemGap: 16,
        },
        yAxis: {
          type: "value",
          data: ["100", "200", "300", "400", "500"],
          axisTick: {
              show: false
          },
          axisLine:{
              show: false
          }
        },
        series: [
          {
            data: [80, 430, 170, 500, 90, 320, 180],
            type: "bar",
            barWidth: "38",
            name:"信息资源",
            itemStyle:{
              normal:{
                color:"#14BFF2"
              }
            }
          },
          {
            data: [80, 430, 170, 500, 90, 320, 180],
            type: "bar",
            barWidth: "38",
            barGap: '-5%',
            name:"信息项",
            itemStyle:{
              normal:{
                color:"#F9A61A"
              }
            }
          }
        ],
        
        grid: {
          top: "40", //距上边距
          left: "8%", //距离左边距
          right: "8%", //距离右边距
          bottom: "60" //距离下边距
        },
        tooltip: {
          trigger: 'item',
          formatter: "{b}{a}数量 : {c}"
        }
      });
      this.myChart7=myChart;
    },
    makeChart8(){
      var myChart = echarts.init(document.getElementById("myChart8"));
      var data = {
          id: 'echartPie',
          value: [32, 32, 32, 32],
          legend: ['不予共享', '无条件共享', '有条件共享', '社会开放'],   
          color: ['#F78989', '#B8DDFF', '#DDF7A1', '#8193D7'],
          title: '共享开放信息资源比例图',
      }
      var seriesData = []
      data.value.forEach(function(item, index) {
          seriesData.push({
              value: item,
              name: data.legend[index]
          })
      })
      myChart.setOption({
        backgroundColor: '#fff',
        title: {
          x: '58%',
          y: '15%',
          textStyle: {
            fontWeight: 400,
            fontSize: 16,
            color: '#687284'
          },
          text: data.title || ''
        },
        tooltip: {
            trigger: 'item',
            show: data.tooltipShow === false ? false : true
        },
        legend: {
            orient: 'vertical',
            top: '30%',
            right:'20%',
            selectedMode: false,
            itemWidth: 36,
            itemHeight: 20,
            itemGap: 16,
            data: data.legend,
            formatter: function(name) {
                var oa = seriesData;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
                for (var i = 0; i < seriesData.length; i++) {
                    if (name == oa[i].name) {
                        return name + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            hoverAnimation: data.hoverAnimation === false ? false : true,
            radius: ['40%', '67%'],
            center:['30%', '50%'],
            color: data.color,
            label: {
                normal: {
                    position: 'inner',
                    formatter: function(param) {
                        if (!param.percent) return ''
                        var f = Math.round(param.percent * 10) / 10;
                        var s = f.toString();
                        var rs = s.indexOf('.');
                        if (rs < 0) {
                            rs = s.length;
                            s += '.';
                        }
                        while (s.length <= rs + 1) {
                            s += '0';
                        }
                        return s + '%';
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: seriesData
        }]
      });
      this.myChart8=myChart;
    },
    makeChart9(){
      var myChart = echarts.init(document.getElementById("myChart9"));
      myChart.setOption({
        title:{
          x: '40%',
          y: '15%',
          textStyle: {
            fontWeight: 400,
            fontSize: 16,
            color: '#687284'
          },
          text: '共享开放信息项数量图'
        },
        color: ["#B8DDFF"],
        xAxis: {
          type: "category",
          data: ['不予共享', '无条件共享', '有条件共享', '社会开放'],
          axisTick: {
            show: false
          }
        },

        yAxis: {
          type: "value",
          data: ["0", "2", "4", "6", "8"],
          axisTick: {
            show: false
          }
        },
        series: [
          {
            data: [10,4,6,6],
            type: "bar",
            barWidth: "20"
          }
        ],
        legend: {},
        grid: {
          top: "90", //距上边距
          left: "50", //距离左边距
          right: "50", //距离右边距
          bottom: "30" //距离下边距
        },
        tooltip: {
          trigger: 'item',
          formatter: "数量 : {c}"
        }
      });
      this.myChart9=myChart;
    },
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
                      width: '35%',
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
                      width: '35%',
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
                              offset: [0, 0],
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
    marquee() {
      let i = 0;
      let timer;
      clearInterval(timer);
      timer = setInterval(move, 2500);
      $(".marqueeWrap").hover(()=>{
          clearInterval(timer);
        },()=>{
          clearInterval(timer);
          timer = setInterval(move, 2500);
          this.timer=timer
        }
      );
      $(".marqueeBtnLeftI").click(()=> {
        prev();
      });
      $(".marqueeBtnRightI").click(()=> {
        next();
      });
      function move() {
        ++i;
        if(i==5){
          i=0;
        }
          $(".marquee").animate({
           top: i*-40
          });
      }
      function prev() {
        clearInterval(timer);
        i--;
        if(i<0){
          i=4;
        }
        $(".marquee").animate({
            top: -40*i
          });
          timer = setInterval(move, 2500);
          this.timer=timer
      }
      function next() {
        clearInterval(timer);
        i++
        if(i==5){
          i=0;
        }
        $(".marquee").animate({
          top: -40*i
        });
        timer = setInterval(move, 2500);
        this.timer=timer
      }
      this.timer=timer
    },
    lightbtn(index) {
      this.activeBtn = index;
    },
    secFloorHandleClick(tab, event) {
      var that=this;
      if(tab.index==="1"){
        setTimeout(function () {
          that.myChart8.resize();
          that.myChart9.resize();
        },150)
      }
    },
    handleClickxxzyPage(tab, event){
      var that=this;
      if(tab.index==="0"){
        setTimeout(function () {
          that.myChart2.resize();
          that.myChart3.resize();
          that.myChart4.resize();
        },150)
      }
    },
    showMoreSelect(){
      this.moreSelect=true;
    },
    closeMore(){
      this.moreSelect=false;
    },
    // changeSelect(index){
    //   this.ckecked.shift()
    // }
  },

  created() {},

  mounted() {
      this.marquee();
      this.makeChart1();
      setTimeout(() => {
      this.makeChart2();
      this.makeChart3();
      this.makeChart4();  
      }, 300);
      
      this.makeChart7();
      this.makeChart8();
      this.makeChart9();
      this.makeChart10();
      var that=this;
      window.onresize = function () {
        if(that.myChart2){
          that.myChart2.resize();
          }
          if(that.myChart3){
          that.myChart3.resize();
          }
          if(that.myChart4){
          that.myChart4.resize();
          }
          if(that.myChart7){
          that.myChart7.resize();
          }
          if(that.myChart8){
            that.myChart8.resize();
          }
          if(that.myChart9){
            that.myChart9.resize();
          }
          if(that.myChart10){
            that.myChart10.resize();
          }
      }
    
  
  },
  destroyed(){
    clearTimeout(this.timer)
  }
};
</script>

<style>

.el-tabs__item.is-top{
   background-color: #F4F4F4 !important;
   border-top:2px solid #F4F4F4;
   border-bottom:1px solid #D7D7D7  !important;
}
.el-tabs__item.is-active {
   background-color: #fff !important;
  border-top:2px solid #4AA7FD ;
  border-bottom:1px solid transparent  !important;
}

</style>

<style scoped>
.wrapper-index {
  flex: 1 1 auto;
  background: #dee9ee;
  padding: 24px 30px 50px 30px;
}
.marqueeWrap {
  height: 50px;
  width: 100%;
  overflow: hidden;
  background-color: #f9f9f9;
  background-image: url(../assets/laba.png);
  background-repeat: no-repeat;
  background-position: 10px center;
  margin-bottom: 10px;
}
.marqurrBox{
  float: left;
  height: 20px;
  overflow: hidden;
  margin-left: 47px;
  line-height: 30px;
  margin-top: 15px;
}
.marquee {
  height: 20px;
  width: 710px;
  position: relative;
  top: 0;
  float: left;
}
.marquee li {
  height: 20px;
  line-height: 20px;
  width: 710px;
  margin-bottom:20px;
}
.marquee li a {
  color: #333333;
}
.marquee li span {
  float: right;
}
.marqueeBtn {
  float: right;
  margin-top: 15px;
}
.marqueeBtn i {
  padding: 0 15px;
}
.marqueeBtn i img {
  cursor: pointer;
}

.titleList{
  display: flex;
  background: #fff;
  margin-bottom: 10px;
  padding: 2% 0;
}
.titleList li{
  flex:1;
  border-right:1px solid #E3E3E3;
  text-align: center;
  font-size:18px;
}
.titleList li:last-child{
  border-right:none;
}
.titleList span{
  color:#5BAEFD;
  font-size:26px;
}

.xxzyPage{
  /* height: 625px; */
  margin-bottom: 10px;
  background: #fff;
}
.xxzyPage .content{
  display:flex;
  padding-bottom:20px;
}
@media screen and (max-width: 1366px) {
    .xxzyPage .content{
        min-height: 388px !important;
        border-radius: 10px !important;
    }

}
@media screen and (max-width: 1560px) {
    .ball p{
      font-size:14px !important;
      height: 28px !important;
      line-height: 28px !important;
    }

}
@media screen and (max-width: 1400px) {
    .ball p{
      font-size:12px !important;
      height: 24px !important;
      line-height: 24px !important;
    }

}
#myChart1{
  flex:1;
}
.chart234Wrap{
  flex:1;
}
#myChart2,#myChart3{
  float: left;
  position: relative;
}
#myChart3::before{
  position: absolute;
  content:'';
  width:1px;
  z-index: 90;
  top:0;
  height:80%;
  margin-top: 5%;
  border-left:1px solid #E6E6E6;
}
#myChart4{
  margin-top:20px;
}
#myChart4::before{
  display:block;
  content:'';
  height: 0;
  width:80%;
  margin:0 auto;
  border-top:1px solid #E6E6E6;

}

.map,.balloons{
  flex:1;
}
.balloons{
  position: relative;
}
.ball{
  border-radius:50%;
  background: #F78989;
  position: absolute;
  text-align: center;
}
.ball:nth-child(1) p:nth-child(1){
  margin-top: 35%;
}
.ball:nth-child(2) p:nth-child(1){
  margin-top: 25%;
}
.ball:nth-child(3) p:nth-child(1){
  margin-top: 30%;
}
.ball:nth-child(4) p:nth-child(1){
  margin-top: 30%;
}
.ball:nth-child(5) p:nth-child(1){
  margin-top: 25%;
}
.ball:nth-child(6) p:nth-child(1){
  margin-top: 25%;
}
.ball:nth-child(7) p:nth-child(1){
  margin-top: 25%;
}
.ball:nth-child(8) p:nth-child(1){
  margin-top: 25%;
}
.ball:nth-child(9) p:nth-child(1){
  margin-top: 15%;
}
.ball:nth-child(10) p:nth-child(1){
  margin-top: 15%;
}

.ball p{
  
  height: 33px;
  line-height: 33px;
  color:#fff;
}
.ball:nth-child(1){
  top:30%;
  left:30%;
  height: 35%;
  width: 25%; 
}
.ball:nth-child(2){
  top:32%;
  left:60%;
  height: 28%;
  width: 20%; 
  opacity: 0.4;
}
.ball:nth-child(3){
  top:60%;
  left:55%;
  height: 28%;
  width: 20%; 
  opacity: 0.8;
}
.ball:nth-child(4){
  top:25%;
  left:5%;
  height: 25%;
  width: 18%; 
  opacity: 0.8;
}
.ball:nth-child(5){
  top:5%;
  left:55%;
  height: 22%;
  width: 15%; 
  opacity: 0.6;
}
.ball:nth-child(6){
  top:0%;
  left:35%;
  height: 20%;
  width: 14%; 
  opacity: 0.8;
}
.ball:nth-child(7){
  top:76%;
  left:25%;
  height: 20%;
  width: 14%; 
  opacity: 0.8;
}
.ball:nth-child(8){
  top:75%;
  left:42%;
  height: 19%;
  width: 13%; 
  opacity: 0.6;
}
.ball:nth-child(9){
  top:55%;
  left:15%;
  height: 19%;
  width: 13%; 
  opacity: 0.8;
}
.ball:nth-child(10){
  top:10%;
  left:20%;
  height: 19%;
  width: 13%; 
  opacity: 0.8;
}


.systemList {
  min-height: 455px;
  /* padding: 20px 30px 25px 30px; */
  background: #fdfdfd;
  border-radius: 10px;
  margin-bottom: 30px;
  position: relative;
}
.moreSelectBtn{
  float: right;
  margin-right: 8%;
  width: 120px;
  height: 34px;
  color:#000;
  font-size:14px;
  text-indent:2em;
  z-index: 9;
  background: url(../assets/moreSelectBtn_03.png) no-repeat;
  background-size: 100% 100%;
}
.btnList {
  margin:10px 8% 0px 6%;
  font-size: 14px;
  min-height: 78px;
  border:1px dashed #BFBFBF;
  line-height: 80px;
  padding-left:25px;
}
.btnList .kind{
  float: left;
  margin-right: 25px;
}
.btnList .closeMore{
  float: right;
}
.btnList .closeMore img{
  margin:15px 10px 0 0;
  cursor: pointer;
}
#myChart8,#myChart9{
  float: left;
}

.rateWrap{
  display: flex;
}
.dataRate,.infoRate{
  flex:1;
  height: 450px;
  /* width: 655px; */
  padding: 20px 45px 20px 30px;
  border-radius: 10px;
  background: #FDFDFD;

}
.dataRate{
  margin-right: 10px;
}
.infoRate h4{
  height: 60;
  line-height: 60px;
  color:#4EA9FD;
  font-weight:bold;
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
.loadServe{
  margin-top: 10px;
  display: flex;
}
.lode,.serve{
  flex:1;
  background: #fff;
  border-radius:10px;
}
.lode{
  margin-right: 10px;
}
.loadServe h3{
  height: 85px;
  color:#fff;
  line-height: 85px;
  text-align: center;
  background: #4AA7FD;
  font-size: 30px;
  border-radius:10px 10px 0 0;
}
.loadServe h3 span{
  float: right;
  margin-right: 30px;
}
.loadServe .content{
  padding:0 22px;

}
.loadServe li{
  height: 55px;
  line-height: 75px;
  padding:10px 0;
  border-bottom:1px solid #C6C6C6;
}
.loadServe li span{
  float: right;
  color:#B6B6B6;
  font-size:14px;
}
.loadServe li p{
  height: 28px;
  line-height: 28px;
  font-size:14px;
  color:#000;
}
.loadServe .from{
color:#666666
}
.loadServe li:last-child{
  border-bottom:none;
}
</style>