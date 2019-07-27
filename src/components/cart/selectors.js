import { NAME } from './constants';

/**
 * Selects the <tt>user</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Number} the state data of the signin which contains user data
 * {@link module:cart/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getCart = state => state[NAME].cart;

/**
 * Selects the <tt>user</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Number} the state data of the signin which contains user data
 * {@link module:cart/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getCartCount = state => state[NAME].cartCount;
