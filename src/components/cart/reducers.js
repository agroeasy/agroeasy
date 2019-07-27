import { CART_TOTAL_AMOUNT, UPDATE_CART, SET_CART_COUNT } from './actionTypes';
import { dataList } from './constants';

const initialState = {
    cart: new Map(),
    cartCount: 0,
    totalAmount: 0,
};

function generateCartsMap() {
    const cart = new Map();

    dataList.forEach(list => {
        const { id } = list;
        cart.set(id, list);
    });
    console.log(cart);
    return cart;
}

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
                cart: generateCartsMap(),
            };
        }

        case SET_CART_COUNT: {
            return {
                ...state,
                cartCount: action.payload,
            };
        }

        default:
            return state;
    }
};
