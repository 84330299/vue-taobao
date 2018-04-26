<template>
    <div id="like">
      <div class="title">
        <p class="text boldBlack pos-r"><span class="icon"></span>猜你喜欢</p>
        <p class="c-666 text1">实时推荐最适合你的宝贝</p>
      </div>
      <div class="goodMain clearfix">
        <ul>
          <router-link :to="{path:'goodDetail',query:{id:item.id}}" tag="li" v-for="item in likes" :id="item.id">
            <img :data-echo="item.img" alt="" class="img">
            <p class="name">
              {{item.text}}
            </p>
            <p class="price">￥&nbsp&nbsp{{item.price}}</p>
          </router-link>
         <!-- <li>
            <img data-echo="//img.alicdn.com/bao/uploaded/i2/3547214471/TB1PmNCkAfb_uJjSsrbXXb6bVXa_!!0-item_pic.jpg_q50.jpg" alt="" class="img">
            <p class="name">
              商品详情的效果请点这哦！O(∩_∩)O哈哈~...
            </p>
            <p class="price">￥&nbsp&nbsp2599.0</p>
          </li>
          <li>
            <img data-echo="http://img.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/i2/2616970884/TB2IU3OdkOWBuNjSsppXXXPgpXa_!!2616970884.jpg_q50.jpg" alt="" class="img">
            <p class="name">
              【12期免息】Apple/苹果iPhone X全网通4G手机...
            </p>
            <p class="price">￥&nbsp&nbsp8388.0</p>
          </li>
          <li>
            <img data-echo="//img.alicdn.com/bao/uploaded/i4/TB17hDdRFXXXXXHXpXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg" alt="" class="img">
            <p class="name">
              adidas 阿迪达斯 三叶草女子 紧身裤 黑AJ8081...
            </p>
            <p class="price">￥&nbsp&nbsp299.0</p>
          </li>
          <li>
            <img data-echo="http://img.alicdn.com/bao/uploaded/i4/56513501/TB2IU_uflLN8KJjSZPhXXc.spXa_!!56513501.jpg_q50.jpg" alt="" class="img">
            <p class="name">
              送显示器四核独显游戏组装电脑主机吃鸡电脑LOL...
            </p>
            <p class="price">￥&nbsp&nbsp998.0</p>
          </li>
          <li>
            <img data-echo="//img.alicdn.com/bao/uploaded/i3/890482188/TB1K0JUbamWBuNjy1XaXXXCbXXa_!!0-item_pic.jpg_q50.jpg" alt="" class="img">
            <p class="name">
              Nike 耐克官方NIKE TESSEN男子运动鞋AA2160...
            </p>
            <p class="price">￥&nbsp&nbsp549.0</p>
          </li>
          <li>
            <img data-echo="http://img.alicdn.com/bao/uploaded/i4/682860705/TB2H1ADXSBYBeNjy0FeXXbnmFXa_!!682860705.jpg_q50.jpg" alt="" class="img">
            <p class="name">
              台湾风味鲜芋仙Q弹芋圆仙草奶茶甜品原料四种口味...
            </p>
            <p class="price">￥&nbsp&nbsp18.8</p>
          </li>-->
        </ul>
      </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import detail from  '../goodDetail/goodDetail.vue'
    export default{
      data(){
        return {
            likes:{

            },
          datas:{

          }
        }
      },
       mounted(){
           axios.get('/static/home.json').then(res=>{
             this.likes = res.data.like;
           })
       },
      components:{
      },
      methods:{
      }
    }
</script>
<style>

</style>
