<template>
  <transition name="move">
    <div id="comment" v-show="ifShow" ref="comment">
      <div class="scrollWrapper">
        <div class="cHeight"></div>
        <ul class="listTitle">
          <li v-for="item in title" :class="{'active':item.active == true}"@click="ifActive(item)">
            {{item.name}}({{item.count}})
          </li>
        </ul>
        <ul class="listBody">
          <li class="item" v-for="item in commet">
            <div class="info">
              <span class="name">{{item.name}}</span>
              <time class="time">{{item.time}}</time>
            </div>
            <blockquote class="text">{{item.text}}</blockquote>
            <ul class="pics" v-if="item.pic1||item.pic2||item.pic3">
              <li  class='thumb'   :thumblist="listId"  v-if="item.pic1">
                <img :src="item.pic1"
                       alt="" @click.stop="showPic(item.pic1)" >
              </li>
              <li  class='thumb' :thumblist="listId"   v-if="item.pic2">
                <img :src="item.pic2"
                      alt="" @click.stop="showPic(item.pic2)">
              </li>
              <li  class='thumb'  :thumblist="listId"   v-if="item.pic3">
                <img :src="item.pic3"
                       alt="" @click.stop="showPic(item.pic3)">
              </li>
            </ul>
            <div class="add"  v-if="item.zptitle">
              <p class="title">{{item.zptitle}}</p>
              <blockquote>{{item.zp}}</blockquote>
            </div>
            <ul class="skt  clearfix">
              <li>{{item.color}}</li>
              <li>{{item.type}}</li>
            </ul>
            <ul class="skt  clearfix" v-if="item.type2&&item.rl">
              <li>{{item.type2}}</li>
              <li>{{item.rl}}</li>
            </ul>
          </li>
        </ul>
      </div>
      <head class="cHead clearfix">
        <div @click="ifShow =!ifShow" class="return">
          返回
        </div>
        <div class="rat">
          评价
        </div>
      </head>
      <div  v-show="picShow" class="swiper-container" id="ratings-img">
        <div class="x">X</div>
        <div class="swiper-wrapper"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </transition>
