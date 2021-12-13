const mutations = {
    SET_TOKEN (state, token) {
        state.token = token;
    },
    LOGIN_PENDING (state) {
        state.loading = true;
    },
    LOGIN_SUCCESS (state) {
        state.loading = false;
    }
}

export default mutations;
