<template>
  <button class="btn btn-primary">Cart ({{ numInCart }})</button>
</template>
<script>
export default {
  name: 'shoppingCart',
//   computed: {
//     inCart() { return this.$store.getters.inCart; },
//     numInCart() { return this.inCart.length; },
//   },
};
</script>