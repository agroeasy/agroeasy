import { NAME } from './constants';

/**
 * Selects the <tt>isLoading</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the state of the signup
 * {@link module:signup/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getisLoading = state => state[NAME].isLoading;

/**
 * Selects the <tt>message</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Object} the state of the signup
 * {@link module:signup/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getMessage = state => state[NAME].message;

/**
 * Selects the <tt>isSuccessful</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {boolean} the success(true) state of signup
 * {@link module:signup/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getisSuccessful = state => state[NAME].isSuccessful;

/**
 * Selects the <tt>status</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the state status of the signup
 * {@link module:signup/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getStatus = state => state[NAME].status;
