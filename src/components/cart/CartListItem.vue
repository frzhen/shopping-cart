<template>
<div class="container">
  <div class="card mx-0 my-0">
    <div class="card-header">
      <div class="card-header-title">
        {{ cartItem.title }}
      </div>
      <div class="card-header-icon has-text-grey">
        <em class="fas fa-arrow-circle-up mr-1" @click="addCartItem(cartItem)"></em>
        <em class="fas fa-arrow-circle-down mr-0" @click="removeCartItem(cartItem)"></em>
      </div>
    </div>
    <div class="card-content has-text-centered">
      <img :src="require('../../assets/images/' + cartItem.image_tag)"
          class="thumbnail" alt="" />
    </div>
    <div class="card-footer px-0 mx-3 is-justify-content-center">
      <div class="container my-1">
        <div class="columns">
          <div class="column has-text-success has-text-left">
            ${{ cartItem.price }} <span class="has-text-grey-light">each</span>
          </div>
          <div class="column has-text-grey has-text-right">
            Quantity: <span>{{ cartItem.quantity }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { mapActions} from "vuex";

export default {
  name: "CartListItem",
  props: ["cartItem"],
  methods: {
    ...mapActions({
      addCartItem: 'cart/addCartItem',
      removeCartItem: 'cart/removeCartItem'
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
img.thumbnail {
  width: 100px;
  height: 100px;
}
</style>
