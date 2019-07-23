import { CART_TOTAL_AMOUNT, UPDATE_CART } from './actionTypes';

const initialState = {
    cart: [],
    totalAmount: 0,
};

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case CART_TOTAL_AMOUNT: {
            return {
                ...state,
            };
        }

        case UPDATE_CART: {
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};
