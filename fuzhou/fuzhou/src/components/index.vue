<template>
  <div class="wrapper">
      <Header/>
      <el-menu
            :default-active="activeIndex1"
            class="el-menu-demo-top"
            mode="horizontal"
            @select="handleSelect"
            background-color="#4AA7FD"
            text-color="#fff"
            active-text-color="#fff">
            <el-menu-item v-for="(item,index) in navList" :index="item.index" :key="index">
                <router-link :to="item.name">
                {{item.navItem}}
                </router-link>
            </el-menu-item>
            </el-menu>
        <el-container class="el-container">
            
            <el-aside width="auto">
              <Sidebar :activeLeftNav='activeLeftNav' @changeTopAct="changeTopAct"/>

            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
  </div>
</template>

<script>
import $ from "jquery";
import Header from './header'
import Sidebar from './sidebar'
import sjmlIndex from './sjmlIndex'
import {mapMutations,mapGetters} from 'vuex'
export default {

  components:{
      Header,
      Sidebar,
      sjmlIndex
  },

  props:{},

  data(){
    return {
        activeIndex1: '1',
        activeLeftNav: ['1'],
        navList:[
            {name:'/index',navItem:'首页',index:'0'},
            {name:'/sjmlIndex',navItem:'数据目录',index:'1'},
            {name:'2',navItem:'系统目录',index:'2'},
            {name:'/ywzymlIndex',navItem:'业务资源目录',index:'3'},
            {name:'4',navItem:'用户中心',index:'4'},
            {name:'5',navItem:'互动交流',index:'5'},
        ]
    }
  },
    
  watch: {
    changeChartWidth:function(){
        if(this.changeChartWidth){
            $('.el-main').animate({
                'margin-left':65
            })
        }else{
            $('.el-main').animate({
                'margin-left':240
            })
        }
    },
  },

  computed: {
    ...mapGetters([
        'changeChartWidth'
      ])
  },

  methods:{
      sureRoute(){
            let routePath=this.$route.path;
            for(let i=0;i<this.navList.length;i++){
                if(routePath===this.navList[i].name){
                    this.activeLeftNav=[this.navList[i].index];
                    this.activeIndex1=this.navList[i].index;
                }
            }
      },
      handleSelect(key, keyPath) {
        this.activeLeftNav=keyPath;
      },
      changeTopAct(key){
          this.activeIndex1=key;
      }
  },

  created(){},

  mounted(){
      this.sureRoute();
  }

}
</script>

<style scoped>
.el-menu-demo-top .el-menu-demo{
    width: 100%;
    height: 50px;
    line-height: 50px;
}
.el-menu-demo-top {
    width: 100% ;
    position: fixed !important;
    top: 94px;
    z-index: 9;
}
.el-menu-demo-top .el-submenu{
    height: 50px;
    line-height: 50px;
}
.el-menu-demo-top .el-menu-item{
    font-size: 18px;
    height: 50px !important;
    line-height: 50px !important;
    margin: 0 3%;
    padding: 0;
}
.el-menu-demo-top .el-menu-item:nth-child(1){
 margin-left: 90px;
}
.el-aside{
    background-color: #f3f3f3;
    position: fixed;
    height: 100%;
z-index: 9;
}
.el-main{
    padding: 0;
    margin-left: 240px;
}
.wrapper{
    height: 100%;
    width: 100%;
}
.container{
    height: 100%;
    width: 100%;
}
.el-container{
    margin-top: 145px;
}
</style>