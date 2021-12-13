import axios from "axios";

const actions = {
    getCartItems ({ commit }, token) {
        axios.get(`api/cart?token=${token}`).then((response) => {
            commit('UPDATE_CART_ITEMS', response.data);
        }).catch((error) => {console.log(error)});
    },
    addCartItem ({ commit }, cartItem) {
        axios.post('api/cart/add', cartItem).then((response) => {
            commit('UPDATE_CART_ITEMS', response.data);
        }).catch((error) => {console.log(error)});
    },
    removeCartItem ({ commit }, cartItem) {
        axios.post('api/cart/delete', cartItem).then((response) => {
            commit('UPDATE_CART_ITEMS', response.data);
        }).catch((error) => {console.log(error)});
    },
    removeAllCartItems ({ commit }) {
        axios.post('api/cart/delete/all').then((response)=>{
            commit('UPDATE_CART_ITEMS', response.data);
        }).catch((error) => {console.log(error)});
    },
    checkoutCart({ commit }) {
        axios.post('/api/cart/checkout').then((response) => {
            commit('CHECKOUT_CART', response.data);
        }).catch((error) => {console.log(error)});
    },
};

export default actions;
