import Vue from 'vue'
import axios from 'axios'

//全局的 axios 默认值
axios.defaults.baseURL = 'https://www.geniusong.com/tp5/public/index.php' //接口基路径
axios.defaults.headers.common['Authorization'] = 'jwt 123456789' //AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/json' //post请求头
axios.defaults.timeout = 10000 //接口超时
console.log('axios默认配置==》',axios.defaults)

//es6拼接字符串，这里用Vue.http代替this.$http才有效
export const isLogin = params => {return axios.get('/admin/index/login',{params: params})}//登录接口GET

//获取榜单歌曲
export const isLogin2 = params => {return axios.post('/admin/index/login',params)} //POST