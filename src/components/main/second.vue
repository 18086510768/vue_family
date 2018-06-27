<template>
  <div class="second">
    {{test}}
    <input type="text" v-model="test.mywords" style="border:1px solid #000">
    <div class="m-cell">
      <div class="cell-item" v-for="(item,index) in jsonData">
          <div class="cell-right"><input type="number" pattern="[0-9]*"  v-model="modelArr[`model${index}`]" :data-val="`{'pid':${item.qtype},'value':${modelArr[`model${index}`]}}`" class="cell-input" :placeholder="item.value" autocomplete="off" /></div>
          <p>value:{{modelArr[`model${index}`]}}</p>
      </div>
    </div>
    <p class="test">222</p>
    <div @click="submit">提交</div>
    <router-link to="/product" @click.native="submit">submit</router-link>
  </div>
</template>

<script>
import topbar from "../comon/topbar"
import $ from 'jquery'

export default {
  name: 'second',
  data () {
    return {
      msg: '页面二',
      test: {
        mywords: '',
        name: 'chooseName'
      },
      jsonData: [
        {qtype:'1',model:'model1',value:'手机'},
        {qtype:'2',model:'model2',value:'身份证'},
        {qtype:'1',model:'model3',value:'傻逼'},
        {qtype:'3',model:'model4',value:'二货'}
      ],
      modelArr: {changeNum:0},
      changeNum: 0
    }
  },
  components: { 
  	topbar
  },
  watch: { //监听变量变化
    msg : function(newval,oldval) {
      console.log('watch==>',newval)
      // console.log('watchModelArr==>',newval)
    },
    modelArr : {
      handler: function (val, oldVal) {
        console.log('watchModelArr==>',val)
      },
      deep: true
    }
  },
  methods: {
    submit() {
      console.log(this.modelArr)
      this.modelArr.changeNum = this.changeNum
      for(let i = 0;i < 4;i++) {
        console.log($('.cell-input').eq(i).attr('data-val'))
      }
      this.changeNum++
    },
    testFun : function(a,b,callBack) {
      let sum = a + b
      callBack && typeof callBack == 'function' && callBack(sum)
    },
    getSum: function(num) {
      console.log(num)
      return num*1000
    }
  },
  mounted() {
    setTimeout(()=> {
      this.msg = 'yemiansan'
    },1000)
  },
  created() {
    let a =0
    for(let i= 0;i <  this.jsonData.length;i++) {
      this.modelArr[`model${i}`] = '';
    }
    console.log('modelArr==>',this.modelArr)
    this.testFun(5,6,this.getSum)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$mt: 2rem;

.second {
	width:100%;
	p {
	   margin-top:$mt;
	}
}
</style>
