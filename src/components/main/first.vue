<template>
  <div class="first">
    <!-- ================================================================================
         1.on-infinite,页面滚动到底部的加载方法
         2.this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');停止加载
         3.this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');重置加载
         4.yd-list-item添加href属性来进行页面跳转
         5.通过http://static.ydcss.com/uploads/ydui/loading/loading1.svg找到不同的加载动画
         6.theme="4"可更换页面布局样式
        ================================================================================= -->
     <!-- <router-link to='/detail'><p>test</p></router-link> -->
     <yd-infinitescroll class="scroll_wrap" :scrollTop=false :on-infinite="loadList" ref="infinitescrollDemo">

        <yd-list theme="4" slot="list">
           <router-link to="/firstDetail">
             <yd-list-item v-for="(item,index) in list">
                  <img slot="img" :src="item.img">
                  <span slot="title">{{item.title}}</span>
                  <yd-list-other slot="other">
                      <div>
                          <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
                          <span class="list-del-price">¥{{item.productprice}}</span>
                      </div>
                      <div>content</div>
                  </yd-list-other>
              </yd-list-item>
            </router-link>
        </yd-list>
        
        <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

        <!-- 加载中提示 -->
        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading1.svg"/>

    </yd-infinitescroll> 

    <!-- 视图切换窗口和特效 -->
    <transition name="bounce" mode="out-in">
      <keep-alive>
        <router-view  class="content-detail"></router-view>
      </keep-alive>
    </transition>

  </div>
</template>

<script>
//@指代src路径，查看base.conf.js中  '@': resolve('src')可知
import topbar from "@/components/comon/topbar" 
import {getScrollTop,nicescroll} from '@/assets/js/comon.js' //引入公共方法

export default {
  name: 'first',
  data () {
    return {
      msg: '页面一',
      page: 1,
      pageSize: 5,
      list:[
            {
                img: "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
                title: "标题标题标题标题标题",
                marketprice: 56.23,
                productprice: 89.36
            },
            {
                img: "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
                title: "骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫",
                marketprice: 56.23,
                productprice: 89.36
            },
            {
                img: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
                title: "条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖",
                marketprice: 56.23,
                productprice: 89.36
            },
            {
                img: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
                title: "夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫",
                marketprice: 56.23,
                productprice: 89.36
            },
            {
                img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
                title: "2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
                marketprice: 56.23,
                productprice: 89.36
            },
            {
                img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
                title: "男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男",
                marketprice: 56.23,
                productprice: 89.36
            }
        ]
      }
  },
  methods: {
      loadList() {
  	    setTimeout(()=>{ //延迟两秒执行
  		    this.$http.jsonp('http://list.ydui.org/getdata.php?type=backposition', {
  		            params: {
  		                page: this.page,
  		                pagesize: this.pageSize
  		            }
  		        }).then(function (response) {
  		            const _list = response.body;

  		            this.list = [...this.list, ..._list];

  		            if (_list.length < this.pageSize || this.page == 3) {
  		                /* 所有数据加载完毕 */
  		                this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
  		                return;
  		            }

  		            /* 单次请求数据完毕 */
  		            this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
  		    
  		            this.page++;
  		        });
  	   },2000);
  	},
    loadMusic() {
        let params = {
          size: 50,
          type: 1
        }
    }
  },
  components: { 
  	topbar
  },
  mounted () {

  },
  activated: function() {//当keep-alive生效时执行,获取session中的scrollTop()的值
      getScrollTop('.first');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$mt: 2rem;/*margin-top的值，头部导航占据的位置*/

.first {
	width:100%;
	p {
	   margin-top:$mt;
	}

  .m-backtop {
    bottom:10% !important;
  }

  .content-detail {
    position:fixed;
    width:100vw;
    height:85.7vh;
    overflow:hidden;
    background:#fff;
    overflow-y:auto;
    /*padding:$mainPad;*/
    top:.9rem;
    left:0;
  }
}
</style>
