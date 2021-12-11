import mutations from './mutations'
import actions from './actions';
import getters from './getters';


const state = {
    cartItems: [],
    checkout: false
};

const cartModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

export default cartModule;
