<template>
    <div id="swpier1" class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="banner1 swiper-slide"></li>
          <li class="banner2 swiper-slide"></li>
          <li class="banner3 swiper-slide"></li>
          <li class="banner4 swiper-slide"></li>
          <li class="banner5 swiper-slide"></li>
          <li class="banner6 swiper-slide"></li>
          <li class="banner7 swiper-slide"></li>
          <li class="banner8 swiper-slide"></li>
        </ul>
      <div class="swiper-pagination"></div>
    </div>
</template>
<script>
    export default{
      mounted(){
        var mySwiper = new Swiper('#swpier1', {
          autoplay: {
            disableOnInteraction: false
           },//可选选项，自动滑动
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
