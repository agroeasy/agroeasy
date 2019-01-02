import { NAME } from './constants';
/**
 * Selects the <tt>isSignupSuccessful</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the state of the signup
 * {@link module:signup/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getStatus = state =>  state[NAME].isSignupSuccessful;

/**
 * Selects the <tt>message</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Object} the state of the signup
 * {@link module:signup/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getMessage = state => state[NAME].message;
