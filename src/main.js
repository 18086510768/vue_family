// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
import store from './store.js'  // 引入store 对象
import router from './router.js'  //引入路由
import axios from 'axios'


//==========引入公用静态资源,代替在index.html直接引入=============
import '../static/css/reset.css'
import '../static/css/comon.css'
import '../static/js/ydui.flexible.js'
import '../static/js/jquery.min.js'
import '../static/js/jquery.nicescroll.js'

//引入ElementUI
// import ElementUI from 'element-ui'//引入ui
// import 'element-ui/lib/theme-chalk/index.css' //引入默认主体
// Vue.use(ElementUI)

//全局引入工具类
import Util from './libs/util'
/*设置Vue全局变量*/
Vue.prototype.Util = Util

//国际化
import VueI18n from 'vue-i18n'
import selfLanguage  from './lang'
Vue.use(VueI18n) /*使用Vue-I18n做语言切换配置*/
let getCookie = (name, defaultValue = 'zh') => { /*通过 PLAY_LANG 属性来获取浏览器的语言*/
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2])
  else
    return defaultValue
}
const i18n = new VueI18n({ /*设置默认语言类型，将当前项目中的语言包与Element的语言包进行合并*/
  locale: getCookie('PLAY_LANG'),
  messages: selfLanguage
});
// Vue.use(ElementUI,{ i18n: (key, value) => i18n.t(key, value)}) /*与elementui合并使用语言*/
Vue.use({ i18n: (key, value) => i18n.t(key, value)}) //单独使用VueI18n

//引入ydui UI
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
Vue.use(YDUI);

//开启debug模式
Vue.config.debug = true;

//===============cordova 打包需要===================
Vue.config.productionTip = false;

//使用状态管理
Vue.use(Vuex)

/**
 *路由拦截
 *beforeEach,路由每次跳转前触发,有拦截作用
 *没有登录界面可屏蔽
 */
router.beforeEach((to, from, next) => { //to代表将当前要到达的整个路由对象，from代表之前的整个路由对象
    //设置标题为路由的name
    Util.title(to.name)

    let user = Util.localData.getData('user'); //获取用户登录信息缓存
    // console.log(typeof(user));
    // console.log(eval('('+user+')'));

    // if (to.path == '/login') { //退出登录时，清除登录信息
    //     sessionStorage.removeItem('user');
    // }

    if (!user && to.path != '/login') { //重新登录：如果缓存的用户信息没有了，且不是登录界面时，跳到登录界面
        if(to.path == '/register') {
          next();
        }else {
          next({ path: '/login' }) //返回登录页
          Util.localData.removeData('user'); //退出登录，清除登录信息
        }
    } else {
        next()
    }
})

router.afterEach((to, from) => {
  // window.scrollTo(0, 0)
  // ==========afterEach没有next方法，使用router.push({path:'/second'})可跳转===========
  if(from.path == '/second') {
    alert(2)
  }
});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么，可以统一对返回错误数据进行处理
    return response;
    // if (data.resCode != 1) {
    //   if (data.resMsg) {
    //     if (data.resMsg[0].msgCode == 10005) {
    //       router.push({name: 'login'})
    //     } else {
    //       ElementUI.Message({
    //         message: data.resMsg[0].msgText,
    //         type: 'error',
    //         center: true
    //       })
    //     }
    //   } else {
    //     ElementUI.Message({
    //       message: '呀，加载失败啦',
    //       type: 'error',
    //       center: true
    //     })
    //     console.log('resMsg不存在')
    //   }
    // }
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  router: router,//此处就多了一个加入路由
  store: store,  // 将store注入到根实例中
  i18n: i18n,    //讲语言切换注入到根实例
  el: '#app',
  render: h => h(App)
})
