<template>
  <div  class="clearfix" id="cheap">
    <div class="word">
      <span class="icon"></span>
      <span class="text">超实惠</span>
    </div>
    <div class="top">
      <img   :data-echo="item.img" alt="" class="fl-l lazy" v-for="(item,index) in pics.listTop"
           :class="{'one':index===0,'two':index===1,'three':index===2,'four':index===3}">
    </div>
    <div class="bottom">
      <img   :data-echo="item.img" alt="" class="fl-l lazy" v-for="(item,index) in pics.listBottom"
           :class="{'one':index===0,'two':index===1,'three':index===2,'four':index===3}">
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
    export default{
        data(){
          return {
              pics:{}
          }
        },
        mounted(){
              axios.get('/static/data.json').then(res=>{
                this.pics = res.data.cheap;
              });
       }
    }
</script>
<style>

</style>
