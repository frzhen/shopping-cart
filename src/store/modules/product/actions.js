import axios from "axios";
import * as types from "@/store/modules/product/mutation-types";

const actions = {
    getProductItems({ commit }, token) {
        axios.get(`/api/products?token=${token}`).then((response) => {
            commit(types.UPDATE_PRODUCT_ITEMS, response.data)
        }).catch((error) => {console.log(error)});
    },
};

export default actions;
