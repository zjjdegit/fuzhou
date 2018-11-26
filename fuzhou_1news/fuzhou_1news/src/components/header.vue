<template>
  <div class="wrapper-header">
      <div class="logo"><router-link :to="{name:'home'}"><img src="../assets/logo.png" alt=""></router-link> <span> 福州市人民检察院数据资源平台</span></div>
      <div class="navbarWrap">
        <ul class="navbar">
          <li>
            <router-link to="/denglu" target="_blank">登陆</router-link>
          </li>
          <li class="out">
            <a>注册</a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {},

  data() {
    return {};
  },

  watch: {},

  computed: {},

  methods: {},

  created() {},

  mounted() {}
};
</script>

<style scoped>
a{
  cursor: pointer;
}
.wrapper-header{
  width: 100%;
  height: 94px;
  border-bottom: 1px solid #DEE9EE;
  display: flex;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 9;
}
.wrapper-header .logo{
  height: 94px;
  font-size: 28px;
  color: #fff;
  vertical-align: middle;
  flex:0 1 553px;
}
.wrapper-header a{
  vertical-align: middle;
  display: inline-block;
}
.logo img{
  height: 64px;
  margin-left: 64px;
  margin-top: 20px;
}
.logo span{
  vertical-align: middle;
  color: #004464;
  height: 82px;
  line-height: 82px;
  margin-top: 12px;
  margin-left: 20px;
  font-weight: 600;
}
.navbarWrap{
  height: 94px;
  flex:1;
}
.navbarWrap .title{
  float: left;
  display: inline-block;
  height: 82px;
  line-height: 82px;
  margin-top: 12px;
  margin-left: 30px;
  color: #4AA7FD;
  font-size: 28px;
}
.navbarWrap .navbar{
  float: right;
  height: 54px;
  padding: 38px 0 0 0;
  margin-right: 22px;
}
.navbar li{
  float: left;
  padding: 0 8px;
  border-right: 1px solid #333333;
  font-size: 16px;
  height: 16px;
  line-height: 16px;
}
.out{
  border-right: none !important;
}
</style>