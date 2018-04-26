<template>
    <div id="server">
      <div class="server-main">
        <ul class="server-wrap clearfix">
          <li class="one">
            <a href="#">
              <div class="img"></div>
              <p class="text">天猫</p>
            </a>
          </li>
          <li class="two">
            <a href="#">
              <div class="img"></div>
              <p class="text">聚划算</p>
            </a>
          </li>
          <li class="three">
            <a href="#">
              <div class="img"></div>
              <p class="text">天猫国际</p>
            </a>
          </li>
          <li class="four">
            <a href="#">
              <div class="img"></div>
              <p class="text">外卖</p>
            </a>
          </li>
          <li class="five">
            <a href="#">
              <div class="img"></div>
              <p class="text">天猫超市</p>
            </a>
          </li>
        </ul>
        <ul class="server-wrap clearfix">
          <li class="six">
            <a href="#">
              <div class="img"></div>
              <p class="text">充值中心</p>
            </a>
          </li>
          <li class="seven">
            <a href="#">
              <div class="img"></div>
              <p class="text">飞猪旅行</p>
            </a>
          </li>
          <li class="aight">
            <a href="#">
              <div class="img"></div>
              <p class="text">领金币</p>
            </a>
          </li>
          <li class="night">
            <a href="#">
              <div class="img"></div>
              <p class="text">拍卖</p>
            </a>
          </li>
          <li class="ten">
            <a href="#">
              <div class="img"></div>
              <p class="text">分类</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import axios from 'axios'
    export default{
      data(){
        return{
              pics:{
                }
        }
      },
        mounted(){
            axios.get('/static/home.json').then(res=>{
                this.pics = res.data.nav
            })
        },
  }
</script>
<style>

</style>
