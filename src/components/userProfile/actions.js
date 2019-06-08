import { FETCH_USER_DATA, REQUEST_FETCH_USER_DATA } from './actionTypes';

export const fetchUserData = data => ({
    data,
    type: FETCH_USER_DATA,
});

export const requestUserdata = () => ({
    type: REQUEST_FETCH_USER_DATA,
});
