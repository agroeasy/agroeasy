import { CART_TOTAL_AMOUNT, UPDATE_CART } from './actionTypes';

/**
 * Triggers request to get login status
 *
 * @function
 * @param {Object} payload An object of user details captured from body
 * @return {void} The {@link actionTypes.UPDATE_CART UPDATE_CART} action.
 */
export const updateCart = payload => ({
    payload,
    type: UPDATE_CART,
});

/**
 * Triggers request to get login status
 *
 * @function
 * @param {Object} payload An object of user details captured from body
 * @return {void} The {@link actionTypes.CART_TOTAL_AMOUNT CART_TOTAL_AMOUNT} action.
 */
export const cartTotalAmount = payload => ({
    payload,
    type: CART_TOTAL_AMOUNT,
});
