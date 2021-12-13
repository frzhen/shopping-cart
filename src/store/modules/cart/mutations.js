const mutations = {
    UPDATE_CART_ITEMS (state, payload) {
        state.cartItems = payload;
    },
    CHECKOUT_CART (state, payload) {
        state.checkout = true;
        state.cartItems = payload;
    }
};

export default mutations;
