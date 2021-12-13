<template>
  <div class="block">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title has-text-grey">
          Product List
        </div>
        <div class="card-header-icon">
          <span class="icon has-text-grey">
            <em class="icon-layers"></em>
          </span>
        </div>
      </div>
      <div class="card-content">
        <ProductListItem
          v-for="productItem in productItems"
          :key="productItem.id"
          :productItem="productItem" />
      </div>
      <div class="card-footer">
        <div class="container has-text-weight-bold has-text-right mr-5 my-1">
          <p># of products:
            <span>{{ productTotal }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductListItem from '@/components/product/ProductListItem';
import { mapGetters } from 'vuex';

export default {
  name: "ProductList",
  components: {
    ProductListItem
  },
  // data() {
  //   return {
  //     productItems: [],
  //   }
  // },
  created() {
    this.token = localStorage.getItem("token");
    this.$store.dispatch('product/getProductItems', this.token);
  },
  computed: {
    // productItems() {
    //   return this.$store.product.getters.productItems;
    // }
    ...mapGetters({
      // map this.productItems to this.$store.product.getters.productItems
      productItems: 'product/productItems',
      productTotal: 'product/productTotal',
  }),
  },
};
</script>

<style lang="scss" scoped>
</style>
