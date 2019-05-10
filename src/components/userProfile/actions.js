import { FETCH_USER_DATA, UPDATE_USER_DATA } from './actionTypes';

export const fetchUserData = data => ({
    data,
    type: FETCH_USER_DATA,
});
