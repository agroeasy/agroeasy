import { RESET_STATE, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './actionTypes';

/**
 * Triggers request to sign in a user
 *
 * @function
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
 * @return {Object} The {@link actionTypes.SIGNIN_SUCCESS SIGNIN_SUCCESS} action.
 */
export const signinSuccess = data => ({
    data,
    type: SIGNIN_SUCCESS,
});

/**
 * Triggers request to update redux store on failure
 *
 * @function
 * @return {Object} The {@link actionTypes.SIGNIN_FAILURE SIGNIN_FAILURE} action.
 */
export const signinFailure = error => ({
    error,
    type: SIGNIN_FAILURE,
});

/**
 * Triggers request to reset redux state to initial
 *
 * @function
 * @return {void} The {@link actionTypes.RESET_STATE RESET_STATE} action.
 */
export const resetStateObject = () => ({
    type: RESET_STATE,
});
