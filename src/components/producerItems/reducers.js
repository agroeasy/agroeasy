import {
    ERROR_MESSAGE,
    UPDATE_PRODUCT_DETAILS,
    UPDATE_PRODUCT_LIST,
    SUCCESS_MESSAGE,
} from './actionTypes';
import { INITIAL_STATE } from './constants';

/**
 * Creates a Javascript Map with the producer's items mapped by id
 *
 * @param {Array} products - a producers items
 * @return {Map} - the new producer list
 */
function generateItemMap(products) {
    const setOfProducts = new Map();
    products.forEach(product => {
        const { _id } = product;

        setOfProducts.set(_id, product);
    });

    return setOfProducts;
}

/**
 * Updates the product in the producer list
 *
 * @param {Object} product - the product to be updated in the list
 * @param {Map} list - the list of producer products
 * @return {Map} - the updated producer list
 */
function updateProductList(product, list) {
    const { _id } = product;
    const newList = new Map([...list.entries()]);

    newList.set(_id, product);

    return newList;
}

export default (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_DETAILS: {
            const { payload } = action;
            const { productList } = state;

            return {
                ...state,
                productList: updateProductList(payload, productList),
            };
        }
        case UPDATE_PRODUCT_LIST: {
            const { payload } = action;

            return {
                ...state,
                productList: generateItemMap(payload),
            };
        }
        case SUCCESS_MESSAGE: {
            const { payload } = action;

            return {
                ...state,
                successMessage: payload,
            };
        }
        case ERROR_MESSAGE: {
            const { payload } = action;

            return {
                ...state,
                errorMessage: payload,
            };
        }
        default:
            return state;
    }
};
