<template>
  <div class="topbar">
    <yd-navbar :title="$route.name" fixed>
        <router-link to="#" slot="left">
            <span @click='toback' class="back"><yd-navbar-back-icon>返回</yd-navbar-back-icon></span>
        </router-link>
       <!--  <img slot="center" src="http://static.ydcss.com/www/img/logo.png"/>

        <router-link to="#" slot="right">
            <yd-navbar-next-icon>前进</yd-navbar-next-icon>
        </router-link> -->
    </yd-navbar>
  </div>
</template>

<script>
import {mapState} from "vuex";  // 引入mapState

export default {
  name: 'topbar',
  data () {
    return {
      msg: '头部导航'
    }
  },
  methods: {
      toback() {
        this.$router.back(-1);//返回上一路由
        this.$store.dispatch("changeIsBack");//点击返回标记
        // console.log(this.$store.state.isBack);
      }
  },
  computed:mapState([ // 数组
    "isBack"
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back,i {
  vertical-align: middle !important;
}
</style>
