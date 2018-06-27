<template>
  <div class="login">
  	<img src="../../assets/img/401.gif" class="head_img" alt="">
  	<p class="login_title">用户登录</p>
    <yd-cell-group>
        <yd-cell-item>
            <span slot="left">用户名：</span>
            <yd-input slot="right" required v-model="username" max="20" placeholder="请输入用户名"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
            <yd-input slot="right" type="password" v-model="pw" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
    </yd-cell-group>

	<yd-button size="large"  type="hollow" @click.native="login">登录</yd-button>
  <yd-button size="large"  type="hollow" @click.native="regi">注册</yd-button>

  </div>
</template>

<script>
import axios from 'axios'
import {isLogin} from '@/api/api' //引入api
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog' //弹出组件

export default {
  name: 'login',
  data () {
    return {
      msg: '登录',
      username:'admin',
      pw:'123456',
    }
  },
  components: {

  },
  methods: {
  	login() {//登录接口
    	let loginParams = {'name':this.username,'pw':this.pw};

    	isLogin(loginParams).then(
    	res => {
    		console.log(res.data);
    		if(res.data.code == 9) {//登录成功
    			this.$dialog.loading.open('登录成功');
    			let token = JSON.stringify(res.data.token);
    			//缓存用户信息
    			this.Util.localData.setData('token',token);

    			//获取缓存的字符串
    			// let user = sessionStorage.getItem('user');
    			// console.log(eval('('+user+')'));
          setTimeout(() => {
              this.$dialog.loading.close();
              this.$router.push({path:'/first'});
          },1000);

    		}else {
    			this.$dialog.toast({
                mes: '用户名或密码错误！',
                timeout: 1500,
                icon: 'error',
                callback: () => {

                }
          });
    		}
    	},
    	err => {
    		console.log(err);
    	});
  	},
    regi() {//去注册界面
      this.$router.push({path:'/register'});
    }
  },
  created () {

  },
  mounted () {

  },
  watch: {//监听全局变量navNum的变化

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.login {
	font-size:.4rem;
	background:#2196F3;
	.m-cell-box {
		width:80%;
		margin: .5rem auto 0 auto;

		.m-cell {
			border-radius: 10px;
		}

		.m-cell:after {
			border-bottom:0;
		}
	}

	.btn-block {
		float:left;
		width:30%;
	}

	.btn-hollow {
		margin-top:1rem;
	}

	.btn-hollow:nth-of-type(1) {
		margin:1rem 4% 0 16%;
	}

	.head_img {
		display:block;
		width:2.5rem;
		height:2.5rem;
		border-radius:50%;
		margin:1.5rem auto 0 auto;
		overflow:hidden;
	}

	.login_title {
		color:#fff;
		margin-top:.5rem;
	}
}

</style>
