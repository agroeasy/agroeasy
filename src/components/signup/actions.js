import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionTypes';

export const signupRequest = user => ({
    type: SIGNUP_REQUEST,
    user,
});

export const signupSuccess = data => ({
    data,
    type: SIGNUP_SUCCESS,
});

export const signupFailure = error => ({
    error,
    type: SIGNUP_FAILURE,
});
