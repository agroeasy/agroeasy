import { RESET_STATE, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './actionTypes';

/**
 * Triggers request to sign in a user
 *
 * @function
 * @param {Object} payload An object of user signin details captured from body
 * @return {Object} The {@link actionTypes.SIGNIN_REQUEST SIGNIN_REQUEST} action.
 */
export const signinRequest = payload => ({
    payload,
    type: SIGNIN_REQUEST,
});

/**
 * Triggers request to update redux store on success
 *
 * @function
 * @param {boolean} isSuccessful returns true if isSuccessful else false.
 * @return {Object} The {@link actionTypes.SIGNIN_SUCCESS SIGNIN_SUCCESS} action.
 */
export const signinSuccess = () => ({
    type: SIGNIN_SUCCESS,
});

/**
 * Triggers request to update redux store on success
 *
 * @function
 * @param {Object} payload An object containing signin status and data 
 * returned from siginn endpoint
 * @return {Object} The {@link actionTypes.SIGNIN_FAIL SIGNIN_FAIL} action.
 */
export const signinFail = payload => ({
    payload,
    type: SIGNIN_FAILURE,
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
