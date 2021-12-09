<template>
<div class="block">
  <div class="card">
    <div class="card-header">
      <div class="card-header-title has-text-grey">
        Shopping Cart
      </div>
      <div class="is-size-4 mr-4 mt-2">
        <em v-if="!cartItems.length" class="icon-basket has-text-grey "></em>
        <em v-if="cartItems.length" class="icon-basket-loaded has-text-success"></em>
      </div>
    </div>
    <div class="card-content px-4 py-4">
      <p v-if="!cartItems.length" class="has-text-centered has-text-primary">
        Add some items to the cart!
      </p>
      <ul v-if="cartItems.length">
        <li>
          <CartListItem
          v-for="cartItem in cartItems"
          :key="cartItem.id"
          :cartItem="cartItem"
          />
        </li>
      </ul>
    </div>
    <div class="card-footer ">
      <div class="container my-1 mx-4">
        <div class="columns">
          <div class="column">
            <p class="is-size-7 my-2">
              Total Quantity:
              <span class="has-text-weight-bold ml-1">
                {{ cartQuantity}}
              </span>
            </p>
          </div>
          <div class="column has-text-right my-1">
            <button class="button is-info is-inverted is-size-7 px-2 py-0 my-0 mx-0"
                    @click="removeAllCartItems()">
              <em class="fas fa-trash-alt mr-1" ></em>
              <span>Remove-all</span>
            </button>
          </div>
        </div>

      </div>
    </div>
    <div class="card-footer">
      <div class="container mx-4 my-4 has-text-centered">
        <button class="button is-success is-outlined"
          @click="checkoutCart">
          Checkout (<span class="has-text-weight-bold">$</span>
          <span class="has-text-weight-bold has-text-danger">
          {{ cartTotal }}
        </span>)
        </button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import CartListItem from "@/components/cart/CartListItem";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "CartList",
  components: {
    CartListItem
  },
  created() {
    this.$store.dispatch("cart/getCartItems");
  },
  computed: {
    ...mapGetters({
      cartItems: 'cart/cartItems',
      cartQuantity: 'cart/cartQuantity',
      cartTotal: 'cart/cartTotal'
    }),
  },
  methods: {
    ...mapActions({
      removeAllCartItems: 'cart/removeAllCartItems',
      checkoutCart: 'cart/checkoutCart',
    }),
  }
}
</script>
<style lang="scss" scoped>
.button.is-info.is-inverted {
  &:hover {
    background-color: red;
    color: #fff;
  }
}
</style>
