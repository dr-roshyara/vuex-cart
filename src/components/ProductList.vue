<template >
    <div>
         <h1> Product List</h1>    
           <img v-if="loading"  src="https://i.imgur.com/JfPpwOA.gif"  alt="">
          <ul v-else>
              <li  v-for="(product, index) in products " v-bind:key="index">
                  {{product.title}} - {{ product.price}}€  - {{ product.inventory }}

              </li>
          </ul>
    </div>
</template>
<script>
//  import shop from '@/Api/shop';
 import store from '@/store' 
export default {
   
    data(){
        return {
           loading:false
        }
    },
    computed:{
        products(){ 
          return store.getters.availableProducts
        }
    },
    created(){
        this.loading=true;
      store.dispatch('fetchProducts')
      .then(()=>this.loading=false); 
    }

}; 
</script>