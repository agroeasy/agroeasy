import { SET_USER_DATA, USER_DATA_NOT_FOUND, SET_LOGIN_STATUS } from './actionTypes';

/**
 * Triggers request to get user data
 *
 * @function
 * @return {Object} - The {@link actionTypes.SET_USER_DATA SET_USER_DATA} action.
 */
export const setUserData = payload => ({
    payload,
    type: SET_USER_DATA,
});

/**
 * Triggers request to get error data if authenticated user is not found
 *
 * @function
 * @return {object} The {@link actionTypes.USER_DATA_NOT_FOUND USER_DATA_NOT_FOUND} action.
 */
export const userDataNotFound = error => ({
    error,
    type: USER_DATA_NOT_FOUND,
});

/**
 * Triggers request to get login status
 *
 * @function
 * @return {void} The {@link actionTypes.SET_LOGIN_STATUS SET_LOGIN_STATUS} action.
 */
export const setLoginStatus = () => ({
    type: SET_LOGIN_STATUS,
});

//TODO: when ever userDataNotFound action is called
//call an action to request the user to register
