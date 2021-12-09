import axios from 'axios';
import * as types from './mutation-types';

const state = {
    cartItems: []
};

const mutations = {
    [types.UPDATE_CART_ITEMS] (state, payload) {
        state.cartItems = payload;
    }
};

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
};

const getters = {
    cartItems: state => state.cartItems,
    cartQuantity: state => {
      return state.cartItems.reduce((acc, cartItem) => {
          return acc + cartItem.quantity;
      },0).toFixed(0);
    },
    cartTotal: state => {
        return state.cartItems.reduce((acc, cartItem) => {
           return cartItem.quantity * cartItem.price + acc;
        },0).toFixed(2);
    },
};

const cartModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

export default cartModule;
