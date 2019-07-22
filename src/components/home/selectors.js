import { NAME } from './constants';

/**
 * Selects the <tt>productList</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Object} the search result state of the home
 * {@link module:home/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getSearchProducts = state => state[NAME].results;

/**
 * Selects the <tt>search string</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Object} the search result state of the home
 * {@link module:home/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getUserSearchParams = state => state[NAME].payload;
