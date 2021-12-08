<template>
  <div id="app">
  <div class="container mx-6 my-6">
    <div class="columns">
      <div class="column is-9">
        <ProductList />
      </div>
      <div class="column is-3">
        <CartList />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import CartList from './components/cart/CartList';
import ProductList from './components/product/ProductList';

export default {
  name: 'App',
  components: {
    CartList,
    ProductList,
  }
}
</script>

<style lang="scss">
html, body,{
  background-color: #E6E9EE;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
