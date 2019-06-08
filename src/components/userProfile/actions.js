import { FETCH_USER_DATA, REQUEST_FETCH_USER_DATA } from './actionTypes';

/**
 * Triggers request to fetch user data
 * 
 * @function
 * 
 * @params {object} payload - data sent with the action
 * @return {object} The {@link actionTypes.FETCH_USER_DATA FETCH_USER_DATA} action. 
 */
export const fetchUserData = payload => ({
    payload,
    type: FETCH_USER_DATA,
});

/**
 * Triggers request user data
 * 
 * @function
 * 
 * @return {object} The {@link actionTypes.REQUEST_FETCH_USER_DATA REQUEST_FETCH_USER_DATA} 
 * action
 */
export const requestUserdata = () => ({
    type: REQUEST_FETCH_USER_DATA,
});
