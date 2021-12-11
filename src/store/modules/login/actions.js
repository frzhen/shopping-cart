import axios from "axios";

const actions = {
    login ({ commit }) {
        commit('LOGIN_PENDING');
        return axios.post('/api/login').then((response) => {
            localStorage.setItem("token", response.data.token);
            commit('SET_TOKEN', response.data.token);
            commit('LOGIN_SUCCESS');
        });
    },
    logout ({ commit }) {
        return new Promise((resolve) => {
            localStorage.removeItem("token");
            commit('SET_TOKEN', null);
            resolve();
        });
    }
}

export default actions;
