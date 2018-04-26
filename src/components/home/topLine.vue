<template>
    <div id="topLine">
      <span class="icon"></span>
      <div class="move">
        <ul class="animate" v-for="(item,index) in datas" :class="{'aShow':index===0,'bShow':index===1,'cShow':index===2}"  ref="ul">
          <li class="border">{{item.name}}</li>
          <li class="text">{{item.text}}</li>
        </ul>
      </div>
    </div>
</template>
<script>
  import axios from 'axios'

    export default{
      data(){
        return {
          datas: []
        }
      },
      mounted(){
       /* var qs=require('qs');
        var instance = axios.create({
          headers: {'content-type': 'application/x-www-form-urlencoded'}
        });
        instance.post('/static/data.json',qs.stringify(params)).then(res => {
            this.datas = res.data.topLine
            this.$nextTick(()=>{
              var oUl = document.querySelectorAll("#topLine ul.animate"),
                length = oUl.length,
                dex = 0,
                index = 0;
              oUl[dex].classList.add("aShow");
              oUl[dex].style.display = "block";
              setInterval(function(){
                oUl[dex].classList.remove("aShow");
                oUl[dex].style.display = "none";
                index++;
                index %= length;
                oUl[index].classList.add("aShow");
                oUl[index].style.display = 'block';
                dex = index;
              },3000);
            })
          })*/
        axios.get('/static/data.json').then(res => {
          this.datas = res.data.topLine
          this.$nextTick(()=>{
            var oUl = document.querySelectorAll("#topLine ul.animate"),
             length = oUl.length,
              dex = 0,
             index = 0;
            oUl[dex].classList.add("aShow");
            oUl[dex].style.display = "block";
            setInterval(function(){
               oUl[dex].classList.remove("aShow");
               oUl[dex].style.display = "none";
               index++;
               index %= length;
               oUl[index].classList.add("aShow");
               oUl[index].style.display = 'block';
               dex = index;
            },3000);
          })
          })
        }
      }

</script>
<style>

</style>
