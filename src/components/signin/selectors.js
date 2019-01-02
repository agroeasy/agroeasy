import { NAME } from './constants';

/**
 * Selects the <tt>isSigninSuccessful</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the state of the signin
 * {@link module:signin/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getStatus = state => state[NAME].isSigninSuccessful;

/**
 * Selects the <tt>message</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Object} the state message of the signin
 * {@link module:signin/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getMessage = state => state[NAME].message;
