<template>
  <div class="wrapper-xtml">
      <div class="floor fristFloor">
          <h3>系统运行情况</h3>
          <div class="content">
              <div class="pie">
                  <div id="myChart1" style="height:300px;width:100%;"></div>
              </div>
              <div class="line">
                  <div id="myChart21" class="mychart2" style="height:75px;width:100%;"></div>
                  <div id="myChart22" class="mychart2" style="height:75px;width:100%;"></div>
                  <div id="myChart23" class="mychart2" style="height:75px;width:100%;"></div>
                  <div id="myChart24" style="height:75px;width:100%;"></div>
              </div>
          </div>
      </div>
      <div class="floor secFloor">
          <h3>系统使用情况</h3>
        <div class="content">
            <div class="con1">
                <div class="chart3">
                    <div id="myChart3" style="height:216px;width:100%;"></div>
                </div>
                <div class="status">
                    <h4>
                        福州市鼓楼区检察院信息系统使用范围-区域情况表
                    </h4>
                    <div class="place">
                        <div class="left">
                            <h5>省,地市,县（区）</h5>
                            <p>福建省人民检察院量刑建议系统</p>
                            <p>福建省人民检察院同案同判系统</p>
                        </div>
                        <div class="right">
                            <h5>地市,县（区）</h5>
                            <p>龙信使Ⅱ安全增强电子邮件系统</p>
                            <p>福州市党政机关系统办公系统</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="con2">
                <div class="chart4">
                    <div id="myChart4" style="height:216px;width:100%;"></div>
                </div>
                <div class="status">
                    <h4>
                        福州市鼓楼区检察院信息系统使用范围-用户情况表
                    </h4>
                    <div class="place">
                        <div class="left">
                            <h5>本部门本级</h5>
                            <p>福建省人民检察院量刑建议系统</p>
                            <p>福建省人民检察院同案同判系统</p>
                        </div>
                        <div class="mid">
                            <h5>系统内地方各级</h5>
                            <p>龙信使Ⅱ安全增强电子邮件系统</p>
                            <p>福州市党政机关系统办公系统</p>
                        </div>
                        <div class="right">
                            <h5>社会公众区</h5>
                            <p>龙信使Ⅱ安全增强电子邮件系统</p>
                            <p>福州市党政机关系统办公系统</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="floor threeFloor">
        <div id="myChart5" style="height:300px;width:100%;"></div>
        上年度累计访问数
      </div>
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
export default {

  components:{},

  props:{},

  data(){
    return {
        myChart1:null,
        myChart21:null,
        myChart22:null,
        myChart23:null,
        myChart24:null,
        myChart3:null,
        myChart4:null,
        myChart5:null,
    }
  },

  watch:{},

  computed:{},

  methods:{
    makeChart1(){
      var myChart = echarts.init(document.getElementById("myChart1"));
      var data = {
          value:17.19,
          color: '#000',
          title: '建设资金来源'
      };
      let value = data.value || 0;
      myChart.setOption({
        title: {
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#687284'
            },
            text: data.title || ''
        },
        series: [{
            type: 'pie',
            radius: ['65', '73'],
            hoverAnimation: false,
            startAngle:200,
            data: [
                {
                    value: value,
                    name: '单位自筹',
                    itemStyle: {
                        normal: {
                            color: '#F9A51A',
                        }
                    },
                    labelLine:{
                        show:false
                    },
                    label: {
                        normal: {
                            formatter:'{b}\n\n{c}%',
                            textStyle: {
                                fontSize: 14,
                                lineHeight:12,
                                color: '#000',
                            },
                            align:'center'
                        }
                    },
                    emphasis:{
                        labelLine:{
                            show:false
                        },
                    }
                },
                {
                    value: 100-value,
                    name: '上级配发',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#14C1F3',
                        }
                    },
                    labelLine:{
                        show:false
                    },
                    label: {
                        normal: {
                            formatter:'{b}\n\n{c}%',
                            textStyle: {
                                fontSize: 14,
                                color: '#000'
                            },
                            align:'center'
                        },
                    },
                    emphasis:{
                        labelLine:{
                            show:false
                        },
                    }
                }
            ]
        }]
      });
      this.myChart1=myChart;
    },
    makeChart21(){
      var myChart = echarts.init(document.getElementById("myChart21"));
      myChart.setOption({
        xAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel:{
                show: false
            },
            axisLine:{
                show: false
            },
            splitLine:{
                show: false
            },
            min:0,
            max:16
        },
        grid:{
            right:'5%'
        },
        yAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine:{
                show: false
            },
            data: ['系统状态']
        },
        series: [
            {
                name: '运行中',
                type: 'bar',
                barWidth: 45,
                stack: '1',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: function(p,a) {
                            console.log(p,a)
                            return p.seriesName+'\n'+p.data;
                        }
                    }
                },
                itemStyle:{
                    color:'#14C1F3'
                },
                data: [8],
            },
            {
                name: '停用',
                type: 'bar',
                barWidth: 45,
                stack: '1',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                         formatter: function(p) {
                            return p.seriesName+'\n'+p.data;
                        }
                    }
                },
                itemStyle:{
                    color:'#F78989'
                },
                data: [8]
            }, 
        ]
      });
      this.myChart21=myChart;
    },
    makeChart22(){
      var myChart = echarts.init(document.getElementById("myChart22"));
      myChart.setOption({
          grid:{
            right:'5%'
        },
        xAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel:{
                show: false
            },
            axisLine:{
                show: false
            },
            splitLine:{
                show: false
            },
            min:0,
            max:32
        },
        yAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine:{
                show: false
            },
            data: ['系统部署']
        },
        series: [
            {
                name: '自建机房',
                type: 'bar',
                barWidth: 45,
                stack: '1',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: function(p) {
                            return p.seriesName+'\n'+p.data;
                        }
                    }
                },
                itemStyle:{
                    color:'#0287BD'
                },
                data: [8],
            },
            {
                name: '全省统一平台',
                type: 'bar',
                barWidth: 45,
                stack: '1',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                         formatter: function(p) {
                            return p.seriesName+'\n'+p.data;
                        }
                    }
                },
                itemStyle:{
                    color:'#0AA7E0'
                },
                data: [8]
            }, 
             {
                name: '全市统一平台',
                type: 'bar',
                barWidth: 45,
                stack: '1',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                         formatter: function(p) {
                            return p.seriesName+'\n'+p.data;
                        }
                    }
                },
                itemStyle:{
                    color:'#23B7ED'
                },
                data: [8]
            }, 
             {
                name: '其他',
                type: 'bar',
                barWidth: 45,
                stack: '1',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                         formatter: function(p) {
                            return p.seriesName+'\n'+p.data;
                        }
                    }
                },
                itemStyle:{
                    color:'#14C1F3'
                },
                data: [8]
            }, 
        ]
      });
      this.myChart22=myChart;
    },
    makeChart23(){
      var myChart = echarts.init(document.getElementById("myChart23"));
      myChart.setOption({
          grid:{
            right:'5%'
        },
        xAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel:{
                show: false
            },
            axisLine:{
                show: false
            },
            splitLine:{
                show: false
            },
            min:0,
            max:24
        },
        yAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine:{
                show: false
            },
            data: ['网络环境']
        },
        series: [
            {
                name: '检察涉密网',
                type: 'bar',
                barWidth: 45,
                stack: '1',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: function(p) {
                            return p.seriesName+'\n'+p.data;
                        }
                    }
                },
                itemStyle:{
                    color:'#0287BD'
                },
                data: [8],
            },
            {
                name: '互联网',
                type: 'bar',
                barWidth: 45,
                stack: '1',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                         formatter: function(p) {
                            return p.seriesName+'\n'+p.data;
                        }
                    }
                },
                itemStyle:{
                    color:'#0AA7E0'
                },
                data: [8]
            }, 
            {
                name: '业务专网',
                type: 'bar',
                barWidth: 45,
                stack: '1',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                         formatter: function(p) {
                            return p.seriesName+'\n'+p.data;
                        }
                    }
                },
                itemStyle:{
                    color:'#23B7ED'
                },
                data: [8]
            },
        ]
      });
      this.myChart23=myChart;
    },
    makeChart24(){
      var myChart = echarts.init(document.getElementById("myChart24"));
      myChart.setOption({
          grid:{
            right:'5%'
        },
        xAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel:{
                show: false
            },
            axisLine:{
                show: false
            },
            splitLine:{
                show: false
            },
            min:0,
            max:16
        },
        yAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine:{
                show: false
            },
            data: ['是否为\n僵尸系统']
        },
        series: [
            {
                name: '是',
                type: 'bar',
                barWidth: 45,
                stack: '1',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: function(p) {
                            return p.seriesName+'\n'+p.data;
                        }
                    }
                },
                itemStyle:{
                    color:'#14C1F3'
                },
                data: [8],
            },
            {
                name: '否',
                type: 'bar',
                barWidth: 45,
                stack: '1',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                         formatter: function(p) {
                            return p.seriesName+'\n'+p.data;
                        }
                    }
                },
                itemStyle:{
                    color:'#F78989'
                },
                data: [8]
            }, 
        ]
      });
      this.myChart24=myChart;
    },
    makeChart3(){
      var myChart = echarts.init(document.getElementById("myChart3"));
      var data = {
          value:17.19,
          color: '#000',
          title: '使用范围-区域'
      };
      let value = data.value || 0;
      myChart.setOption({
        title: {
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#687284'
            },
            text: data.title || ''
        },
        series: [{
            type: 'pie',
            radius: ['65', '73'],
            hoverAnimation: false,
            startAngle:200,
            data: [
                {
                    value: value,
                    name: '省,地市,县（区）',
                    itemStyle: {
                        normal: {
                            color: '#F9A51A',
                        }
                    },
                    labelLine:{
                        show:false
                    },
                    label: {
                        normal: {
                            formatter:'{b}\n\n{c}%',
                            textStyle: {
                                fontSize: 14,
                                lineHeight:12,
                                color: '#000',
                            }
                        }
                    },
                    emphasis:{
                        labelLine:{
                            show:false
                        },
                    }
                },
                {
                    value: 100 - value,
                    name: '地市,县（区）',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#14C1F3',
                        }
                    },
                    labelLine:{
                        show:false
                    },
                    label: {
                        normal: {
                            formatter:'{b}\n\n{c}%',
                            textStyle: {
                                fontSize: 14,
                                color: '#000'
                            }
                        },
                    },
                    emphasis:{
                        labelLine:{
                            show:false
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
      var data = {
          value:17.19,
          value1:22.31,
          color: '#000',
          title: '使用范围-用户'
      };
      let value = data.value || 0;
      let value1 = data.value1 || 0;
      myChart.setOption({
        title: {
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#687284'
            },
            text: data.title || ''
        },
        series: [{
            type: 'pie',
            radius: ['65', '73'],
            hoverAnimation: false,
            startAngle:200,
            data: [
                {
                    value: value,
                    name: '本部门本级',
                    itemStyle: {
                        normal: {
                            color: '#F9A51A',
                        }
                    },
                    labelLine:{
                        show:false
                    },
                    label: {
                        normal: {
                            formatter:'{b}\n\n{c}%',
                            textStyle: {
                                fontSize: 14,
                                lineHeight:12,
                                color: '#000',
                            },
                            align:'center'
                        }
                    },
                    emphasis:{
                        labelLine:{
                            show:false
                        },
                    }
                },
                {
                    value: value1,
                    name: '系统内地方各级',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#BFD730',
                        }
                    },
                    labelLine:{
                        show:false
                    },
                    label: {
                        normal: {
                            formatter:'{b}\n\n{c}%',
                            textStyle: {
                                fontSize: 14,
                                color: '#000'
                            },
                            align:'center'
                        },
                    },
                    emphasis:{
                        labelLine:{
                            show:false
                        },
                    }
                },
                {
                    value: 100-value-value1,
                    name: '社会公众',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#14C1F3',
                        }
                    },
                    labelLine:{
                        show:false
                    },
                    label: {
                        normal: {
                            formatter:'{b}\n\n{c}%',
                            textStyle: {
                                fontSize: 14,
                                color: '#000'
                            },
                            align:'center'
                        },
                    },
                    emphasis:{
                        labelLine:{
                            show:false
                        },
                    }
                }
            ]
        }]
      });
      this.myChart4=myChart;
    },
    makeChart5(){
        var myChart = echarts.init(document.getElementById("myChart5"));
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
            title:{
                left:'left',
                text:'系统使用频率',
                textStyle:{
                color:'#7ABCFD'

                }
            },
            // legend: {
            //     data: ['信息资源','信息项'],
            //     right:"20%",
            //     top:'0',
            //     itemWidth: 36,
            //     itemHeight: 20,
            //     itemGap: 16,
            // },
            yAxis: {
            type: "value",
            name: '单位：人/日均',
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
            ],
            
            grid: {
            top: "80", //距上边距
            left: "8%", //距离左边距
            right: "8%", //距离右边距
            bottom: "60" //距离下边距
            },
            tooltip: {
            trigger: 'item',
            formatter: "{b}{a}数量 : {c}"
            }
        });
        this.myChart5=myChart;
    },
  },

  created(){},

  mounted(){
      this.makeChart1();
      this.makeChart21();
      this.makeChart22();
      this.makeChart23();
      this.makeChart24();
      this.makeChart3();
      this.makeChart4();
      this.makeChart5();
      var that=this;
      window.onresize = function () {
          that.myChart1.resize();
          that.myChart21.resize();
          that.myChart22.resize();
          that.myChart23.resize();
          that.myChart24.resize();
          that.myChart3.resize();
          that.myChart4.resize();
          that.myChart5.resize();
      }
  }

}
</script>

