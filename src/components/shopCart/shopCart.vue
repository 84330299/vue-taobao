<template>
    <div id="shopCart">
      <header class="title">
        <div class="back"></div>
        <div class="text"><p>购物车({{cartAmount}})</p></div>
        <div></div>
      </header>
        <div class="cart">
          <div class="cart_wrap" v-for="(item,index) in goods">
            <div  class="shopTitle">
              <!--<div class="check">
                <input type="checkbox" name="shopCheck" :id="item.id">
                <label :for="item.id"></label>
              </div>-->
              <div class="icon">
                <img src="../../assets/shopcart/tianmall.png" alt="">
              </div>
              <div class="Title"><span class="maintitle">{{item.shopTitle}}</span><i class="arrow"></i></div>
              <div class="state">
                <p class="Voucher">领券</p>
                <p class="edit">编辑</p>
                <p class="success">完成</p>
              </div>
            </div>
            <div  class="item-box">
              <div class="check">
                <input type="checkbox" name="shopCheck" :id="item.checkId" v-model="item.ifCheck">
                <label :for="item.checkId"></label>
              </div>
              <div  @click="pageDetail(item)" class="img-wrap">
                <img :src="item.imgs" alt="">
              </div>
              <div  @click="pageDetail(item)" class="item-info">
                <div  class="goodTitle">
                  {{item.name}}
                </div>
                <div class="sku">
                  <span class="mainInfo">{{item.mainInfo}};</span>
                  <span class="subInfo">{{item.subInfo}}</span>
                </div>
                <div class="stock" v-if="item.stock<=10">库存紧张</div>
                <div  class="price-amount">
                  <div class="price">¥{{item.price}}</div>
                  <div class="amount">x{{item.amounts}}</div>
                </div>
              </div>
              <div  class="edit-info">
                <div class="addNumber">
                  <div class="decrease" @click="decrease(item)">-</div>
                  <input type="number" id="number" v-model.number="item.amounts">
                  <div class="increase" @click="increase(item)">+</div>
                </div>
                <div class="sku">
                  <span class="mainInfo">{{item.mainInfo}};</span>
                  <span class="subInfo">{{item.subInfo}}</span>
                </div>
              </div>
              <div class="delete"@click="Delete(index)" ><span>删除</span></div>
            </div>
          </div>
        </div>
        <div  v-if="cartAmount<=0" class="nullCart">
          <div class="cartImg">
            <img src="../../assets/shopcart/shopcart.png" alt="">
          </div>
          <div class="text">
            <p>购物车竟然是空的o(╥﹏╥)o</p>
            <p>主人快给我挑点宝贝吧</p>
          </div>
          <div class="kuangkuang">
            <a href="/" >逛一逛</a>
          </div>
        </div>
      <footer class="buy">
          <input type="checkbox" name="" id="allCheck" @click="allCheck()">
          <label  for="allCheck" ></label>
          <label for="allCheck" class="qx">全选</label>
          <div class="total"><span class="sum">合计:</span><span class="price">¥{{moneyTotal}}</span></div>
          <div class="pay">结算({{saleTotal}})</div>
      </footer>
    </div>
</template>
<script>
  import {mapState,mapMutations,mapGetters}from 'vuex';
  import Vue from 'vue';
    export default{
        name:'shopcart',
      data(){
        return{
            toggle: false
        }
      },
      mounted(){
          this.$nextTick(()=>{
              let $edit = $('#shopCart .state .edit'),
                  $itemInfo = $('#shopCart .cart_wrap .item-info'),
                  $editInfo = $('#shopCart .cart_wrap .edit-info'),
                  $Delete = $('#shopCart .cart_wrap .delete'),
                  $success = $('#shopCart .state .success');
                $edit.click(function(){
                  $(this).css('display','none')
                  $editInfo.eq($(this).index('#shopCart .state .edit')).css('display','block')
                  $Delete.eq($(this).index('#shopCart .state .edit')).addClass('disBox')
                  $success.eq($(this).index('#shopCart .state .edit')).css('display','block')
                  $itemInfo.eq($(this).index('#shopCart .state .edit')).css('display','none')
                })
                $success.click(function(){
                  $(this).css('display','none')
                  $itemInfo.eq($(this).index('#shopCart .state .success')).css('display','block')
                  $edit.eq($(this).index('#shopCart .state .success')).css('display','block')
                  $editInfo.eq($(this).index('#shopCart .state .success')).css('display','none')
                  $Delete.eq($(this).index('#shopCart .state .success')).removeClass('disBox')
                })

          })
      },
      methods:{
        ...mapMutations(['increase','decrease','Delete']),
        allCheck(){
          this.toggle = !this.toggle
            if(this.toggle){
                this.$store.state.carts.forEach(items=> {
                  items.ifCheck=true
                })
            }else{
              this.$store.state.carts.forEach(items=> {
                items.ifCheck=false
              })
            }
        },
        pageDetail(items){
          this.$router.push({ path: 'goodDetail', query: { id: items.id }});
        }
      },
      computed: {
        goods(){
          return this.$store.state.carts
        },
        ...mapGetters(['moneyTotal']),
        saleTotal(){
          var sum = 0;
          this.$store.state.carts.find(items=>{
              if(items.ifCheck)sum+=items.amounts
          })
          return sum;
        },
        cartAmount(){
            var goodAmount=0;
          for(var i=0;i<this.$store.state.carts.length;i++){
            goodAmount+=1;
          }
          return goodAmount;
        }
      },
      watch:{
      }
    }
</script>
<style>

</style>
