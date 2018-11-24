<template>
  <div class="wrapper-yw">
      <div class="fisrtFloor floor">
          <h3>整体情况</h3>
          <div class="content">
              <div class="num clearfix">
                  <div class="item">
                      <p class="name">检务业务总数</p>
                      <span>5000</span>
                  </div>
                  <div class="item">
                      <p class="name">年均办理量</p>
                      <span>5000</span>
                  </div>
                  <div class="item">
                      <p class="name">业务涉及材料</p>
                      <span>5000</span>
                  </div>
                  <div class="item">
                      <p class="name">数据需求量</p>
                      <span>5000</span>
                  </div>
              </div>
              <div class="chart1">
                  <div id="myChart1" style="height:100%;width:100%;"></div>
              </div>
          </div>
      </div>
      <div class="secFloor floor">
          <h3>TOP10高频检务业务</h3>
          <div class="content">
            <div class="map">
                <img src="../assets/images/map_03.png" width="100%" alt="">
            </div>
            <div class="chart2">
                <div id="myChart2" style="height:100%;width:100%;"></div>
            </div>
          </div>
      </div>
      <div class="threeFloor floor">
          <div class="pie1">
              <div id="myChart3" style="height:100%;width:100%;"></div>
          </div>
          <div class="pie2">
              <div id="myChart4" style="height:100%;width:100%;"></div>
          </div>
      </div>
      <div class="fourFloor floor">
          <h3>业务数据来源</h3>
          <div class="content">
              <div class="item">
                  <div id="myChart5" style="height:100%;width:100%;"></div>
              </div>
              <div class="item">
                  <div id="myChart6" style="height:100%;width:100%;"></div>
              </div>
              <div class="item">
                  <div id="myChart7" style="height:100%;width:100%;"></div>
              </div>
          </div>
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
        myChart2:null,
        myChart3:null,
        myChart4:null,
        myChart5:null,
        myChart6:null,
        myChart7:null,
    }
  },

  watch:{},

  computed:{},

  methods:{
      makeChart1(){
         var myChart = echarts.init(document.getElementById("myChart1"));
        myChart.setOption({
            color: ["#B8DDFF"],
            xAxis: {
            type: "category",
            data: [
                "侦查监督科",
                "公诉科",
                "未成年人\n办案组",
                "刑事执行\n检察局\n（监所科）",
                "民事行政\n生态资源\n检察科",
                "侦查监督科",
                "公诉科",
                "未成年人\n办案组",
                "刑事执行\n检察局\n（监所科）",
                "民事行政\n生态资源\n检察科",
                "民事行政\n生态资源\n检察科",
            ],
            axisTick: {
                show: false
            }
            },

            yAxis: {
                type: "value",
                name: '年均办理量',
                data: ["100", "200", "300", "400", "500"],
                axisTick: {
                    show: false
                }
            },
            series: [
                {
                    data: [80, 430, 170, 500, 90, 320, 180,92,15,16,65],
                    type: "bar",
                    barWidth: "18"
                },
                {
                    type:'line',
                    data:[80, 430, 170, 500, 90, 320, 180,92,15,16,65]
                }
            ],
            title:{
                x:'center',
                y:'0%',
                text:'部门检务业务年均办理量',
                textStyle:{
                    fontWeight:200
                }
            },
            legend: {},
            grid: {
            top: "40", //距上边距
            left: "40", //距离左边距
            right: "20", //距离右边距
            bottom: "60" //距离下边距
            },
            tooltip: {
            trigger: 'item',
            formatter: "数量 : {c}"
            }
        });
        this.myChart1=myChart;
      },
      makeChart2(){
        var myChart = echarts.init(document.getElementById("myChart2"));
        myChart.setOption({
            color: ["#B8DDFF"],
            title: {
                x:'center',
                y:'2%',
                text: 'TOP10高频检务业务年均办理量',
            },
            tooltip: {
                trigger: 'item',
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                position:'top',
                data: ["100", "200", "300", "400", "500"],
                axisTick: {
                    show: false
                }
                
            },
            yAxis: {
                type: 'category',      
                data:['审查逮捕案件','不批准逮捕复议案件','立案监督案件','自侦不立案复议案件','侦监适时介入侦查','提请批准延长羁押期限案件','批准延长侦查羁'],
                textStyle:{
                    align:'left'
                },
                axisTick: {
                    show: false
                },
                

            },
            series: [
                {
                    name: '办理量',
                    type: 'bar',
                    barWidth: "18",
                    data: [18, 2, 29, 100,44, 60,59]
                },
            ]
        });
        this.myChart2=myChart;
      },
      makeChart3(){
        var myChart = echarts.init(document.getElementById("myChart3"));
        var data = {
            id: 'echartPie',
            value: [32, 32, 32, 32,32],
            legend: ['表格', '证照', '证明', '文书','其他'],   
            color: ['#14C1F3', '#8B6EA8', '#F9A51A', '#BFD730','#7ABC7D'],
            title: '办理材料类别',
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
            x: '5%',
            y: '7%',
            textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#4CA8FD'
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
                right:'15%',
                selectedMode: false,
                itemWidth: 36,
                itemHeight: 20,
                itemGap: 16,
                data: data.legend,
                formatter: function(name) {
                    var oa = seriesData;
                    var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value + oa[4].value;
                    for (var i = 0; i < seriesData.length; i++) {
                        if (name == oa[i].name) {
                            return name +"     "+oa[i].value+ '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                hoverAnimation: data.hoverAnimation === false ? false : true,
                radius: ['50%', '67%'],
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
        this.myChart3=myChart;
      },
      makeChart4(){
            var myChart = echarts.init(document.getElementById("myChart4"));
            var data = {
                id: 'echartPie',
                value: [32, 320],
                legend: ['纸质', '电子版'],   
                color: ['#14C1F3', '#F78989'],
                title: '办理材料格式',
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
                x: '5%',
                y: '7%',
                textStyle: {
                    fontWeight: 400,
                    fontSize: 16,
                    color: '#4CA8FD'
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
                    right:'15%',
                    selectedMode: false,
                    itemWidth: 36,
                    itemHeight: 20,
                    itemGap: 16,
                    data: data.legend,
                    formatter: function(name) {
                        var oa = seriesData;
                        var num = oa[0].value + oa[1].value;
                        for (var i = 0; i < seriesData.length; i++) {
                            if (name == oa[i].name) {
                                return name +"     "+oa[i].value+ '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
                            }
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    hoverAnimation: data.hoverAnimation === false ? false : true,
                    radius: ['50%', '67%'],
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
            this.myChart4=myChart;
      },
       makeChart5(){
        var myChart = echarts.init(document.getElementById("myChart5"));
        myChart.setOption({
            color: ["#9DDDF9",'#F7898A','#14C1F3'],
            xAxis: {
                type: "category",
                data: [
                    "内部共享",
                    "外部共享",
                    "自行填写",
                ],
                axisTick: {
                    show: false
                }
            },
            yAxis: [
                {
                    type: "value",
                    name: '材料数量',
                    gridIndex: 0,
                    min:0,
                    max:5000,
                    splitNumber:10,
                    data: ["100", "500", "1000", "1500", "2000",'2500','3000','3500','4000','4500','5000'],
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        show: false
                    },
                    axisLabel:{
                        interval:500
                    }
                },
                {
                    type: "value",
                    show:false,
                    name: '材料数量',
                    gridIndex: 0,
                    data: ["100", "500", "1000", "1500", "2000",'2500','3000','3500','4000','4500','5000'],
                    min: 0,
                     max: 100,
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    
                }
            ],
            series: [
                {
                    data: [
                        {
                            value:993,
                            itemStyle:{
                                color:'#B8DDFF'
                            },   
                        },
                        {
                            value:635,
                            itemStyle:{
                                color:'#F7898A'
                            },        
                        },
                        {
                            value:3424,
                            itemStyle:{
                                color:'#85BFFE'
                            },         
                        }
                        ],
                    type: "bar",
                    barWidth: "70%",
                    zlevel: 11,
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    label:{
                        show:true,
                        color:'#000',
                        position:'top'
                    },
                },
                {
                    type: 'bar',
                    barWidth: '70%',
                    xAxisIndex: 0,
                    yAxisIndex: 1,
                    barGap: '-100%',
                    data: [100, 0, 100, ],
                    itemStyle: {
                        normal: {
                            color: 'rgba(238,242,246,0.6)'
                        },
                        emphasis:{

                            color:"rgba(238,242,246,0.6)"
                        }
                    },
                    zlevel: 9
                }
            ],
            title:{
                x:'center',
                y:'0%',
                text:'业务数据来源',
                textStyle:{
                    fontWeight:200
                }
            },
            legend: {},
            grid: {
                top: "18%", //距上边距
                left: "15%", //距离左边距
                right: "18%", //距离右边距
                bottom: "13%" //距离下边距
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        opacity: 0
                    }
                },
                formatter: "数量 : {c}"
            }
        });
        this.myChart5=myChart;
      },
       makeChart6(){
            var myChart = echarts.init(document.getElementById("myChart6"));
             myChart.setOption({
            color: ["#14C1F3"],
            xAxis: {
                type: "category",
                data: [
                    "表格",
                    "证照",
                    "证明",
                    "文书",
                    "其他",
                ],
                axisTick: {
                    show: false
                }
            },
            label:{
                show:true,
                color:'#000',
                position:'top'
            },
            yAxis: [
                {
                    type: "value",
                    name: '材料数量',
                    min:0,
                    max:100,
                    splitNumber:10,
                    data: ['0','10','20','30','40','50','60','70','80','90','100'],
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        show: false
                    },
                    axisLabel:{
                        interval:10
                    },
                },
                {
                    type: "value",
                    show:false,
                    gridIndex: 0,
                    data: ['0','10','20','30','40','50','60','70','80','90','100'],
                    min: 0,
                    max: 100,
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                }
            ],
            series: [
                {
                    data: [15,25,35,10,45],
                    type: "bar",
                    barWidth: "90%",
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    zlevel:1
                },
                {
                    data: [100,0,100,0,100],
                    type: "bar",
                    barWidth: "90%",
                    xAxisIndex: 0,
                    yAxisIndex: 1,
                    barGap: '-100%',
                    label:{
                        show:false
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(238,242,246,0.6)'
                        },
                        emphasis:{

                            color:"rgba(238,242,246,0.6)"
                        }
                    },
                }
            ],
            title:{
                x:'center',
                y:'0%',
                text:'内部数据共享',
                textStyle:{
                    fontWeight:200
                }
            },
            legend: {},
            grid: {
            top: "18%", //距上边距
            left: "15%", //距离左边距
            right: "15%", //距离右边距
            bottom: "13%" //距离下边距
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        opacity: 0
                    }
                },
                formatter: "数量 : {c}"
            }
        });
            this.myChart6=myChart;
      },
       makeChart7(){
            var myChart = echarts.init(document.getElementById("myChart7"));
             myChart.setOption({
            color: ["#F7898A"],
                xAxis: {
                type: "category",
                data: [
                    "表格",
                    "证照",
                    "证明",
                    "文书",
                    "其他",
                ],
                axisTick: {
                    show: false
                }
            },
            label:{
                show:true,
                color:'#000',
                position:'top'
            },
            yAxis: [
                {
                    type: "value",
                    name: '材料数量',
                    min:0,
                    max:100,
                    splitNumber:10,
                    data: ['0','10','20','30','40','50','60','70','80','90','100'],
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        show: false
                    }
                },
                {
                    type: "value",
                    show:false,
                    gridIndex: 0,
                    data: ['0','10','20','30','40','50','60','70','80','90','100'],
                    min: 0,
                    max: 100,
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                }
            ],
            series: [
                {
                    data: [15,25,35,10,45],
                    type: "bar",
                    barWidth: "90%",
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    zlevel:1
                },
                {
                    data: [100,0,100,0,100],
                    type: "bar",
                    barWidth: "90%",
                    xAxisIndex: 0,
                    yAxisIndex: 1,
                    barGap: '-100%',
                    label:{
                        show:false
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(238,242,246,0.6)'
                        },
                        emphasis:{

                            color:"rgba(238,242,246,0.6)"
                        }
                    },
                }
            ],
            title:{
                x:'center',
                y:'0%',
                text:'业务数据来源',
                textStyle:{
                    fontWeight:200
                }
            },
            legend: {},
            grid: {
            top: "18%", //距上边距
            left: "15%", //距离左边距
            right: "15%", //距离右边距
            bottom: "13%" //距离下边距
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        opacity: 0
                    }
                },
                formatter: "数量 : {c}"
            }
        });
            this.myChart7=myChart;
      },


  },

  created(){},

  mounted(){
      this.makeChart1();
      setTimeout(()=>{
      this.makeChart2(); 
        
      },300)
      this.makeChart3();
      this.makeChart4();
      this.makeChart5();
      this.makeChart6();
      this.makeChart7();
      var that=this;
      window.onresize=function(){
          that.myChart1.resize();
          that.myChart2.resize();
          that.myChart3.resize();
          that.myChart4.resize();
          that.myChart5.resize();
          that.myChart6.resize();
          that.myChart7.resize();

      }
  }

}
</script>