<style scoped>
.wrapper-xtml{
    background: #dee9ee;
    padding: 10px 20px 35px 20px;
    flex: 1 1 auto;
}
.floor{
    background: #fff;
    padding: 20px;
    margin-bottom: 10px;
}
.fristFloor .content{
    display: flex;
}
.fristFloor .pie{
    flex: 1;
}
.fristFloor .line{
    flex: 2;
}
.mychart2::after{
    display: block;
    content: '';
    height: 0;
    border-bottom: 1px solid #F2F2F2;
    width: 90%;
    margin: 0 auto;
}
.secFloor{
}
.con1,.con2{
    flex:1;
    display: flex;
    margin-top: 45px;
}
.chart3,.chart4{
    flex:1;
}
.status{
    flex:2;
}
.place{
    display: flex;
    background: #F4F4F5;
}
.secFloor h3{
    color:#4AA7FD;
    font-size: 18px;
    line-height: 45px;
}
.secFloor h4{
    background: #F4F8FB;
    border-bottom: 1px solid #fff;
    color: #4AA7FD;
    font-size: 16px;
    font-weight: bold;
    line-height: 60px;
    height: 60px;
    text-align: center;
}
.secFloor h5{
    font-weight: bold;
    text-indent: 4em;
    line-height: 55px;
    height: 55px;
}
.secFloor p{
    height: 40px;
    line-height: 40px;
    color: #666666;
    text-indent: 4em;

}
.left,.right,.mid{
    flex:1;
    padding-bottom: 20px;
}
.left{
    border-right: 1px solid #fff;
}
.right{
    border-left: 1px solid #fff;
}
.threeFloor{
    text-align: right;
}
</style>