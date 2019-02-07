import { NAME } from './constants';
/**
 * Selects the <tt> loggedIn</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the state of the signout
 * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getLoginStatus = state => state[NAME].loggedIn;