</template>
<script>
    import axios from 'axios'
    import Scroll from 'better-scroll'
     export default{
        /*1性价比 2服务挺好 3包装不错 4便携 5追加 6全部**/
        data(){
            return {
                title: [],
                commet: [],
                ifShow: false,
                listId: null,
                picShow: false
            }
        },
        mounted(){
          axios.get('/static/data.json').then(res=>{
            let queryId = this.$route.query.id;
            let goodData = res.data.details;
            for (let value in goodData) {
              if (goodData[value].id == queryId) {
                this.commet = goodData[value].moreRating.raTings
                this.title = goodData[value].moreRating.title
              }
            }
            /*this.title = this.juDge.moreRating.title*/
            this.commet.forEach(value => {
              this.title[0].commet.push(value)
              this.title[0].count++
              if (value.havepic == 1) {
                this.title[2].commet.push(value)
                this.title[2].count++
              }
              if (value.raType == 1) {
                this.title[6].commet.push(value)
                this.title[6].count++
              } else if (value.raType == 2) {
                this.title[4].commet.push(value)
                this.title[4].count++
              } else if (value.raType == 3) {
                this.title[5].commet.push(value)
                this.title[5].count++
              } else if (value.raType == 4) {
                this.title[3].commet.push(value)
                this.title[3].count++
              } else if (value.hasOwnProperty('zp')) {
                this.title[1].commet.push(value)
                this.title[1].count++
              }
            })

            switch (queryId){
              case 'one':  this.listId='list1';break;
              case 'two':  this.listId='list2';break;
              case 'three': this.listId='list3';break;
              case 'four': this.listId='list4';break;
              case 'five': this.listId='list5';break;
              case 'six': this.listId='list6';break;
            }

            function  hidePic(){
              this.picShow = !this.picShow
            }


            this.$nextTick(() => {

              var $Img = $('#comment li.thumb');
              var clickIndex,
                  imglist,
                  swiperStatus,
                  imgs = [];

              $('#ratings-img swiper-wrapper .swiper-zoom-container img').css('width',window.innerWidth)
              $('#ratings-img swiper-wrapper .swiper-zoom-container img').css('height',window.innerHeight)

              var imgsdata = {
                "list1": [
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2HGMKkrGYBuNjy0FoXXciBFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i3/0/TB2WtBwkL5TBuNjSspmXXaDRVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2YUCzjamWBuNjy1XaXXXCbXXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i3/0/TB2Jw7LcFkoBKNjSZFkXXb4tFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2Et8zib1YBuNjSszeXXablFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2PYWEkHuWBuNjSszgXXb8jVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2hYTxkQCWBuNjy0FaXXXUlXXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB28uq1kL9TBuNjy1zbXXXpepXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2d5kzkQCWBuNjy0FaXXXUlXXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB28q3fkKySBuNjy1zdXXXPxFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i3/0/TB22w.ikH5YBuNjSspoXXbeNFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2PHxzgYuWBuNjSszgXXb8jVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2hWdJchGYBuNjy0FnXXX5lpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2BDvMcYSYBuNjSspiXXXNzpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i3/0/TB2xf13XH3nBKNjSZFMXXaUSFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2gxvGa_tYBeNjy1XdXXXXyVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2U9NXdER1BeNjy0FmXXb0wVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i3/0/TB28raRhNGYBuNjy0FnXXX5lpXa_!!0-rate.jpg"
                ],
                "list2":[
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2c2gpjXuWBuNjSspnXXX1NVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2Gc0NkxGYBuNjy0FnXXX5lpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2P_PWjL9TBuNjy0FcXXbeiFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2xbY4jQ9WBuNjSspeXXaz5VXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2wFx8jgmTBuNjy1XbXXaMrVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB24GSBchuTBuNkHFNRXXc9qpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2Kb2TdaSWBuNjSsrbXXa0mVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2x.Acdh9YBuNjy0FfXXXIsVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2U9NXdER1BeNjy0FmXXb0wVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2BDvMcYSYBuNjSspiXXXNzpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2hWdJchGYBuNjy0FnXXX5lpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2BDvMcYSYBuNjSspiXXXNzpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i3/0/TB2xf13XH3nBKNjSZFMXXaUSFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2gxvGa_tYBeNjy1XdXXXXyVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2U9NXdER1BeNjy0FmXXb0wVXa_!!0-rate.jpg",
                ],
                "list3":[
                  "//img.alicdn.com/bao/uploaded/i3/0/TB2Vl0HkXGWBuNjy0FbXXb4sXXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2TU1gkkSWBuNjSszdXXbeSpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2lFeckKuSBuNjSsziXXbq8pXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2OdHrkntYBeNjy1XdXXXXyVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i3/0/TB2avfrjb1YBuNjSszeXXablFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2hIYyjXOWBuNjy0FiXXXFxVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2Kb2TdaSWBuNjSsrbXXa0mVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2x.Acdh9YBuNjy0FfXXXIsVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2U9NXdER1BeNjy0FmXXb0wVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2BDvMcYSYBuNjSspiXXXNzpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2hWdJchGYBuNjy0FnXXX5lpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2BDvMcYSYBuNjSspiXXXNzpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i3/0/TB2xf13XH3nBKNjSZFMXXaUSFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2gxvGa_tYBeNjy1XdXXXXyVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2U9NXdER1BeNjy0FmXXb0wVXa_!!0-rate.jpg",
                ],
                "list4":[
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2qTPQkk9WBuNjSspeXXaz5VXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2fK.okhSYBuNjSspjXXX73VXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB221rLkf9TBuNjy0FcXXbeiFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2V39VkntYBeNjy1XdXXXXyVXa_!!0-rate.jpg",
                  "http://img.alicdn.com/bao/uploaded/i4/0/TB2.6tfcYZnBKNjSZFrXXaRLFXa_!!0-rate.jpg",
                  "http://img.alicdn.com/bao/uploaded/i3/0/TB2PtVccVooBKNjSZFPXXXa2XXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2Kb2TdaSWBuNjSsrbXXa0mVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2x.Acdh9YBuNjy0FfXXXIsVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2U9NXdER1BeNjy0FmXXb0wVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2BDvMcYSYBuNjSspiXXXNzpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2hWdJchGYBuNjy0FnXXX5lpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2BDvMcYSYBuNjSspiXXXNzpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i3/0/TB2xf13XH3nBKNjSZFMXXaUSFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2gxvGa_tYBeNjy1XdXXXXyVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2U9NXdER1BeNjy0FmXXb0wVXa_!!0-rate.jpg",
                ],
                "list5":[
                  "//img.alicdn.com/bao/uploaded/i4/0/TB22g87knJYBeNjy1zeXXahzVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i3/0/TB224y_jN1YBuNjy1zcXXbNcXXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2IWHijH1YBuNjSszhXXcUsFXa_!!0-rate.jpg",
                  "http://img.alicdn.com/bao/uploaded/i3/0/TB21P7ngWSWBuNjSsrbXXa0mVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2R0JakH1YBuNjSszeXXablFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i3/0/TB2RfnscRjTBKNjSZFwXXcG4XXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2Kb2TdaSWBuNjSsrbXXa0mVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2x.Acdh9YBuNjy0FfXXXIsVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2U9NXdER1BeNjy0FmXXb0wVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2BDvMcYSYBuNjSspiXXXNzpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2hWdJchGYBuNjy0FnXXX5lpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2BDvMcYSYBuNjSspiXXXNzpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i3/0/TB2xf13XH3nBKNjSZFMXXaUSFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2gxvGa_tYBeNjy1XdXXXXyVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2U9NXdER1BeNjy0FmXXb0wVXa_!!0-rate.jpg",
                ],
                "list6":[
                  "http://img.alicdn.com/bao/uploaded/i2/0/TB2VFi5fTJYBeNjy1zeXXahzVXa_!!0-rate.jpg",
                  "http://img.alicdn.com/bao/uploaded/i2/0/TB2gUVmi1uSBuNjy1XcXXcYjFXa_!!0-rate.jpg",
                  "http://img.alicdn.com/bao/uploaded/i3/0/TB2c323iKuSBuNjSsplXXbe8pXa_!!0-rate.jpg",
                  "http://img.alicdn.com/bao/uploaded/i1/0/TB2uxs4iGmWBuNjy1XaXXXCbXXa_!!0-rate.jpg",
                  "http://img.alicdn.com/bao/uploaded/i1/0/TB2mgcvgSBYBeNjy0FeXXbnmFXa_!!0-rate.jpg",
                  "http://img.alicdn.com/bao/uploaded/i1/0/TB2ki_DgGmWBuNjy1XaXXXCbXXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2RAKKg1ySBuNjy1zdXXXPxFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2x.Acdh9YBuNjy0FfXXXIsVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2U9NXdER1BeNjy0FmXXb0wVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2BDvMcYSYBuNjSspiXXXNzpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i1/0/TB2hWdJchGYBuNjy0FnXXX5lpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2BDvMcYSYBuNjSspiXXXNzpXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i3/0/TB2xf13XH3nBKNjSZFMXXaUSFXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i4/0/TB2gxvGa_tYBeNjy1XdXXXXyVXa_!!0-rate.jpg",
                  "//img.alicdn.com/bao/uploaded/i2/0/TB2U9NXdER1BeNjy0FmXXb0wVXa_!!0-rate.jpg",
                ]
              }
              var This = this;
              window.swiperRat = new Swiper('#ratings-img', {
                zoom: true,
                width: window.innerWidth,
                virtual: true,
                spaceBetween: 20,
                pagination: {
                  el: '.swiper-pagination',
                  type: 'fraction',
                },
                on: {
                  click: function () {
                    /*$('#ratings-img').fadeOut('fast');*/
                    this.virtual.slides=[]
                    this.virtual.slides.length = 0;
                    this.virtual.cache = [];
                    This.picShow = !This.picShow;
                  },
                },
              });

              document.addEventListener('touchstart', function (event) {
                if (event.touches.length > 1 &&  swiperStatus) {
                  event.preventDefault();
                }
              })
              var lastTouchEnd = 0;
              document.addEventListener('touchend', function (event) {
                var now = (new Date()).getTime();
                if (now - lastTouchEnd <= 300) {
                  event.preventDefault();
                }
                lastTouchEnd = now;
              }, false)
              document.addEventListener('touchmove', function (e) {
                if (swiperStatus) {
                  e.preventDefault();
                }
              })
              //给li.thumb做记号

              /*    if(window.toggle){
                    var allImg = document.querySelectorAll('#comment li.thumb')
                    for(var i=0;i<allImg.length;i++){
                      allImg[i].setAttribute('index',i);
                    }
                    window.toggle = false
                  }
              console.log(window.toggle)*/
             /* var indexImg = runOnce(function(){
                var allImg = document.querySelectorAll('#comment li.thumb')
                for(var i=0;i<allImg.length;i++){
                  allImg[i].setAttribute('index',i);
                }
              })

              indexImg();*/

            /*  $Img.click(function () {
                clickIndex = $(this).index('#comment ul.pics li.thumb');
                imglist = $(this).attr('thumblist');
                imgs = imgsdata[imglist];
                swiperRat.virtual.appendSlide('<div class="swiper-zoom-container"><img src="' + imgs[clickIndex] + '" /></div>');
                swiperRat.slideTo(clickIndex);
                $('#ratings-img').fadeIn('fast');
                  swiperStatus = true;
              })*/

              //切换图状态禁止页面缩放


            })
          })
      },
      methods:{
        ifActive(item){
          this.title.forEach(value=>{
              value.active = false
          })
          item.active = true;
          this.commet = item.commet
          this.$nextTick(()=>{
            this.scr.refresh()
          })
        },
        showRat(){
            this.ifShow = true
            this.$nextTick(()=>{
            if(!this.scr){
              this.scr = new Scroll(this.$refs['comment'],{
                  click:true
              })
            }
            else{
              this.scr.refresh()
            }
          })
        },
        showPic(pics){
          this.picShow = !this.picShow
          swiperRat.virtual.appendSlide('<div class="swiper-zoom-container"><img src='+pics+' /></div>')
        },

      }
    }
</script>
<style>
.cHeight{
  height: 1.216rem;
}
#comment.move-enter-avtive,#comment.move-leave-active{
  transform: translate3d(0, 0, 0);
}
#comment.move-enter,#comment.move-leave-active{
  transform: translate3d(100%, 0, 0);
}
</style>
