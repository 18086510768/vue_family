<template>
  <div class="register">
  	<img src="../../assets/img/401.gif" class="head_img" alt="">
  	<p class="login_title">用户注册</p>
    <template>
      <yd-cell-group>
        <yd-cell-item>
            <span slot="left">用户名：</span>
            <yd-input slot="right" required v-model="register.username" max="20" placeholder="请输入用户名"></yd-input>
        </yd-cell-item>

        <yd-cell-item>
            <span slot="left">密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
            <yd-input slot="right" type="password" v-model="register.pw" placeholder="请输入密码"></yd-input>
        </yd-cell-item>

        <yd-cell-item>
            <span slot="left">确认密码：</span>
            <yd-input slot="right" type="password" v-model="register.pw2" placeholder="请输入密码"></yd-input>
        </yd-cell-item>

          <yd-cell-item>
              <span slot="left">邮箱：</span>
              <yd-input slot="right" v-model="register.email" :debug="true" regex="email" placeholder="请输入邮箱地址"></yd-input>
          </yd-cell-item>

          <yd-cell-item>
              <span slot="left">手机号：</span>
              <yd-input slot="right" v-model="register.phone" regex="mobile"  placeholder="请输入手机号码"></yd-input>
          </yd-cell-item>

          <yd-cell-item>
              <span slot="left">银行卡号：</span>
              <yd-input slot="right" v-model="register.card" regex="bankcard" placeholder="请输入银行卡号"></yd-input>
          </yd-cell-item>
      </yd-cell-group>
    </template>

	  <yd-button size="large"  type="hollow" @click.native="reg">确认注册</yd-button>
    <yd-button size="large"  type="hollow" @click.native="back">返回登录</yd-button>

  </div>
</template>

<script>
import {isLogin} from '@/api/api' //引入api
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog' //弹出组件
import {pnStatus,emStatus,yhStatus} from '@/checking' //引入验证

export default {
  name: 'register',
  data () {
    return {
      msg: '注册',
      register: {
        action: 'register',
        username: '',
        pw:'',
        pw2:'',
        email: '',
        phone: '',
        card: '',
      }
    }
  },
  components: {

  },
  methods: {
      back() {//返回登录
        this.$router.push({path:'/login'});
      },
      reg() {//注册接口
        let regParams = this.register;
        if(this.check()){//验证成功
            isLogin(regParams).then(
          res => {
            console.log(res.body);
            if(res.body.reg_result) {
              this.$dialog.toast({
                    mes: res.body.msg,
                    timeout: 1500,
                    icon: 'success',
                    callback: () => {
                        this.$router.push({path:'/login'});
                    }
                });
            }else {
                this.$dialog.toast({
                    mes: res.body.msg,
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
        }
      },
      check() {
        /* ===================
            表单验证函数,
            需引入checking.js
           =================== */
        //所有的验证条件
        let a = pnStatus(this.register.phone);
        let b = emStatus(this.register.email);
        let c = yhStatus(this.register.card);
        if(a == false) {
            this.$dialog.toast({
                mes: '电话号码有误',
                timeout: 1500,
                icon: 'error'
            });
            return false;
        }else if(b == false) {
            this.$dialog.toast({
                mes: '邮箱有误',
                timeout: 1500,
                icon: 'error'
            });
            return false;
        }else if(c == false) {
            this.$dialog.toast({
                mes: '银行卡有误',
                timeout: 1500,
                icon: 'error'
            });
            return false;
        }else {
           return true;
        }
      }
  },
  created () {

  },
  activated () { //当keep-alive生效时执行,获取session中的scrollTop()的值
      for(let key in this.register) {
        if(key == 'action') { //每次清空对象
          console.log(this.register[key]);
          this.register[key] = 'register';
        }else {
          this.register[key] = '';
        }
      }
  },
  mounted () {

  },
  watch: {//监听全局变量navNum的变化

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.register {
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
    margin-top:.5rem;
  }

  .btn-hollow:nth-of-type(1) {
    margin:.5rem 4% 0 16%;
  }

  .head_img {
    display:block;
    width:2.5rem;
    height:2.5rem;
    border-radius:50%;
    margin:.5rem auto 0 auto;
    overflow:hidden;
  }

  .login_title {
    color:#fff;
    margin-top:.5rem;
  }

}
</style>
