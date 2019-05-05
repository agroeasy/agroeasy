import {
    REQUEST_PRODUCT_LIST,
    REQUEST_PRODUCT_UPDATE,
    UPDATE_PRODUCT_DETAILS,
    UPDATE_PRODUCT_LIST,
} from './actionTypes';

/**
 * Triggers request to retrieve product list from the database
 *
 * @function
 * @return {Object} The {@link actionTypes.REQUEST_PRODUCT_LIST REQUEST_PRODUCT_LIST}
 * action.
 */
export const requestProductList = () => ({
    type: REQUEST_PRODUCT_LIST,
});

/**
 * Triggers request to update product item details in the database
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.REQUEST_PRODUCT_UPDATE REQUEST_PRODUCT_UPDATE}
 * action.
 */
export const requestProductUpdate = payload => ({
    payload,
    type: REQUEST_PRODUCT_UPDATE,
});

/**
 * Update a product item's details in the redux store
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.UPDATE_PRODUCT_DETAILS UPDATE_PRODUCT_DETAILS}
 * action.
 */
export const updateProductDetails = payload => ({
    payload,
    type: UPDATE_PRODUCT_DETAILS,
});

/**
 * Update the product list in the redux store
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.UPDATE_PRODUCT_LIST UPDATE_PRODUCT_LIST}
 * action.
 */
export const updateProductList = payload => ({
    payload,
    type: UPDATE_PRODUCT_LIST,
});
