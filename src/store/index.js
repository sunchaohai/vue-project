import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)


export default new VueX.Store({
  state:{
    order:{
      "counter":1,
      "downmenu":1,
      "radio":1
    },
    totalPrice:0
  },

  mutations: {
    updateOrder (state,data) {
      state.order[data[0]] = data[1];
    },
    updateTotalPrice(state,price){
      debugger;
      state.totalPrice = price;
    }
  },

  actions: {
    updateOrder (context,data) {
      context.commit("updateOrder",data);
    },
    updateTotalPrice(context,price){
      context.commit("updateTotalPrice",price);
    }
  },

  getters: {
    getOrder(state){
      return state.order ? state.order : 0;
    },
    getTotalPrice(state){
      return state.totalPrice >0 ? '￥' + state.totalPrice : 0;
    }
  }


})
