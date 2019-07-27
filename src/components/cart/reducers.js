import { CART_TOTAL_AMOUNT, UPDATE_CART } from './actionTypes';
import { dataList } from './constants';

const initialState = {
    cart: new Map(),
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

        default:
            return state;
    }
};
