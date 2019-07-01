import { NAME } from './constants';
/**
 * Selects the <tt>removeCartItem</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Object} the state of the cart
 * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const RemoveCartItem = state => state[NAME].removeCartItem;

