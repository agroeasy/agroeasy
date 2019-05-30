import { REQUEST_AUTH_USER_JWT } from './actionTypes';

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
