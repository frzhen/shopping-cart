import * as types from "@/store/modules/cart/mutation-types";

const mutations = {
    [types.UPDATE_CART_ITEMS] (state, payload) {
        state.cartItems = payload;
    },
    [types.CHECKOUT_CART] (state, payload) {
        state.checkout = true;
        state.cartItems = payload;
    }
};

export default mutations;