<style scoped>
@media screen and (max-width: 1688px) {
    .fisrtFloor .item{
        margin-left: 15%;
    }
    .fisrtFloor .item:nth-child(3){
        margin-bottom: 30px;
    }
    .pie1,.pie2{
        min-height: 450px !important;
        border-radius: 10px !important;
    }

}
@media screen and (max-width: 1500px) {
    .pie1,.pie2{
        min-height: 350px !important;
        border-radius: 10px !important;
    }

}
@media screen and (max-width: 1400px) {
    .pie1,.pie2{
        min-height: 250px !important;
        border-radius: 10px !important;
    }

}
.wrapper-yw{
    background: #E7ECEE;
    padding:10px 20px 35px 20px;
    flex:1 1 auto;
}
h3{
    height: 60px;
    line-height: 60px;
    color:#4AA7FD;
    font-size: 18px;
}
.floor{
    border-radius: 10px;
    background: #fff;
    padding: 20px 30px;
}
.fisrtFloor,.secFloor,.threeFloor{
    margin-bottom: 10px;
}
.fisrtFloor .content{
    display: flex;
}
.num{
    flex:1;
}
.chart1{
    flex:2;
}
.fisrtFloor .item{
    float: left;
    width: 226px;
    height: 110px;
    border: 2px solid #DBDBDB;
    margin-right: 20px;
    font-size: 18px;
    text-align: center;
}
.fisrtFloor .item:nth-child(1){
    margin-bottom: 30px;
}
.fisrtFloor .item:nth-child(2){
    margin-bottom: 30px;
}
.fisrtFloor .item::before{
    content: "";
    display: block;
    height: 3px;
    width: 50%;
    margin: 0 auto;
    margin-top: -2px;

    background: #fff;
}
.fisrtFloor .item p{
    text-align: center;
    height: 33px;
    line-height: 33px;
    margin-top: 14px;
}
.fisrtFloor .item span{
    display: inline-block;
    color: #4AA7FD;
    font-size: 26px;
    height: 36px;
    line-height: 36px;
}
.secFloor .content{
    display: flex;
}
.secFloor .map{
    flex: 1;
    position: relative;
    height: auto;
}
.secFloor .map img{
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.secFloor .chart2{
    flex: 1;
}
.threeFloor{
    display: flex;
    background: #E7ECEE;
    padding: 0;
}
.pie1,.pie2{
    flex:1;
    background: #fff;
    border-radius: 10px;
    min-height: 512px;
    position: relative;
}
#myChart3,#myChart4{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.pie1{
    margin-right: 10px;
}
.fourFloor .content{
    display: flex;
}
.fourFloor .item{
    flex:1;
    min-height: 450px;
    position: relative;
}
.fourFloor .item:nth-child(1){
    max-width: 450px;
}
.fourFloor .item:nth-child(1)::before{
    position: absolute;
    right: 0;
    width: 0px;
    content:'';
    border-right:1px solid #DDDDDD;
    height: 60%;
    margin-top:10%;
}
.fourFloor .item:nth-child(2)::before{
    position: absolute;
    right: 0;
    width: 0px;
    content:'';
    border-right:1px solid #DDDDDD;
    height: 60%;
    margin-top:10%;
}
</style>