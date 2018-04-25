<template>
  <div  class="clearfix" id="feature">
    <div class="word">
      <span class="icon"></span>
      <span class="text">特色好货</span>
    </div>
    <div class="top">
      <img :data-echo="item.img" alt="" class="fl-l" v-for="(item,index) in pics.listTop"
           :class="{'one':index===0,'two':index===1,'three':index===2,'four':index===3}">
    </div>
    <div class="bottom">
      <img :data-echo="item.img" alt="" class="fl-l" v-for="(item,index) in pics.listBottom"
           :class="{'one':index===0,'two':index===1,'three':index===2,'four':index===3}">
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return { pics: { listTop: [] ,listBootom: [] }  }
    },
    mounted(){
      axios.get('/static/data.json').then(res=>{
        this.pics = res.data.feature;
      });
    }
  }
</script>
<style>

</style>
