import Vue from 'vue'
import VueRouter from "vue-router"

// 公用组件
import mynav from './components/comon/mynav'
// 业务组件
import login from './components/login/login'
import register from './components/login/register'
import index from './components/main/index'
import first from './components/main/first'
import second from './components/main/second'
import third from './components/main/third'
import product from './components/product/product.vue' //es6语法demo
import connect from './components/connect/connect.vue' //组件通信demo
import upload from './components/upload/upload.vue'    //上传demo
import language from './components/language/language'    //语言切换国际化
//import jade from './components/jade/jade'             //jade模板语法

// 详情组件
import detail from './components/main/detail'
import firstDetail from './components/comon/firstDetail'
// 404，401组件
import notfound from './components/404'

Vue.use(VueRouter);

// 创建一个路由器实例
// 并且配置路由规则，有多少写多少
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { //把根路由重定向到index,一打开就显示index页面
      path: '/', redirect: '/login'
    },
    {
      name:'登录',
      path:'/login',
      //懒加载路由，缓解首页加载压力
      component: resolve => require(['@/components/login/login'],resolve) 
    },
    {
      name:'注册',
      path:'/register',
      component: resolve => require(['@/components/login/register'],resolve) 
    },
    {
      name: 'index',
      path: '/',//定义为这个路径，防止当输入/index时进入空白页
      component: index,
      children: [ //三个导航界面
            //懒加载路由，缓解首页加载压力
            { path: '/first',component: resolve => require(['@/components/main/first'],resolve),name: '第一页',meta:2 },
            { path: '/second', component: resolve => require(['@/components/main/second'],resolve),name: '第二页',meta:2 },
            { path: '/third', component: resolve => require(['@/components/main/third'],resolve),name: '第三页',meta:2 },
            { path: '/upload', component: resolve => require(['@/components/upload/upload'],resolve),name: '上传插件',meta:3 },
            { path: '/product', component: resolve => require(['@/components/product/product'],resolve),name: 'es6语法',meta:3 },
            { path: '/connect', component: resolve => require(['@/components/connect/connect'],resolve),name: '组件通信',meta:3 },
            { path: '/language', component: resolve => require(['@/components/language/language'],resolve),name: '国际化',meta:3 },
            //{ path: '/jade', component: resolve => require(['@/components/jade/jade'],resolve),name: 'jade模板语法和sass语法demo',meta:3 }
        ]
    },
    { //将详情页定义到主路由，占满全屏
      name: '详情页',
      path: '/detail',
      component: detail
    },
    { //将详情页定义到主路由，占满全屏
      name: 'first的详情页',
      path: '/firstDetail',
      component: firstDetail
    },
    {
      name: '404',
      path: '/404',
      component: notfound
    },
    { //将所有非法的路由定向到404页面
        path: '*',
        redirect: { path: '/404' }
    }
  ]
})

export default router;