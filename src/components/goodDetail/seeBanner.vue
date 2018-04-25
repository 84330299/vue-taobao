<template>
    <div id="seeBanner"  class="swiper-container">
      <div class="title">看了又看</div>
      <ul class="wordmain4 swiper-wrapper">
        <div class="swiper-slide item">
          <li v-for="(item,index) in datas.bBanner.ones"
              :class="{
              'banner1': index===0,
              'banner2': index===1,
              'banner3': index===2
            }"
          >
            <a>
              <img :src="item.img" alt="">
              <div class="text">
                {{item.title}}
              </div>
              <div class="number">
                <p class="oldPrice">
                  {{item.price}}
                </p>
                <p class="latestPrice">
                  {{item.lprice}}
                </p>
              </div>
            </a>
          </li>
        </div>
        <div class="swiper-slide item">
          <li v-for="(item,index) in datas.bBanner.two"
              :class="{
              'banner4': index===0,
              'banner5': index===1,
              'banner6': index===2
            }"
          >
            <a>
              <img :src="item.img" alt="">
              <div class="text">
                {{item.title}}
              </div>
              <div class="number">
                <p class="oldPrice">
                  {{item.price}}
                </p>
                <p class="latestPrice">
                  {{item.lprice}}
                </p>
              </div>
            </a>
          </li>
        </div>
        <div class="swiper-slide item">
          <li v-for="(item,index) in datas.bBanner.three"
              :class="{
              'banner7': index===0,
              'banner8': index===1,
              'banner9': index===2
            }"
          >
            <a>
              <img :src="item.img" alt="">
              <div class="text">
                {{item.title}}
              </div>
              <div class="number">
                <p class="oldPrice">
                  {{item.price}}
                </p>
                <p class="latestPrice">
                  {{item.lprice}}
                </p>
              </div>
            </a>
          </li>
        </div>
        <div class="swiper-slide item">
          <li v-for="(item,index) in datas.bBanner.four"
              :class="{
              'banner10': index===0,
              'banner11': index===1,
              'banner12': index===2
            }"
          >
            <a>
              <img :src="item.img" alt="">
              <div class="text">
                {{item.title}}
              </div>
              <div class="number">
                <p class="oldPrice">
                  {{item.price}}
                </p>
                <p class="latestPrice">
                  {{item.lprice}}
                </p>
              </div>
            </a>
          </li>
        </div>
      </ul>
    </div>
</template>
<script>
  import axios from 'axios'
    export default{
      data(){
        return {
            datas:{

            }
        }
      },
        mounted(){
          axios.get('static/data.json').then(res=> {
              let queryId = this.$route.query.id;
              let goodData = res.data.details;
              for (let value in goodData) {
                if (goodData[value].id == queryId) {
                  this.datas = goodData[value]
                }
              }
              this.$nextTick(()=>{
                var seeBanner = new Swiper('#seeBanner', {
                  autoplay: false
                })
              })
          })
        },
      directives: {
        li: {
          // 指令的定义
          inserted: function (el) {
            el.focus()
          }
        }
      }
    }
</script>
<style>

</style>
