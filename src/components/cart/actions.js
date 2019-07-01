import { REMOVE_ITEM_FROM_CART } from './actionTypes';

/**
 * Triggers request to get user data
 *
 * @function
 * @return {Object} - The {@link actionTypes.REMOVE_ITEM_FROM_CART REMOVE_ITEM_FROM_CART} action.
 */
export const RemoveCartItem = payload => ({
    payload,
    type: REMOVE_ITEM_FROM_CART,
});
