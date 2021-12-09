
const getters = {
    cartItems: state => state.cartItems,
    cartQuantity: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity;
        },0).toFixed(0);
    },
    cartTotal: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return cartItem.quantity * cartItem.price + acc;
        },0).toFixed(2);
    },
};

export default getters;
