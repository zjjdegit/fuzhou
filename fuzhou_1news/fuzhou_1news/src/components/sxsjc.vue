<template>
  <div class="wrapper-sxsjc">
      <div class="itemMap">
          <h3>事项数据串</h3>
          <h2>业务流程化   流程数据化   数据标准化</h2>
          <div class="content">
              <img src="../assets/images/sxsjcbg1_03.png" width="100%" alt="">
          </div>
      </div>
      <div class="table">
        <template>
            <el-table
                :data="tableData"
                border
                :header-cell-style="{background:'#DFEFFC'}"
                style="width: 100%;">
                <el-table-column
                type="index"
                label="序号"
                width="75"
                align="center"
                :index="indexMethod">
                </el-table-column>
                <el-table-column
                prop="orignName"
                label="数源部门"
                align="center">
                </el-table-column>
                <el-table-column
                prop="dateName"
                align="center"
                label="数据名称">
                </el-table-column>
                <el-table-column
                prop="paperOrEle"
                align="center"
                label="纸质/电子版">
                </el-table-column>
                <el-table-column
                prop="document"
                align="center"
                label="数据类型">
                </el-table-column>
                <el-table-column
                prop="address"
                align="center"
                label="需求部门">
                </el-table-column>
                <el-table-column
                prop="sharedDemand"
                align="center"
                label="共享需求">
                </el-table-column>
                <el-table-column
                prop="look"
                align="center"
                label="查看">
                <template slot-scope="scope">
                	 <router-link to="/index2/six" target="_blank">
                    <el-button
                    type="text"
                    style="color:#52ABFD;">
                    详情
                    </el-button>
                    </router-link>
                </template>
                </el-table-column>
            </el-table>
        </template>
      </div>
      <div class="pages">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="4000">
        </el-pagination>
      </div>
  </div>
</template>

<script>
export default {

  components:{},

  props:{},

  data(){
    return {
        tableData: [
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
            {
                dateName: '提请批准逮捕书',
                orignName: '公安机关、监察委   ',
                paperOrEle: '纸质',
                document:"文书",
                address:'鼓楼区人民检察院',
                sharedDemand:'外部共享',
                look:'详情'
            },
        ],
        currentPage4: 4,
        parts:['侦查监督','公诉','刑事执行检察','民事行政检察','控告检察','刑事申诉检察','。。。。。。'],
        material:['表格','证照','证明','文书','其他'],
        orign:['外部共享','内部共享','自行填写'],
        dateShare:['其他区域检察院','公安机关/检察委','人民法院','其他机构']
    }
  },

  watch:{},

  computed:{},

  methods:{
      indexMethod(index) {
          return index+1
      },
      detail(a, b){
          console.log(a, b)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },

  created(){},

  mounted(){}

}
</script>

<style scoped>
.wrapper-sxsjc{
    flex: 1 1 auto;
  background: #dee9ee;
  padding:  24px 30px 50px 30px;
}
.itemMap{
    padding: 20px;
    background: #fff;
}
.itemMap h3{
    color:#50A9FD;
    font-size:18px;
    line-height: 18px;   
}
.itemMap h2{
    color:#005C99;
    font-size:32px;
    line-height: 38px;
    height: 38px;
    margin-bottom: 10px;   
    text-align: center;
}
.pages{
    background: #fff;

}
.wrapper-sxsjc>div{
    margin-bottom: 10px;
}
.content{
    display:flex;
    text-align: center;
}
</style>