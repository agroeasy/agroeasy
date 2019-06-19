import { NAME } from './constants';

/**
 * Selects the <tt>productList</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the state of the home
 * {@link module:home/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getProductList = state => state[NAME].productList;
export const getSuccessMessage = state => state[NAME].successMessage;
export const getErrorMessage = state => state[NAME].errorMessage;
