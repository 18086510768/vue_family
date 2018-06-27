<template>
  <div class="pop" v-if="isShow">
  	 <p class="msg">
  	 	<span class="close-panel" @click="closePanel">X</span>
  	 	{{msg}}
  	 </p>
  </div>
</template>
<script>
export default {
  props:['messageItem','isShow'], //接收父组件的值
  name: 'pop',
  data () {
    return {
      msg: '弹出窗',
    }
  },
  components: {

  },
  methods: {
    closePanel() {
    	let someElse = '通知关闭'
      	this.$emit('closePanel',someElse) //调用父组件自定义方法关闭弹窗，并传递参数someElse
    }
  },
  created () {

  },
  mounted () {
    console.log('接收到来自父组件的值==>',this.messageItem)
  },
  watch: {//监听全局变量navNum的变化

  }
}
</script>
<style scoped lang="scss">
	.pop {
		width:80vw;
		height:40vw;
		margin:50vw auto;
		color:#fff;
		font-size:8vw;
		line-height:40vw;
		background:#000;
		box-shadow: 0 5px 10px #eee;
		.msg {
			position:relative;
			.close-panel {
				position: absolute;
			    right: 3vw;
			    top: -14vw;
			}
		}
	}
</style>