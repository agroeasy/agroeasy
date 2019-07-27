import { NAME } from './constants';

/**
 * Fired by the {@link actions.updateCart updateCart}
 * action creator.
 *
 * @type {String}
 */
export const UPDATE_CART = `${NAME}/UPDATE_CART`;

/**
 * Fired by the {@link actions.cartTotalAmount cartTotalAmount}
 * action creator.
 *
 * @type {String}
 */
export const CART_TOTAL_AMOUNT = `${NAME}/CART_TOTAL_AMOUNT`;

/**
 * Fired by the {@link actions.setCartCount setCartCount}
 * action creator.
 *
 * @type {String}
 */
export const SET_CART_COUNT = `${NAME}/SET_CART_COUNT`;
