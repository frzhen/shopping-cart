<template>
  <div id="app">
  <div class="block">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: lightgray;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
