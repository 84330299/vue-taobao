<template>
    <div id="everyDay">
      <div class="top">
        <div class="left">
          <span class="line"></span>
          <span class="text">每日好店</span>
        </div>
        <div class="right">
            <span class="text">更多</span>
            <span class="gt">&gt</span>
        </div>
      </div>
      <div id="swiper2" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="bottom swiper-slide">
            <div class="lft">
              <img data-echo="http://gw.alicdn.com/bao/uploaded/i4/106802831/TB2X0u3tFXXXXaNXpXXXXXXXXXX_!!106802831.jpg_q50.jpg" alt="" class="left">
              <div class="right">
                <img data-echo="http://gw.alicdn.com/bao/uploaded/i2/106802831/TB2CqHctFXXXXcVXXXXXXXXXXXX_!!106802831.jpg_q50.jpg" alt="" class="top">
                <img data-echo="http://gw.alicdn.com/bao/uploaded/i1/106802831/TB2bMLgtFXXXXc6XXXXXXXXXXXX_!!106802831.jpg_q50.jpg" alt="" class="bottom">
              </div>
              <p class="text">今日推荐</p>
            </div>
            <div class="rit">
              <img data-echo="http:////gw.alicdn.com/bao/uploaded/i2/TB1zS97RFXXXXatXpXXYXGcGpXX_M2.SS2" alt="" class="left">
              <div class="right">
                <img data-echo="http:////gw.alicdn.com/bao/uploaded/i1/TB1t_DKRFXXXXbZaXXXYXGcGpXX_M2.SS2" alt="" class="top">
                <img data-echo="http:////gw.alicdn.com/bao/uploaded/i4/TB1aUbQX7fb_uJkSnaVYXFFmVXa_M2.SS2" alt="" class="bottom">
              </div>
              <p class="text">包包控</p>
            </div>
          </div>
          <div class="bottom1 swiper-slide">
            <div class="lft">
              <img data-echo="http://gw.alicdn.com/bao/uploaded/i4/84107059/TB25OovXL6H8KJjSspmXXb2WXXa_!!84107059.jpg_q50.jpg" alt="" class="left">
              <div class="right">
                <img data-echo="//gw.alicdn.com/bao/uploaded/i1/TB11gmuJXXXXXcxXpXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg" alt="" class="top">
                <img data-echo="//gw.alicdn.com/bao/uploaded/i2/TB18d9CJXXXXXbWXXXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg" alt="" class="bottom">
              </div>
              <p class="text">精致有格</p>
            </div>
            <div class="rit">
              <img data-echo="http://gw.alicdn.com/bao/uploaded/i4/3071186055/TB27WX5k4OMSKJjSZFlXXXqQFXa_!!3071186055.jpg_q50.jpg" alt="" class="left">
              <div class="right">
                <img data-echo="http://gw.alicdn.com/bao/uploaded/i2/3071186055/TB2Fh.8cMDD8KJjy0FdXXcjvXXa_!!3071186055.jpg_q50.jpg" alt="" class="top">
                <img data-echo="http://gw.alicdn.com/bao/uploaded/i1/3071186055/TB2aSPomBUSMeJjy1zjXXc0dXXa_!!3071186055.jpg_q50.jpg" alt="" class="bottom">
              </div>
              <p class="text">吃吃吃</p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>
<script>
    export default{
        mounted(){
          var myswiper = new Swiper('#swiper2', {
            //可选选项，自动滑动
            initialSlide :0,
            loop: true,

            pagination: {
              el: '.swiper-pagination',
              clickable :true
            },
          })
        }
    }
</script>
<style>

</style>
