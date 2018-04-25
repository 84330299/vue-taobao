<template>
    <div id="express">
        <header class="eHead">
          <ul>
            <li class="return" @click="reTurn()">返回</li>
            <li class="text"><span>物流订单</span><i class="aw"></i></li>
          </ul>
        </header>
        <div class="bHeight"></div>
        <ul class="body">
         <li class="img-text">
          <div class="img" >
            <img src='../../assets/express/order.png' alt="">
          </div>
          <p>亲！您没有该状态的订单信息!</p>
        </li>
        </ul>
        <ul class="shopList">
          <router-link :to="{path:'/home'}" tag="li" ><span>去购物</span></router-link>
          <router-link to tag="li"><span>查看我的收藏夹</span></router-link>
        </ul>
    </div>
</template>
<script>
    export default{
        methods:{
          reTurn(){
            this.$router.push({path:'/home'});
          }
        }
    }
</script>
<style>

</style>
