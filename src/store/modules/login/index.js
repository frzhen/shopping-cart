import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
    token: null,
    loading: false
}

const loginModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default loginModule;
