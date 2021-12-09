import * as types from "@/store/modules/product/mutation-types";

const mutations = {
    [types.UPDATE_PRODUCT_ITEMS] (state, payload) {
        state.productItems = payload;
    }
};

export default mutations;
