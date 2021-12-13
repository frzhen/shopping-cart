<template>
  <div id="app">
    <div class="container mt-6 px-6">
      <div class="container mx-6 mb-3">
        <div class="navbar px-5 py-3">
          <div class="navbar-menu">
            <div class="navbar-end">
              <div class="nav-item">
                <router-link class="button is-success is-inverted" to="/products">
                  <em class="nav-icon fas fa-user mr-2"></em>
                  <span class="has-text-grey">shop</span>
                </router-link>
              </div>
              <div class="nav-item">
                <router-link class="button is-info is-inverted" to="/cart">
                  <em class="nav-icon fas fa-shopping-cart mr-2">
                    <span v-if="(cartQuantity !== 0 && cartQuantity !== '0')" class="badge">{{ cartQuantity }}</span>
                  </em>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'App',
  created() {
    const token = localStorage.getItem("token");
    this.$store.dispatch("cart/getCartItems", token);
  },
  computed: {
    ...mapGetters({
      cartQuantity: 'cart/cartQuantity',
    }),
  },
}
</script>

<style lang="scss">
html, body,{
  background-color: #bcbcbe;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.nav-icon {
  font-size: 20px;
}
.badge {
  position: absolute;
  font-size: 11px;
  font-family: Arial, Helvetica, sans-serif;
  top: 5px;
  right: 18px;
  padding: 1px 4px;
  border-radius: 50%;
  background: #fc8c3c;
  color: white;
}
</style>
