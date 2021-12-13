<template>
  <div class="block" v-if="productItem">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">
          <router-link
              :to="'/products/' + productItem.id">
                {{ productItem.title }}
          </router-link>
        </div>
      </div>
      <div class="card-content">
        <div class="columns">
          <div class="column is-half">
            <p class="has-text-left">{{ productItem.description }}</p>
          </div>
          <div class="column has-text-centered">
            <img :src="require('../../assets/images/' + productItem.image_tag.toString())"
                 class="thumbnail" alt="" />
          </div>
        </div>

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
img.thumbnail {
  width: 200px;
  height: 200px;
}
</style>
