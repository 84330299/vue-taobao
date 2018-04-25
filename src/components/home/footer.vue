<template>
    <footer id="footer">
     <!-- <a href="/" v-for="item in icons">
        <img :src="item.icon" src="" width="48"height="48">
        <p class="text">{{item.text}}</p>
      </a>-->
      <router-link to="/"  tag="a">
        <img  src="../../assets/home/home.png">
        <p class="text">首页</p>
      </router-link>
      <router-link to="/express"  tag="a">
        <img  src="../../assets/home/bus.png" >
        <p class="text">物流</p>
      </router-link>
      <router-link to="/shopcart" tag="a">
        <img  src="../../assets/home/shopCart.png">
        <p class="text">购物车</p>
      </router-link>
      <router-link to="/mytaobao" tag="a">
        <img  src="../../assets/home/people.png">
        <p class="text">我的淘宝</p>
      </router-link>
      <router-link to="/"  tag="a">
        <img  src="../../assets/home/more.png">
        <p class="text">更多</p>
      </router-link>
    </footer>
</template>
<script>
  import axios from 'axios'
    export default{
      props:['footer'],
      data(){
          return {
              icons:[]
          }
      },
      mounted(){
          axios.get('/static/data.json').then(res=>{
              this.icons = res.data.footer;
          })
      }
    }
</script>
<style>

</style>
