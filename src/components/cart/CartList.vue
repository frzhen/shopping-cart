<template>
<div class="block">
  <div class="card">
    <div class="card-header">
      <div class="card-header-title has-text-success">
        Shopping Cart
      </div>
    </div>
    <div class="card-content px-4 py-4">
      <ul>
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
      <div class="container my-3 mx-5">
        <div class="columns">
          <div class="column">
            <p>
              Total Quantity:
              <span class="has-text-weight-bold ml-1">
                {{ cartQuantity}}
              </span>
            </p>
          </div>
          <div class="column has-text-right">
            <em class="fas fa-trash-alt"></em>
            Remove-all
          </div>
        </div>

      </div>
    </div>
    <div class="card-footer">
      <div class="container mx-4 my-4 has-text-centered">
        <button class="button is-success is-outlined">
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
import { mapGetters } from 'vuex';

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
  }
}
</script>

<style lang="scss" scoped>
</style>
