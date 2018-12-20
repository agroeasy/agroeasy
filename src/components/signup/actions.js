import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionTypes';

/**
 * Triggers request to sign up the user
 *
 * @function
 * @return {Object} The {@link actionTypes.SIGNUP_REQUEST SIGNUP_REQUEST} action.
 */
export const signupRequest = user => ({
    type: SIGNUP_REQUEST,
    user,
});

/**
 * Triggers request to update redux store on success
 *
 * @function
 * @return {Object} The {@link actionTypes.SIGNUP_SUCCESS SIGNUP_SUCCESS} action.
 */
export const signupSuccess = data => ({
    data,
    type: SIGNUP_SUCCESS,
});

/**
 * Triggers request to update redux store on failure
 *
 * @function
 * @return {Object} The {@link actionTypes.SIGNUP_FAILURE SIGNUP_FAILURE} action.
 */
export const signupFailure = error => ({
    error,
    type: SIGNUP_FAILURE,
});
