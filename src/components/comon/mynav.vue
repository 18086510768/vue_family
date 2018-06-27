<template>
  <div class="mynav">
      <!-- =======================================
            1.activeClass绑定当前路由的样式名。
            2.activeColor是默认导航颜色(每个栏目均需要加active属性才有效)。
            3.导航与路由是联动的。
            4.fixed属性固定定位到底部。
           ======================================= -->
      <yd-tabbar fixed activeClass="my_active" activeColor="#999" color='#666'>
        <yd-tabbar-item title="首页" link="/first" active>
            <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="购物车" link="/second" @click="changeNav" active>
            <yd-icon name="shopcart" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/third" active>
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: 'mynav',
  data () {
    return {
      msg: '导航'
    }
  },
  methods: {
    changeNav(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/*选中导航的颜色*/
$navActCol: #000;

.nav {
  height:1rem;
}

.tabbar-fixed {
    /*height:10vh;*/
}

.my_active {
  color:$navActCol;
}

</style>
