import mutations from './mutations'
import actions from './actions';
import getters from './getters';


const index = {
    cartItems: [],
    checkout: false
};

const cartModule = {
    namespaced: true,
    state: index,
    mutations,
    actions,
    getters
};

export default cartModule;
