const getters = {
    productItems: state => state.productItems,
    productTotal: state => {
        return state.productItems.reduce((acc) => {
            return acc+1;
        }, 0).toFixed(0);
    },
    productItemFromId: (state) => (id) => {
        return state.productItems.find(productItem => productItem.id === id);
    },
};

export default getters;
