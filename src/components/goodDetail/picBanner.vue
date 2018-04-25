<template>
    <div id="Banner">
      <div id="swpier6" class="swiper-container" >
        <ul class="wrap swiper-wrapper">
          <li v-for="(item,index) in pics.Banner" :class="{'banner1':index===0,'banner2':index===1,'banner3':index===2,'banner4':index===3,'banner5':index===4}"
              class='thumb swiper-slide' :thumblist="listId">
            <img :src="item.pic"  alt="">
          </li>
          <!--<li class="banner1 thumb swiper-slide" thumblist="list">
            <img
              src="//img.alicdn.com/imgextra/i2/3547214471/TB1PmNCkAfb_uJjSsrbXXb6bVXa_!!0-item_pic.jpg_760x760Q50s50.jpg"
              alt="">
          </li>
          <li class="banner2 thumb swiper-slide" thumblist="list">
            <img
              src="//img.alicdn.com/imgextra/i2/3547214471/TB2c9kxc8fM8KJjSZFrXXXSdXXa_!!3547214471.jpg_760x760Q50s50.jpg"
              alt="">
          </li>
          <li class="banner3 thumb swiper-slide" thumblist="list">
            <img
              src="//img.alicdn.com/imgextra/i1/3547214471/TB1biU8i4rI8KJjy0FpXXb5hVXa_!!0-item_pic.jpg_760x760Q50s50.jpg"
              alt="">
          </li>
          <li class="banner4 thumb swiper-slide" thumblist="list">
            <img
              src="//img.alicdn.com/imgextra/i2/3547214471/TB2JVjtgDlYBeNjSszcXXbwhFXa_!!3547214471.jpg_760x760Q50s50.jpg"
              alt="">
          </li>
          <li class="banner5 thumb swiper-slide" thumblist="list">
            <img
              src="//img.alicdn.com/imgextra/i3/3547214471/TB2obbhaTdYBeNkSmLyXXXfnVXa_!!3547214471.jpg_760x760Q50s50.jpg"
              alt="">
          </li>-->
        </ul>
        <div class="swiper-pagination"></div>
      </div>
      <div class="swiper-container" id="origin-img">
        <div class="x">X</div>
        <div class="swiper-wrapper"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>
