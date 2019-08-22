import { UPDATE_CART_LIST, REMOVE_ITEM, CLEAR_CART, QUANTITY_CHANGE } from './actionTypes';

/**
 * Triggers request to update cart items
 *
 * @function
 * @param {Object} payload An object of cart dataSource
 * @return {void} The {@link actionTypes.UPDATE_CART_LIST UPDATE_CART_LIST} action.
 */
export const updateCartList = () => ({
    type: UPDATE_CART_LIST,
});

/**
 * Triggers request to update cart details
 *
 * @function
 * @param {Object} payload An object of captured cart details
 * @return {void} The {@link actionTypes.REMOVE_ITEM REMOVE_ITEM} action.
 */
export const removeItem = payload => ({
    payload,
    type: REMOVE_ITEM,
});

/**
 * Triggers request to update cart details
 *
 * @function
 * @param {Object} payload An object of captured cart details
 * @return {void} The {@link actionTypes.CLEAR_CART CLEAR_CART} action.
 */
export const clearCart = payload => ({
    payload,
    type: CLEAR_CART,
});

/**
 * Triggers request to update cart details
 *
 * @function
 * @param {Object} payload An object of captured cart details
 * @return {void} The {@link actionTypes.QUANTITY_CHANGE QUANTITY_CHANGE} action.
 */
export const quantityChange = payload => ({
    payload,
    type: QUANTITY_CHANGE,
});
