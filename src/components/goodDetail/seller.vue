<template>
    <div id="seller">
      <ul class="wordmain3">
        <li
          v-for="(item,index) in datas.sellers"
          :class="{'li1':index===0,
              'li2':index===1,
              'li3':index===2}"
          class="clearfix">
          <div class="logo">
            <img :src="item.pic" alt="">
          </div>
          <span class="title">
              {{item.title}}
            </span>
          <img :src="item.tianm" alt="" class="tianm">
          <div class="detail">
            <span class="baby">{{item.baby}}<span class="score">{{item.score}}</span><i></i></span>
            <span class="server">{{item.service}}<span class="score">{{item.score}}</span><i></i></span>
            <span class="express">{{item.express}}<span class="score">{{item.score}}</span><i></i></span>
          </div>
          <div class="left"><span class="all">{{item.all}}</span></div>
          <div class="right"><span class="enter">{{item.shopping}}</span></div>
        </li>
      </ul>
    </div>
</template>
<script>
    export default{
      props:['datas']
    }
</script>
<style>

</style>
