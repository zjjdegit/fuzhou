<template>
  <div class="wrapper-side">
		<button @click="turnisCollapse" v-show="!this.isCollapse" class="listbtn1 listbtn">
				<i style="diaplay:inline-block;height:56px;"><img src="../assets/caidan.png" width="29px" style="margin-right:20px;" alt=""></i></button>
			<button @click="turnisCollapse" v-show="this.isCollapse"  class="listbtn2 listbtn"><img src="../assets/caidan2.png" width="29px" alt=""></i></button>
		<div class="barWrap">
		<el-menu
			class="el-menu-vertical-demo1" :collapse="isCollapse"
			:default-active="activeLeftNav[0]"
			:default-openeds='activeLeftNav'
			:router='true'
			@open="handleOpen"
			@close="handleClose"
			background-color="#F3F3F3"
			text-color="#000"
			active-text-color="#13679F">
			<el-submenu index="1">
				<template slot="title">
					<router-link to="/sjmlIndex" active-class="active">
					<i style="margin-right:30px;"><img src="../assets/xtml.png" width="21px" alt=""></i>
					<span>数据目录</span>
					</router-link>
				</template>
				<el-menu-item index="1-1">区域数据目录</el-menu-item>
				<el-menu-item index="1-2">主题数据目录</el-menu-item>
				<el-menu-item index="1-3">共享开放目录</el-menu-item>
			</el-submenu> 
			<el-submenu index="2">
				<template slot="title">
					<router-link to="">
					<i style="margin-right:30px;"><img src="../assets/ywzyml.png" width="21px" alt=""></i>
					<span>系统目录</span>
					</router-link>
				</template>
				<el-menu-item index="2-1">区域数据目录</el-menu-item>
				<el-menu-item index="2-2">主题数据目录</el-menu-item>
				<el-menu-item index="2-3">共享开放目录</el-menu-item>
			</el-submenu>  
			<el-submenu index="3">
				<template slot="title">
					<router-link to="/ywzymlIndex" active-class="active">
					<i style="margin-right:30px;"><img src="../assets/yhzx.png" width="21px" alt=""></i>
					<span>业务资源目录</span>
					</router-link>
				</template>
				<el-menu-item index="3-1">区域数据目录</el-menu-item>
				<el-menu-item index="3-2">主题数据目录</el-menu-item>
				<el-menu-item index="3-3">共享开放目录</el-menu-item>
			</el-submenu>  
			<el-submenu index="4">

				<template slot="title">
				<router-link to="">
					<i style="margin-right:30px;"><img src="../assets/yhzx.png" width="21px" alt=""></i>
					<span>用户中心</span>
				</router-link>
				</template>
				<el-scrollbar style="height:200px;">

					<el-menu-item index="4-1">目录注册</el-menu-item>
					<el-menu-item index="4-2">信息项信息</el-menu-item>
					<el-menu-item index="4-3">数据标准</el-menu-item>
					<el-menu-item index="4-4">接口注册</el-menu-item>
					<el-menu-item index="4-5">目录清单统计</el-menu-item>
					<el-menu-item index="4-6">待办任务</el-menu-item>
					<el-menu-item index="4-7">我的申请</el-menu-item>
				</el-scrollbar>

			</el-submenu>
			<el-submenu index="5">
				<template slot="title">
					<router-link to="">
					<i style="margin-right:30px;"><img src="../assets/hdjl.png" width="21px" alt=""></i>
					<span>互动交流</span>
					</router-link>
				</template>
				<el-menu-item index="5-1">目录注册</el-menu-item>
				<el-menu-item index="5-2">信息项信息</el-menu-item>
				<el-menu-item index="5-3">数据标准</el-menu-item>
				<el-menu-item index="5-4">接口注册</el-menu-item>
			</el-submenu>  
		</el-menu>
		<div class="contact" v-show="!this.isCollapse">
			<p>温馨提示&nbsp;&nbsp;技术支持:</p>
			<p>13777819956&nbsp;&nbsp;17767204812</p>
		</div>
		</div>
		<!-- <router-view></router-view> -->

  </div>
</template>

<script>
import $ from "jquery";
export default {
  components: {},

  props:['activeLeftNav'],

  data() {
    return {
			isCollapse: false,
			navList:[
            {name:'/index',navItem:'首页'},
            {name:'/sjmlIndex',navItem:'数据目录'},
            {name:'/ywzymlIndex',navItem:'系统目录'},
            {name:'3',navItem:'业务资源目录'},
            {name:'4',navItem:'用户中心'},
            {name:'5',navItem:'互动交流'},
        ]
    };
  },

  watch: {
    isCollapse() {
      if (!this.isCollapse) {
			$('.barWrap').animate({
					'width':'240px'
				})
					setTimeout(() => {
						$(".el-menu-vertical-demo1 .el-menu-item").css({
							"padding-left": "40px"
						});
						$(".el-menu-vertical-demo1 .el-submenu__title a").css({
							"padding-left": "40px"
						});
						$(".el-menu-vertical-demo1 .el-menu-item").css({
							"padding-left": "80px"
						});
					}, 350);
			}else{
				$('.barWrap').animate({
					'width':'65px'
				})
				setTimeout(() => {
					$(".el-menu-vertical-demo1 .el-submenu__title a").css({
						"padding": "0 20px"
					});
				}, 350);
			}
    }
  },

  computed: {
	},

  methods: {
    handleOpen(key, keyPath) {
			console.log(key, keyPath)
			this.$emit('changeTopAct',key);
    },
    handleClose(key, keyPath) {
			console.log(key, keyPath)
			this.$emit('changeTopAct',key);
    },
    turnisCollapse() {
			this.isCollapse = this.$store.state.isCollapse = !this.isCollapse;
		},
  },

  created() {},

  mounted() {
		$(".el-menu-vertical-demo1 .el-menu-item ").css({
		"padding-left": "40px"
		});
		$(".el-menu-vertical-demo1 .el-submenu__title a").css({
		"padding-left": "40px"
		});
		$(".el-menu-vertical-demo1 .el-menu-item").css({
		"padding-left": "80px"
		});
  }
};
</script>

<style>
.el-scrollbar__thumb {
  background-color: #c2c4c1 !important;
}
.el-scrollbar__bar.is-vertical {
  background-color: #003d64;
}
.el-scrollbar__wrap {
  overflow-x: hidden !important;
}
.el-submenu__title {
	padding:0 !important;
}
</style>

<style scoped>
.wrapper-side{
  display: flex;
height: 100%;
/* position: relative; */
}
.barWrap {
  width: 240px;
  flex:0 1 auto;
	height: 100%;
}
.barWrap a{
	color:#000;
	display: block;
}
.barWrap .active{
	color:#035695;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 700px;
}
.el-submenu.is-opened {
  max-height: 250px;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}

.el-menu{
	border-right:none;
}
.listbtn {
  background: transparent;
  position: fixed;
	top:94px;
	left: 20px;
  z-index: 1;
}
.listbtn1 {
  border: none;
  font-size: 0;
}
.listbtn2 {
  border: none;
  font-size: 0;
}
button.listbtn {
  cursor: pointer;
  height: 50px;
}
button:focus {
  border: none;
  outline: none;
}
.contact{
	text-align:center;
	margin-top: 23px;
}
.contact::before{
	display: block;
	content:'';
	width: 190px;
	margin:0 auto;
	border-top:1px solid #C5C5C5;
}
.contact>p{
	line-height: 28px;
	font-size:14px;
}
</style>