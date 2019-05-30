import { NAME } from './constants';
/**
 * Selects the <tt>user</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Object} the state data of the signin which contains user and token
 * {@link module:signin/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getUserData = state => state[NAME].user;

