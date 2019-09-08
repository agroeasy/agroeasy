import {
    ADD_ITEM_TO_CART,
    DELETE_ITEMS_IN_CART,
    DELETE_ITEM_IN_CART,
    UPDATE_ITEM_IN_CART,
    GET_USER_CART_ITEMS,
    SET_CART,
    ERROR_MESSAGE,
    SUCCESS_MESSAGE,
} from './actionTypes';

/**
 * Triggers request to send mail to agroeasy2018@gmail.com
 *
 * @function
 * @param {Object} payload product to add to cart
 * @return {Object} The {@link actionTypes.ADD_ITEM_TO_CART ADD_ITEM_TO_CART} action.
 */
export const addItemToCart = payload => ({
    payload,
    type: ADD_ITEM_TO_CART,
});

/**
 * Triggers request to send mail to agroeasy2018@gmail.com
 *
 * @function
 * @param {Object} payload removes all product of the user from the cart
 * @return {Object} The {@link actionTypes.DELETE_ITEMS_IN_CART DELETE_ITEMS_IN_CART} action.
 */
export const deleteItemsInCart = () => ({
    type: DELETE_ITEMS_IN_CART,
});

/**
 * Triggers request to send mail to agroeasy2018@gmail.com
 *
 * @function
 * @param {Object} payload removes a product from the cart
 * @return {Object} The {@link actionTypes.DELETE_ITEM_IN_CART DELETE_ITEM_IN_CART}
 * action.
 */
export const deleteItemInCart = payload => ({
    payload,
    type: DELETE_ITEM_IN_CART,
});

/**
 * Triggers request to send mail to agroeasy2018@gmail.com
 *
 * @function
 * @param {Object} payload removes a product from the cart
 * @return {Object} The {@link actionTypes.UPDATE_ITEM_IN_CART UPDATE_ITEM_IN_CART}
 * action.
 */
export const updateItemInCart = payload => ({
    payload,
    type: UPDATE_ITEM_IN_CART,
});

/**
 * Triggers request to send mail to agroeasy2018@gmail.com
 *
 * @function
 * @param {Object} payload user id
 * @return {Object} The {@link actionTypes.GET_USER_CART_ITEMS GET_USER_CART_ITEMS}
 * action.
 */
export const getUserCartItems = () => ({
    type: GET_USER_CART_ITEMS,
});

/**
 * Triggers request to send mail to agroeasy2018@gmail.com
 *
 * @function
 * @param {Object} payload user id
 * @return {Object} The {@link actionTypes.SET_CART SET_CART}
 * action.
 */
export const setCart = payload => ({
    payload,
    type: SET_CART,
});

/**
 * Triggers request to send mail to agroeasy2018@gmail.com
 *
 * @function
 * @param {Object} payload user id
 * @return {Object} The {@link actionTypes.GET_USER_CART_ITEMS_SUCCESS GET_USER_CART_ITEMS_SUCCESS}
 * action.
 */
export const successMessage = payload => ({
    payload,
    type: SUCCESS_MESSAGE,
});

/**
 * Triggers request to send mail to agroeasy2018@gmail.com
 *
 * @function
 * @param {Object} payload user id
 * @return {Object} The {@link actionTypes.GET_USER_CART_ITEMS_FAILED GET_USER_CART_ITEMS_FAILED}
 * action.
 */
export const errorMessage = payload => ({
    payload,
    type: ERROR_MESSAGE,
});
