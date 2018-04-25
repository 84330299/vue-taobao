import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import goodDetail from '../components/goodDetail/goodDetail.vue'
import moreRating from '../components/goodDetail/morerating.vue'
import express from '../components/express/express.vue'
import myTaobao from '../components/mytaobao/myTaobao.vue'
import shopCart from '../components/shopCart/shopCart.vue'

Vue.use(Router)
export default new Router({
  mode: "history",
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component: home,meta:{title:'淘宝网高仿版'}},
    {path:'/express',component: express,meta:{title:'物流'}},
    {path:'/myTaobao',component: myTaobao,meta:{title:'我的淘宝'}},
    {path:'/shopcart',name:'shopcart',component: shopCart,meta:{title:'购物车'}},
    {path:'/goodDetail',name:'goodDetail',component: goodDetail,meta:{title:'商品详情'}},
    {path:'/ratings',name:'ratings',component: moreRating}
  ]
})
