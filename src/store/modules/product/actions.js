import axios from "axios";

const actions = {
    getProductItems({ commit }, token) {
        axios.get(`/api/products?token=${token}`).then((response) => {
            commit('UPDATE_PRODUCT_ITEMS', response.data)
        }).catch((error) => {console.log(error)});
    },
};

export default actions;
