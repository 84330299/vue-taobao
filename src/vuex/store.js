/**
 * Created by Administrator on 2018/4/20.
 */
import Vue from 'vue'
import Vuex, { Store } from 'Vuex'
import { MessageBox } from 'mint-ui';
Vue.use(Vuex);
const store=new Vuex.Store({
  state:{
    //数据保存本地防止刷新消失
    collection:localStorage["collection"]?JSON.parse(localStorage["collection"]): [],
    carts:localStorage["carts"]?JSON.parse(localStorage["carts"]): [],
    orders:localStorage["orders"]?JSON.parse(localStorage["orders"]): [],
    Checkindex:localStorage["Checkindex"]?JSON.parse(localStorage["Checkindex"]):0,
  },
  mutations: {
    addCarts:(state, datas) => {
        datas.checkId = datas.id+state.Checkindex;
        state.Checkindex +=1;
        state.carts.push(datas);
        localStorage.setItem("carts",JSON.stringify(state.carts));
      },
      increase(state,item){
        item.amounts++;
        if(item.amounts>=item.stock){
          item.amounts = item.stock
        }
      },
      decrease(state,item){
        if(item.amounts){
          item.amounts--;
          if(item.amounts<=1){
            item.amounts=1;
          }
          if(item.amounts>=item.stock){
            item.amounts = item.stock
          }
        }

      },
      Delete(state,index){
        MessageBox.confirm('确定删除这个宝贝吗?').then(action=>{
          state.carts.splice(index,1);
          localStorage.setItem("carts",JSON.stringify(state.carts));
        })
      }
    },
  getters:{
    moneyTotal(state){
      var total = 0;
      state.carts.find(item=>{
        if (item.ifCheck) {
          total+=item.amounts*item.price;
        }
      })
      return total
    }
  }
})

export default store
