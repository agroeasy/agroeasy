import { NAME } from './constants';

/**
 * Selects the <tt>isSigninSuccessful</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the state status of the signin
 * {@link module:signin/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getStatus = state => state[NAME].status;

/**
 * Selects the <tt>message</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Object} the state data of the signin which contains user and token
 * {@link module:signin/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getData = state => state[NAME].data;
