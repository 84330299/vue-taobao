<template>
    <div id="goodDeatil">
      <vHead></vHead>
      <vBanner></vBanner>
      <div class="detailMain">
        <words :datas="getDatas"></words>
        <ratings :datas="getDatas"></ratings>
        <seller :datas="getDatas"></seller>
        <seeBanner></seeBanner>
        <detailed :datas="getDatas"></detailed>
      </div>
      <sKu></sKu>
      <div class="bHeight"></div>
      <footers></footers>
    </div>
</template>
<script>
  import vHead from '../goodDetail/heade.vue'
  import axios from 'axios'
  import vBanner from '../goodDetail/picBanner.vue'
  import seeBanner from '../goodDetail/seeBanner.vue'
  import seller from '../goodDetail/seller.vue'
  import ratings from '../goodDetail/ratings.vue'
  import words from '../goodDetail/words.vue'
  import detailed from  '../goodDetail/details.vue'
  import footers from '../goodDetail/footer.vue'
  import morerat from  './morerating.vue'
  import sKu from '../goodDetail/sku.vue'
  export default{
      name:'goodDetail',
      data(){
        return {
          goodList:[

          ],
          getDatas:{

          }
        }
      },
      mounted(){
          axios.get('/static/data.json').then(res=>{
              let queryId = this.$route.query.id;
              let goodData = res.data.details;
            for(let value in goodData) {
              if(goodData[value].id==queryId){
                this.goodList.push(goodData[value])
                this.getDatas = goodData[value]
              }
            }
            this.$nextTick(()=>{
              var $sku = $('#sku'),
                $skuWrap = $('#sku .sku_wrap'),
                $skuClose = $skuWrap.find('div.close'),
                $addShop = $('#footers a.addShop');
              var $seLect = $('#words ul.wordmain .li11 .select');
              $seLect.click(function () {
                $sku.fadeIn('fast',function(){
                  $skuWrap.css('transform','translate3d(0,0,0)')
                })
              })
              $skuClose.click(function(){
                $sku.fadeOut('fast',function(){
                })
                $skuWrap.css('transform','translate3d(0,100%,0)')
              })
              $addShop.click(function () {
                $sku.fadeIn('fast',function(){
                  $skuWrap.css('transform','translate3d(0,0,0)')
                })
              })
              })
            })
      },
        components:{
          vHead,
          vBanner,
          seeBanner,
          seller,
          ratings,
          words,
          detailed,
          footers,
          morerat,
          sKu
        }
    }
</script>
<style>
  .line10{
    width: 100%;
    height: 0.27rem;
    background: rgb(238, 238, 238);
  }
  .line2{
    width: 100%;
    height: 0.054rem;
    background: rgb(238, 238, 238);
  }
  .bHeight{
    width: 100%;
    height: 45px;
    max-height: 45px;
    line-height: 45px;
    background: #FFFFFF;
  }
</style>
