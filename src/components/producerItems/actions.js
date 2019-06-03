import {
    REQUEST_PRODUCT_LIST,
    REQUEST_PRODUCT_UPDATE,
    REQUEST_PRODUCT_DELETE,
    UPDATE_PRODUCT_DETAILS,
    UPDATE_PRODUCT_LIST,
    SUCCESS_MESSAGE,
    ERROR_MESSAGE
} from "./actionTypes";

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
 * Triggers request to update product item details in the database
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.REQUEST_ITEM_DELETE REQUEST_ITEM_DELETE}
 * action.
 */
export const requestProductDelete = payload => ({
    payload,
    type: REQUEST_PRODUCT_DELETE,
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

/**
 * Update the product list in the redux store
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.SUCCESS_MESSAGE SUCCESS_MESSAGE}
 * action.
 */
export const successMessage = payload => ({
    payload,
    type: SUCCESS_MESSAGE,
});

/**
 * Update the product list in the redux store
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.ERROR_MESSAGE ERROR_MESSAGE}
 * action.
 */
export const errorMessage = payload => ({
    payload,
    type: ERROR_MESSAGE,
});
