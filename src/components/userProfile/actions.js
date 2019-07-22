import { REQUEST_AUTH_USER_JWT, REQUEST_USER_UPDATE } from './actionTypes';

/**
 * Triggers request to get auth user email
 *
 * @function
 * @params {String} payload - The user email
 * @return {Object} The {@link actionTypes.REQUEST_AUTH_USER_JWT REQUEST_AUTH_USER_JWT} action.
 */
export const getUserAuthJwt = payload => ({
    payload,
    type: REQUEST_AUTH_USER_JWT,
});

/**
 * Triggers request to update user info
 *
 * @function
 * @params {String} payload - The user object
 * @return {Object} The {@link actionTypes.REQUEST_USER_UPDATE REQUEST_USER_UPDATE} action.
 */
export const requestUserUpdate = payload => ({
    payload,
    type: REQUEST_USER_UPDATE,
});
