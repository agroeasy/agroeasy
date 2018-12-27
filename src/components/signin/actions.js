import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './actionTypes';

export const signinRequest = (email,password) => ({
    email,
    password,
    type: SIGNIN_REQUEST,
});

export const signinSuccess = data => ({
    data,
    type: SIGNIN_SUCCESS,
});

export const signinFailure = error => ({
    error,
    type: SIGNIN_FAILURE,
});
