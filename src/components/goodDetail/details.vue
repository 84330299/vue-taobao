<template>
    <div id="details">
      <div class="title">
        <div class="cell1">
          <hr>
        </div>
        <span class="text">详情</span>
        <div class="cell2">
          <hr>
        </div>
      </div>
      <div class="subtitle">
        {{datas.subTitle}}
      </div>
      <section class="picMain">
        <img :src="item.img" alt="" v-for="(item,index) in datas.detailed"
        :class="{'img1':index===0,'img2':index===1,'img3':index===2,'img4':index===3,'img5':index===4,'img6':index===5}"
        >
      </section>
    </div>
</template>
<script>
    export default{
      props: ['datas']
    }
</script>
<style>

</style>
