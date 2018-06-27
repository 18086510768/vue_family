<template>
  <div class="errPage-container">
    <div @click="back" icon='arrow-left' class="pan-back-btn">< 返回</div>
        <h1 class="text-jumbo text-ginormous">WoWo!</h1>
        <h2>特朗普不允许您访问这个页面！</h2>
        <img src="../assets/img/401.gif" class="girl" alt="Girl has dropped her ice cream.">
  </div>
</template>

<script>
    export default {
      data() {
        return {
          dialogVisible: false
        }
      },
      methods: {
        back() {
            let a,b,c,d,e = 0;
            this.$router.push({ path: '/first' });
        }
      }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .errPage-container {
    width: 100%;
    min-height: 100vh;
    .pan-back-btn {
	    background: #008489;
	    width: 1.4rem;
	    height: .7rem;
	    line-height: .7rem;
	    color: #fff;
	    display: block;
	    margin: .5rem auto;
    }
    h2 {
    	font-size:.4rem;
    	margin-top:.5rem;
    }
    .pan-gif {
      margin: 0 auto;
      display: block;
    }
    .pan-img {
      display: block;
      margin: 0 auto;
    }
    .text-jumbo {
      font-size: 1rem;
      font-weight: 700;
      color: #484848;
    }
    .girl {
    	width: 80%;
   		margin: .5rem auto;
    }
    .list-unstyled {
      font-size: 14px;
      li {
        padding-bottom: 5px;
      }
      a {
        color: #008489;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
