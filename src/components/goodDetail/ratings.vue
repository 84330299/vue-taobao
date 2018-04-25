<template>
    <div id="ratings">
      <ul class="wordmain2">
        <li  v-for="(item,index) in datas.comment" :class="{
              'index1':index===0,
              'index2':index===1,
              'index3':index===2,
              'index4':index===3,
              'index5':index===4,
              'index6':index===5,
          }" @click="page()">
          <div class="title" v-if="item.title">
            {{item.title}}
          </div>
          <div class="sever" v-if="item.sever">{{item.sever}}</div>
          <div class="fast" v-if="item.fast">{{item.fast}}</div>
          <div class="see" v-if="item.see">{{item.see}}</div>
          <div class="bx" v-if="item.bx">{{item.bx}}</div>
          <div class="bz" v-if="item.bz">{{item.bz}}</div>
          <div class="sever" v-if="item.zp">{{item.zp}}</div>
          <div class="comment-top" v-if="item.name">
            <img :src="item.img" alt="" class="left" v-if="item.img">
            <span class="middle">{{item.name}}</span>
            <img :src="item.svip" alt="" class="right" v-if="item.svip">
          </div>
          <div class="comment-middle" v-if="item.text">
            {{item.text}}
          </div>
          <div class="comment-bottom" v-if="item.timee&&item.color&&item.type">
            <span class="time">{{item.timee}}</span>
            <span class="color">{{item.color}}</span>
            <span class="type">{{item.type}}</span>
          </div>
          <div  class="more" v-if="item.more" >
            {{item.more}}
          </div>
        </li>
      </ul>
      <rat ref="showRat"></rat>
    </div>
</template>
<script>
  import rat from '../goodDetail/morerating.vue'
  import axios from 'axios'
    export default{
      props:['datas'],
      data(){
        return{
          commet:[],
          title:[]
        }
      },
       mounted(){
         /*axios.get('/static/data.json').then(res=> {
           let queryId = this.$route.query.id;
           let goodData = res.data.details;
           for (let value in goodData) {
             if (goodData[value].id == queryId) {
               goodData[value].moreRating.raTings.forEach(value=>{
                 this.commet.push(value)
               })
               goodData[value].moreRating.title.forEach(value=>{
                 this.title.push(value)
               })
             }
           }
         })*/
       },
      methods:{
        page(){
          this.$refs['showRat'].showRat()
        }
      },
      components:{
        rat
      }
    }
</script>
<style>

</style>
