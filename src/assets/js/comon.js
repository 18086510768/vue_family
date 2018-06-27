import jquery from '@/assets/js/jquery.min.js'
import niceScroll from '@/assets/js/jquery.nicescroll.js'

/*
 *=======================
 *  这是一些公用的方法
 *=======================
 */

//实时监听滚动条位置
//参数：obj--->滚动的对象
export const getScrollTop = obj => { 
	$(obj).on('scroll',() => {  //实时监听滚动事件，将最新的滚动值保存起来
	      sessionStorage.ScrTop=$(obj).scrollTop();
	      console.log(sessionStorage.ScrTop);
    });

    $(obj).scrollTop(sessionStorage.ScrTop);
}

//修饰滚动条
//参数：obj--->滚动对象
export const nicescroll = obj => {
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
}

