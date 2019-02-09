import { SET_COOKIE, REMOVE_COOKIE } from './actionTypes';

/**
 * Triggers request to set cookie
 *
 * @function
 * @params {String} token - a unique identifier used associated with the logged in user
 * @return {Object} The {@link actionTypes.SET_COOKIE SET_COOKIE} action.
 */
export const setCookie = token => ({
    token,
    type: SET_COOKIE,
});

/**
 * Triggers request to remove cookie
 *
 * @function
 * @params {String} token - a unique identifier used associated with the logged in user
 * @return {Object} The {@link actionTypes.REMOVE_COOKIE REMOVE_COOKIE} action.
 */
export const removeCookie = token => ({
    token,
    type: REMOVE_COOKIE,
});
