import { NAME } from './constants';

/**
 * Fired by the {@link actions.addItemToCart addItemToCart}
 * action creator.
 *
 * @type {String}
 */
export const ADD_ITEM_TO_CART = `${NAME}/ADD_ITEM_TO_CART`;

/**
 * Fired by the {@link actions.deleteItemsInCart deleteItemsInCart}
 * action creator.
 *
 * @type {String}
 */
export const DELETE_ITEMS_IN_CART = `${NAME}/DELETE_ITEMS_IN_CART`;

/**
 * Fired by the {@link actions.deleteItemInCart deleteItemInCart}
 * action creator.
 *
 * @type {String}
 */
export const DELETE_ITEM_IN_CART = `${NAME}/DELETE_ITEM_IN_CART`;

/**
 * Fired by the {@link actions.updateItemInCart updateItemInCart}
 * action creator.
 *
 * @type {String}
 */
export const UPDATE_ITEM_IN_CART = `${NAME}/UPDATE_ITEM_IN_CART`;

/**
 * Fired by the {@link actions.getUserCartItems getUserCartItems}
 * action creator.
 *
 * @type {String}
 */
export const GET_USER_CART_ITEMS = `${NAME}/GET_USER_CART_ITEMS`;

/**
 * Fired by the {@link actions.setCart setCart}
 * action creator.
 *
 * @type {String}
 */
export const SET_CART = `${NAME}/SET_CART`;

/**
 * Fired by the {@link actions.successMessage successMessage}
 * action creator.
 *
 * @type {String}
 */
export const SUCCESS_MESSAGE = `${NAME}/SUCCESS_MESSAGE`;

/**
 * Fired by the {@link actions.errorMessage errorMessage}
 * action creator.
 *
 * @type {String}
 */
export const ERROR_MESSAGE = `${NAME}/ERROR_MESSAGE`;
