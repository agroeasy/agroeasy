import { CLEAR_CART, UPDATE_CART_LIST, REMOVE_ITEM, QUANTITY_CHANGE } from './actionTypes';
import { dataList } from './constants';

const initialState = {
    cart: {},
};

const generateCartsObject = array =>
    array.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    }, {});

const removeItem = (items, id) => {
    items[id] && delete items[id];
    return { ...items };
};

const clearCart = items => ({});

const quantityChange = items => {
    // const updatedItem = { ...items };

    if ('add') {
        items.quantity += 1;
    } else {
        items.quantity -= 1;
    }
    return { ...items };
};

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case UPDATE_CART_LIST: {
            return {
                ...state,
                cart: generateCartsObject(dataList),
            };
        }

        case REMOVE_ITEM: {
            const { cart } = state;
            const {
                payload: { id },
            } = action;

            return {
                ...state,
                cart: removeItem(cart, id),
            };
        }

        case CLEAR_CART: {
            const { cart } = state;

            return {
                ...state,
                cart: clearCart(cart),
            };
        }

        case QUANTITY_CHANGE: {
            const { cart } = state;

            return {
                ...state,
                cart: quantityChange(cart),
            };
        }

        default:
            return state;
    }
};
