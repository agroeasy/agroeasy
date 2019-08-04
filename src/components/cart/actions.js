import { UPDATE_CART_INFO, UPDATE_CART_LIST } from './actionTypes';

/**
 * Triggers request to update cart items
 *
 * @function
 * @param {Object} payload An object of cart dataSource
 * @return {void} The {@link actionTypes.UPDATE_CART_LIST UPDATE_CART_LIST} action.
 */
export const updateCartList = payload => ({
    payload,
    type: UPDATE_CART_LIST,
});

/**
 * Triggers request to update cart details
 *
 * @function
 * @param {Object} payload An object of captured cart details
 * @return {void} The {@link actionTypes.UPDATE_CART_INFO UPDATE_CART_INFO} action.
 */
export const updateCartInfo = payload => ({
    payload,
    type: UPDATE_CART_INFO,
});
