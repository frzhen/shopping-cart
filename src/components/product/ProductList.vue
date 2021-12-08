<template>
  <div class="block">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title has-text-primary">
          Product List
        </div>
        <div class="card-header-icon">
          <span class="icon has-text-primary">
            <em class="icon-layers"></em>
          </span>
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
