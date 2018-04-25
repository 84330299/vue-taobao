<template>
  <div id="home">
    <div class="homeMain">
      <vHead></vHead>
      <section class="main">
        <div class="height"></div>
        <vBanner></vBanner>
        <Vser></Vser>
        <topLine></topLine>
        <div class="height1"></div>
        <goods></goods>
        <div class="height1"></div>
        <cheap></cheap>
        <div class="height1"></div>
        <tianm></tianm>
        <div class="height1"></div>
        <feature></feature>
        <div class="height1"></div>
        <div id="more">
          <div class="top">
            <img class="left" data-echo="//gw.alicdn.com/tps/i1/TB1yRS0LpXXXXXSXVXXYJiQPFXX-480-108.png">
            <div class='right'>
              <span class="text">更多服务</span>
              <span class="gt">&gt</span>
            </div>
          </div>
          <img data-echo="//gw.alicdn.com/tps/TB1CPtJMXXXXXcAXFXXXXXXXXXX-1125-225.png" alt="" class="bottom">
        </div>
        <div class="height1"></div>
        <everyDay></everyDay>
        <youLike></youLike>
        <div class="height2"></div>
      </section>
      <footers></footers>
      <returnTop></returnTop>
    </div>
    <loading></loading>
  </div>
</template>
<script>
  import vHead from '../home/header.vue'
  import vBanner from '../home/banner.vue'
  import Vser from '../home/serverList.vue'
  import topLine from '../home/topLine.vue'
  import goods from '../home/goods.vue'
  import cheap from '../home/cheap.vue'
  import tianm from  '../home/tianm.vue'
  import feature from  '../home/feature.vue'
  import everyDay from  '../home/everyDay.vue'
  import youLike from  '../home/youlike.vue'
  import footers from  '../home/footer.vue'
  import returnTop from  '../home/returnTop.vue'
  import loading from '../home/loading.vue'
  import axios from 'axios'
    export default{
      mounted(){
        axios.get('/static/data.json').then(res => {
          this.homeData = res.data.like;
          this.$nextTick(() => {

            let $returnTop = $('#returnTop');
            let $target;
            $target = $(window);
            function detailTop() {

              var number = parseInt($('#feature').offset().top-200).toString();
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

            function htmlTop(){

              var number = $target.scrollTop().toString();
              number.split('');
              var clone = [];
              for (var a in number) {
                clone[a] = number[a];
              }
              if(clone.length == 2)clone.splice(1, 1, '0')
              if(clone.length == 3)clone.splice(2, 1, '0')
              if(clone.length == 4)clone.splice(3, 1, '0')
              var newNumber = clone.join('') * 1;
              return newNumber;

            }


            $(window).scroll(function(){
              if(htmlTop()>=detailTop()){
                $returnTop.css('display','block')
              }else{
                $returnTop.css('display','none')
              }
            })

            $returnTop.click(function(){
              var bTop = htmlTop();
              let timer = setInterval(function(){
                $target.scrollTop(bTop-=10);
                if(bTop==0)clearInterval(timer);
                $returnTop.css('display','none');
              },5)
            })

          })
        })
      },
      components:{
        vHead,
        vBanner,
        Vser,
        topLine,
        goods,
        cheap,
        tianm,
        feature,
        everyDay,
        youLike,
        footers,
        returnTop,
        loading
      }
    }
</script>
<style>

</style>
