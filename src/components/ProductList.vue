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
export default {
   
    data(){
        return {
            products: [ ]
        }
    },
    created(){
        shop.getProducts(products=>{
            this.products =products;
        });
    }

};
</script>