import { createStore } from 'vuex'
import shop from '@/Api/shop'
export default createStore({
  state: {
    products: [],
    cart :[]
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
      addProductTocart(context, product)
      {
        if(product.inventory>0){
          const cartItem =context.state.cart.find(item=>item.id===product.id)
          if(!cartItem){
            //if 
              context.commit('pushProductToCart', product.id)
          }else{
            //else 
            context.commit('incrementItemQuantity',cartItem)
          }
          context.commit('decrementProductInventory',product)
        }
      }
      //end of function 
      
  },
  getters:{
    availableProducts:(state)=>{
      return state.products.filter(product=>product.inventory>0); 
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
      }
      //next 
  },
  
  modules: {
  }
})
