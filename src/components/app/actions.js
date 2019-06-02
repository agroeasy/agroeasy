import { GET_USER_DATA, USER_DATA_NOT_FOUND } from './actionTypes';

/**
 * Triggers request to get user data 
 *
 * @function
 * @return {Object} - The {@link actionTypes.GET_USER_DATA GET_USER_DATA} action.
 */
export const getUserData = payload => ({
    payload,
    type: GET_USER_DATA,
});

/**
 * Triggers request to get error data if authenticated user is not found 
 *
 * @function
 * @return {void} The {@link actionTypes.USER_DATA_NOT_FOUND USER_DATA_NOT_FOUND} action.
 */
export const userDataNotFound = error => ({
    error,
    type: USER_DATA_NOT_FOUND,
});

//TODO: when ever userDataNotFound action is called
//call an action to request the user to register 
