<template>
  <div id="headers">
    <div class="header">
      <div @click="reTurn" class="lt">
        <img src="../../assets/deatil/Wreturn.png" alt="" class="wlt">
      </div>
      <router-link  class="shopCart" to="/shopcart" tag="div">
          <img src="../../assets/deatil/wcart.png" alt="">
      </router-link >
    </div>
    <div class="header2">
      <div class="blt" @click="reTurn">
        <img src="../../assets/deatil/Breturn.png" alt="" class="Blt" @click="reTurn">
      </div>
      <ul class="nav">
        <li class="active">商品</li>
        <li>评价</li>
        <li>详情</li>
      </ul>
      <router-link  to='/shopcart' tag='div' class="bshopCart clearfix">
        <img src="../../assets/deatil/bcart.png" alt="">
      </router-link>
    </div>
  </div>
</template>
<script>
    export default{
      mounted(){
        this.$nextTick(() => {
          let $head = $('#headers .header'),
            $head2 = $('#headers .header2'),
            $aUl = $('#headers ul.nav'),
            $aLi = $aUl.find('li'),
            $return1 = $head.find('div.lt'),
            $homeMain = $('.homeMain'),
            $goodDetail = $('#goodDeatil'),
            $rating = $('#ratings li.index1 div.title'),
            $detail = $('#details div.title span.text'),
            $Banner = $('#Banner'),
            $return2 = $head2.find('div.blt');


          let $target=$(window);

          /***changeratingsTop***/
          function ratingsTop(){
            var number = parseInt($('#ratings li.index1 div.title').offset().top-50).toString();
            number.split('');
            var clone = [];
            for (var a in number) {
              clone[a] = number[a];
            }
            if(clone.length == 4)clone.splice(3, 1, '0')
            if(clone.length == 3)clone.splice(2, 1, '0')
            var newNumber = clone.join('') * 1;
            return newNumber;
          }

          /***detailTop***/
          function detailTop() {
            var number = parseInt($('#details div.title').offset().top-50).toString();
            number.split('');
            var clone = [];

            for (var a in number) {
              clone[a] = number[a];
            }

            if(clone.length == 4)clone.splice(3, 1, '0')
            if(clone.length == 3)clone.splice(2, 1, '0')

            var newNumber = clone.join('') * 1;
            return newNumber;

          }

          /***changhtmlTop***/
          function htmlTop(){
            var number = $target.scrollTop().toString();
            number.split('');
            var clone = [];
            for (var a in number) {
              clone[a] = number[a];
            }
            if(clone.length == 4)clone.splice(3, 1, '0')
            if(clone.length == 3)clone.splice(2, 1, '0')
            var newNumber = clone.join('') * 1;
            return newNumber;
          }

          /***scroll***/
            $aLi.eq(2).on('click',function(e){
              var tops = 0;
              var aTop = htmlTop();
              if($target.scrollTop()>detailTop()){
                let timer = setInterval(function() {
                  $target.scrollTop(aTop -= 10)
                  if(aTop == detailTop()) {clearInterval(timer)};
                },5)
              }else if($target.scrollTop()<detailTop()) {
                let timer = setInterval(function(){
                  $target.scrollTop(tops+=10);
                  if(tops == detailTop()){
                    clearInterval(timer);
                  }
                },5)
              }
              $(this).addClass('active').siblings().removeClass('active');
            })

          $aLi.eq(1).click(function(e){
            var tops = 0;
            var aTop = htmlTop();
            if($target.scrollTop()>ratingsTop()){
              let timer = setInterval(function() {

                $target.scrollTop(aTop -= 10)
                if(aTop == ratingsTop()) {clearInterval(timer)};
              },5)
            }else if($target.scrollTop()<ratingsTop()) {
              let timer = setInterval(function(){
                $target.scrollTop(tops+=10);
                if(tops == ratingsTop()){
                  clearInterval(timer);
                }
              },5)
            }
            $(this).addClass('active').siblings().removeClass('active');
          })

          $aLi.eq(0).click(function(){
            var bTop = htmlTop();
            let timer = setInterval(function() {
                $target.scrollTop(bTop-=10);
                if(bTop==0)clearInterval(timer);
            })
            $(this).addClass('active').siblings().removeClass('active');
          })

          /***headeShow***/
          $(document).scroll(function () {
            if ($(document).scrollTop() > 10) {
              $head.stop().fadeOut(-10, function () {
                $head2.stop().fadeIn(-10);
              })
            } else {
              $head2.stop().fadeOut(-10, function () {
                $head.stop().fadeIn(-10);
              })
            }
          });


          /*  $aLi.click(function () {
              $(this).addClass('active').siblings().removeClass('active');
            })*/


          $return1.add($return2).click(function () {
            $goodDetail.css('display', 'none').add(
              window.location.reload(function () {
                $homeMain.css('display', 'block')
              })
            );
          })

          var goodDetail = document.querySelector('#goodDeatil');

          goodDetail.addEventListener('touchend', function (e) {

              if($(window).scrollTop()>0&&$(window).scrollTop()<=ratingsTop())
                $aLi.eq(0).addClass('active').siblings().removeClass('active')

              else if($(window).scrollTop()>=ratingsTop()&&$(window).scrollTop()<=detailTop())
                $aLi.eq(1).addClass('active').siblings().removeClass('active')

              else if($(window).scrollTop()>=detailTop())
                $aLi.eq(2).addClass('active').siblings().removeClass('active')

          })

        })
      },
      methods:{
        reTurn(){
          this.$router.push({ path: '/home' })
        }
      }
    }
</script>
<style>

</style>
