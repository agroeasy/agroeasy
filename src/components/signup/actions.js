import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionTypes';

/**
 * Triggers request to capture data from the input fields or body
 *
 * @function
 * @return {Object} The {@link actionTypes.SIGNUP_REQUEST SIGNUP_REQUEST} action.
 */
export const signupRequest = user => ({
    type: SIGNUP_REQUEST,
    user,
});

/**
 * Triggers request to fetch success data from the server
 *
 * @function
 * @return {Object} The {@link actionTypes.SIGNUP_SUCCESS SIGNUP_SUCCESS} action.
 */
export const signupSuccess = data => ({
    data,
    type: SIGNUP_SUCCESS,
});

/**
 * Triggers request to fetch failure data from the server
 *
 * @function
 * @return {Object} The {@link actionTypes.SIGNUP_FAILURE SIGNUP_FAILURE} action.
 */
export const signupFailure = error => ({
    error,
    type: SIGNUP_FAILURE,
});
