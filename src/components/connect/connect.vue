<template>
  <div class="product">
  	 <p class="msg">{{msg}}</p>
  	 <button @click="openPanel">显示弹窗</button>
  	 <deletePop :messageItem="messageItem" :isShow="isShow" @closePanel="closePanel"></deletePop>
  </div>
</template>
<script src="./connect.js"></script>
<style scoped lang="scss">
	button {
		width:20vw;
		height:10vw;
		color:#fff;
		line-height: 10vw;
		background: #000;
		border-radius: 5px;
		outline:none;
		border:none;
		margin-top: 10vw;
	}
</style>