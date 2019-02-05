import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionTypes';

/**
 * Triggers request to sign up the user
 *
 * @function
 * @param {Object} payload An object of user details captured from body
 * @return {Object} The {@link actionTypes.SIGNUP_REQUEST SIGNUP_REQUEST} action.
 */
export const signupRequest = payload => ({
    payload,
    type: SIGNUP_REQUEST,
});

/**
 * Triggers request to update redux store on success
 *
 * @function
 * @param {Object} data An object containing signup status (success or failure) provided 
 * the endpoint is reachable
 * @return {Object} The {@link actionTypes.SIGNUP_SUCCESS SIGNUP_SUCCESS} action.
 */
export const signupSuccess = payload => ({
    payload,
    type: SIGNUP_SUCCESS,
});

/**
 * Triggers request to update redux store on failure
 * @function
 * @param {Object} error An object containing error info if the signup endpoint is unreachable
 * @return {Object} The {@link actionTypes.SIGNUP_FAILURE SIGNUP_FAILURE} action.
 */
export const signupFailure = error => ({
    error,
    type: SIGNUP_FAILURE,
});
