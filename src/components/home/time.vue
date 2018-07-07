<template>
  <div id="box">
   <!-- <img src="../assets/timer/3.png" alt="" ref='time'class='time'/>
    <img src="../assets/timer/0.png" alt="" ref='time'class='time'/>
    <img src="../assets/timer/d.png" alt="" />
    <img src="../assets/timer/0.png" alt="" ref='time'class='time'/>
    <img src="../assets/timer/0.png" alt="" ref='time'class='time'>-->
    <span class="zero">00</span>
    <span class="dian">:</span>
    <span class="minut">22</span>
    <span class="dian">:</span>
    <span class="second">33</span>
  </div>
</template>
<script>
    export default{
        datas(){
            return   {
              pics:[

              ]
            }
        },
        mounted(){
          this.$nextTick(()=>{
           /* document.addEventListener("DOMContentLoaded",function(event){*/
              var aSpan = document.querySelectorAll('#box span');
              var x = 30,
                interval,
                arrUrl = ['0','1','2','3','4','5','6','7','8','9'];
              var aBox = document.getElementById('box');
              window.onload = function() {
                var d = new Date("1111/1/1,0:" + x + ":0");
                interval = setInterval(function() {
                  var m = d.getMinutes();
                  var s = d.getSeconds();
                  m = m < 10 ? "0" + m : m;
                  s = s < 10 ? "0" + s : s;
                  var timer = m+''+s;
                  aSpan[2].innerHTML = m;
                  aSpan[4].innerHTML = s;
                  if (m == 0 && s == 0) {
                    clearInterval(interval);
                    return;
                  }
                  d.setSeconds(s - 1);
                }, 1000);
              }
            });

        }
    }
</script>
<style>

</style>
