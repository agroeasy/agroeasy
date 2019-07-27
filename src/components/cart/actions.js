import { CART_TOTAL_AMOUNT, UPDATE_CART, SET_CART_COUNT } from './actionTypes';

/**
 * Triggers request to update cart items
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
 * Triggers request to update cart total amount
 *
 * @function
 * @param {Object} payload An object of user details captured from body
 * @return {void} The {@link actionTypes.CART_TOTAL_AMOUNT CART_TOTAL_AMOUNT} action.
 */
export const cartTotalAmount = payload => ({
    payload,
    type: CART_TOTAL_AMOUNT,
});

/**
 * Triggers request to count cart items
 *
 * @function
 * @return {void} The {@link actionTypes.SET_CART_COUNT SET_CART_COUNT} action.
 */
export const setCartCount = cartCount => ({
    payload,
    type: SET_CART_COUNT,
});
