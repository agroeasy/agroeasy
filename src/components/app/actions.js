import { SET_COOKIE, REMOVE_COOKIE, RESET_STATE, RESET_STATUS_STATE } from './actionTypes';

/**
 * Triggers request to set cookie
 *
 * @function
 * @params {String} payload - The data passed into the the action
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
 * @return {Object} - The {@link actionTypes.REMOVE_COOKIE REMOVE_COOKIE} action.
 */
export const removeCookie = () => ({
    type: REMOVE_COOKIE,
});

/**
 * Triggers request to reset redux state to initial
 *
 * @function
 * @return {void} The {@link actionTypes.RESET_STATE RESET_STATE} action.
 */
export const resetSigninState = () => ({
    type: RESET_STATE,
});

/**
 * Triggers request to reset redux Status key of the state
 *
 * @function
 * @return {void} The {@link actionTypes.RESET_STATUS_STATE RESET_STATUS_STATE} action.
 */
export const resetStatusStatus = () => ({
    type: RESET_STATUS_STATE,
});
