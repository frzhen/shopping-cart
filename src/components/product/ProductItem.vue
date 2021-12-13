<template>
  <div class="card" v-if="productItem">
    <div class="card-header">
      <div class="card-header-icon">
        <span class="return-icon" @click="$router.go(-1)">
          <em class="fa fa-arrow-left is-primary mt-3 mx-2"></em>
        </span>
      </div>
      <div class="card-header-title is-centered">
        <span>{{ productItem.title }}</span>
      </div>
      <div class="card-header-icon">
        <span
            v-for="type in productItem.product_type"
            :key="type"
            class="tag is-info is-rounded is-light mx-1">
              {{ type }}
        </span>
      </div>
    </div>
    <div class="card-content">
      <div class="columns is-vcentered">
        <div class="column is-half has-text-start ">
          <div class="my-6 py-6 ml-6">
            {{ productItem.description }}
          </div>
          <div class="my-6 py-6 ml-6">
            Founded:
            <span class="has-text-weight-bold">
            {{ productItem.created_at }}
          </span>
          </div>
        </div>
        <div class="column is-half has-text-centered">
          <img :src="require('../../assets/images/' + productItem.image_tag)" alt=""/>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="card-footer-item">
        <button class="button is-primary product-item__button"
            @click="addAndGoToCart(productItem)">
              Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['id'],
  computed: {
    productItem() {
      return this.$store.getters['product/productItemFromId'](Number(this.id));
    }
  },
  methods: {
    addAndGoToCart(cartItem) {
      this.$store.dispatch('cart/addCartItem', cartItem)
        .then(() => {
          this.$router.push('/cart');
        }).catch((error) => {console.log(error)});
    },
  }
}
</script>

<style scoped>
</style>
