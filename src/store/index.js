import { createStore } from 'vuex'
import shop from '@/Api/shop'
export default createStore({
  state: {
    products: []
  },

  mutations: {
    setProducts(state, products){
      state.products =products;
    }
  }, 
  actions: {
      fetchProducts(context){
        shop.getProducts(products=>{
          context.commit('setProducts',products);
      });
      }
  },
  getters:{
    availableProducts:(state)=>{
      return state.products;
  }
},
  modules: {
  }
})
