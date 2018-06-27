<template>
  <div class="language">
  	 <p class="msg">{{$t('self.name')}}</p>
  	 <p class="msg">{{$t('login.pwdPlaceholder')}}</p>
  	 <p class="msg">{{$t('login.forgetPassword')}}</p>
  	 <p class="msg">{{$t('login.nullTip')}}</p>
  	 <button @click="changeLang('zh')">中文</button>
  	 <button @click="changeLang('en')">英文</button>
  </div>
</template>
<script>
export default {
  name: 'language',
  data () {
    return {
      msg: '切换语言',
    }
  },
  components: {

  },
  methods: {
    changeLang(lang) { //关闭弹出窗
      this.$i18n.locale = lang
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
<style scoped lang="scss">
	button {
		width:20vw;
		height:10vw;
		color:#fff;
		line-height: 10vw;
		background: #000;
		border-radius: 5px;
		outline:none;
		border:none;
		margin-top: 10vw;
	}
</style>