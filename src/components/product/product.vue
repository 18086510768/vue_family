<template>
  <div class="product">
  	 <p class="msg">{{msg}}</p>
  	 <p>{{$t('self.name')}}</p>
  	 <pre>
  	1.========解构赋值=======
	let [a,b] = [1,2]
	2.==拼接字符串==
	let [a,b] = [2,3];
	console.log('拼接字符串',`${a}====${b}`)
	3.rest的使用
	*求若干个数的和
	 add(...num) {//rest解决未知个数参数操作
	      let sum = 0
	      for(let i of num) {
	        console.log(i)
	        sum += i
	      }
	      console.log(sum) //51
	    }
	 add(1,30,20）
	*=====合并两个数组======
	joinArr() {//rest合并两个数组
	      let [a,b] = [[1,2,3,4,5],[6,7,8]]
	      let c = [...a,...b]
	      console.log(c); //[1,2,3,4,5,6,7,8]
	}
	joinArr()
	*======将字符串转换为数组======
	let str = 'wangyue'
	let arr = [...str] 
	console.log(str,arr) //['w','a','n','g','y','u','e']
  	</pre>
  </div>
</template>
<style scoped src="./product.scss" lang="scss"></style>
<script src="./product.js"></script>

