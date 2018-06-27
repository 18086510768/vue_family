import Util from '@/libs/util.js'
import deletePop from '@/components/comon/deletePop'

export default {
  name: 'product',
  data () {
    return {
      msg: '分离式',
      messageItem: [{a:1},{b:2}],          //传给子组件的数据
      isShow: false             //是否显示子组件
    }
  },
  components: {
    deletePop
  },
  methods: {
    closePanel(msg) { //关闭弹出窗
      console.log('子组件传递参数==>',msg)
      this.isShow = false
    },
    openPanel() {
      this.isShow = true
    }
  },
  created () {

  },
  mounted () {
    
  },
  watch: {//监听全局变量navNum的变化

  }
}