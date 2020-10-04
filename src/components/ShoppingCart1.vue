<template >
    <div>
         <h1> Shopping  List</h1>    
          
          <ul  style="background-color: #ffffff ">
              <li  v-for="(product, index) in products " v-bind:key="index" style="padding:10px;">
                  {{product.title}} - {{ product.price}}€  - {{ product.quantity }}
            
              </li>
          </ul> 
          <p stayle=" padding:2px; margin:2rem;">  Total : {{ total }} </p>
      
    </div> 
</template>
<script>
//  import shop from '@/Api/shop';
//  import store from '@/store'   
export default {
   computed:{
       products(){
           return this.$store.getters.cartProducts
       },
       //next 
       total(){
           return this.$store.getters.cartTotal
       }
   }
  

}
</script>