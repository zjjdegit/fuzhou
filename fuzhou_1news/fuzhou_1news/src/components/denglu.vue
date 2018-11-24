<template>
<div class="box">
			<ul>
				<li class="log"><div>登录</div></li>
				<li class="inp" style="width: 607px;"><input type="text" name="" id="" placeholder="用户名" class="user"/></li>
				<li class="inp" style="width: 607px;"><input type="text" name="" id="" placeholder="请输入密码" class="password"/></li>
				<li class="inp" style="position: relative;"><input type="text" id="input" placeholder="请输入图片验证码" />
				<input type="button" id="checkCode" class="code" onclick="createCode()" style="width: 190px;height: 60px;position: absolute;right: 0;top: 0;"/>
				</li>
				<li class="word"><div><a href="javascript:;">登录遇到问题 |</a><a href="javascript:;"> 忘记密码</a></div></li>
				<li class="log_btn" onclick="validate()"><a href="javascript:;">登录</a></li>
				<li class="reg_btn"><a href="javascript:;">立即注册账号</a></li>
			</ul>
		</div>
</template>

<script>
export default {
	
	  components:{

	  },
	
	  props:{},
	
	  data(){
	    return {
	    
	    }
	  },
	
	  watch:{},
	
	  computed:{},
	  created(){},
	  mounted(){
	  	var code; //在全局定义验证码
		//产生验证码   
		window.onload = function() {
			createCode();
		}
		 
		function createCode() {
			code = "";
			var codeLength = 5; //验证码的长度   
			var checkCode = document.getElementById("checkCode");
			var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
				'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数   
			for(var i = 0; i < codeLength; i++) { //循环操作   
				var charIndex = Math.floor(Math.random() * 36); //取得随机数的索引   
				code += random[charIndex]; //根据索引取得随机数加到code上   
			}
			checkCode.value = code; //把code值赋给验证码   
		}
		//校验验证码   
		function validate() {
			var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写         
			if(inputCode.length <= 0) { //若输入的验证码长度为0   
				alert("请输入验证码！"); //则弹出请输入验证码   
			} else if(inputCode != code) { //若输入的验证码与产生的验证码不一致时   
				alert("验证码输入错误！"); //则弹出验证码输入错误   
				createCode(); //刷新验证码   
			} else { //输入正确时   
				alert("^-^"); //弹出^-^   
			}
		}
	  },
	  methods:{ 
	  	Code(){
	  	
	  	}


	  }
	 
	 }
</script>

<style scoped>
.box{width: 898px;height: 595px;border:1px solid #dee9ee;margin: 20px auto;}
.box ul{margin: 0;padding: 0;margin: 10px auto;width: 647px;}
.box ul li{list-style: none;width: 647px;height: 60px;line-height: 60px;}
.box .log{border-bottom: 1px solid #004464;position: relative;}
.box .log div{width: 80px;border-bottom: 1px solid #004464;position: absolute;bottom: 0;color: #004464;}
.box input{border: 1px solid #fff;width: 100%;height: 100%;border-bottom: 1px solid #dcdcdc;}
.box .inp{margin-top: 4px}
.box .word{position: relative;}
.box .word a{color: #666666;}
.box .word div{position: absolute;right: 0;}
.log_btn{background: #4aa7fd;border-radius: 10px;text-align: center;cursor: pointer;}
.reg_btn{margin-top: 30px;border: 1px solid #4aa7fd;border-radius: 10px;text-align: center;cursor: pointer;}
.log_btn a,.reg_btn a{font-family: "微软雅黑";font-size: 20px;color: #fff;}
.reg_btn a{color: #4aa7fd;}
a{text-decoration: none;}
.user{background: url("../assets/user.png")no-repeat;background-position-y: center;padding-left: 40px;}
.password{background: url("../assets/password.png")no-repeat;background-position-y: center;padding-left: 40px;}
.code {font-family: Arial;font-style: italic;font-weight: bold;border: 0;letter-spacing: 3px;color: blue;}
</style>