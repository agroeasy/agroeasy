import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './actionTypes';

const initialState = {
    email: "",
    error: null,
    isSigninSuccessful: false,
    message: "",
    password: "",
};

export default ( state = initialState, action) => {
    switch(action.type){
    case SIGNIN_REQUEST:
        return {
            ...state,
            email: action.payload.email,
            error: null,
            password: action.payload.password,
        };

    case SIGNIN_SUCCESS:{
        const { message, success: isSigninSuccessful } = action.data;
        return {
            ...state,
            email: "",
            error: null,
            isSigninSuccessful,
            message,
            password: "",
        };
    }

    case SIGNIN_FAILURE:
        return {
            ...state,
            email: "",
            error: action.error,
            password: "",
        };
    default:
        return state;
    }
};
