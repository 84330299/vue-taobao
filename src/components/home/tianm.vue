<template>
    <div id="tianm">
      <div class="word">
        <span class="icon"></span>
        <span class="text">天猫必逛</span>
      </div>
      <div class="top">
        <img :data-echo="item.img" alt="" :class="{'left':index===0,'right':index===1}"v-for="(item,index) in pics.top">
      </div>
      <div class="bottom">
        <img :data-echo="item.img" alt="" :class="{'one':index===0,'two':index===1,'three':index===2,'four':index===3}"v-for="(item,index) in pics.bottom">
      </div>
    </div>
</template>
<script>
  import axios from 'axios'
    export default{
      data(){
          return {
            pics:{

            }
          }
      },
       mounted(){
         axios.get('/static/home.json').then(res=>{
            this.pics = res.data.tianm;
         })
       }
    }
</script>
<style>

</style>
