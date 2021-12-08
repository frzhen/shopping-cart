import axios from 'axios';

const state = {
    productItems: []
};

const mutations = {
    UPDATE_PRODUCT_ITEM (state, payload) {
        state.productItems = payload;
    }
};

const actions = {
    getProductItems({ commit }) {
        axios.get('/api/products').then((response) => {
            commit('UPDATE_PRODUCT_ITEM', response.data)
        }).catch((error) => {console.log(error)});
    },
};

const getters = {
    productItems: state => state.productItems
};

const productModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

export default productModule;
