<template>
    <div id="my">
      <div class="user">
        <div class="headLogo">
          <img src="//gw.alicdn.com/sns_logo/T14T9IFd4fXXb1upjX.jpg" alt="">
        </div>
        <div class="user-name">
          加瓦斯库瑞普特
        </div>
      </div>
      <section class="user-info">
        <ul>
          <router-link to tag="li">
            <p>11</p>
            <p>收藏的宝贝</p>
          </router-link>
          <router-link to tag="li">
            <p>11</p>
            <p>收藏的店铺</p>
          </router-link>
          <router-link to tag="li">
            <p>11</p>
            <p>我的足迹</p>
          </router-link>
        </ul>
      </section>
      <section class="order-warp">
        <ul class="orderAct">
          <router-link to tag="li">
            <p><img src="./../../assets/mytao/dfk.png" alt=""></p>
            <p>待付款</p>
          </router-link>
          <router-link to tag="li">
            <p><img src="./../../assets/mytao/dfh.png" alt=""></p>
            <p>待发货</p>
          </router-link>
          <router-link to tag="li">
            <p><img src="./../../assets/mytao/dsh.png" alt=""></p>
            <p>待收货</p>
          </router-link>
          <router-link to tag="li">
            <p><img src="./../../assets/mytao/dpj.png" alt=""></p>
            <p>待评价</p>
          </router-link>
          <router-link to tag="li">
            <p><img src="./../../assets/mytao/refund.png" alt=""></p>
            <p>退款/售后</p>
          </router-link>
        </ul>
        <router-link to class="all-order" tag="div">
          <div class="icon"><img src="./../../assets/mytao/allOrder.png" alt=""></div>
          <div class="title">全部订单</div>
          <div class="sub">查看全部订单</div>
          <div class="arrow"></div>
        </router-link>
      </section>
      <section class="middle">
        <ul>
          <router-link to tag="li">
            <div class="icon"><img src="./../../assets/mytao/shopcart.png" alt=""></div>
            <div class="title">购物车</div>
            <div class="arrow"></div>
          </router-link>
          <router-link to tag="li">
            <div class="icon"><img src="./../../assets/mytao/search.png" alt=""></div>
            <div class="title">搜索</div>
            <div class="arrow"></div>
          </router-link>
          <router-link to tag="li">
            <div class="icon"><img src="./../../assets/mytao/alipay.png" alt=""></div>
            <div class="title">支付宝</div>
            <div class="arrow"></div>
          </router-link>
          <router-link to tag="li">
            <div class="icon"><img src="./../../assets/mytao/wangwang.png" alt=""></div>
            <div class="title">旺旺</div>
            <div class="arrow"></div>
          </router-link>
        </ul>
      </section>
      <section class="bottom">
        <ul>
          <router-link to tag="li">
            <div class="icon"><img src="./../../assets/mytao/piao.png" alt=""></div>
            <div class="title">我的彩票</div>
            <div class="arrow"></div>
          </router-link>
          <router-link to tag="li">
            <div class="icon"><img src="./../../assets/mytao/jp.png" alt=""></div>
            <div class="title">我的机票</div>
            <div class="arrow"></div>
          </router-link>
        </ul>
      </section>
      <footer>
        <router-link to tag="div" class="name">
          <p>加瓦斯库瑞普特</p>
        </router-link>
        <router-link to tag="div">
           <span>退出</span>
        </router-link>
        <router-link to tag="div">
           <span>意见反馈</span>
        </router-link>
        <router-link to tag="div">
           <span>电脑版</span>
        </router-link>
      </footer>
    </div>
</template>
<script>
    export default{}
</script>
<style>

</style>
