<template >
    <div>
         <h1> Product List</h1>    
          <ul>
              <li v-for="(product, index) in products " v-bind:key="index">
                  {{product.title}} - {{ product.price}}€  - {{ product.inventory }}

              </li>
          </ul>
    </div>
</template>
<script>
 import shop from '@/Api/shop';
 import store from '@/store' 
export default {
   
    // data(){
    //     return {
    //         products: [ ]
    //     }
    // },
    computed:{
        products(){ 
          return store.getters.availableProducts
        }
    },
    created(){
        shop.getProducts(products=>{
            store.commit('setProducts',products);
        });
    }

}; 
</script>