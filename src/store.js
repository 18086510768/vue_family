import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/*配置仓库数据*/
const state = {
    count:0,
    nowScrTop:0,//记录滚动条的位置
    isBack: 0,//是否点击返回，应用不同样式
}

 // 配置仓库 注册事件 函数。给 actions 注册一个事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
 // 任意组件中就可以使用this.$store.dispatch("actions中的函数名",参数)来触发actions中的函数来提交
 const actions = {
    throwNowId({commit},id) {
        //alert(id);
        commit('changeNowId',id)    // 提交到mutations中处理
    },
    showScroll({commit},obj) {
      // console.log(obj);
      $(obj).niceScroll({
        cursorcolor:"#666", // 设置光标颜色
        cursorwidth:"2px", //设置光标宽度
        // touchbehavior:true, //设置触摸滑动。默认值false
        hwacceleration:true, //使用硬件加速滚动支持
        cursoropacitymin:0, // 设置非活动状态光标透明度，取值范围0-1，默认为0。
        cursoropacitymax:0.5, //设置活动状态光标透明度，取值范围0-1，默认为1。
        cursorborderradius:"1px", //设置光标圆角，默认5px
        bouncescroll:true //设置是否显示反弹（需要硬件支持）
      });
    },
    changeIsBack({ commit }, id) {//点击返回，更改isback的值
     commit('changeBack', id)    // 提交到mutations中处理
    },
    resetIsBack({ commit }, id) {//还原isback的值
     commit('resetBack', id)    // 提交到mutations中处理
    }
 }


/*配置仓库 更新状态 函数，根据你的业务逻辑*/
const mutations = {
  //全局设置 刷新页面时从session中拿到coordJobId的值
  inc(state){
     state.count++;
  },
  //全局设置 刷新页面时从session中拿到currentExtId的值
  dec(state){
    state.count--;
  },
  changeBack(state) {
    state.isBack = 1;
  },
  resetBack(state) {
    state.isBack = 0;
  }
}

/*将store暴露出去,供其他组件this.$stroe.state引用或this.$stroe.dispatch()分发*/
export default new Vuex.Store({
  state,
  actions,
  mutations
})