<script>
  import axios from 'axios'
    export default{
      data(){
        return{
          pics:[
          ],
          listId: null
        }
      },
      mounted(){
        axios.get('static/data.json').then(res=>{
          let queryId = this.$route.query.id;
          let goodData = res.data.details;
          for(let value in goodData) {
            if(goodData[value].id==queryId){
              this.pics = goodData[value]
            }
          }
          switch (queryId){
            case 'one':  this.listId='list1';break;
            case 'two':  this.listId='list2';break;
            case 'three': this.listId='list3';break;
            case 'four': this.listId='list4';break;
            case 'five': this.listId='list5';break;
            case 'six': this.listId='list6';break;
          }


        this.$nextTick(() => {
          var swpier6 = new Swiper('#swpier6', {
            initialSlide: 0,
            loop: false,
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction'
            },
          })

          window.imgsdata={
            "list1": [
              "//img.alicdn.com/imgextra/i2/3547214471/TB1PmNCkAfb_uJjSsrbXXb6bVXa_!!0-item_pic.jpg_760x760Q50s50.jpg",
              "//img.alicdn.com/imgextra/i2/3547214471/TB2c9kxc8fM8KJjSZFrXXXSdXXa_!!3547214471.jpg_760x760Q50s50.jpg",
              "//img.alicdn.com/imgextra/i1/3547214471/TB1biU8i4rI8KJjy0FpXXb5hVXa_!!0-item_pic.jpg_760x760Q50s50.jpg",
              "//img.alicdn.com/imgextra/i2/3547214471/TB2JVjtgDlYBeNjSszcXXbwhFXa_!!3547214471.jpg_760x760Q50s50.jpg",
              "//img.alicdn.com/imgextra/i3/3547214471/TB2obbhaTdYBeNkSmLyXXXfnVXa_!!3547214471.jpg_760x760Q50s50.jpg"
            ],
            "list2":[
              "//gw.alicdn.com/imgextra/i4/56513501/TB2IU_uflLN8KJjSZPhXXc.spXa_!!56513501.jpg_760x760q50s150.jpg",
              "//gw.alicdn.com/imgextra/i4/56513501/TB2FyrsiNrI8KJjy0FpXXb5hVXa_!!56513501.jpg_760x760q50s150.jpg",
              "//gw.alicdn.com/imgextra/i4/56513501/TB2qPISfgjN8KJjSZFCXXb3GpXa_!!56513501.jpg_760x760q50s150.jpg",
              "//gw.alicdn.com/imgextra/i2/56513501/TB2KnhloMLD8KJjSszeXXaGRpXa_!!56513501.jpg_760x760q50s150.jpg",
              "//gw.alicdn.com/imgextra/i4/56513501/TB2d8sSfXYM8KJjSZFuXXcf7FXa_!!56513501.jpg_760x760q50s150.jpg"
            ],
            "list3":[
              "//img.alicdn.com/imgextra/i1/2616970884/TB1P.xXk4SYBuNjSspjXXX73VXa_!!0-item_pic.jpg_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i2/2616970884/TB2IU3OdkOWBuNjSsppXXXPgpXa_!!2616970884.jpg_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i4/2616970884/TB29UkDmPihSKJjy0FlXXadEXXa_!!2616970884.jpg_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i2/2616970884/TB2mzRTq8USMeJjy1zjXXc0dXXa_!!2616970884.jpg_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i1/2616970884/TB2GVikhDJYBeNjy1zeXXahzVXa_!!2616970884.png_720x720Q50s50.jpg"
            ],
            "list4":[
              "//img.alicdn.com/imgextra/i2/446338500/TB2_PF7lxGYBuNjy0FnXXX5lpXa_!!446338500-0-item_pic.jpg_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i2/446338500/TB21PIfc8smBKNjSZFFXXcT9VXa_!!446338500.jpg_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i2/446338500/TB2TBs9lk9WBuNjSspeXXaz5VXa_!!446338500.jpg_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i3/446338500/TB2x0k9lkOWBuNjSsppXXXPgpXa_!!446338500.jpg_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i3/446338500/TB2iPx7lxGYBuNjy0FnXXX5lpXa_!!446338500.jpg_720x720Q50s50.jpg"
            ],
            "list5":[
              "//img.alicdn.com/imgextra/i4/TB1YjM.a9tYBeNjSspkYXHU8VXa_M2.SS2_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i4/890482188/TB2dplUbbSYBuNjSspfXXcZCpXa_!!890482188.jpg_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i2/446338500/TB2TBs9lk9WBuNjSspeXXaz5VXa_!!446338500.jpg_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i4/890482188/TB294VJbXGWBuNjy0FbXXb4sXXa_!!890482188.jpg_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i3/890482188/TB2PuhKbkOWBuNjSsppXXXPgpXa_!!890482188.jpg_720x720Q50s50.jpg"
            ],
            "list6":[
              "//img.alicdn.com/imgextra/i2/2932159187/TB1xbdMe8fM8KJjSZPiXXXdspXa_!!0-item_pic.jpg_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i4/2932159187/TB2SsFgXPgy_uJjSZSyXXbqvVXa_!!2932159187.jpg_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i4/2932159187/TB2v7YhX.o09KJjSZFDXXb9npXa_!!2932159187.png_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i4/2932159187/TB23xyUb26H8KJjSspmXXb2WXXa_!!2932159187.jpg_720x720Q50s50.jpg",
              "//img.alicdn.com/imgextra/i3/2932159187/TB2Re4hXQfb_uJkHFrdXXX2IVXa_!!2932159187.jpg_720x720Q50s50.jpg"
            ]
          }
          var swiper = new Swiper('#origin-img',{
            zoom:true,
            width: window.innerWidth,
            virtual: true,
            spaceBetween:20,
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
            },
            on:{
              click: function(){
                $('#origin-img').fadeOut('fast');
                this.virtual.slides.length=0;
                this.virtual.cache=[];
                window.swiperStatus=false;
              },
            },
          });
          var Img = $('#Banner li.thumb');
          Img.click(function(){
            window.clickIndex=$(this).index();
            window.imglist=$(this).attr('thumblist');
            window.imgs = window.imgsdata[imglist];
            for(window.i=0;i<imgs.length;i++){
              swiper.virtual.appendSlide('<div class="swiper-zoom-container"><img src="'+imgs[i]+'" /></div>');
            }

            swiper.slideTo(clickIndex);
            $('#origin-img').fadeIn('fast');
            window.swiperStatus=true;
          })

          //切换图状态禁止页面缩放
          document.addEventListener('touchstart',function (event) {
            if(event.touches.length>1 && window.swiperStatus){
              event.preventDefault();
            }
          })
          var lastTouchEnd=0;
          document.addEventListener('touchend',function (event) {
            var now=(new Date()).getTime();
            if(now-lastTouchEnd<=300){
              event.preventDefault();
            }
            lastTouchEnd=now;
          },false)

          document.addEventListener('touchmove',function(e){
            if(window.swiperStatus){
              e.preventDefault();
            }
          })

        });

        })
      }
    }
</script>
<style>

</style>
