import { UPDATE_CART_INFO, UPDATE_CART_LIST } from './actionTypes';
import { dataList } from './constants';

const initialState = {
    cartData: new Map(),
};

/**
 * Creates a Javascript Map with the cart's items mapped by id
 *
 * @param {Array} cartData - a cart item
 * @return {Map} - the new cart data list
 */

function generateCartsMap() {
    const cartData = new Map();

    dataList.forEach(list => {
        const { id } = list;
        cartData.set(id, list);
    });

    return cartData;
}

/**
 * Updates the data in the cart list
 *
 * @param {Object} cartItem - the cart item to be updated
 * @param {Map} list - the list of producer products
 * @return {Map} - the updated dataSource
 */
function updateCartInfo(cartItem, list) {
    const { id } = cartItem;
    const newList = new Map([...list.entries()]);

    newList.set(id, cartItem);

    return newList;
}

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case UPDATE_CART_LIST: {
            return {
                ...state,
                cartData: generateCartsMap(),
            };
        }

        case UPDATE_CART_INFO: {
            const { payload } = action;
            const { cartData } = state;

            return {
                ...state,
                cartData: updateCartInfo(payload, cartData),
            };
        }
        default:
            return state;
    }
};
