<template>
  <div id="app" class="container my-5">
    <h1>My online store</h1>
  </div>
</template>
<script>
import Product from './components/Product';

export default {
  name: 'app',
  data() {
    return {
      // Nothing for now.
    };
  },
  components: {
    Product
  },
};
</script>
<style>
  /* Nothing for now */
</style>