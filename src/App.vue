<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="flex-container">
    <product-list msg="Welcome to Your Vue.js App"/>
      <shopping-cart1 />
      </div>
    </div>
</template>
 
<script>
import ProductList from '@/components/ProductList.vue'
import ShoppingCart1 from '@/components/ShoppingCart1.vue'
import { currency } from '@/currency'

export default {
  name: 'App', 
  components: { 
    ProductList,
    ShoppingCart1
  },
  currency 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex-container {
  display: flex;
 justify-content: space-around;
}
</style>
