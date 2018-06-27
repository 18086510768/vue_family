<template>
  <div id="app">
     <!-- 视图切换窗口和特效 -->
     <!-- <transition name="bounce" mode="out-in"> -->
        <keep-alive>
          <router-view  class="content-mian"></router-view>
        </keep-alive>
     <!-- </transition> -->
  </div>
</template>

<script>
import {mapState} from "vuex";  // 引入mapState

export default {
  name: 'app',
  data () {
    return {
      msg:"首页"
    }
  },
  methods: {

  },
  created: function() {

  },
  mounted () {
      //this.$router.push({path:'/index'});
  },
  computed:mapState([   // 数组
    "count"
  ]),
  watch: {//监听全局变量navNum的变化

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  overflow: hidden;
}

.content-mian {
  width:100vw;
  height:100vh;
  overflow:hidden;
  background:#fff;
  overflow-y:auto;
}

/*切换特效 我的初始切换*/
.bounce-enter-active {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  animation: bounce-in linear .4s;
  -webkit-animation: bounce-in linear .4s;
}

.bounce-leave-active {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  animation: bounce-out linear .4s;
  -webkit-animation: bounce-out linear .4s;
}

@keyframes bounce-in {
  0% {
    transform: translate(80%,0);
    -webkit-transform: translate(80%,0);
    opacity: .5;
  }
  100% {
    transform: translate(0,0);
    -webkit-transform: translate(0,0);
    opacity: 1;
  }
}

@keyframes bounce-out {
  0% {
     transform: translate(0,0);
    -webkit-transform: translate(0,0);
     opacity: 1;
  }
  100% {
    transform: translate(80%,0);
    -webkit-transform: translate(80%,0);
    opacity: .5;
  }
}

/*切换特效2 淡入切换*/
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateX(50px);
  opacity: 0;
}

/*切换特效3 仿app前进后退动画*/
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}

.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
</style>
