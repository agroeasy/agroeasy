import { REMOVE_ITEM_FROM_CART } from './actionTypes';

const initialState = {
    cart: [],
};

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case REMOVE_ITEM_FROM_CART: {
            return {
                ...state,
                cart: action.payload,
            };
        }
        default:
            return state;
    }
};
