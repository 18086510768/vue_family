import Util from '@/libs/util.js'

export default {
  name: 'product',
  data () {
    return {
      msg: '分离式',
      username:'admin',
      pw:'123456',
    }
  },
  components: {

  },
  methods: {
  	test(x) {
      let [a,b,c] = [1,2,{'a':1,'b':6}];
      [b,a] = [a,b]
      console.log('解构赋值之ab的值对调：',`${a}===${b}`);
    },
    rest(...obj) {
      console.log(...obj)
    },
    add(...num) {//rest解决未知个数参数操作
      let sum = 0
      for(let i of num) {
        console.log(i)
        sum += i
      }
      console.log(sum)
    },
    joinArr() {//rest合并两个数组
      let [a,b] = [[1,2,3,4,5],[6,7,8]]
      let c = [...a,...b]
      console.log(c);
    },
    strToArr() {
      let str = 'wangyue'
      let arr = [...str]
      console.log(str,arr)
    },
    share() {
      
    }
  },
  created () {

  },
  mounted () {
    this.test(-1);
    this.rest(this.msg,this.username,this.pw)
    this.add(1,30,20)
    this.joinArr()
    this.strToArr()
    let obj = {
        name:'wangyue',
        detail: {
          'addr': '111 addr',
          'age': 30
        },
        count: 10
      }
    let {name,detail,...c} = obj
    console.log(detail,c)
    let {a,b} = {'a':{'a':1},'b':{'b':1}}
  },
  watch: {//监听全局变量navNum的变化

  }
}