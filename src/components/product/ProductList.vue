<template>
  <div class="block">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">
          Product List
        </div>
      </div>
      <div class="card-content">
        <ProductListItem />
      </div>
    </div>
  </div>
</template>

<script>
import ProductListItem from '@/components/product/ProductListItem';

export default {
  name: "ProductList",
  components: {
    ProductListItem
  }
}
</script>

<style scoped>

</style>
