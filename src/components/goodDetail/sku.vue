<template>
    <div id="sku">
      <div class="sku_wrap">
        <div class="sku_content">
          <div class="close"><img src="../../assets/deatil/seClose.png" alt=""></div>
          <header class="headers">
            <div class="img-wrap"><img :src="skuInfo.img" alt=""></div>
            <div class="sku-main">
              <p><span class="price">{{skuInfo.price}}</span></p>
              <div class="stock">库存{{skuInfo.stock}}件</div>
              <div class="sku-info">
                {{skuInfo.Select}}
                <span>{{skuInfo.mainTitle}}</span>
                <span>{{skuInfo.subTitle}}</span>
              </div>
            </div>
          </header>
          <div class="body">
            <ul class="sku-list">
              <li class="typeO">
                <h2>{{skuInfo.tiTle}}</h2>
                <div class="items">
                  <span v-for="item in skuType.color" :class="{disabled: item.state === 2, active: item.state === 1}"
                        @click="colorItemClick(item)">{{item.type}}</span>
                </div>
              </li>
              <li class="typeT">
                <h2>{{skuInfo.sTitle}}</h2>
                <div class="items">
                  <span v-for="item in skuType.type" :class="{disabled: item.state === 2, active: item.state === 1}" @click="typeItemClick(item)">{{item.type}}</span>
                </div>
              </li>
            </ul>
            <div class="number-wrap">
              <div class="number-line">
                <label for="shops">购买数量</label>
                <div class="addNumber">
                  <button class="decrease" @click="decrease">-</button>
                  <input type="number" id="number" v-model="amount">
                  <button class="increase" @click="increase">+</button>
                </div>
              </div>
            </div>
            <div class="install-wrap"  v-if="queryId == 'one' ||queryId == 'two'||queryId == 'three'">
              <h2>花呗分期(可选)</h2>
              <div class="select">
                <span @click="install()">
                  <p>分3期(0手续费)</p>
                  <p class="price">{{skuInfo.installThree}}起/期</p>
                </span>
                <span @click="install()">
                  <p>分6期(含手续费)</p>
                  <p class="price">{{skuInfo.installSix}}起/期</p>
                </span>
                <span @click="install()">
                  <p>分12期(含手续费)</p>
                  <p class="price">{{skuInfo.installTwelve}}起/期</p>
                </span>
              </div>
            </div>
          </div>
          <footer class="OK" @click="addCart()">
            确定
          </footer>
        </div>
      </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import Vue from 'vue'
  import { Toast } from 'mint-ui'
  import { MessageBox }from 'mint-ui'
    export default{
      data(){
        return{
          skuList:[],
          skuInfo:{},
          skuType:{},
          typeSelect:{},
          skuResult:[],
          totalStock:0,
          qSelect:'请选择',
          queryId: null,
          amount: 1,
          goodList:{},
          checkId:0
        }
      },
      mounted(){
        axios.get('/static/goodDetail.json').then(res=>{
           let queryId = this.$route.query.id
           this.queryId = this.$route.query.id
           let getData = res.data.details
           for(let value in getData){
               if(getData[value].id == queryId){
                 this.skuList = getData[value].skuList
                 this.skuInfo = getData[value].skuInfo
                 this.goodList = getData[value]
               }
           }
          this.$nextTick(()=>{
            var $install = $('#sku .install-wrap .select span');
            $install.click(function(){
                $(this).addClass('active').siblings().removeClass('active');
            })

          })
          this.typeInit();
          this.addStateToType();

          //监听colorchange事件,同时传值
          this.$on('colorChange',(target)=>{
            this.colorChangeHandler(target)
          });

          //监听typechange事件,同时传值
          this.$on('typeChange',(target)=>{
            this.typeChangeHandler(target)
          });
        });


      },
      methods:{
        //初始化获取的skuList的类型
        typeInit(){
            this.skuList.forEach((item)=>{
              Object.keys(item).forEach(sitem=>{
                if(this.skuType[sitem]&&this.skuType[sitem].indexOf(item[sitem]) == -1){
                  this.skuType[sitem].push(item[sitem])
                }else if(!this.skuType[sitem]){
                  this.skuType[sitem] = [item[sitem]]
                }
                //初始化类型选择,自身被选择几次
                if(!this.typeSelect[sitem])this.typeSelect[sitem]=0
              })
            })
          },

        //添加状态 0 可选 1选中 2不可选
        addStateToType(){
              //给每个类型里的值分别加上类型和状态 0 没选  1已选中 2 选不了^_^
              for(let key in this.skuType){
                  this.skuType[key].forEach((item,index)=>{
                    this.skuType[key][index] = {'type': item, 'state': 0};
                  })
              }
          //相当于把自己包装成一个对象回给自己吧 => {...} 也可以理解为复制的意思
          this.skuType = Object.assign({}, this.skuType);
        },

        //属性处理函数
        attrChange(attr,attrInfo){
          let attrState = attrInfo.state;
          this.skuInfo.Select = '已选择'
          switch (attr){
            case 'color': this.skuInfo.mainTitle = attrInfo['type'];break;
            case 'type':  this.skuInfo.subTitle = attrInfo['type'];break;
          }

          //分类好的type属性值跟传过来的type属性值相比较
          this.skuType[attr].forEach((item,index)=>{
            if(item.type == attrInfo.type) item.state = 1
            else item.state = 2
          })

          //统计已经选择属性
          let count = 0;
          Object.keys(this.typeSelect).forEach(item=>{
              count += this.typeSelect[item]
          })

          //如果选择的是不可选,从获取的原始数据中重新筛选
          if(attrState==2){
            this.resetSelect()
            this.selectHandle(this.skuList,attr,attrInfo)
          }
          else{
              //如果count = 0 就是第一次被选择,也从获取的原始数据中重新筛选
              if(count ==0)
              {
                this.resetSelect()
                this.selectHandle(this.skuList,attr,attrInfo)
              }
              else{
                this.selectHandle(this.skuList,attr,attrInfo) //如果count!=0代表已经选择过，则是重新选择重新从原始数据中筛选
              }
          }
        },

        //重置选择函数
        resetSelect(){
          for(let key in this.typeSelect){
            this.typeSelect[key] = 0;
          }
        },

        //选择处理函数
        selectHandle(dataList,attr,attrInfo){
          this.typeSelect[attr] = 1
          this.skuResult = []
          this.skuInfo.stock = 0

          //从原始数据中比较函数传过来的信息的类型
          dataList.forEach(item=>{
              if(item[attr] == attrInfo['type']){
                this.skuResult.push(item);
                this.skuInfo.stock += item.stock;
              }
          })

          //从数据结果集中获取匹配到的类型数据再进行分组
          let tempSkuType={}
          this.skuResult.forEach((item)=>{
            Object.keys(item).forEach(sitem=>{
              if(tempSkuType[sitem]&&tempSkuType[sitem].indexOf(item[sitem]) == -1){
                tempSkuType[sitem].push(item[sitem])
              }else if(!tempSkuType[sitem]){
                tempSkuType[sitem] = [item[sitem]]
              }
            })
          })
         /* console.log(tempSkuType)
          console.log(this.skuType)
          console.log(attrInfo)*/
          //重新进行渲染更改他们的状态
          for(let key in tempSkuType){
              if(this.typeSelect[key] == 0){
                  for(let i=0;i<this.skuType[key].length;i++){
                    let currValue = this.skuType[key][i];
                    //tempskuype里的值是否有this.skuType[key][i]有就可选,无就不可(删除线)
                    if(tempSkuType[key].indexOf(currValue['type']) > -1 ){
                      currValue['state'] = 0;
                    }else {
                      currValue['state'] = 2;
                    }
                  }
              }
          }




          for(let i=0;i<this.skuType['color'].length;i++){
            let currValue = this.skuType['color'][i];
            if(currValue['type']==this.skuInfo.mainTitle){currValue['state']=1}
          }

          this.Renderer()
          this.installMoney()
        },

        //在typechange事件里的函数,colorChange里
        colorChangeHandler(msg){
          this.attrChange('color', msg);
        },

        //在colorchange里的函数,typeChange里
        typeChangeHandler(msg){
          this.attrChange('type', msg);
        },

        //触发typechang事件同时传值
        typeItemClick(item){
          this.$emit('typeChange',item);
        },

        //触发color事件同时传值
        colorItemClick(item){
          this.$emit('colorChange',item);
        },

        Renderer(){
          this.skuList.forEach(item=>{
            if( item['color'] == this.skuInfo.mainTitle )this.skuInfo.img = item.img

            if(item['color'] == this.skuInfo.mainTitle&&item['type'] == this.skuInfo.subTitle){
              this.skuInfo.stock = item.stock;
              this.skuInfo['price'] = item.price;
            }
          })
        },

        installMoney(){
          this.skuList.forEach(item=>{
            if(item['color'] == this.skuInfo.mainTitle&&item['type'] == this.skuInfo.subTitle){
              this.skuInfo.installThree = Math.floor(this.skuInfo.price/3)
              this.skuInfo.installSix = Math.floor(this.skuInfo.price*0.045/6+(this.skuInfo.price/6))
              this.skuInfo.installTwelve = Math.floor(this.skuInfo.price*0.045/12+(this.skuInfo.price/12))
            }
          })
        },

        increase(){
          if(!this.skuInfo.amount){
            Vue.set(this.skuInfo,'amount',0)
          }
          this.amount++;
          this.skuInfo.amount = this.amount;
        },

        decrease(){
            if(this.amount >= 1)this.amount--;
            this.skuInfo.amount = this.amount;
        },

        addCart(){
          var ifGood = this.$store.state.carts.find((oldGood)=>{
              return oldGood.price==this.skuInfo.price&&oldGood.imgs==this.skuInfo.img&&
                     oldGood.mainInfo==this.skuInfo.mainTitle&&oldGood.subInfo==this.skuInfo.subTitle&&
                     oldGood.shopTitle==this.goodList['sellers'][0].title&&oldGood.activity==this.goodList.activity;
          })
          if(!ifGood){
            var datas={
              id: this.goodList.id,
              goodId: "good",
              checkId: 0,
              name:this.goodList['words'][0].name,
              price:this.skuInfo.price,
              imgs:this.skuInfo.img,
              amounts:this.amount,
              mainInfo:this.skuInfo.mainTitle,
              subInfo:this.skuInfo.subTitle,
              stock: this.skuInfo.stock,
              ifCheck: false,
              shopTitle:this.goodList['sellers'][0].title,
              activity:this.goodList.activity
            }
            if(this.skuInfo.stock){
              this.$store.commit("addCarts",datas);
              Toast({
                message: '加入购物车成功',
                iconClass: 'iconfont icon-chenggongtubiao',duration: 950
              })
            }else{
              Toast({
                message: '暂时还没库存哦!',
                iconClass: 'iconfont icon-chenggongbiaoqing-copy',duration: 950
              })
            }
          }else{
            Toast({
              message: '商品已存在购物车',
              iconClass: 'iconfont icon-chenggongbiaoqing-copy',duration: 950
            })
          }
        },

        //installActive
        install(){

        }
      },
      computed:{

      },
      watch:{
          amount(val,old){
              if(this.skuInfo.stock){
                if(val>this.skuInfo.stock)this.amount = this.skuInfo.stock
                if(val<1)this.amount = 1
              }else{
                if(val>this.skuInfo.stock)this.amount = 1
              }
            if(val<1)this.amount = 1
              if(typeof val == 'string'&&val=='')this.amount = 1
          }
      }
    }
</script>
<style>

</style>
