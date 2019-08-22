import { NAME } from './constants';

/**
 * Fired by the {@link actions.updateCartList updateCartList}
 * action creator.
 *
 * @type {String}
 */
export const UPDATE_CART_LIST = `${NAME}/UPDATE_CART_LIST`;

/**
 * Fired by the {@link actions.removeItem removeItem}
 * action creator.
 *
 * @type {String}
 */
export const REMOVE_ITEM = `${NAME}/REMOVE_ITEM`;

/**
 * Fired by the {@link actions.clearCart clearCart}
 * action creator.
 *
 * @type {String}
 */
export const CLEAR_CART = `${NAME}/CLEAR_CART`;

/**
 * Fired by the {@link actions.quantityChange quantityChange}
 * action creator.
 *
 * @type {String}
 */
export const QUANTITY_CHANGE = `${NAME}/QUANTITY_CHANGE`;
