<template>
  <div class="index">
    <!-- 顶部导航 -->
    <topbar></topbar>

    <!-- 视图切换窗口和特效 -->
    <transition :name="transitionName" mode="out-in">
      <keep-alive>
        <router-view  class="content-sec"></router-view>
      </keep-alive>
    </transition>

    <!-- 底部导航 -->
    <navbar></navbar>
  </div>
</template>

<script>
import {mapState} from "vuex";  // 引入mapState
import navbar from '../comon/mynav';
import topbar from '../comon/topbar';

export default {
  name: 'index',
  data () {
    return {
      msg:"主页",
      transitionName: 'slide-left'
    }
  },
  components: {
    navbar,
    topbar
  },
  methods: {

  },
  created () {

  },
  mounted () {
      // this.$router.push({path:'/index'});
  },
  computed:mapState([   // 数组
    "count",
    "isBack"
  ]),
  watch: {//监听全局变量navNum的变化
    '$route' (to, from) {
        let back = this.$store.state.isBack;
        if(back == 1) {
          this.transitionName = 'slide-right';
        }else{
          this.transitionName = 'slide-left';
        }
        setTimeout(()=>{//重置返回标记
          this.$store.dispatch("resetIsBack");//还原标记
        },100);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/*第二个路由的高*/
$secRouHei: 85.7vh;
$mainPad:.35rem;/*路由padding值*/

.index {
  .content-sec {
    width:100vw;
    height:$secRouHei;
    overflow:hidden;
    background:#f3f3f3;
    overflow-y:auto;
    /*padding:$mainPad;*/
    margin-top:.9rem;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }

  @media screen and (min-width:768px){
    .content-sec {
          height:89.7vh;
    }
  }

  @media screen and (min-width:1024px){
    .content-sec {
          height:92.7vh;
    }
  }
}
</style>
