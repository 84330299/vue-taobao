<template>
    <div id="words">
      <ul class="wordmain">
        <div class="lq">领取</div>
        <li v-for="(item,index) in datas.words"
            :class="{
              'li1':index===0,
              'li2':index===1,
              'li3':index===2,
              'li4':index===3,
              'li5':index===4,
              'li6':index===5,
              'li7':index===6,
              'li8':index===7,
              'li9':index===8,
              'li10':index===9,
              'li11':index===10,
              'li12':index===11,
          }"
        >
          <div class="title" >{{item.name}}</div>
          <div class="price" >{{item.price}}<span class="sTxt">{{item.scholl}}</span></div>
          <div class="oldPrice">{{item.pricetxt}}<span>{{item.oldPrice}}</span></div>
          <div class="apptxt">{{item.apptxt}}</div>
          <div class="tips">{{item.tips}}</div>
          <div class="express">
            <span>{{item.express}}</span>
            <span>{{item.seller}}</span>
            <span>{{item.area}}</span>
          </div>
          <img :src="item.img" alt="" class="icon" >
          <div class="goodtxt">{{item.goodtxt}}</div>
          <div class="jf">{{item.jf}}<span class="jftxt">{{item.jftxt}}</span></div>
          <div class="bz">{{item.bz}}</div>
          <div class="fast">{{item.fast}}</div>
          <div class="seven">{{item.seven}}</div>
          <div class="select">{{item.selector}}</div>
          <div class="product">{{item.product}}</div>
          <div class="dot">{{item.dot}}</div>
        </li>
      </ul>
    </div>
</template>
<script>
  import cover from './sku.vue'
    export default{
      props:['datas'],
      mounted(){
      },
      components:{
      }
    }
</script>
<style>

</style>
