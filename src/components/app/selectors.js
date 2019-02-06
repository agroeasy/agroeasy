import { NAME } from './constants';
/**
 * Selects the <tt> isSignoutSuccessful</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the state of the signup
 * {@link module:signup/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getLoginStatus = state =>  state[NAME].loggedIn;
