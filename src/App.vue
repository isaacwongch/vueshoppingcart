<template>
  <div id="app" class="container my-5">
    <div class="row mb-3">
      <div class="col-md-9">
        <h1>My online store</h1>
      </div>
      <div class="col-md-3">
        <ShoppingCart />
      </div>
    </div>
    <div class="row">
      <Product v-for="product in products"
      :key="product.invId"
      :invId="product.invId"
      :img="product.img"
      :price="product.price"  @addToCart="addToCart"/>
      </div>
      <p>{{cart}}</p>
  </div>
</template>
<script>
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';

export default {
  name: 'app',
  data() {
    return {
      
    };
  },
  computed:{
    products(){
      return this.$store.state.products;
    },
    cart(){
      return this.$store.state.cart;
    },
  },
  methods:{
    addToCart(id){
        this.$store.state.cart.push(id);
        console.log("product added to the cart");
    }
  },
  components: {
    Product, ShoppingCart,
  },
};
</script>
<style>
  /* Nothing for now */
</style>