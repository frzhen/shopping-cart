import axios from 'axios';
import * as types from './mutation-types';

const state = {
    productItems: []
};

const mutations = {
    [types.UPDATE_PRODUCT_ITEMS] (state, payload) {
        state.productItems = payload;
    }
};

const actions = {
    getProductItems({ commit }) {
        axios.get('/api/products').then((response) => {
            commit(types.UPDATE_PRODUCT_ITEMS, response.data)
        }).catch((error) => {console.log(error)});
    },
};

const getters = {
    productItems: state => state.productItems,
    productTotal: state => {
        return state.productItems.reduce((acc) => {
            return acc+1;
        }, 0).toFixed(0);
    },
};

const productModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

export default productModule;
