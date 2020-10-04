### Shopping Cart using Vuex
    #create an api with shop.js 
    - mkdir Api 
    - cd Api 
    - touch shop.js 
    - add the follwoing lines to shop.js 
 
       
    const _products = [
        {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
        {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
        {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
    ]
    
    export default {
        getProducts (cb) {
        setTimeout(() => cb(_products), 100)
        },
    
        buyProducts (products, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.webdriver)
            ? cb()
            : errorCb()
        }, 100)
        }
    }
#  # cereate a productList.vue file which is a product component. 
        In the productList.vue file, we have added a simple template 
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
    and a script which exports shop form the shop.js 
    #script 
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

#   #However the data create here is tightly coupled to the business logic. 

