import { createStore } from 'vuex'
import shop from '@/Api/shop'
export default createStore({
  state: {
    products: [],
    cart :[],
    checkoutStatus:null,
  },

  mutations: {
    setProducts(state, products){
      state.products =products;
    },
    //next 
    pushProductToCart(state, productId){
      state.cart.push({
         id: productId,
         quantity: 1
      }); 
    },
    //next 
    incrementItemQuantity(state, cartItem){
      cartItem.quantity++;
    },
    //next 
    decrementProductInventory(state,product){
      product.inventory--;
    },
    //next 
    emptyCart(state){
      state.cart=[];
    },
    //next 
    setCheckoutStatus(state,status){
      state.checkoutStatus =status
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
      //next function 
      addProductTocart({state,  commit}, product)
      {
        if(product.inventory>0){
          const cartItem =state.cart.find(item=>item.id===product.id)
          if(!cartItem){
            //if 
              commit('pushProductToCart', product.id)
          }else{
            //else 
            commit('incrementItemQuantity',cartItem)
          }
          commit('decrementProductInventory',product)
        }
      },
      //end of function 
      checkout({state, commit}){
        shop.buyProducts(
          state.cart,
          ()=>{
           commit('emptyCart');
           commit('setCheckoutStatus','success');
          },
          ()=>{
            commit('setCheckoutStatus','fail');
          }
        )
      },

      
  },
  getters:{
    availableProducts:(state)=>{
      return state.products.filter(product=>product.inventory>0); 
      // return state.products;
    },
      //next 
      cartProducts(state){
        return state.cart.map(cartItem=>{
          const product =state.products.find( product=> product.id===cartItem.id);
          return {
            title: product.title, 
            price: product.price,
            quantity: cartItem.quantity,
          }
        });
      },
      //next 
      cartTotal(state, getters){
        // let total =0;
        // getters.cartProducts.array.forEach(product => {
            
        //   total +=product.price*product.quantity;
          
        // });
       return  getters.cartProducts.reduce((total,product)=>total+product.price*product.quantity,0);
        //return 1;
      },
      //next
      productIsInStock(){
        return ((product)=>{
            product.inventory>0
        })
      }
      //next 
  },
  
  modules: {
  }
})
