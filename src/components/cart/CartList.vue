<template>
<div class="block">
  <div class="card">
    <div class="card-header">
      <div class="card-header-title has-text-centered has-text-primary">
        Shopping cart
      </div>
      <div class="card-header-icon">
        <span class="icon">
          <em class="fas fa-shopping-cart"></em>
        </span>

      </div>

    </div>
    <div class="card-content">
      <ul>
        <li>
          <CartListItem />
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import CartListItem from "@/components/cart/CartListItem";
export default {
  name: "CartList",
  components: {
    CartListItem
  }
}
</script>

<style scoped>

</style>
