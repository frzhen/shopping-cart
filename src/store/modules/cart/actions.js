import axios from "axios";
import * as types from "@/store/modules/cart/mutation-types";

const actions = {
    getCartItems ({ commit }) {
        axios.get("api/cart").then((response) => {
            commit(types.UPDATE_CART_ITEMS, response.data);
        }).catch((error) => {console.log(error)});
    },
    addCartItem ({ commit }, cartItem) {
        axios.post("api/cart", cartItem).then((response) => {
            commit(types.UPDATE_CART_ITEMS, response.data);
        }).catch((error) => {console.log(error)});
    },
    removeCartItem ({ commit }, cartItem) {
        axios.post("api/cart/delete", cartItem).then((response) => {
            commit(types.UPDATE_CART_ITEMS, response.data);
        }).catch((error) => {console.log(error)});
    },
    removeAllCartItems ({ commit }) {
        axios.post("api/cart/delete/all").then((response)=>{
            commit(types.UPDATE_CART_ITEMS, response.data);
        }).catch((error) => {console.log(error)});
    },
    checkoutCart({ commit }) {
        axios.post('/api/cart/checkout').then((response) => {
            commit(types.CHECKOUT_CART, response.data);
        }).catch((error) => {console.log(error)});
    },
};

export default actions;
