import { RESET_STATE, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionTypes';

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
 * @param { boolean} isSuccessful the success(true) state of signup
 * @return {Object} The {@link actionTypes.SIGNUP_SUCCESS SIGNUP_SUCCESS} action.
 */
export const signupSuccess = () => ({
    type: SIGNUP_SUCCESS,
}); 

/**
 * Triggers request to update redux store on fail
 *
 * @function
 * @param {Object} payload An object containing signup status 
 * (fail, and message for failure) provided the endpoint is reachable
 * @return {Object} The {@link actionTypes.SIGNUP_SUCCESS SIGNUP_SUCCESS} action.
 */
export const signupFail = payload => ({
    payload,
    type: SIGNUP_FAILURE,
});

/**
 * Triggers request to reset redux state to initial
 *
 * @function
 * @return {void} The {@link actionTypes.RESET_STATE RESET_STATE} action.
 */
export const resetSignState = () => ({
    type: RESET_STATE,
});
