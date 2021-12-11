import * as types from '@/store/modules/login/mutation-types';
const mutations = {
    [types.SET_TOKEN] (state, token) {
        state.token = token;
    },
    [types.LOGIN_PENDING] (state) {
        state.loading = true;
    },
    [types.LOGIN_SUCCESS] (state) {
        state.loading = false;
    }
}

export default mutations;
