import { SET_COOKIE, REMOVE_COOKIE } from './actionTypes';

/**
 * Triggers request to set cookie
 *
 * @function
 * @return {Object} The {@link actionTypes.SET_COOKIE SET_COOKIE} action.
 */
export const setCookie = payload => ({
    payload,
    type: SET_COOKIE,
});

/**
 * Triggers request to remove cookie
 *
 * @function
 * @return {Object} The {@link actionTypes.REMOVE_COOKIE REMOVE_COOKIE} action.
 */
export const removeCookie = () => ({
    type: REMOVE_COOKIE,
});
