<template>
  <div class="block">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">
          {{ productItem.title }}
        </div>
      </div>
      <div class="card-content">
        <p class="has-text-left">{{ productItem.description }}</p>
      </div>
      <div class="card-footer mr-5 is-justify-content-flex-end">
        <div class="title is-6 has-text-primary my-2 mr-6">${{ productItem.price }}</div>
        <div class="icon has-text-primary my-1">
          <em class="fas fa-cart-plus" @click="addCartItem(productItem)"></em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "ProductListItem",
  props: ["productItem"],
  methods: {
    ...mapActions({
      addCartItem: 'cart/addCartItem',
    }),
  },
}
</script>

<style lang="scss" scoped>
div>em {
  &:hover {
    color: orange;
  }
}
</style>
