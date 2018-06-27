<template>
  <div class="firstDetail">
   <!--  返回 -->
    <topbar></topbar>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import topbar from "../comon/topbar"

export default {
  name: 'firstDetail',
  data () {
    return {
      msg: 'first的详情页面'
    }
  },
  components: { 
  	topbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$mt: 2rem;

.detail {
	width:100%;
	p {
	   margin-top:$mt !important;
	}
}
</style>