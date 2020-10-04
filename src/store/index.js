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
        // actions are the same as methods. 
        fetchProducts({commit}){
          return new Promise(
              (resolve)=>{
              //make the call . 
                      //run set products mutation 
                      //actions are complicated never update the state 
                  shop.getProducts(products=>{
                          // this.products =products; 
                          // store.state.products =products;
                       commit('setProducts', products);
                       resolve();

                    });
                      

              });
       

      },
      
  },
  getters:{
    availableProducts:(state)=>{
      return state.products.filter(product=>product.inventory>0); 
  }
},
  modules: {
  }
})
