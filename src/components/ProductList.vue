<template >
    <div>
         <h1> Product List</h1>    
           <img v-if="loading"  src="https://i.imgur.com/JfPpwOA.gif"  alt="">
          <ul v-else style="background-color: #ffffff ">
              <li  v-for="(product, index) in products " v-bind:key="index" style="padding:10px;">
                  {{product.title}} - {{ product.price}}€  - {{ product.inventory }}
                  <span>
                      <button 
                       @click="addProductTocart(product)"
                      style="background-color: #eee;  padding-left:10px; padding-right:10px;">  
                        Add to Cart
                         </button>
                  </span>

              </li>
          </ul>
    </div>
</template>
<script>
//  import shop from '@/Api/shop';
//  import store from '@/store'  
export default {
   
    data(){
        return {
           loading:false
        }
    },
    computed:{
        products(){ 
          return this.$store.getters.availableProducts
        }
    },
    created(){
        this.loading=true;
      this.$store.dispatch('fetchProducts')
      .then(()=>this.loading=false); 
    },
    methods:{
        addProductTocart(product){
            this.$store.dispatch('addProductTocart', product)
        }
    }

}; 
</script>