<template lang="pug">
  div.jade
    p(v-for="item in obj") {{item.name}} 
      b.tostrong {{item.age}}
    div.show-box(:style="stys" v-if="isShow")
    div.test-box 测试混合函数居中
    <!-- element-ui组件 -->
    <!-- el-button(type="primary") 测试 -->
</template>

<script>
import topbar from "../comon/topbar"

export default {
  name: 'jade',
  data () {
    return {
      msg: '详情页面',
      obj: [
        {
          name: 'wangyue',
          age:24
        },
        {
          name: 'zlp',
          age:25
        }
      ],
      stys: 'width:1rem;height:1rem;background:red',
      isShow: false,
      str: '12322323324'
    }
  },
  components: { 
  	topbar
  },
  mounted () {
    console.log([...this.str][0])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/*======引入其他scss文件(如声明一些全局变量等)=====*/
@import '../../css/comon.scss';

/*========变量语法============*/
/*$mt: 2rem;*/

/*==========混合语法========*/
@mixin setBorderRadius($args...) { /*加浏览器私有前缀函数*/
  -webkit-border-radius: $args;
  -o-border-radius: $args;
  -ms-border-radius: $args;
  border-radius: $args;
}

@mixin setTextAlign($height: '12px',$color: '#fff') { /*高频次重复代码封装*/
  text-align: center;
  line-height: $height;
  color: $color !important;
}

/*===============运算=================*/
$myWidth : 1020px;
$myHeight: ($myWidth/2)*10;

/*============sass自带颜色运算函数===============*/
/*lighten($color, 10%);  /*返回的颜色在$color基础上变亮10% */
/*darken($color, 10%);  /* 返回的颜色在$color基础上变暗10% */
/*saturate($color, 10%);   /* 返回的颜色在$color基础上饱和度增加10% */
/*desaturate($color, 10%); /* 返回的颜色在$color基础上饱和度减少10% */
/*grayscale($color);  /* 返回$color的灰度色*/
/*complement($color); /* 返回$color的补色 */
/*invert($color);     /* 返回$color的反相色 */
/*mix($color1, $color2, 50%); /* $color1 和 $color2 的 50% 混合色*/

/*============条件判断================*/
/*----------
@if $myWidth > 1000 {
  color: red;
}
----------*/

.jade {
	width:100%;
	p {
	   margin-top:$mt !important;
     border: 1px solid #000;
     /*引用混合方法*/
     @include setBorderRadius(2px);
     .tostrong {
        font-weight:800;
        /*&宏符号引用父选择器*/
        &:hover {
          color:red;
        }
    }
	}
  .test-box {
    width: 5rem;
    height: 2rem;
    /*继承 继承某个兄弟或父类所有的样式*/
    @extend .test-extend;
    /*引用混合方法*/
    @include setTextAlign(2rem,'yellow');
    @include setBorderRadius(10px);
    /*使用颜色运算函数*/
    background: mix(red,blue,60%);
  }
}

.test-extend {
  box-shadow:0 5px 15px saturate(#ddd,50%);
  margin:.5rem auto;
}
</style>