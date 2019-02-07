import { SET_COOKIE, REMOVE_COOKIE } from './actionTypes';

/**
 * Triggers request to set cookie
 *
 * @function
 * @params {String} token - used to set cookie
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
 * @params {String} token - removes cookie after expiration
 * @return {Object} The {@link actionTypes.REMOVE_COOKIE REMOVE_COOKIE} action.
 */
export const removeCookie = token => ({
    token,
    type: REMOVE_COOKIE,
});
