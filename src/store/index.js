import { createStore } from 'vuex'

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
    
  },
  modules: {
  }
})
