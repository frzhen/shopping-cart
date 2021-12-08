<template>
<div class="block">
  <div class="cars">
    <div class="card-header">
      <div class="card-header-title">
        Shopping Cart
      </div>
    </div>
    <div class="card-content">
      <CartListItem />
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
